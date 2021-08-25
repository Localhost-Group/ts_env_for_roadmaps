import includes from './includes';

describe("Includes", () => {
  describe("value to find is in array", () => {
    test("find value", () => {
      // Arrange
      const valueToFindInArray = 4;
      const arrayWithValueToFind = [1, 2, 3, 4];
      const startIndex = 0;

      // Act
      const result = includes(
        arrayWithValueToFind,
        valueToFindInArray,
        startIndex
      );

      // Assert
      expect(result).toBeTruthy();
    });
  });
});
