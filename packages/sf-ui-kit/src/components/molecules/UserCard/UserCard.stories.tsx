import { Meta } from '@storybook/react';
import UserCard from '.';
import { StoryHeader, StoryHeading, StoryWrapper } from '../../../utils/stories';

export default {
  title: 'Components/Molecules/UserCard',
  component: UserCard
} as Meta;

export const base = () => (
  <StoryWrapper>
    <StoryHeader name={`UserCard`} />
    <StoryHeading>
      <h2>base</h2>
    </StoryHeading>

    <UserCard
      {...{
        onClickEdit: () => alert('edit'),
        onClickDelete: () => alert('delete'),
        user: {
          avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
          name: 'Jean Rojas',
          createdAt: '2022-01-16T16:28:15.317Z',
          description: 'Senior Full stack Dev'
        }
      }}
    />
  </StoryWrapper>
);
