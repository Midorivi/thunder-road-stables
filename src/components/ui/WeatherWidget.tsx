import { useEffect, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Cloud, CloudFog, CloudLightning, CloudRain, CloudSnow, CloudSun, Sun, Wind } from 'lucide-react';

interface WeatherData {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
}

interface WeatherDetails {
  label: string;
  Icon: LucideIcon;
}

function getWeatherDetails(weatherCode: number): WeatherDetails {
  if (weatherCode === 0) {
    return { label: 'Clear', Icon: Sun };
  }

  if (weatherCode >= 1 && weatherCode <= 3) {
    return { label: 'Partly Cloudy', Icon: CloudSun };
  }

  if (weatherCode >= 45 && weatherCode <= 48) {
    return { label: 'Foggy', Icon: CloudFog };
  }

  if (weatherCode >= 51 && weatherCode <= 67) {
    return { label: 'Rain', Icon: CloudRain };
  }

  if (weatherCode >= 71 && weatherCode <= 77) {
    return { label: 'Snow', Icon: CloudSnow };
  }

  if (weatherCode >= 80 && weatherCode <= 82) {
    return { label: 'Showers', Icon: CloudRain };
  }

  if (weatherCode >= 95 && weatherCode <= 99) {
    return { label: 'Thunderstorm', Icon: CloudLightning };
  }

  return { label: 'Cloudy', Icon: Cloud };
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadWeather() {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=40.9527&longitude=-72.5878&current=temperature_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph',
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error('Weather request failed');
        }

        const data: { current?: { temperature_2m?: number; weather_code?: number; wind_speed_10m?: number } } = await response.json();
        const current = data.current;

        if (
          typeof current?.temperature_2m !== 'number' ||
          typeof current.weather_code !== 'number' ||
          typeof current.wind_speed_10m !== 'number'
        ) {
          throw new Error('Weather response missing values');
        }

        setWeather({
          temperature: Math.round(current.temperature_2m),
          weatherCode: current.weather_code,
          windSpeed: Math.round(current.wind_speed_10m),
        });
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setHasError(true);
      }
    }

    void loadWeather();

    return () => controller.abort();
  }, []);

  if (hasError) {
    return null;
  }

  if (!weather) {
    return (
      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5" aria-hidden="true">
        <div className="h-4 w-24 animate-pulse rounded-full bg-white/10" />
        <div className="mt-4 h-8 w-20 animate-pulse rounded-full bg-white/10" />
        <div className="mt-3 h-4 w-32 animate-pulse rounded-full bg-white/10" />
        <div className="mt-4 h-4 w-28 animate-pulse rounded-full bg-white/10" />
      </div>
    );
  }

  const { label, Icon } = getWeatherDetails(weather.weatherCode);

  return (
    <div className="rounded-[1.5rem] border border-[#DCAC74]/20 bg-white/5 p-5 text-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#DCAC74]">Jamesport, NY</p>
          <p className="mt-3 text-3xl text-white">{weather.temperature}°F</p>
          <p className="mt-2 text-sm text-white/68">{label}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DCAC74]/30 bg-[#DCAC74]/10 text-[#DCAC74]">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-4 flex min-h-11 items-center gap-2 text-sm text-white/70">
        <Wind className="h-4 w-4 text-[#DCAC74]" />
        <span>Wind {weather.windSpeed} mph</span>
      </div>
    </div>
  );
}
