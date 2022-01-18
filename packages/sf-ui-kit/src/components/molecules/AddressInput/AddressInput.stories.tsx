import { Meta } from '@storybook/react';
import AddressInput from '.';
import { StoryHeader, StoryHeading, StoryWrapper } from '../../../utils/stories';

export default {
  title: 'Components/Molecules/AddressInput',
  component: AddressInput
} as Meta;

export const base = () => (
  <StoryWrapper>
    <StoryHeader name={`AddressInput`} />
    <StoryHeading>
      <h2>base</h2>
    </StoryHeading>

    <AddressInput
      {...{
        accessToken: process.env.STORYBOOK_MAPBOX_API_KEY || ''
      }}
    />
  </StoryWrapper>
);
