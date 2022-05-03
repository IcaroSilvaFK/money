import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
`;

export const ContainerForm = styled.div`
  width: 400px;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 40px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  position: relative;
  z-index: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;

    width: 100%;

    div {
      width: 300px;
      flex-shrink: 0;
    }
  }
  .containerForm__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title__svg {
      background: var(--secondary);

      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50px;

      color: #fff;
    }
  }

  a {
    display: block;

    width: 75%;

    text-align: left;

    font-size: 0.8rem;

    span {
      color: var(--primary);

      &:hover {
        text-decoration: underline;
      }
    }
    @media (max-width: 500px) {
      text-align: center;
    }
  }
`;

export const ContainerImage = styled.div`
  height: 100vh;

  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: Center;

  background: RGBA(255, 255, 255, 0.92);

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Button = styled.button.attrs({
  type: "submit",
})`
  padding: 10px;

  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 0.8rem;

  border-radius: 4px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  background: var(--primary);
  color: #fff;

  filter: brightness(1.2);

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }

  margin-top: 10px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    flex-shrink: 0;
    cursor: pointer;
  }
`;
