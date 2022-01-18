import Avatar from '.';
import oval from '../../../assets/oval.png';
import { StoryHeader, StoryHeading, StoryWrapper } from '../../../utils/stories';

export default {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
  argTypes: {
    alt: {
      control: { type: 'text' },
      defaultValue: 'Superformula Member'
    },
    image: {
      options: [
        oval,
        'https://randomuser.me/api/portraits/men/12.jpg',
        'https://randomuser.me/api/portraits/women/17.jpg'
      ],
      control: { type: 'radio' },
      defaultValue: oval
    }
  }
};

export const base = ({ alt, image }: { alt: string; image: string }) => {
  return (
    <StoryWrapper>
      <StoryHeader name={`Avatar`} />
      <StoryHeading>
        <h2>Base</h2>
      </StoryHeading>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <Avatar image={image} alt={alt} />
      </div>
    </StoryWrapper>
  );
};
