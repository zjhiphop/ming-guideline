import installer from './defaults';
export * from '@ming-guide/components';
export * from '@ming-guide/directives';
export * from '@ming-guide/hooks';
export * from '@ming-guide/tokens';
export * from '@ming-guide/utils/popup-manager';
export { makeInstaller } from './make-installer';

export const install = installer.install;
export const version = installer.version;
export default installer;
