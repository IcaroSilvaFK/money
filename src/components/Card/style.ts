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
`;

export const Header = styled.div<ICardProps>`
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
        &.postive {
          color: var(--secondary);
        }
        &.negative {
          color: var(--therdiary);
        }
      }
    `}
`;
