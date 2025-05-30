module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    '\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle image imports
    '\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
    // Handle module aliases (if any, e.g., @/components/*)
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
  },
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\.module\.(css|sass|scss)$',
  ],
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!babel.config.js',
    '!next.config.js',
    '!**/__mocks__/**',
    '!**/vendor/**',
    '!app/layout.js', // Exclude layout file for now
    '!app/page.jsx', // Exclude main page for now
  ],
  coverageThreshold: {
    global: {
      branches: 5,  // Start with low thresholds
      functions: 5,
      lines: 5,
      statements: 5,
    },
  },
};
