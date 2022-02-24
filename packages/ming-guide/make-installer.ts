import { watch, unref } from 'vue';
import { provideGlobalConfig } from '@ming-guide/hooks';
import { isNumber } from '@ming-guide/utils/util';
import { PopupManager } from '@ming-guide/utils/popup-manager';
import { version } from './version';
import type { App, Plugin } from 'vue';
import type { ConfigProviderContext } from '@ming-guide/tokens';

const INSTALLED_KEY = Symbol('INSTALLED_KEY');

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options: ConfigProviderContext = {}) => {
    if (app[INSTALLED_KEY]) return;

    app[INSTALLED_KEY] = true;
    components.forEach((c) => app.use(c));
    provideGlobalConfig(options, app);

    watch(
      () => unref(options).zIndex,
      () => {
        const zIndex = unref(options).zIndex;
        if (isNumber(zIndex)) PopupManager.globalInitialZIndex = zIndex;
      },
      { immediate: true }
    );
  };

  return {
    version,
    install,
  };
};
