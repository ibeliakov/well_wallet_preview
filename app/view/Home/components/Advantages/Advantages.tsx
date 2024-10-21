import Image from "next/image";
import { BtnStartUse, Container, SectionInfo } from "@/app/components";
import styles from "./Advantages.module.css";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { Link } from "@/i18n/routing";

const Advantages = () => {
  const t = useTranslations("home");
  const advantages = [
    {
      title: t("2fa.title"),
      description: t("2fa.description"),
      icon: "/images/2fa_icon.svg",
    },
    {
      title: t("always_at_hand.title"),
      description: t("always_at_hand.description"),
      icon: "/images/always_at_hand_icon.svg",
    },
    {
      title: t("exchange_click.title"),
      description: t("exchange_click.description"),
      icon: "/images/exchange_click_icon.svg",
    },
    {
      title: t("wallets.title"),
      description: t("wallets.description"),
      icon: "/images/wallets_icon.svg",
    },
    {
      title: t("2_types_of_wallets.title"),
      description: t("2_types_of_wallets.description"),
      icon: "/images/security_icon.svg",
    },
    {
      title: t("referral_program.title"),
      description: t("referral_program.description"),
      icon: "/images/referral_program_icon.svg",
    },
  ];
  const currencies = [
    {
      name: "USDT",
      icon: "/images/usdt.svg",
    },
    {
      name: "TRX",
      icon: "/images/trx.svg",
    },
    {
      name: "BTC",
      icon: "/images/btc.svg",
    },
    {
      name: "ETH",
      icon: "/images/eth.svg",
    },
  ];

  return (
    <section className={styles.wrap}>
      <SectionInfo
        title={t("advantages.title")}
        description={t("advantages.description")}
      />
      <Container className={styles.list}>
        {advantages.map(({ title, description, icon }, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.item_header}>
              <Image height={40} width={40} alt="icon" src={icon} />
              <h4 className={styles.item_header_title}>{title}</h4>
            </div>
            <div
              className={styles.item_description}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>
        ))}
      </Container>
      <div className={styles.currenciesBox}>
        <h3 className={styles.currencies_title}>{t("currencies")}</h3>
        <div className={styles.currencies}>
          {currencies.map(({ name, icon }, index) => (
            <div key={index} className={styles.currency}>
              <div className={styles.currency_icon}>
                <Image height={72} width={72} alt={name} src={icon} />
              </div>
              <div className={styles.currency_name}>{name}</div>
            </div>
          ))}
          <Link className={styles.currency} href="/tariffs" target="_blank">
            <div className={classNames(styles.currency_icon, styles.small)}>
              <Image
                height={30}
                width={30}
                alt="all"
                src="/images/arrow-right.svg"
              />
            </div>
            <div className={styles.currency_name}>{t("all")}</div>
          </Link>
        </div>
        <BtnStartUse />
      </div>
    </section>
  );
};

export default Advantages;
