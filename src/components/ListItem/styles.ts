import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 40px;

  border-bottom: 1px solid var(--gray-700);

  padding: 10px;

  div {
    display: flex;
    align-items: center;

    gap: 10px;

    text-align: center;

    button {
      background: transparent;

      &.entry {
        color: var(--secondary);
      }
      &.whitdraw {
        color: var(--therdiary);
      }
    }
  }

  strong,
  span {
    display: flex;
    align-items: center;

    gap: 2px;

    &.entry {
      color: var(--secondary);
    }
    &.whitdraw {
      color: var(--therdiary);
    }
  }
`;
