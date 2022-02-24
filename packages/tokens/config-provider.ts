import type { configProviderProps } from '@ming-guide/components/config-provider';
import type { InjectionKey, ExtractPropTypes, Ref } from 'vue';

export type ConfigProviderContext = ExtractPropTypes<
  typeof configProviderProps
>;

export const configProviderContextKey: InjectionKey<
  Ref<ConfigProviderContext>
> = Symbol();
