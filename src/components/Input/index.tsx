import { useEffect } from "react";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { toast } from "react-toastify";

import { Container } from "./styles";

interface IInputProps {
  name: string;
  icon?: ReactNode;
  placeholder: string;
  type: string;
}

export function Input({ name, icon, placeholder, type }: IInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    toast.error(errors[name]?.message, {
      position: "top-center",
      draggable: true,
      theme: "light",
    });
  }, [errors[name]?.message]);

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
