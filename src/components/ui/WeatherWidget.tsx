import { useEffect, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Cloud, CloudFog, CloudLightning, CloudRain, CloudSnow, CloudSun, Sun } from 'lucide-react';

interface WeatherData {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
}

function getIcon(code: number): { label: string; Icon: LucideIcon } {
  if (code === 0) return { label: 'Clear', Icon: Sun };
  if (code <= 3) return { label: 'Partly Cloudy', Icon: CloudSun };
  if (code <= 48) return { label: 'Foggy', Icon: CloudFog };
  if (code <= 67) return { label: 'Rain', Icon: CloudRain };
  if (code <= 77) return { label: 'Snow', Icon: CloudSnow };
  if (code <= 82) return { label: 'Showers', Icon: CloudRain };
  if (code <= 99) return { label: 'Thunderstorm', Icon: CloudLightning };
  return { label: 'Cloudy', Icon: Cloud };
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=40.9527&longitude=-72.5878&current=temperature_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph',
      { signal: controller.signal },
    )
      .then((r) => r.json())
      .then((d: { current?: { temperature_2m?: number; weather_code?: number; wind_speed_10m?: number } }) => {
        const c = d.current;
        if (typeof c?.temperature_2m === 'number' && typeof c.weather_code === 'number' && typeof c.wind_speed_10m === 'number') {
          setWeather({ temperature: Math.round(c.temperature_2m), weatherCode: c.weather_code, windSpeed: Math.round(c.wind_speed_10m) });
        }
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  if (!weather) return null;

  const { label, Icon } = getIcon(weather.weatherCode);

  return (
    <div className="flex items-center gap-2 text-sm text-white/55">
      <Icon className="h-4 w-4 text-[#DCAC74]" />
      <span>{weather.temperature}°F, {label}, {weather.windSpeed} mph wind</span>
    </div>
  );
}
