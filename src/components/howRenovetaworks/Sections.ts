import { IList } from "./IList";

const listHowRenovetaWorks: IList[] = [
  {
    imgUrl: "/images/roof.png",
    title: "1. Information om din renovering.",
    text: "Fyll smidigt i information om din renovering i vårt digitala formulär.",
  },
  {
    imgUrl: "/images/standard.png",
    title: "2. Luta dig tillbaka.",
    text: "Låt oss ta fram vad som gäller för just din renovering",
  },
  {
    imgUrl: "/images/checkmark.png",
    title: "3. Renoveta-redo!",
    text: "Allt du behöver veta på en och samma plats",
  },
];

export function getList() {
  return listHowRenovetaWorks;
}
