'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, Download, Maximize2 } from 'lucide-react';

interface Province {
  id: string;
  name: string;
  path: string;
  value: number;
  population: string;
  stockage: string;
  coverage: number;
  facilities: number;
  centroid: { x: number; y: number };
}

interface InteractiveMapProps {
  onProvinceSelect?: (provinceId: string) => void;
  selectedProvince?: string | null;
  year?: number;
  metric?: 'coverage' | 'stockage' | 'population';
}

export default function InteractiveMap({ 
  onProvinceSelect, 
  selectedProvince: externalSelectedProvince,
  year = 2025,
  metric = 'coverage'
}: InteractiveMapProps) {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(externalSelectedProvince || null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);

  // Données des provinces de la RDC avec chemins SVG simplifiés
  const provinces: Province[] = [
    {
      id: 'kinshasa',
      name: 'Kinshasa',
      path: 'M 180,320 L 200,310 L 220,315 L 230,330 L 220,345 L 200,340 Z',
      value: 95,
      population: '15M+',
      stockage: '25K tonnes',
      coverage: 95,
      facilities: 3,
      centroid: { x: 210, y: 325 }
    },
    {
      id: 'kongo-central',
      name: 'Kongo Central',
      path: 'M 140,330 L 180,320 L 200,340 L 190,360 L 160,365 L 145,350 Z',
      value: 88,
      population: '5.5M+',
      stockage: '12K tonnes',
      coverage: 88,
      facilities: 2,
      centroid: { x: 170, y: 345 }
    },
    {
      id: 'kwango',
      name: 'Kwango',
      path: 'M 200,340 L 230,330 L 250,345 L 245,370 L 220,375 L 200,360 Z',
      value: 75,
      population: '2M+',
      stockage: '8K tonnes',
      coverage: 75,
      facilities: 1,
      centroid: { x: 225, y: 355 }
    },
    {
      id: 'kwilu',
      name: 'Kwilu',
      path: 'M 220,345 L 245,370 L 260,390 L 245,410 L 220,405 L 210,380 Z',
      value: 78,
      population: '5.5M+',
      stockage: '9K tonnes',
      coverage: 78,
      facilities: 2,
      centroid: { x: 235, y: 385 }
    },
    {
      id: 'mai-ndombe',
      name: 'Mai-Ndombe',
      path: 'M 210,380 L 245,410 L 270,430 L 260,455 L 230,450 L 215,420 Z',
      value: 72,
      population: '1.8M+',
      stockage: '7K tonnes',
      coverage: 72,
      facilities: 1,
      centroid: { x: 240, y: 425 }
    },
    {
      id: 'kasai',
      name: 'Kasaï',
      path: 'M 270,300 L 310,295 L 330,310 L 325,335 L 295,340 L 275,325 Z',
      value: 80,
      population: '3M+',
      stockage: '10K tonnes',
      coverage: 80,
      facilities: 2,
      centroid: { x: 300, y: 318 }
    },
    {
      id: 'kasai-central',
      name: 'Kasaï Central',
      path: 'M 295,340 L 325,335 L 345,350 L 340,375 L 310,380 L 290,365 Z',
      value: 82,
      population: '3.2M+',
      stockage: '11K tonnes',
      coverage: 82,
      facilities: 2,
      centroid: { x: 315, y: 358 }
    },
    {
      id: 'kasai-oriental',
      name: 'Kasaï Oriental',
      path: 'M 310,380 L 340,375 L 365,390 L 360,420 L 330,425 L 305,405 Z',
      value: 85,
      population: '4M+',
      stockage: '13K tonnes',
      coverage: 85,
      facilities: 2,
      centroid: { x: 335, y: 400 }
    },
    {
      id: 'sankuru',
      name: 'Sankuru',
      path: 'M 330,280 L 370,275 L 390,290 L 385,320 L 350,325 L 335,305 Z',
      value: 70,
      population: '1.5M+',
      stockage: '6K tonnes',
      coverage: 70,
      facilities: 1,
      centroid: { x: 360, y: 300 }
    },
    {
      id: 'maniema',
      name: 'Maniema',
      path: 'M 390,290 L 430,285 L 450,305 L 445,335 L 410,340 L 395,315 Z',
      value: 73,
      population: '2.3M+',
      stockage: '7K tonnes',
      coverage: 73,
      facilities: 1,
      centroid: { x: 420, y: 313 }
    },
    {
      id: 'tshopo',
      name: 'Tshopo',
      path: 'M 370,200 L 420,195 L 445,215 L 440,250 L 400,255 L 375,230 Z',
      value: 85,
      population: '2.6M+',
      stockage: '12K tonnes',
      coverage: 85,
      facilities: 2,
      centroid: { x: 410, y: 225 }
    },
    {
      id: 'bas-uele',
      name: 'Bas-Uélé',
      path: 'M 420,140 L 470,135 L 490,155 L 485,185 L 440,190 L 425,165 Z',
      value: 68,
      population: '1.2M+',
      stockage: '5K tonnes',
      coverage: 68,
      facilities: 1,
      centroid: { x: 455, y: 163 }
    },
    {
      id: 'haut-uele',
      name: 'Haut-Uélé',
      path: 'M 470,100 L 520,95 L 545,115 L 540,145 L 495,150 L 475,125 Z',
      value: 65,
      population: '1.1M+',
      stockage: '5K tonnes',
      coverage: 65,
      facilities: 1,
      centroid: { x: 510, y: 123 }
    },
    {
      id: 'ituri',
      name: 'Ituri',
      path: 'M 490,155 L 540,150 L 565,170 L 560,200 L 515,205 L 495,180 Z',
      value: 70,
      population: '5M+',
      stockage: '8K tonnes',
      coverage: 70,
      facilities: 2,
      centroid: { x: 530, y: 178 }
    },
    {
      id: 'nord-kivu',
      name: 'Nord-Kivu',
      path: 'M 515,205 L 560,200 L 580,225 L 575,260 L 530,265 L 510,235 Z',
      value: 82,
      population: '8M+',
      stockage: '10K tonnes',
      coverage: 82,
      facilities: 2,
      centroid: { x: 545, y: 233 }
    },
    {
      id: 'sud-kivu',
      name: 'Sud-Kivu',
      path: 'M 530,265 L 575,260 L 590,285 L 585,320 L 540,325 L 520,295 Z',
      value: 83,
      population: '6M+',
      stockage: '9K tonnes',
      coverage: 83,
      facilities: 2,
      centroid: { x: 555, y: 293 }
    },
    {
      id: 'tanganyika',
      name: 'Tanganyika',
      path: 'M 445,335 L 490,330 L 515,350 L 510,385 L 465,390 L 440,365 Z',
      value: 75,
      population: '2.5M+',
      stockage: '7K tonnes',
      coverage: 75,
      facilities: 1,
      centroid: { x: 478, y: 360 }
    },
    {
      id: 'haut-lomami',
      name: 'Haut-Lomami',
      path: 'M 360,420 L 405,415 L 430,435 L 425,465 L 380,470 L 355,445 Z',
      value: 72,
      population: '2.7M+',
      stockage: '7K tonnes',
      coverage: 72,
      facilities: 1,
      centroid: { x: 393, y: 443 }
    },
    {
      id: 'lualaba',
      name: 'Lualaba',
      path: 'M 405,465 L 450,460 L 475,480 L 470,515 L 425,520 L 400,495 Z',
      value: 78,
      population: '2.5M+',
      stockage: '8K tonnes',
      coverage: 78,
      facilities: 2,
      centroid: { x: 438, y: 490 }
    },
    {
      id: 'haut-katanga',
      name: 'Haut-Katanga',
      path: 'M 450,515 L 500,510 L 525,535 L 520,570 L 470,575 L 445,545 Z',
      value: 88,
      population: '4.5M+',
      stockage: '15K tonnes',
      coverage: 88,
      facilities: 3,
      centroid: { x: 485, y: 543 }
    },
  ];

  // Échelle de couleurs basée sur la métrique
  const getColor = (value: number) => {
    const colors = [
      { threshold: 0, color: '#EFF6FF' },    // Bleu très clair
      { threshold: 60, color: '#DBEAFE' },   // Bleu clair
      { threshold: 70, color: '#BFDBFE' },   // Bleu moyen clair
      { threshold: 75, color: '#93C5FD' },   // Bleu moyen
      { threshold: 80, color: '#60A5FA' },   // Bleu
      { threshold: 85, color: '#3B82F6' },   // Bleu foncé
      { threshold: 90, color: '#2563EB' },   // Bleu très foncé
      { threshold: 95, color: '#1D4ED8' },   // Bleu profond
    ];

    for (let i = colors.length - 1; i >= 0; i--) {
      if (value >= colors[i].threshold) {
        return colors[i].color;
      }
    }
    return colors[0].color;
  };

  // Gestion du zoom
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Gestion du drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Export PNG
  const handleExport = () => {
    if (!svgRef.current) return;
    
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    canvas.width = 800;
    canvas.height = 600;
    
    img.onload = () => {
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `rsg-carte-${year}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  const currentProvince = hoveredProvince || selectedProvince;
  const provinceData = provinces.find((p) => p.id === currentProvince);

  return (
    <div className="relative">
      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleZoomIn}
          className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
          title="Zoom avant"
        >
          <ZoomIn size={20} className="text-primary-blue" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleZoomOut}
          className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
          title="Zoom arrière"
        >
          <ZoomOut size={20} className="text-primary-blue" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleReset}
          className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
          title="Réinitialiser"
        >
          <Maximize2 size={20} className="text-primary-blue" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleExport}
          className="p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
          title="Exporter PNG"
        >
          <Download size={20} className="text-primary-blue" />
        </motion.button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
        <p className="text-sm font-bold text-gray-900 mb-3">Taux de couverture</p>
        <div className="space-y-2">
          {[
            { range: '90-100%', color: '#1D4ED8' },
            { range: '85-90%', color: '#2563EB' },
            { range: '80-85%', color: '#3B82F6' },
            { range: '75-80%', color: '#60A5FA' },
            { range: '70-75%', color: '#93C5FD' },
            { range: '< 70%', color: '#BFDBFE' },
          ].map((item) => (
            <div key={item.range} className="flex items-center gap-2">
              <div 
                className="w-6 h-4 rounded" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-gray-600">{item.range}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500">Année: {year}</p>
        </div>
      </div>

      {/* Map Container */}
      <div 
        className="relative w-full aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 700 600"
          className="w-full h-full"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          {/* Background */}
          <rect width="700" height="600" fill="#F0F9FF" />

          {/* Provinces */}
          {provinces.map((province) => (
            <g key={province.id}>
              <motion.path
                d={province.path}
                fill={getColor(province.value)}
                stroke="#FFFFFF"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  fill: getColor(province.value),
                }}
                transition={{ duration: 0.6, delay: provinces.indexOf(province) * 0.05 }}
                whileHover={{
                  fill: '#FFD700',
                  strokeWidth: 3,
                  transition: { duration: 0.2 }
                }}
                onClick={() => {
                  setSelectedProvince(province.id);
                  onProvinceSelect?.(province.id);
                }}
                onMouseEnter={() => setHoveredProvince(province.id)}
                onMouseLeave={() => setHoveredProvince(null)}
              />
              
              {/* Province Label */}
              <text
                x={province.centroid.x}
                y={province.centroid.y}
                fontSize="10"
                fill="#1F2937"
                textAnchor="middle"
                className="pointer-events-none font-semibold"
                style={{
                  opacity: hoveredProvince === province.id || selectedProvince === province.id ? 1 : 0.7,
                }}
              >
                {province.name}
              </text>
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        <AnimatePresence>
          {provinceData && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 min-w-[250px] pointer-events-none"
            >
              <h4 className="font-bold text-lg text-gray-900 mb-2">
                {provinceData.name}
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Population:</span>
                  <span className="font-semibold text-gray-900">{provinceData.population}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stockage:</span>
                  <span className="font-semibold text-gray-900">{provinceData.stockage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Couverture:</span>
                  <span className="font-semibold text-primary-blue">{provinceData.coverage}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Installations:</span>
                  <span className="font-semibold text-gray-900">{provinceData.facilities}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
