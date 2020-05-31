import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("expect to render Card compnent", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
