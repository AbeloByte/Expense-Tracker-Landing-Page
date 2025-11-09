import React from "react";

interface HeadingTitleProps {
  title: string;
  description?: string;
  className?: string;
}

const CardHeadingTitle = ({
  title,
  description,
  className,
}: HeadingTitleProps) => {
  return (
    <div className={className}>
      <div className="font-bold">
        <h2 className="text-2xl md:text-[32px]">{title}</h2>
      </div>
      {description && <p className=" text-foreground-muted">{description}</p>}
    </div>
  );
};

export default CardHeadingTitle;
