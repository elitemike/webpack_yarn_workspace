import { FrameworkConfiguration } from 'aurelia-framework';
import { BorderBox } from './borderBox';

export function configure(config: FrameworkConfiguration): void {
    config.globalResources([BorderBox]);
}
