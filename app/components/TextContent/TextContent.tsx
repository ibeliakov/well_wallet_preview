import { FC, ReactNode } from "react";
import { Container } from "..";

import styles from "./TextContent.module.css";

type Props = {
  children: ReactNode;
};

const TextContent: FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <Container>{children}</Container>
    </div>
  );
};

export default TextContent;
