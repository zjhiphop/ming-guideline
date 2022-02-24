import type { InjectionKey } from 'vue';
import type { BreadcrumbProps } from '@ming-guide/components/breadcrumb';

export const elBreadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('elBreadcrumbKey');
