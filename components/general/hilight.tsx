import { cn } from "@/lib/utils";

interface highprops {
  text: string;
  className?: string;
}

export function HighlightText(props: highprops) {
  return (
    <span
      className={cn(
        `
        px-3 py-1 rounded-full 
        bg-blue-300  text-yellow-900 
        font-semibold  
      `,
        props.className
      )}
    >
      {props.text}
    </span>
  );
}
