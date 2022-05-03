import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;

  position: relative;
`;

export const Button = styled.button.attrs({
  type: "submit",
})`
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4px;

  background: var(--primary);

  color: #fff;

  filter: brightness(1.2);

  border-radius: 5px;

  margin-top: 10px;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ContainerForm = styled.div`
  height: 100vh;
  width: 400px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 20px;

  position: relative;
  z-index: 1;

  .containerForm__title {
    display: flex;
    flex-direction: column;
    align-items: center;

    .containerForm__svg {
      background: var(--secondary);
      color: #fff;

      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50px;
    }
  }

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;

    div {
      width: 300px;
    }
  }
`;

export const ContainerImage = styled.div`
  flex-grow: 1;

  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: RGBA(255, 255, 255, 0.92);

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Buttonback = styled.button`
  position: fixed;

  top: 1.5rem;
  left: 1.5rem;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50px;

  background: var(--primary);

  color: #fff;
  filter: brightness(1.2);
  z-index: 2;
`;
