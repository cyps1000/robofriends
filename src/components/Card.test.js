import React from "react";
import { shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";
import Card from "./Card";

it("expect to render Card Component", () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});
