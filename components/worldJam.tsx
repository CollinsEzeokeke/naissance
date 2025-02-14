"use client";
import WorldMap from "@/components/ui/world-map";

export function WorldMapDemo() {
  return (
    <div className="w-full h-full">
      <WorldMap
        dots={[
          // FROM LAGOS
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 40.7128, lng: -74.006 }, // to New York
          },
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 51.5074, lng: -0.1278 }, // to London
          },
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 35.6762, lng: 139.6503 }, // to Tokyo
          },

          // FROM ABUJA
          {
            start: { lat: 9.0765, lng: 7.3986 }, // Abuja
            end: { lat: 34.0522, lng: -118.2437 }, // to Los Angeles
          },
          {
            start: { lat: 9.0765, lng: 7.3986 }, // Abuja
            end: { lat: 48.8566, lng: 2.3522 }, // to Paris
          },
          {
            start: { lat: 9.0765, lng: 7.3986 }, // Abuja
            end: { lat: 31.2304, lng: 121.4737 }, // to Shanghai
          },

          // FROM PORT HARCOURT
          {
            start: { lat: 4.8156, lng: 7.0498 }, // Port Harcourt
            end: { lat: 41.8781, lng: -87.6298 }, // to Chicago
          },
          {
            start: { lat: 4.8156, lng: 7.0498 }, // Port Harcourt
            end: { lat: 52.52, lng: 13.405 }, // to Berlin
          },
          {
            start: { lat: 4.8156, lng: 7.0498 }, // Port Harcourt
            end: { lat: 22.3193, lng: 114.1694 }, // to Hong Kong
          },

          // FROM KANO (Hausa Region)
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 25.2048, lng: 55.2708 }, // to Dubai
          },
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: -33.9249, lng: 18.4241 }, // to Cape Town
          },
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: -37.8136, lng: 144.9631 }, // to Melbourne
          },

          // FROM ENUGU (Igbo Region)
          {
            start: { lat: 6.4527, lng: 7.5103 }, // Enugu
            end: { lat: -22.9068, lng: -43.1729 }, // to Rio de Janeiro
          },
          {
            start: { lat: 6.4527, lng: 7.5103 }, // Enugu
            end: { lat: 30.0444, lng: 31.2357 }, // to Cairo
          },
          {
            start: { lat: 6.4527, lng: 7.5103 }, // Enugu
            end: { lat: 24.7136, lng: 46.6753 }, // to Riyadh
          },

          // FROM IBADAN (Yoruba Region)
          {
            start: { lat: 7.3775, lng: 3.947 }, // Ibadan
            end: { lat: -34.6037, lng: -58.3816 }, // to Buenos Aires
          },
          {
            start: { lat: 7.3775, lng: 3.947 }, // Ibadan
            end: { lat: -1.2921, lng: 36.8219 }, // to Nairobi
          },
          {
            start: { lat: 7.3775, lng: 3.947 }, // Ibadan
            end: { lat: -33.8688, lng: 151.2093 }, // to Sydney
          },

          // FROM OTHER MAJOR NIGERIAN CITIES
          // From Aba (Igbo)
          {
            start: { lat: 5.1167, lng: 7.3667 }, // Aba
            end: { lat: 31.2304, lng: 121.4737 }, // to Shanghai
          },
          // From Sokoto (Hausa)
          {
            start: { lat: 13.0622, lng: 5.2339 }, // Sokoto
            end: { lat: 25.2048, lng: 55.2708 }, // to Dubai
          },
          // From Abeokuta (Yoruba)
          {
            start: { lat: 7.1475, lng: 3.3619 }, // Abeokuta
            end: { lat: -12.0464, lng: -77.0428 }, // to Lima
          },

          //  according to trade and market relationships
          // IGBO MAJOR CITIES TO ASIA (Strong business/trade connections)
          // From Onitsha (Major Trading Hub)
          {
            start: { lat: 6.1667, lng: 6.7833 }, // Onitsha
            end: { lat: 22.3193, lng: 114.1694 }, // to Hong Kong
          },
          {
            start: { lat: 6.1667, lng: 6.7833 }, // Onitsha
            end: { lat: 1.3521, lng: 103.8198 }, // to Singapore
          },
          {
            start: { lat: 6.1667, lng: 6.7833 }, // Onitsha
            end: { lat: 13.7563, lng: 100.5018 }, // to Bangkok
          },

          // From Aba (Manufacturing/Trade Center)
          {
            start: { lat: 5.1167, lng: 7.3667 }, // Aba
            end: { lat: 31.2304, lng: 121.4737 }, // to Shanghai
          },
          {
            start: { lat: 5.1167, lng: 7.3667 }, // Aba
            end: { lat: 23.1291, lng: 113.2644 }, // to Guangzhou
          },
          {
            start: { lat: 5.1167, lng: 7.3667 }, // Aba
            end: { lat: 25.033, lng: 121.5654 }, // to Taipei
          },

          // From Enugu (Educational/Cultural Hub)
          {
            start: { lat: 6.4527, lng: 7.5103 }, // Enugu
            end: { lat: 51.5074, lng: -0.1278 }, // to London (Education)
          },
          {
            start: { lat: 6.4527, lng: 7.5103 }, // Enugu
            end: { lat: 42.3601, lng: -71.0589 }, // to Boston (Education)
          },
          {
            start: { lat: 6.4527, lng: 7.5103 }, // Enugu
            end: { lat: 43.6532, lng: -79.3832 }, // to Toronto (Diaspora)
          },

          // From Owerri (Tech/Business)
          {
            start: { lat: 5.4836, lng: 7.0332 }, // Owerri
            end: { lat: 37.7749, lng: -122.4194 }, // to San Francisco
          },
          {
            start: { lat: 5.4836, lng: 7.0332 }, // Owerri
            end: { lat: 52.52, lng: 13.405 }, // to Berlin
          },
          {
            start: { lat: 5.4836, lng: 7.0332 }, // Owerri
            end: { lat: -26.2041, lng: 28.0473 }, // to Johannesburg
          },

          // From Port Harcourt (Oil/Industry)
          {
            start: { lat: 4.8156, lng: 7.0498 }, // Port Harcourt
            end: { lat: 25.2048, lng: 55.2708 }, // to Dubai
          },
          {
            start: { lat: 4.8156, lng: 7.0498 }, // Port Harcourt
            end: { lat: 29.7604, lng: -95.3698 }, // to Houston
          },
          {
            start: { lat: 4.8156, lng: 7.0498 }, // Port Harcourt
            end: { lat: 55.7558, lng: 37.6173 }, // to Moscow
          },

          // From Umuahia (Cultural/Educational)
          {
            start: { lat: 5.5244, lng: 7.486 }, // Umuahia
            end: { lat: 40.7128, lng: -74.006 }, // to New York
          },
          {
            start: { lat: 5.5244, lng: 7.486 }, // Umuahia
            end: { lat: 45.5017, lng: -73.5673 }, // to Montreal
          },
          {
            start: { lat: 5.5244, lng: 7.486 }, // Umuahia
            end: { lat: -33.8688, lng: 151.2093 }, // to Sydney
          },

          // From Awka (Tech/Innovation)
          {
            start: { lat: 6.2159, lng: 7.0714 }, // Awka
            end: { lat: 37.3875, lng: -122.0575 }, // to Mountain View
          },
          {
            start: { lat: 6.2159, lng: 7.0714 }, // Awka
            end: { lat: 35.6762, lng: 139.6503 }, // to Tokyo
          },
          {
            start: { lat: 6.2159, lng: 7.0714 }, // Awka
            end: { lat: 1.3521, lng: 103.8198 }, // to Singapore
          },

          // Specific Trade Routes (Historical and Modern)
          {
            start: { lat: 6.1667, lng: 6.7833 }, // Onitsha
            end: { lat: 3.3792, lng: 73.5092 }, // to Male, Maldives
          },
          {
            start: { lat: 5.1167, lng: 7.3667 }, // Aba
            end: { lat: 22.1957, lng: 113.5419 }, // to Macau
          },
          {
            start: { lat: 4.8156, lng: 7.0498 }, // Port Harcourt
            end: { lat: 31.5497, lng: 74.3436 }, // to Lahore
          },
          //   kjdskfakljd;f

          // YORUBA MAJOR CITIES TO GLOBAL DESTINATIONS

          // From Lagos (Commercial/Cultural Hub)
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 51.5074, lng: -0.1278 }, // to London (Strong colonial/business ties)
          },
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 40.7128, lng: -74.006 }, // to New York (Fashion/Entertainment)
          },
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 25.2048, lng: 55.2708 }, // to Dubai (Trade/Business)
          },

          // From Ibadan (Educational/Cultural Center)
          {
            start: { lat: 7.3775, lng: 3.947 }, // Ibadan
            end: { lat: 48.8566, lng: 2.3522 }, // to Paris (Art/Culture)
          },
          {
            start: { lat: 7.3775, lng: 3.947 }, // Ibadan
            end: { lat: -14.235, lng: -51.9253 }, // to Brazil (Historical/Cultural)
          },
          {
            start: { lat: 7.3775, lng: 3.947 }, // Ibadan
            end: { lat: 14.7167, lng: -17.4677 }, // to Dakar (West African ties)
          },

          // From Ile-Ife (Spiritual/Cultural Capital)
          {
            start: { lat: 7.4805, lng: 4.5615 }, // Ile-Ife
            end: { lat: -22.9068, lng: -43.1729 }, // to Rio (Yoruba cultural influence)
          },
          {
            start: { lat: 7.4805, lng: 4.5615 }, // Ile-Ife
            end: { lat: -12.9716, lng: -38.5014 }, // to Salvador, Bahia
          },
          {
            start: { lat: 7.4805, lng: 4.5615 }, // Ile-Ife
            end: { lat: 18.5196, lng: -72.33 }, // to Port-au-Prince (Cultural ties)
          },

          // From Abeokuta (Trade/Textile Hub)
          {
            start: { lat: 7.1475, lng: 3.3619 }, // Abeokuta
            end: { lat: 31.2304, lng: 121.4737 }, // to Shanghai (Textile trade)
          },
          {
            start: { lat: 7.1475, lng: 3.3619 }, // Abeokuta
            end: { lat: 23.1291, lng: 113.2644 }, // to Guangzhou (Manufacturing)
          },
          {
            start: { lat: 7.1475, lng: 3.3619 }, // Abeokuta
            end: { lat: 13.7563, lng: 100.5018 }, // to Bangkok (Textile market)
          },

          // From Osogbo (Art/Cultural Center)
          {
            start: { lat: 7.7827, lng: 4.5418 }, // Osogbo
            end: { lat: 48.8566, lng: 2.3522 }, // to Paris (Art scene)
          },
          {
            start: { lat: 7.7827, lng: 4.5418 }, // Osogbo
            end: { lat: 52.3676, lng: 4.9041 }, // to Amsterdam (Art markets)
          },
          {
            start: { lat: 7.7827, lng: 4.5418 }, // Osogbo
            end: { lat: 40.4168, lng: -3.7038 }, // to Madrid (Cultural exchange)
          },

          // From Akure (Tech/Innovation)
          {
            start: { lat: 7.2571, lng: 5.2058 }, // Akure
            end: { lat: 37.7749, lng: -122.4194 }, // to San Francisco
          },
          {
            start: { lat: 7.2571, lng: 5.2058 }, // Akure
            end: { lat: 35.6762, lng: 139.6503 }, // to Tokyo
          },
          {
            start: { lat: 7.2571, lng: 5.2058 }, // Akure
            end: { lat: -33.8688, lng: 151.2093 }, // to Sydney
          },

          // Diaspora/Cultural Connections (Caribbean/Americas)
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 23.1168, lng: -82.3887 }, // to Havana
          },
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 18.0179, lng: -76.8099 }, // to Kingston
          },
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 10.6418, lng: -61.5167 }, // to Port of Spain
          },

          // Modern Business/Entertainment Routes
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 34.0522, lng: -118.2437 }, // to Los Angeles (Entertainment)
          },
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: 1.3521, lng: 103.8198 }, // to Singapore (Tech/Business)
          },
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: -26.2041, lng: 28.0473 }, // to Johannesburg (African business)
          },

          // HAUSA MAJOR CITIES TO ISLAMIC/ARAB WORLD

          // From Kano (Major Commercial Hub)
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 21.4225, lng: 39.8262 }, // to Mecca (Religious)
          },
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 24.7136, lng: 46.6753 }, // to Riyadh
          },
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 25.2048, lng: 55.2708 }, // to Dubai (Modern trade)
          },

          // Traditional Trade Routes (Trans-Saharan)
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 36.8065, lng: 10.1815 }, // to Tunis
          },
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 33.9716, lng: -6.8498 }, // to Rabat
          },
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 30.0444, lng: 31.2357 }, // to Cairo
          },

          // From Kaduna (Political/Military Hub)
          {
            start: { lat: 10.5222, lng: 7.4384 }, // Kaduna
            end: { lat: 31.9614, lng: 35.9304 }, // to Amman
          },
          {
            start: { lat: 10.5222, lng: 7.4384 }, // Kaduna
            end: { lat: 33.8869, lng: 35.5131 }, // to Beirut
          },
          {
            start: { lat: 10.5222, lng: 7.4384 }, // Kaduna
            end: { lat: 23.685, lng: 90.3563 }, // to Dhaka (Islamic ties)
          },

          // From Sokoto (Spiritual/Cultural Center)
          {
            start: { lat: 13.0622, lng: 5.2339 }, // Sokoto
            end: { lat: 24.4539, lng: 54.3773 }, // to Abu Dhabi
          },
          {
            start: { lat: 13.0622, lng: 5.2339 }, // Sokoto
            end: { lat: 27.7172, lng: 85.324 }, // to Kathmandu
          },
          {
            start: { lat: 13.0622, lng: 5.2339 }, // Sokoto
            end: { lat: 41.0082, lng: 28.9784 }, // to Istanbul
          },

          // From Zaria (Educational/Research)
          {
            start: { lat: 11.1111, lng: 7.7227 }, // Zaria
            end: { lat: 30.0444, lng: 31.2357 }, // to Cairo (Al-Azhar)
          },
          {
            start: { lat: 11.1111, lng: 7.7227 }, // Zaria
            end: { lat: 24.8607, lng: 67.0011 }, // to Karachi
          },
          {
            start: { lat: 11.1111, lng: 7.7227 }, // Zaria
            end: { lat: 35.6892, lng: 51.389 }, // to Tehran
          },

          // From Bauchi (Agriculture/Trade)
          {
            start: { lat: 10.3159, lng: 9.8432 }, // Bauchi
            end: { lat: 15.3694, lng: 44.191 }, // to Sana'a
          },
          {
            start: { lat: 10.3159, lng: 9.8432 }, // Bauchi
            end: { lat: 33.5731, lng: -7.5898 }, // to Casablanca
          },
          {
            start: { lat: 10.3159, lng: 9.8432 }, // Bauchi
            end: { lat: 29.3759, lng: 47.9774 }, // to Kuwait City
          },

          // Modern Business Connections
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 1.3521, lng: 103.8198 }, // to Singapore
          },
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 31.2304, lng: 121.4737 }, // to Shanghai
          },
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 3.139, lng: 101.6869 }, // to Kuala Lumpur
          },

          // Regional African Trade
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 14.7167, lng: -17.4677 }, // to Dakar
          },
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 12.6392, lng: -8.0029 }, // to Bamako
          },
          {
            start: { lat: 12.0022, lng: 8.592 }, // Kano
            end: { lat: 13.5127, lng: 2.1128 }, // to Niamey
          },
        ]}
      />
    </div>
  );
}
