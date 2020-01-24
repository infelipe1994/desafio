module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
}
