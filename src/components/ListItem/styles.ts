import styled from "styled-components";

export const Container = styled.li`
  width: 36%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 40px;

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
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;

    justify-content: center;
  }
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
