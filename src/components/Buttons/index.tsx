interface IButtonsProps {
  text: string;
  style: "Primary" | "Secondary" | "Therdiary" | "Outline";
}

import { Button } from "./styles";

export function Buttons({ text, style }: IButtonsProps) {
  return <Button styleComponent={style}>{text}</Button>;
}
