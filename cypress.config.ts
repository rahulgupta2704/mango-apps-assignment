import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    browserify(config, {
      typescript: require.resolve('typescript'),
    })
  );

  return config;
}

export default defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: ['**/*.feature', '**.cy.ts'],
    baseUrl: 'https://siddasia.mangoapps.com',
    env: {
      username: 'maassignment@yopmail.com',
      password: 'temp123'
    }
  },
});
