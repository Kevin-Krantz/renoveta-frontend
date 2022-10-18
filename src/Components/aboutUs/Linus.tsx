import { default as RenderAboutUs } from "./ContainerAboutUs";

function Linus() {
  return RenderAboutUs({
    img: "/images/profileImages/Linus.profilbild.png",
    name: "Linus Turbén",
    position: "Grundare",
    job: "Entreprenör/Projektledare",
    text: "Ipso..",
  });
}

export default Linus;
