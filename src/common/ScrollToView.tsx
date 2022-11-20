interface Props {
  ref: HTMLInputElement | null;
}
export function ScrollToView({ ref }: Props) {
  //@ts-ignore
  ref?.current?.scrollIntoView({ block: "center", behavior: "smooth" });
}
