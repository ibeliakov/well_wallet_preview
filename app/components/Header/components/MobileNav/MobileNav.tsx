"use client";
import { FC, useEffect, useState } from "react";
import { useNavigationList } from "@/app/hooks";
import { Container, Logo } from "@/app/components";

import ToBot from "../ToBot";
import styles from "./MobileNav.module.css";
import { Link } from "@/i18n/routing";

const MobileNav: FC = () => {
  const { routs } = useNavigationList();
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((show) => !show);
  };

  return (
    <>
      <button onClick={handleClick} className={styles.btn}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      {show && (
        <div className={styles.menu_back} onClick={handleClick}>
          <div className={styles.menu}>
            <Container className={styles.header}>
              <Logo />
              <button className={styles.btn_close}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </button>
            </Container>
            <Container className={styles.menu_body}>
              <nav className={styles.links}>
                {routs.map((item, i) => (
                  <Link key={i} href={item.href} className={styles.link}>
                    {item.name}
                  </Link>
                ))}
              </nav>
              <ToBot isFull />
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
