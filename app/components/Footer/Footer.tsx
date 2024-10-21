import { FC } from "react";
import { ColonTitle, Helper, MainInfo, Navigation } from "./components";
import { Container } from "..";

import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.content}>
        <MainInfo />
        <Navigation />
        <Helper />
        <div className={styles.info}>
          <ColonTitle />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
