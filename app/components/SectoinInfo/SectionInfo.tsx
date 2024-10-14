import { FC } from "react";
import { Container } from "..";

import styles from "./SectionInfo.module.css";
import classNames from "classnames";

type Props = {
  title: string;
  description?: string;
  className?: string;
};

const SectionInfo: FC<Props> = ({ title, description, className }) => {
  return (
    <Container className={className}>
      <h2 className={styles.title}>{title}</h2>
      {description && <div className={styles.description}>{description}</div>}
    </Container>
  );
};

export default SectionInfo;
