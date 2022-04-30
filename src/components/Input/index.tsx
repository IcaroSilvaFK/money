import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Container } from "./styles";

interface IInputProps {
  name: string;
  icon?: ReactNode;
  placeholder: string;
  type: string;
}

export function Input({ name, icon, placeholder, type }: IInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Container>
          {icon}
          <input type={type} placeholder={placeholder} {...field} />
        </Container>
      )}
    />
  );
}
