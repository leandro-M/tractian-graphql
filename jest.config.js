module.exports = {
  roots: ["./src"],
  modulePathIgnorePatterns: ["mocks"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};