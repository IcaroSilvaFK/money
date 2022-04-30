import { ReactNode } from "react";

interface IButtonsProps {
  text: string;
  style: "Primary" | "Secondary" | "Therdiary" | "Outline";
  icon?: ReactNode;
}

import { Button } from "./styles";

export function Buttons({ text, style, icon }: IButtonsProps) {
  return (
    <Button styleComponent={style}>
      {icon}
      {text}
    </Button>
  );
}
