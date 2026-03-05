import { regions, ambassadors } from "@/data/mock-data";

// Approximate geographic positions for each region on the SVG map (percentage-based)
const regionPositions: Record<string, { x: number; y: number }> = {
  "1": { x: 28, y: 10 },   // Tanger-Tétouan-Al Hoceïma
  "2": { x: 65, y: 18 },   // L'Oriental
  "3": { x: 48, y: 25 },   // Fès-Meknès
  "4": { x: 25, y: 28 },   // Rabat-Salé-Kénitra
  "5": { x: 50, y: 38 },   // Béni Mellal-Khénifra
  "6": { x: 28, y: 38 },   // Casablanca-Settat
  "7": { x: 35, y: 50 },   // Marrakech-Safi
  "8": { x: 62, y: 50 },   // Drâa-Tafilalet
  "9": { x: 30, y: 62 },   // Souss-Massa
  "10": { x: 25, y: 73 },  // Guelmim-Oued Noun
  "11": { x: 22, y: 83 },  // Laâyoune-Sakia El Hamra
  "12": { x: 20, y: 94 },  // Dakhla-Oued Ed-Dahab
};

// Distribute ambassadors around their region center
const getAmbassadorPositions = (regionId: string) => {
  const center = regionPositions[regionId];
  if (!center) return [];
  const regionName = regions.find((r) => r.id === regionId)?.name || "";
  const regionAmbs = ambassadors.filter((a) => a.region === regionName);

  return regionAmbs.map((amb, i) => {
    const angle = (i / Math.max(regionAmbs.length, 1)) * Math.PI * 2 - Math.PI / 2;
    const radius = regionAmbs.length > 1 ? 4 : 0;
    return {
      ...amb,
      cx: center.x + Math.cos(angle) * radius,
      cy: center.y + Math.sin(angle) * radius,
    };
  });
};

interface Props {
  selectedRegion: string | null;
  onRegionSelect: (regionId: string) => void;
}

const MoroccoMap = ({ selectedRegion, onRegionSelect }: Props) => {
  const allAmbassadorPins = regions.flatMap((r) => getAmbassadorPositions(r.id));

  return (
    <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Morocco outline (simplified) */}
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--muted))" />
            <stop offset="100%" stopColor="hsl(var(--background))" />
          </linearGradient>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="0.3" stdDeviation="0.4" floodColor="hsl(var(--primary))" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Morocco shape */}
        <path
          d="M 15 5 L 35 3 L 50 5 L 65 8 L 75 15 L 78 25 L 72 35 L 68 42 L 70 55 L 65 65 L 55 60 L 45 55 L 38 58 L 32 65 L 28 72 L 25 78 L 22 85 L 20 92 L 18 98 L 12 98 L 10 90 L 12 80 L 15 72 L 18 65 L 15 55 L 12 48 L 10 40 L 12 30 L 15 22 L 12 15 L 15 5 Z"
          fill="url(#mapGradient)"
          stroke="hsl(var(--border))"
          strokeWidth="0.5"
          className="drop-shadow-sm"
        />

        {/* Region dots with labels */}
        {regions.map((region) => {
          const pos = regionPositions[region.id];
          if (!pos) return null;
          const isSelected = selectedRegion === region.id;

          return (
            <g
              key={region.id}
              onClick={() => onRegionSelect(region.id)}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
            >
              {/* Region pulse ring */}
              {isSelected && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="6"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="0.3"
                  opacity="0.5"
                >
                  <animate attributeName="r" from="4" to="8" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                </circle>
              )}

              {/* Region center marker */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={isSelected ? "2.5" : "2"}
                fill={isSelected ? "hsl(var(--secondary))" : "hsl(var(--primary))"}
                opacity={isSelected ? 1 : 0.6}
                filter="url(#shadow)"
                className="transition-all duration-300"
              />

              {/* Ambassador count label */}
              <text
                x={pos.x}
                y={pos.y - 3.5}
                textAnchor="middle"
                fontSize="2.2"
                fontWeight="700"
                fill="hsl(var(--foreground))"
                fontFamily="Space Grotesk, sans-serif"
              >
                {region.ambassadorCount}
              </text>
            </g>
          );
        })}

        {/* Ambassador avatar circles */}
        {allAmbassadorPins.map((amb, i) => {
          const isInSelected = selectedRegion
            ? regions.find((r) => r.id === selectedRegion)?.name === amb.region
            : false;

          return (
            <g key={amb.id} filter={isInSelected ? "url(#glow)" : undefined}>
              {/* White border ring */}
              <circle
                cx={amb.cx}
                cy={amb.cy}
                r="2"
                fill="white"
                stroke={isInSelected ? "hsl(var(--secondary))" : "hsl(var(--border))"}
                strokeWidth="0.3"
                className="transition-all duration-300"
                style={{
                  animationDelay: `${i * 0.05}s`,
                }}
              />
              {/* Gradient avatar background */}
              <circle
                cx={amb.cx}
                cy={amb.cy}
                r="1.7"
                fill="url(#heroGrad)"
                className="transition-all duration-300"
              />
              {/* Initials */}
              <text
                x={amb.cx}
                y={amb.cy + 0.6}
                textAnchor="middle"
                fontSize="1.4"
                fontWeight="700"
                fill="white"
                fontFamily="Space Grotesk, sans-serif"
              >
                {amb.avatar}
              </text>
            </g>
          );
        })}

        {/* Country label */}
        <text
          x="40"
          y="44"
          textAnchor="middle"
          fontSize="3.5"
          fontWeight="700"
          fill="hsl(var(--primary))"
          opacity="0.12"
          fontFamily="Space Grotesk, sans-serif"
        >
          MAROC
        </text>
      </svg>

      {/* Legend */}
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-2 py-1.5 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 text-[9px] text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full gradient-hero inline-block" />
          <span>Ambassadeur</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block opacity-60" />
          <span>Centre région</span>
        </div>
        <span className="font-semibold">{ambassadors.length} affichés</span>
      </div>
    </div>
  );
};

export default MoroccoMap;
