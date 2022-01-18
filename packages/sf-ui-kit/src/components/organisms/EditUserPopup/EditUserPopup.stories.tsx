import { Meta } from '@storybook/react';
import EditUserPopup from '.';
import { StoryHeader, StoryHeading, StoryWrapper } from '../../../utils/stories';

export default {
  title: 'Components/Organisms/EditUserPopup',
  component: EditUserPopup
} as Meta;

export const base = () => (
  <StoryWrapper>
    <StoryHeader name={`EditUserPopup`} />
    <StoryHeading>
      <h2>base</h2>
    </StoryHeading>

    <EditUserPopup
      {...{
        coordinates: [-73.58781, 45.50884],
        isOpen: true,
        onClose: () => alert('close'),
        onChange: () => alert('change'),
        onSave: () => alert('save'),
        onCancel: () => alert('cancel'),
        accessToken: process.env.STORYBOOK_MAPBOX_API_KEY || '',
        selectedUser: {
          name: 'Jean Rojas',
          address: 'San Francisco, California',
          description: 'Tech Lead'
        }
      }}
    >
      hello world
    </EditUserPopup>
  </StoryWrapper>
);
