import styled from "styled-components";

 export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.5rem ;
  }
 `;