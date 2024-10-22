"use client";
import { FC, useCallback, useState, ReactNode } from "react";

import styles from "./Question.module.css";
import classNames from "classnames";

type Props = Readonly<{
  title: string;
  description: ReactNode;
  active?: boolean;
}>;

const Question: FC<Props> = ({ title, description, active = false }) => {
  const [show, setShow] = useState(active);
  const toggle = useCallback(() => {
    setShow((show) => !show);
  }, [setShow]);
  return (
    <div className={styles.question}>
      <div className={styles.header} onClick={toggle}>
        <h4 className={styles.title}>{title}</h4>
        <div
          className={classNames(styles.btn, styles.minus, {
            [styles.plus]: !show,
          })}
        />
      </div>
      <div
        className={classNames(styles.content, {
          [styles.show]: show,
          [styles.hide]: !show,
        })}
      >
        {description}
      </div>
    </div>
  );
};

export default Question;
