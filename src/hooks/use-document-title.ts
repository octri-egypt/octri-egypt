import { useEffect } from "react";

const DEFAULT_TITLE = "OCTRI — Ocean Triathlon Team Egypt | Together We Tri";

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ?? DEFAULT_TITLE;
  }, [title]);
}
