"use client";
import { FC, useEffect } from "react";

import classNames from "classnames";
import { Link } from "@/i18n/routing";
import styles from "./Navigation.module.css";
import { useNavigationList } from "@/app/hooks";

const Navigation: FC = () => {
  const { isHome, routs, currentRout } = useNavigationList();
  useEffect(() => {
    console.log("isHome", isHome);
    if (isHome) {
      document?.body?.classList.add("home");
      return () => {
        document?.body?.classList.remove("home");
      };
    }
    return () => {
      document?.body?.classList.remove("home");
    };
  }, [isHome]);

  return (
    <nav className={styles.nav}>
      {routs.map((item, i) => (
        <Link
          key={i}
          className={classNames(styles.btn_nav, {
            [styles.active]: currentRout?.href === item.href,
          })}
          href={item.href}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
