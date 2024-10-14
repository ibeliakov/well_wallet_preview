import { FC } from "react";

import styles from "./Article.module.css";

type Props = {
  title: string;
  description: string;
};

const Article: FC<Props> = ({ title, description }) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{description}</p>
    </div>
  );
};

export default Article;
