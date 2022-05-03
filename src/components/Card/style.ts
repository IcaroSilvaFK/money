import styled, { css } from "styled-components";

interface ICardProps {
  typeTransaction: "whitdraw" | "entry";
}

interface ICardTypes {
  typeTransaction: "whitdraw" | "entry" | "result";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  color: var(--gray-700);

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  border-radius: 5px;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    width: 100%;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

export const Header = styled.div<ICardTypes>`
  color: #fff;

  padding: 20px 80px;

  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.typeTransaction === "whitdraw" &&
    css`
      background: var(--therdiary);
    `}

  ${(props) =>
    props.typeTransaction === "entry" &&
    css`
      background: var(--secondary);
    `}
    ${(props) =>
    props.typeTransaction === "result" &&
    css`
      &.positive {
        background: var(--secondary);
      }
      &.negative {
        background: var(--therdiary);
      }
    `}
`;

export const Body = styled.div<ICardTypes>`
  text-align: center;

  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  ${(props) =>
    props.typeTransaction === "whitdraw" &&
    css`
      color: var(--therdiary);
    `}
  ${(props) =>
    props.typeTransaction === "entry" &&
    css`
      color: var(--secondary);
    `}
  ${(props) =>
    props.typeTransaction === "result" &&
    css`
      span {
        &.positive {
          color: var(--secondary);
        }
        &.negative {
          color: var(--therdiary);
        }
      }
    `}
`;
