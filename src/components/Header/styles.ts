import styled from "styled-components";

export const Container = styled.header`
  .logoTitle {
    color: #FFF;
    display: flex;
    align-items: center;
    padding: 10px;

    h4 {
      padding-top: 3px;
      margin: 5px;
    }
  }

  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 10rem;
  display: flex;
  align-items: center;

  justify-content: space-between;

  button{
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;
