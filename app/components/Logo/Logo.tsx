import { FC } from "react";
import Image from "next/image";

import full_log from "./images/full_logo.svg";
import styles from "./Logo.module.css";
import { Link } from "@/i18n/routing";

type Props = Readonly<{
  isFull?: boolean;
  zoom?: number;
}>;

const fullLogo = {
  src: full_log,
  width: 190,
  height: 38,
};

const logoIcon = {
  src: "/images/logo.svg",
  width: 38,
  height: 38,
};

const Logo: FC<Props> = ({ isFull = true, zoom = 1 }) => {
  const props = isFull ? fullLogo : logoIcon;
  return (
    <Link className={styles.logo} href="/">
      <Image
        alt="Well Wallet"
        width={props.width * zoom}
        height={props.height * zoom}
        src={props.src}
      />
    </Link>
  );
};

export default Logo;
