"use client";
import { FC, useState } from "react";
import { Logo } from "../..";
import { useWindowOnEvent } from "@/app/hooks";

const DynamicLogo: FC = () => {
  const [isFull, setIsFull] = useState(true);

  useWindowOnEvent(
    "resize",
    () => {
      setIsFull(
        typeof window !== "undefined" &&
          (window?.innerWidth > 1200 || window?.innerWidth <= 768)
      );
    },
    [setIsFull],
    true
  );

  return <Logo isFull={isFull} />;
};

export default DynamicLogo;
