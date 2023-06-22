import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import { App } from './app';

bootstrap(async (aurelia: Aurelia) => {
  aurelia.use.standardConfiguration().developmentLogging();

  aurelia.use.plugin(PLATFORM.moduleName('@ui/helpers'));

  // eslint-disable-next-line no-undef
  const root = document.getElementById('app-host') as Element;

  await aurelia.start();
  await aurelia.setRoot(App, root);
});
