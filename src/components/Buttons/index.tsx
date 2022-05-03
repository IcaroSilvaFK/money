import { ReactNode } from "react";

interface IButtonsProps {
  text: string;
  style: "Primary" | "Secondary" | "Therdiary" | "Outline";
  icon?: ReactNode;
  onClick?: () => void;
  active?: string;
}

import { Button } from "./styles";

export function Buttons({ text, style, icon, onClick, active }: IButtonsProps) {
  return (
    <Button styleComponent={style} onClick={onClick} className={active}>
      {icon}
      {text}
    </Button>
  );
}
