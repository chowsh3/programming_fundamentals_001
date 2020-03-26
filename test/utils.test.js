const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
  
  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns 50 when passed 100", () => {
    expect(utils.makeHalfPrice(100)).toBe(50);
  });
});

describe("utils.countBooks", () => {
  test("returns total number of books",() => {
    expect(utils.countBooks(["1", "2", "3"])).toBe(3);
  });
});


describe("utils.isInStock", () => {
  test("returns false if is in stock", () => {
  const book = {
    title: "Crushing It",
    author: "Gary Vaynerchuk",
    yearOfPublication: 2018,
    quantity: 10
  };
    expect(utils.isInStock(book)).toBe(true);
 });
});

describe("utils.getTotalOrderPrice", () => {
  test("returns total order price", () => {
    expect(utils.getTotalOrderPrice(8,10)).toBe(96);
  });
});