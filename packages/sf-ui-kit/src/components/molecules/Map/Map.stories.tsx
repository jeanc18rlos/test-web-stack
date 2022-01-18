import { Meta } from '@storybook/react';
import Map from '.';
import { StoryHeader, StoryHeading, StoryWrapper } from '../../../utils/stories';

export default {
  title: 'Components/molecules/Map',
  component: Map
} as Meta;

export const base = () => (
  <StoryWrapper>
    <StoryHeader name={`Map`} />
    <StoryHeading>
      <h2>base</h2>
    </StoryHeading>

    <Map
      {...{
        coordinates: [-73.58781, 45.50884],
        accessToken: process.env.STORYBOOK_MAPBOX_API_KEY || ''
      }}
    />
  </StoryWrapper>
);
