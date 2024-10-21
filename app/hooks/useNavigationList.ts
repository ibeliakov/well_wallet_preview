"use client";

import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

const useNavigationList = () => {
  const pathname = usePathname();
  const t = useTranslations("common");
  const routs = useMemo(
    () => [
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
        name: "FAQ",
        href: "/faq",
      },
    ],
    [t]
  );
  const currentRout = useMemo(
    () => routs.find((item) => item.href === pathname),
    [pathname, routs]
  );

  return {
    pathname,
    isHome: pathname === "/",
    routs,
    currentRout,
  };
};

export default useNavigationList;
