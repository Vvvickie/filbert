var util = require('./util.js');

describe("Lists", function () {
  it("[1, 2]", function () {
    var code = "\n\
    L = [1, 2]\n\
    return L[1]";
    expect(util.run(code)).toEqual(2);
  });

  it("[x for x in range(4)]", function () {
    var code = "\n\
    L = [x for x in range(4)]\n\
    return L";
    expect(util.run(code)).toEqual([0, 1, 2, 3]);
  });

  it("[x*2 for x in range(4) if x > 1]", function () {
    var code = "\n\
    L = [x*2 for x in range(4) if x > 1]\n\
    return L";
    expect(util.run(code)).toEqual([4, 6]);
  });

  it("[(x*2, y) for x in range(4) if x > 1 for y in range(2)]", function () {
    var code = "\n\
    L = [(x*2, y) for x in range(4) if x > 1 for y in range(2)]\n\
    return L[1]";
    expect(util.run(code)).toEqual([4, 1]);
  });

  it("[x**2 for x in range(10)]", function () {
    var code = "\n\
    L = [x**2 for x in range(10)]\n\
    return L";
    expect(util.run(code)).toEqual([0, 1, 4, 9, 16, 25, 36, 49, 64, 81]);
  });

  it("[(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]", function () {
    var code = "\n\
    L = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]\n\
    return L";
    expect(util.run(code)).toEqual([[1, 3], [1, 4], [2, 3], [2, 1], [2, 4], [3, 1], [3, 4]]);
  });

  it("[x*2 for x in vec]", function () {
    var code = "\n\
    vec = [-4, -2, 0, 2, 4]\n\
    L = [x*2 for x in vec]\n\
    return L";
    expect(util.run(code)).toEqual([-8, -4, 0, 4, 8]);
  });

  it("[abs(x) for x in vec]", function () {
    var code = "\n\
    vec = [-4, -2, 0, 2, 4]\n\
    L = [abs(x) for x in vec]\n\
    return L";
    expect(util.run(code)).toEqual([4, 2, 0 , 2, 4]);
  });

  it("[str(round(pi, i)) for i in range(1, 6)]", function () {
    var code = "\n\
    pi = 3.1415926\n\
    L = [str(round(pi, i)) for i in range(1, 6)]\n\
    return L";
    expect(util.run(code)).toEqual(['3.1', '3.14', '3.142', '3.1416', '3.14159']);
  });

  it("[[row[i] for row in matrix] for i in range(4)]", function () {
    var code = "\n\
    matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12],]\n\
    transpose = [[row[i] for row in matrix] for i in range(4)]\n\
    return transpose";
    expect(util.run(code)).toEqual([[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]);
  });
});