module.exports = {
  extends: ['plugin:astro/recommended, plugin:astro/jsx-a11y-recommended'],
  overrides: [
    {
      // Define the configuration for `.astro` files.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
  ],
};
