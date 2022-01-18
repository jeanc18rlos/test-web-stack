import { Meta } from '@storybook/react';
import Button from './Button';
import { StoryHeader, StoryHeading, StoryWrapper } from '../../../utils/stories';
import { variants } from './Button';
export default {
  title: 'Components/Atoms/Button',
  component: Button
} as Meta;

export const primary = () => {
  return (
    <StoryWrapper>
      <StoryHeader name={`Button`} />
      <StoryHeading>
        <h2>Primary</h2>
      </StoryHeading>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {Object.keys(variants['primary']).map(key => {
          return (
            <div
              style={{
                padding: '8px'
              }}
              key={`button-${['primary']}-${[key]}`}
            >
              <Button variant={'primary'} className={`${key}`}>
                {key}
              </Button>
            </div>
          );
        })}
      </div>
    </StoryWrapper>
  );
};

export const secondary = () => {
  return (
    <StoryWrapper>
      <StoryHeader name={`Button`} />
      <StoryHeading>
        <h2>secondary</h2>
      </StoryHeading>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {Object.keys(variants['secondary']).map(key => {
          return (
            <div
              style={{
                padding: '8px'
              }}
              key={`button-${['secondary']}-${[key]}`}
            >
              <Button variant={'secondary'} className={`${key}`}>
                {key}
              </Button>
            </div>
          );
        })}
      </div>
    </StoryWrapper>
  );
};
