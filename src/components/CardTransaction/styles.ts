import styled, { css, keyframes } from "styled-components";

interface IContainerProps {
  type: "whitdraw" | "entry";
}

const entryAnimation = keyframes`
  0%{
    transform: translateX(-150px);
  }
  100%{
    transform: translateX(0);
  }
`;

export const Container = styled.div<IContainerProps>`
  padding: 20px 30px;

  border-radius: 5px;

  color: #fff;

  text-align: center;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  ${(props) =>
    props.type === "whitdraw" &&
    css`
      background: var(--therdiary);
    `}
  ${(props) =>
    props.type === "entry" &&
    css`
      background: var(--secondary);
    `}

    position: relative;

  animation: ${entryAnimation} 0.5s linear alternate;
`;

export const ContainerButtontrash = styled.button`
  position: absolute;

  background: transparent;

  top: 0;
  right: 0;

  color: #fff;
`;
