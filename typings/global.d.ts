// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    ElAlert: typeof import('ming-guide')['ElAlert'];
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $alert: typeof import('ming-guide')['ElMessageBox']['alert'];
  }
}

export {};
