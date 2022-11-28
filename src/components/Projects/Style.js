import styled from 'styled-components';

export const MainProject = styled.div`
  /* border: 2px solid #e5e7eb; */
  display: grid;
  grid-template-columns: repeat(4,minmax(0,1fr));
  gap: 1rem;
  margin-top: 3em;
  margin-left: 3em;
  margin-right: 3em;
  .redirect {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    .logo {
      border-radius: 15px;
      width: 25em;
    }
  }
`