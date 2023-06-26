import { LogManager } from "aurelia-framework";
import { Logger } from "aurelia-logging";

const logger: Logger = LogManager.getLogger("App");
export class App {
  public message = 'Hello World!';
  counter = 0;

  attached() {
    logger.debug("attached");
  }

  onButtonClick() {
    this.counter++;
  }
}
