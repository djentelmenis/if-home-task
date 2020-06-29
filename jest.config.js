module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'app/src/**/*.{js,jsx}',
    '!node_modules/**',
    '!dist/**',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['<rootDir>/**/*.test.js?(x)'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFiles: ['<rootDir>/__tests__/config.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
};
