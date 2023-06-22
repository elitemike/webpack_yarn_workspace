import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import { NameCard } from './nameCard';


export function configure(config: FrameworkConfiguration): void {
    config.globalResources([NameCard]);

    config.aurelia.use.plugin(PLATFORM.moduleName('@common/ui'));
}
