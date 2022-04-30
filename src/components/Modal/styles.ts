import { BsTypeBold } from "react-icons/bs";
import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #fff;

  border-radius: 5px;

  display: flex;
  flex-direction: column;

  gap: 10px;

  .containerButton {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 15px;
  }

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  position: relative;
`;

export const Title = styled.div`
  background: var(--primary);
  color: #fff;

  padding: 20px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  h2 {
    text-align: left;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  padding: 20px;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
`;

export const CloseContainer = styled.button`
  position: absolute;

  right: -5px;
  top: -5px;

  background: var(--therdiary);

  padding: 5px;

  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.3s;

  color: #fff;

  &:hover {
    transform: scale(1.1);
  }
`;