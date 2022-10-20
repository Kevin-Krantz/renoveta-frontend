import { default as RenderAboutUs } from "./ContainerAboutUs";

function Linus() {
  return RenderAboutUs({
    img: "/images/profileImages/Linus.profilbild.png",
    name: "Linus Turbén",
    position: "Grundare",
    job: "Entreprenör/Projektledare",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  });
}

export default Linus;
