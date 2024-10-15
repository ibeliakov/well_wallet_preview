import { FC } from "react";
import classNames from "classnames";

import { DynamicLogo, LeftBtns, Navigation } from "./components";

import styles from "./Header.module.css";
import { Container, Logo } from "..";

const Header: FC = () => {
  return (
    <header className={classNames(styles.header)}>
      <Container className={styles.content}>
        <DynamicLogo />
        <Navigation />
        <LeftBtns />
      </Container>
    </header>
  );
};

export default Header;
