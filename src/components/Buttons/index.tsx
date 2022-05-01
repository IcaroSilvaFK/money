import { ReactNode } from "react";

interface IButtonsProps {
  text: string;
  style: "Primary" | "Secondary" | "Therdiary" | "Outline";
  icon?: ReactNode;
  onClick?: () => void;
  type?: string;
}

import { Button } from "./styles";

export function Buttons({ text, style, icon, onClick, type }: IButtonsProps) {
  return (
    <Button styleComponent={style} onClick={onClick}>
      {icon}
      {text}
    </Button>
  );
}
