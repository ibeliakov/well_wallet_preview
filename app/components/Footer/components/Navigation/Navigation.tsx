import { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import styles from "./Navigation.module.css";

const Navigation: FC = () => {
  const t = useTranslations("common");
  const routs = [
    {
      name: t("tariffs"),
      href: "/tariffs",
    },
    {
      name: t("audit"),
      href: "/audit",
    },
    {
      name: t("referral"),
      href: "/referral",
    },

    {
      name: t("contacts"),
      href: "/contacts",
    },
    {
      name: "AML/KYC",
      href: "/aml-kyc",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "Terms of Use",
      href: "/terms-of-use",
    },
    {
      name: "Privacy of policy",
      href: "/privacy-policy",
    },
  ];
  return (
    <nav className={styles.list}>
      {routs.map(({ name, href }, i) => (
        <Link href={href} key={i} className={styles.item}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
