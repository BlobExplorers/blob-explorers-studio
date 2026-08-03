type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : ""}>
      <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
        {eyebrow}
      </p>

      <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-300">
        {description}
      </p>
    </div>
  );
}