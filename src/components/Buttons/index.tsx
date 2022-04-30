import { ReactNode } from "react";

interface IButtonsProps {
  text: string;
  style: "Primary" | "Secondary" | "Therdiary" | "Outline";
  icon?: ReactNode;
  onClick?: () => void;
}

import { Button } from "./styles";

export function Buttons({ text, style, icon, onClick }: IButtonsProps) {
  return (
    <Button styleComponent={style} onClick={onClick}>
      {icon}
      {text}
    </Button>
  );
}
