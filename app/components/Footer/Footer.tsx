import { FC } from "react";
import { Helper, MainInfo, Navigation } from "./components";
import { Container } from "..";

import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        <MainInfo />
        <Navigation />
        <Helper />
      </Container>
    </footer>
  );
};

export default Footer;
