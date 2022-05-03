import styled, { css, keyframes } from "styled-components";

interface IContainerProps {
  type: "whitdraw" | "entry";
}

interface IButtonProp {
  typeTransaction: "whitdraw" | "entry";
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
  display: flex;
  flex-direction: column;
  gap: 15px;

  border-radius: 5px;

  color: #fff;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  padding: 10px;

  max-width: 500px;

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
  label {
    font-size: 1rem;
  }

  .return {
    position: absolute;

    top: -10px;
    right: -10px;

    padding: 5px;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #fff;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const ContainerButtontrash = styled.button`
  background: transparent;

  top: 0;
  right: 0;

  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.2);

  padding: 15px 10px;

  border-radius: 4px;

  strong {
    font-size: 1.2rem;
    text-align: center;
    padding: 3px 15px;
  }
`;

export const Body = styled.div`
  background: rgba(255, 255, 255, 0.2);

  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    text-align: center;
    font-size: 1.2rem;
    padding: 3px 15px;
  }

  padding: 15px 10px;

  max-height: 300px;

  overflow-y: auto;

  word-wrap: break-word;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #eeee;

    border-radius: 5px;
  }
`;

export const ButtonDelete = styled.button<IButtonProp>`
  background: #f56565;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;
  margin: auto;

  color: #fff;
  padding: 8px;
  border-radius: 5px;

  gap: 5px;

  ${(props) =>
    props.typeTransaction === "entry" &&
    css`
      background: var(--secondary);
      filter: brightness(1.1);
    `}
`;

export const Separator = styled.div`
  width: 1.2px;
  height: 15px;

  background: #fff;

  border-radius: 5px;
`;
