import { FC } from "react";
import classNames from "classnames";

import styles from "./PhoneWithMenu.module.css";
import { useTranslations } from "next-intl";

type Props = {
  activeBtn?: number;
  className?: string;
};

const PhoneWithMenu: FC<Props> = ({ activeBtn, className }) => {
  const t = useTranslations("common");
  const list = [
    t("phone.deposit"),
    t("phone.withdrawal"),
    t("phone.purse"),
    t("phone.history"),
    t("phone.settings"),
    t("phone.support"),
    t("phone.aml_check"),
    t("phone.exchange_rate"),
  ];
  return (
    <div className={classNames(styles.phone, className)}>
      <div className={styles.menu}>
        <div className={styles.menu__btn}>
          <span className={styles.menu__btn_icon}>
            <span />
            <span />
            <span />
          </span>{" "}
          {t("phone.menu")}
        </div>
      </div>
      <div className={styles.menu}>
        {list.map((name, i) => (
          <div
            className={classNames(styles.menu__item, {
              [styles.active]: i === activeBtn,
            })}
            key={i}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneWithMenu;
