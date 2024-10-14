import classNames from "classnames";
import { FC, ReactNode } from "react";

import styles from "./FieldWrap.module.css";

type Props = Readonly<{
  errorMessage: string | null;
  children: ReactNode;
}>;

const FieldWrap: FC<Props> = ({ errorMessage, children }) => {
  const hasError = !!errorMessage;
  return (
    <div className={styles.wrap}>
      {children}
      <div className={classNames({ [styles.error]: hasError })}>
        {errorMessage}
      </div>
    </div>
  );
};

export default FieldWrap;
