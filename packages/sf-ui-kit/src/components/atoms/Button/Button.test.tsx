

import { themed } from '../../../utils/themed';
import Button from '.';

describe('Button', () => {
  it('should render correctly', () => {
    const component = themed(<Button variant={'primary'}>hello</Button>).toJSON();

    expect(component).toMatchSnapshot();
  });
});
