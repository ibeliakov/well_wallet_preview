import { FC } from "react";
import classNames from "classnames";

import { LanguageSwitch, Navigation, ToBot } from "./components";

import styles from "./Header.module.css";
import { Container, Logo } from "..";

const Header: FC = () => {
  return (
    <header className={classNames(styles.header)}>
      <Container className={styles.content}>
        <Logo />
        <Navigation />
        <div className={styles.left_box}>
          <LanguageSwitch />
          <ToBot />
        </div>
      </Container>
    </header>
  );
};

export default Header;
