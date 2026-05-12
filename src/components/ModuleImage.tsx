import { useState } from "react";
import placeholder from "@/assets/box/placeholder.jpg";

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "onError"> & {
  src: string;
  fallback?: string;
};

export function ModuleImage({ src, fallback = placeholder, alt = "", ...rest }: Props) {
  const [errored, setErrored] = useState(false);
  return (
    <img
      src={errored ? fallback : src}
      alt={alt}
      onError={() => {
        if (!errored) setErrored(true);
      }}
      {...rest}
    />
  );
}
