"use client";
import { FC } from "react";
import { useNavigationList } from "@/app/hooks";
import { useTranslations } from "next-intl";
import classNames from "classnames";

import styles from "./Breadcrumbs.module.css";
import { Link } from "@/i18n/routing";

const Breadcrumbs: FC = () => {
  const { isHome, currentRout } = useNavigationList();
  const t = useTranslations("common");
  const isBlack = ["/audit", "/contacts"].includes(currentRout?.href || "");

  if (isHome || !currentRout) return <></>;

  return (
    <div className={classNames(styles.submenu, { [styles.black_bg]: isBlack })}>
      <div className={styles.container}>
        <Link className={styles.home} href="/">
          {t("home")}
        </Link>{" "}
        / {currentRout.altName || currentRout.name}
      </div>
    </div>
  );
};

export default Breadcrumbs;
