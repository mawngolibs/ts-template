import { hello } from "../src";

describe("hello(name)", () => {
  it("should generate 'Hello {name}!'", () => {
    const greet = hello("World");
    expect(greet).toEqual("Hello World!");
  });
});
