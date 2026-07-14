import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
          <span className="w-8 h-px bg-primary" /> {eyebrow}
        </div>
      )}
      <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
        {title}
      </h1>
      {description && (
        <p className="mt-6 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
