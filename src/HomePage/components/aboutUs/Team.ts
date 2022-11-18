import { IMember } from "../../../types/Member";

const team: IMember[] = [
  {
    imgUrl: "/images/profileImages/Linus.profilbild.png",
    name: "Linus Tublén",
    position: "Grundare",
    job: "Entreprenör/Projektledare",
    right: false,
  },
  {
    imgUrl: "/images/profileImages/Elin.profilbild.png",
    name: "Elin Werme",
    position: "Grundare",
    job: "Byggingenjör/Projektledare",
    right: true,
  },
  {
    imgUrl: "/images/profileImages/Sofia.profilbild.png",
    name: "Sofia Rosenberg",
    position: "Projektkoordinator",
    job: "Maskiningenjör produktutveckling",
    right: false,
  },
  {
    imgUrl: "/images/profileImages/Max.profilbild.png",
    name: "Maximillian Leiding",
    position: "Designer och marknadsförare",
    job: "Grafisk designer",
    right: true,
  },
];

export function getMembers() {
  return team;
}
