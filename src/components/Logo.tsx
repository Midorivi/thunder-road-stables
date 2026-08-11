import { asset } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => {
  return <img src={asset("/logo.svg")} alt="Thunder Road Stables" className={`w-auto object-contain ${className}`} />;
};
