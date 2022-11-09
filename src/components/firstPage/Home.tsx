import { useEffect, useState } from "react";
import Hero from "./hero/Hero";
import HowRenovetaWorks from "./howRenovetaworks/Container";
import { getList } from "./howRenovetaworks/Sections";
import { IList } from "./howRenovetaworks/IList";
import Review from "./Review";
import WhatisRenoveta from "./WhatisRenoveta";
import Compilation from "./Compilation";

function Home() {
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    setList(getList());
  }, []);
  return (
    <div>
      <Hero />
      <WhatisRenoveta />
      <HowRenovetaWorks list={list} />
      <Review />
      <Compilation />
    </div>
  );
}

export default Home;
