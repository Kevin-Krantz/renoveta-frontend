import { default as RenderAboutUs } from "./ContainerAboutUs";

function Sofia() {
  return RenderAboutUs({
    img: "/images/profileImages/Sofia.profilbild.png",
    name: "Sofia Rosenberg",
    position: "Projektkoordinator",
    job: "Maskiningenjör produktutveckling",
    text: "Ipso..",
  });
}

export default Sofia;
