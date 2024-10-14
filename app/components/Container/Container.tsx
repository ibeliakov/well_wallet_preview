import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Container.module.css";

type Props = Readonly<{
  children: ReactNode;
  className?: string;
}>;
const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};

export default Container;
