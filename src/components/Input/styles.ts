import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  border: 1px solid var(--gray-700);

  padding: 5px;

  border-radius: 4px;

  display: flex;
  align-items: center;
  gap: 4px;

  input {
    width: 100%;
    padding: 5px;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
