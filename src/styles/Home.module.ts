import styled from "styled-components";

export const Container = styled.div``;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin-top: -50px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;

    padding: 10px;
  }
`;

export const Text = styled.span`
  display: block;

  font-size: 1.2rem;

  margin-top: 20px;
  text-align: center;
`;

export const Ul = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 10px;

  margin-top: 20px;

  padding: 0 50px;

  li:nth-child(even) {
    background: #edf2f7;
  }

  @media (max-width: 500px) {
    padding: 10px;

    li:nth-child(even) {
      background: #cbd5e0;
    }
  }
`;
