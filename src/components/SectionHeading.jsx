export default function SectionHeading({ eyebrow, title, description, align = 'left', inverse = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const titleColor = inverse ? 'text-white' : 'text-ink';
  const descriptionColor = inverse ? 'text-white/60' : 'text-muted';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`text-balance text-3xl font-black tracking-[-0.035em] sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description && <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionColor}`}>{description}</p>}
    </div>
  );
}
