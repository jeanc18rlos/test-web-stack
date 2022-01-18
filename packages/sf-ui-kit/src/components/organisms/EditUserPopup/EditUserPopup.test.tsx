import * as React from "react";

import {themed} from "../../../utils/themed";
import EditUserPopup from ".";

describe("EditUserPopup", () => {
  it("should render correctly", () => {
    const component = themed(
      <EditUserPopup>
        Test
      </EditUserPopup>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
