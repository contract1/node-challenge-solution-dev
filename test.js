import Jasmine from 'jasmine';
import reporters from 'jasmine-reporters';

const jasmine = new Jasmine();

process.env.TZ = 'Europe/Warsaw';

const junitReporter = new reporters.JUnitXmlReporter({
  savePath: './', // Salva os resultados no diretório atual
  consolidateAll: true,
  filePrefix: 'test-results'
});

jasmine.env.addReporter(junitReporter);

jasmine.loadConfig({
  spec_dir: 'test',
  spec_files: ['**/*[sS]pec.js'],
  random: false,
  seed: null,
  stopSpecOnExpectationFailure: false
});

console.log(`Using Jasmine version: ${jasmine.jasmine.version}`);

jasmine.execute();
