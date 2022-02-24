import { ElInfiniteScroll } from '@ming-guide/components/infinite-scroll';
import { ElLoading } from '@ming-guide/components/loading';
import { ElMessage } from '@ming-guide/components/message';
import { ElMessageBox } from '@ming-guide/components/message-box';
import { ElNotification } from '@ming-guide/components/notification';
import { ElPopoverDirective } from '@ming-guide/components/popover';

import type { Plugin } from 'vue';

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[];
