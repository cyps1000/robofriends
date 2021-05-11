import React from "react";
import { shallow, mount, render } from "enzyme";
import renderer from "react-test-renderer";
import CardList from "./CardList";

it("expect to render Card Component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "Jon Snow",
      userName: "jonJon",
      email: "jon@nightwatch.com",
    },
  ];
  const tree = renderer.create(<CardList robots={mockRobots} />).toJSON();
  expect(tree).toMatchSnapshot();
});
