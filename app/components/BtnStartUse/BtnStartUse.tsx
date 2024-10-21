import { FC } from "react";
import { useTranslations } from "next-intl";

import styles from "./BtnStartUse.module.css";
import { LINK_TO_BOT } from "@/app/constants";

const BtnStartUse: FC = () => {
  const t = useTranslations("common");
  return (
    <a href={LINK_TO_BOT} className={styles.btn}>
      {t("start_use")}
    </a>
  );
};

export default BtnStartUse;
