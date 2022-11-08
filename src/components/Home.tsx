import { useEffect, useState } from "react";
import Hero from "./hero/Hero";
import HowRenovetaWorks from "./howRenovetaworks/Container";
import { getList } from "./howRenovetaworks/Sections";
import { IList } from "./howRenovetaworks/IList";

function Home() {
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    setList(getList());
  }, []);
  return (
    <div>
      <Hero />
      <HowRenovetaWorks list={list} />
    </div>
  );
}

export default Home;
