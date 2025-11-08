interface SectionHeadingTitleProps {
  title: string;
  description: string;
}

const SectionHeadingTitle = ({
  title,
  description,
}: SectionHeadingTitleProps) => {
  return (
    <div>
      {" "}
      {/* Heading Content */}
      <div className="max-w-4xl">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-5xl">{title}</h2>
          <p className="text-[18px]  max-w-[847px] text-foreground-muted">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeadingTitle;
