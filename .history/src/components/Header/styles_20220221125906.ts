import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--roxo);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 11rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size:  1rem;
    color: #fff;
    background: var(--roxo-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    &:hover {
      filter:brightness(0.9)
    }
  }
`;
