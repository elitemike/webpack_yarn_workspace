import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia, PLATFORM, LogManager } from 'aurelia-framework';
import { App } from './app';
import { ConfigBuilder } from 'aurelia-syncfusion-ej2-bridge';
import { registerLicense } from '@syncfusion/ej2/base';
import { ConsoleAppender } from "aurelia-logging-console"


bootstrap(async (aurelia: Aurelia) => {


  const logger = LogManager.getLogger("bootstrapper");



  aurelia.use.standardConfiguration().developmentLogging();



  aurelia.use.plugin(PLATFORM.moduleName('@ui/helpers'));
  aurelia.use.plugin(PLATFORM.moduleName("aurelia-syncfusion-ej2-bridge"), (configBuilder: ConfigBuilder) => configBuilder.useDefaults());

  // eslint-disable-next-line no-undef
  const root = document.getElementById('app-host') as Element;

  await aurelia.start();
  logger.debug("I'm now active")
  await aurelia.setRoot(App, root);
});
