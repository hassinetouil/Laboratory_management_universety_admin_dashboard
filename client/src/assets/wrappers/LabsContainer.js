import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .labs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  @media (min-width: 720px){
    .labs {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
  @media (min-width: 1248px){
    .labs {
      display: grid;
      grid-template-columns: 1fr 1fr  ;
      gap: 1rem;
    }
  }
  @media (min-width: 1578px) {
    .labs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr  ;
      gap: 1rem;
    }
  }
`
export default Wrapper
