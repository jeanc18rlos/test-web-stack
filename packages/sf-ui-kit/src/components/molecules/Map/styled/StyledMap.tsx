import styled, { StyledProps } from 'styled-components';

type Props = StyledProps<{
  color?: string;
}>;


const StyledMap = styled('div')`
  color: ${({theme, color}: Props) => color ? color : theme.colors.black};
`;

export default StyledMap;
