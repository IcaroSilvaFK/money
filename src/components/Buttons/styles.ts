import styled, { css } from "styled-components";

interface ButtonProps {
  styleComponent: "Primary" | "Secondary" | "Therdiary" | "Outline";
}

export const Button = styled.button<ButtonProps>`
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;

  ${(props) =>
    props.styleComponent === "Primary" &&
    css`
      background: var(--primary);
      color: #fff;

      &:hover {
        filter: brightness(0.5);
      }
    `}
`;
