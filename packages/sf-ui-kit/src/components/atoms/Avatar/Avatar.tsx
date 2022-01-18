import { memo } from 'react';
import StyledAvatar from './styled/StyledAvatar';

type AvatarProps = { image: string; alt: string };

const Avatar = ({ image, alt }: AvatarProps) => {
  return (
    <StyledAvatar>
      <img src={image} alt={alt} />
    </StyledAvatar>
  );
};
export default memo(Avatar);
