import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) => (
  <Reveal
    className={cn(
      "max-w-3xl",
      align === "center" && "mx-auto text-center",
      className,
    )}
  >
    {eyebrow && <span className="eyebrow mb-5">{eyebrow}</span>}
    <Tag className="text-3xl font-semibold leading-[1.1] text-balance md:text-[2.75rem]">
      {title}
    </Tag>
    {description && (
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
    )}
  </Reveal>
);

export default SectionHeading;
