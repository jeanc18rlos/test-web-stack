import styled from 'styled-components';
import { Card } from '../../../';

const StyledUserCard = styled(Card)`
  .user__data {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    > h2,
    > p {
      width: fit-content;
    }
    p {
      opacity: 0;
      span {
        color: red;
      }
    }
  }
  &:hover {
    header {
      button {
        opacity: 1;
      }
    }
    .user__data {
      p {
        opacity: 1;
      }
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    > div {
      max-width: fit-content;
    }
  }

  header {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
      padding: 4px;
      margin: 4px;
      transition: opacity 0.25s ease-in-out;
      opacity: 0;
      background: none;
      border: none;
    }
  }
  h2,
  p {
    display: inline;
    width: 100%;
    margin-top: 0;
  }
`;

export default StyledUserCard;
