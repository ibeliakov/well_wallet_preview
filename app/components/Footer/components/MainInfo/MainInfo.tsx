import { Logo } from "@/app/components";
import { useTranslations } from "next-intl";
import { FC } from "react";

import styles from "./MainInfo.module.css";
import ColonTitle from "../ColonTitle";

const MainInfo: FC = () => {
  const t = useTranslations("common");
  return (
    <div className={styles.box}>
      <Logo zoom={1.11} />
      <div className={styles.info}>
        <ColonTitle />
      </div>
    </div>
  );
};

export default MainInfo;
