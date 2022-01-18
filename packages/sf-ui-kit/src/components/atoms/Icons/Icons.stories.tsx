import { Meta } from '@storybook/react';
import icons from '.';
import { StoryHeader, StoryHeading, StoryWrapper, StoryContainer } from '../../../utils/stories';
import React from 'react';
import styled from 'styled-components';
export default {
  title: 'Components/Atoms/Icons'
} as Meta;

const IconWraper = styled.div`
  display: flex;
  margin: auto;
  max-width: 80vw;
  width: 100%;
  flex-direction: column;
  text-align: left;
  font-family: 'Roboto';
  justify-content: center;
  align-items: center;
  .icons {
    display: flex;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
    button {
      padding: 10px 8px;
      display: flex;
      border: none;
      border-radius: 6px;
    }
    > div {
      min-width: 100px;
      min-height: 100px;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      border: solid 1px #c6c6c6;
      background: #ededed;
      border-radius: 0;
      box-shadow: 0px 0px 8px 0px #0000003b;
      align-items: center;
      margin: 8px;
      flex-direction: column-reverse;
      span {
        width: 100%;
        background: white;
        padding: 8px;
        box-sizing: border-box;
        text-align: center;
        justify-content: center;
      }
      svg {
        width: 50px;
        height: 50px;
        padding: 5px 16px;
      }
    }
  }
`;

const Wrapper = ({ children, name }: any) => (
  <IconWraper>
    <div className="icons">{children}</div>
  </IconWraper>
);

export const outline = () => (
  <StoryWrapper>
    <StoryHeader name={`Icons`} />
    <StoryHeading>
      <h2>Outlined</h2>
    </StoryHeading>
    <StoryContainer>
      <Wrapper name="Gray Outline">
        {Object.keys(icons.outlined).map(key => (
          <div>
            <span>{key}</span>
            {React.createElement(icons.outlined[key], {
              width: '50px',
              fill: 'gray'
            })}
          </div>
        ))}
      </Wrapper>
    </StoryContainer>
  </StoryWrapper>
);
