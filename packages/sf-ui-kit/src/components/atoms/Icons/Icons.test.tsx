

import { themed } from '../../../utils/themed';
import Icons from '.';

describe('Icons', () => {
  it('should render correctly', () => {
    const component = themed(
      <Icons.outlined.Eraser
        {...{
          width: '25px',
          fill: 'gray'
        }}
      />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
