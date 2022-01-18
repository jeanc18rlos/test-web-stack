import { Meta } from '@storybook/react';
import Card from './Card';
import Avatar from '../Avatar';
import { StoryHeader, StoryHeading, StoryWrapper, StoryContainer } from '../../../utils/stories';
import oval from '../../../assets/oval.png';

export default {
  title: 'Components/Atoms/Card',
  component: Card
} as Meta;

const UserCard = () => (
  <Card>
    <Avatar image={oval} alt="Superformula Member" />
    <h2>Jessica may</h2>
    <p>lorem ipsum dolor sit amet</p>
  </Card>
);

export const base = () => (
  <StoryWrapper>
    <StoryHeader name={`Card`} />
    <StoryHeading>
      <h2>Default</h2>
    </StoryHeading>
    <StoryContainer>
      <UserCard />
    </StoryContainer>
  </StoryWrapper>
);

export const grid = () => (
  <StoryWrapper>
    <StoryHeader name={`Card`} />
    <StoryHeading>
      <h2>Default</h2>
    </StoryHeading>
    <StoryContainer>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </StoryContainer>
  </StoryWrapper>
);
