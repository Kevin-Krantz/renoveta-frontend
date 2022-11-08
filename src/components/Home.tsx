import Hero from "./hero/Hero";
import RenovetaForm from "./RenovetaForm/RenovetaForm";
import Review from "./Review";
import WhatisRenoveta from "./WhatisRenoveta";

function Home() {
  return (
    <div>
      <Hero />
      <WhatisRenoveta/>
      <Review/> 
      <RenovetaForm/>
    </div>
  );
}

export default Home;
