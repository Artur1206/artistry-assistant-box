import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImagePlaceholder({ className, label = "Imagem será adicionada" }: { className?: string; label?: string }) {
  return (
    <div className={cn("grid min-h-48 place-items-center bg-placeholder text-placeholder-foreground", className)} aria-label={label}>
      <div className="flex flex-col items-center gap-2 text-center">
        <ImageIcon className="h-7 w-7" strokeWidth={1.4} />
        <span className="text-[10px] font-semibold uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
}