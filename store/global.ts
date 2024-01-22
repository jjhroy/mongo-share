import { GLOBAL_STORE } from '~/constant/global';
import { storeToRefs } from 'pinia';

export const globalStore = defineStore(
  GLOBAL_STORE,
  () => {
    const engineKey = ref<'baidu' | 'google' | 'bing'>('baidu');
    const switchEngine = (key: 'baidu' | 'google' | 'bing') => {
      engineKey.value = key;
    };
    return {
      engineKey,
      switchEngine,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);

export const useGlobalStore = () => storeToRefs(globalStore());
