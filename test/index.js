const assert = require("assert");
const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
  it("returns FizzBuzz when value is devisible by 15", () => {
    assert(fizzbuzz(30) == "FizzBuzz");
  });
  it("returns Buzz when value is devisible by 3", () => {
    assert(fizzbuzz(9) == "Buzz");
  });
  it("returns Fizz when value is devisible by 5", () => {
    assert(fizzbuzz(10) == "Fizz");
  });
  it("returns FizzBuzz when value is not devisible by 7", () => {
    assert(fizzbuzz(7) == "7");
  });
});
