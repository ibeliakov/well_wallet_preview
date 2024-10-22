import { FC } from "react";

import styles from "./Tariffs.module.css";
import { SectionInfo } from "@/app/components";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { TariffsTable } from "./components";

const Tariffs: FC = () => {
  const t = useTranslations("tariffs");
  return (
    <>
      <div className={styles.wrap}>
        <SectionInfo title={t("title")} description={t("description")} />
        <TariffsTable />
      </div>
      {/*  <div className={classNames(styles.wrap, styles.white)}>
        <SectionInfo title={t("title")} description={t("description")} />
        <TariffsTable isBlack />
      </div> */}
    </>
  );
};

export default Tariffs;
