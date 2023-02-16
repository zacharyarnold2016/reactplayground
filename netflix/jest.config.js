module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  coveragePathIgnorePatterns: [
    "<rootDir>/src/redux/films/api",
    "<rootDir>/src/redux/store.ts",
    "<rootDir>/src/router/router.tsx",
    "<rootDir>/src/components/err",
    "<rootDir>/src/index.tsx",
    "<rootDir>/src/components/lib",
  ],
};
