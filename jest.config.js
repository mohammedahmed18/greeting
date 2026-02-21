export default {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'esbuild-jest',
  },
  testEnvironment: 'jsdom', // or 'node' depending on your project
setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 

};
