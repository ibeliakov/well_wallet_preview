"use client";
import { FC, useState } from "react";
import { useNavigationList } from "@/app/hooks";
import { Container, Logo } from "@/app/components";

import ToBot from "../ToBot";
import styles from "./MobileNav.module.css";
import { Link } from "@/i18n/routing";
import classNames from "classnames";

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
      {
        <div
          className={classNames(styles.menu_back, { [styles.show]: show })}
          onClick={handleClick}
        >
          <div className={classNames(styles.menu, { [styles.show]: show })}>
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
      }
    </>
  );
};

export default MobileNav;
