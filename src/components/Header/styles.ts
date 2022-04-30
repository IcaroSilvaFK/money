import styled from "styled-components";

export const Container = styled.header`
  background: var(--primary);

  display: flex;
  justify-content: space-between;

  padding: 40px 70px 80px;

  color: #fff;

  div {
    display: flex;
    align-items: center;
    gap: 5px;

    h2 {
      font-weight: 300;
      font-size: 1.2rem;
    }
  }
`;
