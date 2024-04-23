module.exports = {
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"  // Jest에서 @testing-library/jest-dom 사용 설정
    ],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
      "^.+\\.css$": "jest-css-modules-transform"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios).+\\.js$"
    ], 
    moduleNameMapper: {
        '^axios$': 'axios/lib/axios.js',
    },
  };