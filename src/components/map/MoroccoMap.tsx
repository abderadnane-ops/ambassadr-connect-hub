import { useState, useRef } from "react";
import { regions, ambassadors } from "@/data/mock-data";
import { ambassadorAvatars } from "@/data/ambassador-avatars";

// Real lat/lng coordinates for each region center
const regionCoords: Record<string, { lat: number; lng: number }> = {
  "1": { lat: 35.58, lng: -5.37 },    // Tanger-Tétouan-Al Hoceïma
  "2": { lat: 34.31, lng: -2.37 },    // L'Oriental
  "3": { lat: 33.93, lng: -4.98 },    // Fès-Meknès
  "4": { lat: 34.02, lng: -6.83 },    // Rabat-Salé-Kénitra
  "5": { lat: 32.34, lng: -6.36 },    // Béni Mellal-Khénifra
  "6": { lat: 33.53, lng: -7.58 },    // Casablanca-Settat
  "7": { lat: 31.63, lng: -8.00 },    // Marrakech-Safi
  "8": { lat: 31.15, lng: -5.05 },    // Drâa-Tafilalet
  "9": { lat: 30.42, lng: -9.60 },    // Souss-Massa
  "10": { lat: 28.98, lng: -10.06 },  // Guelmim-Oued Noun
  "11": { lat: 27.15, lng: -13.20 },  // Laâyoune-Sakia El Hamra
  "12": { lat: 23.72, lng: -15.93 },  // Dakhla-Oued Ed-Dahab
};

// Convert lat/lng to percentage position on the map container
// Morocco bounds including Sahara: ~21°N to ~36°N, ~-17°W to ~-1°W
const MAP_BOUNDS = {
  north: 36.5,
  south: 21.0,
  west: -17.5,
  east: -0.5,
};

const latLngToPercent = (lat: number, lng: number) => ({
  x: ((lng - MAP_BOUNDS.west) / (MAP_BOUNDS.east - MAP_BOUNDS.west)) * 100,
  y: ((MAP_BOUNDS.north - lat) / (MAP_BOUNDS.north - MAP_BOUNDS.south)) * 100,
});

const getAmbassadorPins = (regionId: string) => {
  const coords = regionCoords[regionId];
  if (!coords) return [];
  const regionName = regions.find((r) => r.id === regionId)?.name || "";
  const regionAmbs = ambassadors.filter((a) => a.region === regionName);
  const center = latLngToPercent(coords.lat, coords.lng);

  return regionAmbs.map((amb, i) => {
    const angle = (i / Math.max(regionAmbs.length, 1)) * Math.PI * 2 - Math.PI / 2;
    const radius = regionAmbs.length > 1 ? 3.5 : 0;
    return {
      ...amb,
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius,
    };
  });
};

interface Props {
  selectedRegion: string | null;
  onRegionSelect: (regionId: string) => void;
}

const MoroccoMap = ({ selectedRegion, onRegionSelect }: Props) => {
  const allPins = regions.flatMap((r) => getAmbassadorPins(r.id));

  return (
    <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
      {/* Google Maps iframe - Morocco with Sahara */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7500000!2d-8.0!3d29.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ filter: "saturate(0.4) brightness(1.05)" }}
        title="Carte du Maroc"
      />

      {/* Overlay to capture clicks and display pins */}
      <div className="absolute inset-0 z-10">
        {/* Region center markers with count */}
        {regions.map((region) => {
          const coords = regionCoords[region.id];
          if (!coords) return null;
          const pos = latLngToPercent(coords.lat, coords.lng);
          const isSelected = selectedRegion === region.id;

          return (
            <button
              key={region.id}
              onClick={() => onRegionSelect(region.id)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            >
              {/* Pulse ring on selected */}
              {isSelected && (
                <span className="absolute inset-0 -m-3 rounded-full border-2 border-secondary animate-ping opacity-40" />
              )}

              {/* Count badge */}
              <span
                className={`flex items-center justify-center min-w-[22px] h-[22px] rounded-full text-[9px] font-bold px-1 shadow-lg transition-all duration-300 ${
                  isSelected
                    ? "bg-secondary text-secondary-foreground scale-125 shadow-glow-green"
                    : "bg-primary text-primary-foreground group-hover:scale-110"
                }`}
              >
                {region.ambassadorCount}
              </span>
            </button>
          );
        })}

        {/* Ambassador avatar circles */}
        {allPins.map((amb, i) => {
          const isInSelected = selectedRegion
            ? regions.find((r) => r.id === selectedRegion)?.name === amb.region
            : false;

          return (
            <div
              key={amb.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isInSelected ? "z-20 scale-125" : "z-10"
              }`}
              style={{
                left: `${amb.x}%`,
                top: `${amb.y}%`,
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <img
                src={ambassadorAvatars[amb.id]}
                alt={amb.name}
                className={`w-7 h-7 rounded-full object-cover ring-2 transition-all duration-300 ${
                  isInSelected
                    ? "ring-secondary shadow-glow-green"
                    : "ring-white/80 shadow-md"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="absolute bottom-2 left-2 right-2 z-30 flex items-center justify-between px-3 py-2 rounded-xl bg-card/90 backdrop-blur-md border border-border/50 text-[9px] text-muted-foreground shadow-elevated">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full gradient-hero inline-block ring-1 ring-white/80" />
          <span>Ambassadeur</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-primary inline-block" />
          <span>Centre région</span>
        </div>
        <span className="font-semibold">{ambassadors.length} affichés</span>
      </div>
    </div>
  );
};

export default MoroccoMap;
