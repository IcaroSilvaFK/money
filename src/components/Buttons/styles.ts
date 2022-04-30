import styled, { css } from "styled-components";

interface ButtonProps {
  styleComponent: "Primary" | "Secondary" | "Therdiary" | "Outline";
}

export const Button = styled.button<ButtonProps>`
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  justify-content: Center;

  ${(props) =>
    props.styleComponent === "Primary" &&
    css`
      filter: brightness(1.4);
      background: var(--primary);
      color: #fff;

      width: 190px;
      height: 40px;

      border-radius: 3px;
    `}
  ${(props) =>
    props.styleComponent === "Secondary" &&
    css`
      background: var(--secondary);

      color: #fff;

      width: 200px;
      height: 50px;
      border-radius: 3px;

      box-shadow: 2px 2px 10px rgba(51, 204, 149, 0.3);
    `}
  ${(props) =>
    props.styleComponent === "Therdiary" &&
    css`
      background: var(--therdiary);
      color: #fff;

      width: 200px;
      height: 50px;
      border-radius: 3px;

      box-shadow: 2px 2px 10px rgba(229, 46, 77, 0.3);
    `}
  ${(props) =>
    props.styleComponent === "Outline" &&
    css`
      background: transparent;
      outline: 1px solid var(--primary);

      color: var(--primary);

      width: 190px;
      height: 30px;

      border-radius: 3px;
    `}
`;
