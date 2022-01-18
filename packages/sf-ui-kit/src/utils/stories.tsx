import styled from 'styled-components';
import { rem } from 'polished';

// Images
import logo from '../assets/superformula.png';
import { FC, HTMLProps, ReactNode } from 'react';

const StyledStoryHeading = styled.div`
  width: 100%;
  max-width: 85vw;
  margin: 2.5rem auto;
  text-transform: capitalize;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    color: ${({ theme }) => theme.colors.black};
    @media screen and (max-width: ${rem('768px')}) {
      font-size: ${rem('20px')};
    }
  }
  hr {
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

export const StoryContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  > * {
    margin: 1rem;
  }
`;
export const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  align-items: center;

  th,
  td {
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    padding: 0.5em 1em;
  }
`;

export const ComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: 'row';
`;

const StyledStoryHeader = styled.div`
  margin: ${rem('8px')};
  width: calc(100% - ${rem('16px')});
  background: transparent;
  display: flex;
  justify-content: space-between;
  padding: 0 ${rem('50px')};
  border-radius: ${rem('8px')} ${rem('8px')} 0 0;
  position: relative;
  &::before {
    content: '';
    z-index: -1;
    border-top: 88px solid #18181a;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    height: 0;
    background: transparent;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    max-width: 100%;
    box-sizing: border-box;
    filter: drop-shadow(2px 2px 2px black);
  }
  img {
    position: absolute;
    right: 0;
    width: 125px;
    filter: drop-shadow(2px 4px 6px black);
  }
  box-sizing: border-box;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: ${({ theme }) => theme.fonts.primaryFont};
  }
  @media screen and (max-width: ${rem('768px')}) {
    &::before {
    content: '';
    z-index: -1;
    border-top: 50px solid #18181a;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

  }
    h1 {
      font-size: ${rem('20px')};
    }
    img {
      width: ${rem('70px')};
    }
  }
`;

export const StoryHeading: FC<HTMLProps<ReactNode>> = ({ children }) => (
  <StyledStoryHeading>
    {children}
    <hr />
  </StyledStoryHeading>
);

export const StoryHeader: FC<HTMLProps<ReactNode> & { name: string }> = ({ name }) => (
  <StyledStoryHeader>
    <h1>{name}</h1>
    <img src={logo} />
  </StyledStoryHeader>
);
