import * as React from "react";

import {themed} from "../../../utils/themed";
import AddressInput from ".";

describe("AddressInput", () => {
  it("should render correctly", () => {
    const component = themed(
      <AddressInput>
        Test
      </AddressInput>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
