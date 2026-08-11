interface SectionIntroProps {
  label: string;
  title: string;
  body?: string;
  center?: boolean;
  invert?: boolean;
}

export function SectionIntro({ label, title, body, center = false, invert = false }: SectionIntroProps) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={`text-xs uppercase tracking-[0.42em] ${invert ? 'text-[#DCAC74]/85' : 'text-[#9a7a56]'}`}>
        {label}
      </p>
      <h2 className={`mt-5 text-4xl leading-tight md:text-5xl lg:text-6xl ${invert ? 'text-[#FAF7F2]' : 'text-[#242323]'}`}>
        {title}
      </h2>
      {body ? (
        <p className={`mt-6 text-lg leading-8 ${invert ? 'text-white/72' : 'text-[#595959]'}`}>{body}</p>
      ) : null}
    </div>
  );
}
