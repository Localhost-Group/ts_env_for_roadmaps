import isRectangularTriangle from "./isRectangularTriangle";

describe("IsRectangularTriangle", () => {
  describe("from arguments", () => {
    test("rectangular triangle can be build", () => {
      // Arrange
      const a = 3;
      const b = 4;
      const c = 5;
      
      // Act
      const result = isRectangularTriangle(a, b, c);

      // Assert
      expect(result).toBeTruthy();
    });
  });
});
