import { FC } from "react";

import styles from "./Logo.module.css";
import { Link } from "@/i18n/routing";
import classNames from "classnames";

type Props = Readonly<{
  isFull?: boolean;
  zoom?: number;
}>;

const Logo: FC<Props> = ({ isFull = true, zoom = 1 }) => {
  return (
    <Link
      style={{ zoom }}
      className={classNames(styles.logo, {
        [styles.full]: isFull,
      })}
      href="/"
    />
  );
};

export default Logo;
