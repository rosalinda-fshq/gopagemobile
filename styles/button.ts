import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "text-xl transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none",
  ],
  {
    variants: {
      intent: {
        primary: "bg-blue-600 hover:bg-blue-700 text-blue-100 hover:text-white",
        warning:
          "bg-yellow-500 hover:bg-yellow-600 text-orange-100 hover:text-white",
        default: "bg-gray-500 hover:bg-gray-600",
      },
      size: { small: "…", medium: "…" },
    },
    defaultVariants: {
      intent: "default",
    },
  }
);
