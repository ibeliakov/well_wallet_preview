"use client";
import { FC, useState } from "react";
import LanguageSwitch from "../LanguageSwitch";
import { useWindowOnEvent } from "@/app/hooks";
import ToBot from "../ToBot";
import MobileNav from "../MobileNav";

import styles from "./LeftBtns.module.css";

const LeftBtns: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  useWindowOnEvent(
    "resize",
    () => {
      setIsMobile(typeof window !== "undefined" && window?.innerWidth <= 768);
    },
    [setIsMobile],
    true
  );
  return (
    <div className={styles.left_box}>
      <LanguageSwitch />
      {!isMobile && <ToBot resizeText />}
      {isMobile && <MobileNav />}
    </div>
  );
};

export default LeftBtns;
