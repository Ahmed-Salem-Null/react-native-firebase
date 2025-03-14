module.exports = {
  maxConcurrency: 10,
  preset: './tests/node_modules/react-native/jest-preset.js',
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig-jest.json' }],
  },
  setupFiles: ['./jest.setup.ts'],
  testMatch: ['**/packages/**/__tests__/**/*.test.(ts|js)'],
  modulePaths: ['node_modules', './tests/node_modules'],
  testPathIgnorePatterns: ['./packages/template'],
  moduleDirectories: ['node_modules', './tests/node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@firebase|@react-native(-community)?))',
  ],
};
