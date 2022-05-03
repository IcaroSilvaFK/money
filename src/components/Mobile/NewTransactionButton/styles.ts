import styled, { keyframes } from "styled-components";

export const Container = styled.button`
  display: none;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;

    position: fixed;

    top: 1rem;
    right: 1rem;

    border-radius: 50px;

    background: var(--primary);

    color: #fff;

    filter: brightness(1.6);
  }
`;
