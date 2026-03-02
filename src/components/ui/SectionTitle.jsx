function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full bg-saffron/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-saffron">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}

export default SectionTitle;
