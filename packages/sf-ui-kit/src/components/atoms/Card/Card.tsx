import { HTMLAttributes, memo } from 'react';
import StyledCard from './styled/StyledCard';
type CardProps = { children: React.ReactNode };

const Card = ({ children, ...rest }: CardProps & HTMLAttributes<HTMLElement>) => (
  <StyledCard {...rest}>{children}</StyledCard>
);

export default memo(Card);
