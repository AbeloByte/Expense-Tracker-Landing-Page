import React from "react";

interface HeadingTitleProps {
  title: string;
  description?: string;
  className?: string;
}

const CardHeadingTitle = ({ title, description }: HeadingTitleProps) => {
  return (
    <div className={`flex flex-col gap-4  `}>
      <div className="font-bold">
        <h2 className="text-2xl md:text-[32px]">{title}</h2>
      </div>
      {description && (
        <p className="max-w-[38rem] text-foreground-muted">{description}</p>
      )}
    </div>
  );
};

export default CardHeadingTitle;
