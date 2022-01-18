import styled from 'styled-components';
import { Typography } from '../../../../';

const StyledUserList = styled.section`
  max-width: 1400px;
  margin: auto;
  padding: 16px;
  @media (max-width: 1200px) {
    max-width: 1100px;
  }
  @media (max-width: 1024px) {
    max-width: 960px;
  }

  header {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    ${() =>
      Typography({
        base: 'h2',
        options: {
          weight: 400
        }
      })};
  }
  .load__more {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  main {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    > .user__card {
      margin: 1rem;
    }
  }
`;

export default StyledUserList;
