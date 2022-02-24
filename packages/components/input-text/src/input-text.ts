import { TypeComponentsMap } from '@ming-guide/utils/icon';
import { buildProps, keyOf } from '@ming-guide/utils/props';
import type { ExtractPropTypes } from 'vue';
import type InputText from './input-text.vue';

export const inputEffects = ['light', 'dark'] as const;

export const inputProps = buildProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
} as const);

export type InputTextProps = ExtractPropTypes<typeof inputProps>;
export type InputTextInstance = InstanceType<typeof InputText>;
