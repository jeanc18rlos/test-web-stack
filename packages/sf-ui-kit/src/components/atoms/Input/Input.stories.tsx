import Input from './Input';
import { useState } from 'react';
import { StoryWrapper, StoryHeader, StoryHeading } from '../../../utils/stories';
import { Meta } from '@storybook/react';
export default {
  title: 'Components/atoms/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'Placeholder'
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Label'
    }
  }
} as Meta;

export const normal = ({ placeholder, label }: any) => {
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const [value, setValue] = useState('initialValue');
  return (
    <StoryWrapper>
      <StoryHeader name="Input" />
      <StoryHeading>
        <h2>input</h2>
      </StoryHeading>
      <br />
      <div
        style={{
          width: '100%',
          padding: '20px',
          boxSizing: 'border-box'
        }}
      >
        <Input {...{ value, onChange, placeholder, label }} />
      </div>
    </StoryWrapper>
  );
};

export const search = ({ typeInput, errorMessage, width }: any) => {
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  const [value, setValue] = useState('initialValue');
  return (
    <StoryWrapper>
      <StoryHeader name="Input" />
      <StoryHeading>
        <h2>input</h2>
      </StoryHeading>
      <br />
      <div
        style={{
          width: '100%',
          padding: '20px',
          boxSizing: 'border-box'
        }}
      >
        <Input {...{ value, onChange, placeholder: 'Search...', typeInput, errorMessage, width }} />
      </div>
    </StoryWrapper>
  );
};
