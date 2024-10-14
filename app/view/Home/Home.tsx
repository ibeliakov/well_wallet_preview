import { Advantages, Audit, StartInfo, Workflow } from "./components";

import { FC } from "react";

const Home: FC = () => {
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
