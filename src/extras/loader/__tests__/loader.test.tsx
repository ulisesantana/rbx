import React from "react";
import renderer from "react-test-renderer";

import { Loader } from "../loader";

describe("Box component", () => {
  it("should Exist", () => {
    expect(Loader).toMatchSnapshot();
  });

  it("should have box classname", () => {
    const component = renderer.create(<Loader />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should concat Bulma class with classes in props", () => {
    const component = renderer.create(<Loader className="other-class test" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should render as an html section", () => {
    const component = renderer.create(<Loader<"section"> as="section" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should have custom inline styles", () => {
    const component = renderer.create(
      <Loader<"section"> as="section" style={{ width: 200, zIndex: 1 }} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});