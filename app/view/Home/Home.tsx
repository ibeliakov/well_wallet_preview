import { useTranslations } from "next-intl";
import { Advantages, Audit, StartInfo, Workflow } from "./components";

import { FC } from "react";

const Home: FC = () => {
  const t = useTranslations("home");
  return (
    <>
      <StartInfo />
      <Workflow />
      <Advantages />
      <Audit />
    </>
  );
};

export default Home;
