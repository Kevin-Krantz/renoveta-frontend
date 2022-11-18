import { useRef } from "react";

export function ScrollToView() {
  const ref = useRef(null);
  //@ts-ignore
  ref.current?.scrollIntoView({ behavior: "smooth" });
}
