import { IMenue } from "../../../types/Menue";

const menue: IMenue[] = [
  { title: "Varför Renoveta", url: "/whyrenoveta" },
  { title: "Om Oss", url: "/aboutus" },
  { title: "Q&A", url: "/faq" },
];

export function getMenue() {
  return menue;
}
