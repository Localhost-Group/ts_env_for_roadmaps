import generateHuman from "./generateHuman";


describe("GenerateHuman", () => {
  describe("create valid human", () => {
    test("rectangular triangle can be build", () => {
      // Arrange

      // Act
      const human = generateHuman();

      // Assert
      expect(human).toBeDefined();
    });
  });
});
