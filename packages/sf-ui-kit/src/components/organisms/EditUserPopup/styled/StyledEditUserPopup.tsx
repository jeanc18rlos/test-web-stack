import styled from 'styled-components';

const StyledEditUserPopup = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    > div {
      width: 100%;
    }
  }
  .react-geocoder {
    position: relative;
  }
  .react-geocoder-results {
    position: absolute;
    background: white;
  }
  .react-geocoder-item {
    padding-bottom: 7px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .button__group {
    display: flex;
    flex-direction: row;
    > button {
      margin: 8px;
    }
  }
  .map {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
      margin-right: 0;
      margin-bottom: 8px;
    }
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

export default StyledEditUserPopup;
