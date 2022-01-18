import {themed} from "../../../utils/themed";
import Avatar from ".";
import oval from '../../../assets/oval.png';

describe("Avatar", () => {
  it("should render correctly", () => {
    const component = themed(
      <Avatar image={oval} alt="Superformula Member" />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
