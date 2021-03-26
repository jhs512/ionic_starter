import { GlobalState } from '@/types'
import { reactive } from "@vue/reactivity";
import { computed, inject } from "vue";

export const globalStateSymbol = Symbol('globalState');

export const createGlobalState = () => {
  const globalState: GlobalState = reactive({
    loginedMember: {
      id:0,
      regDate:"",
      updateDate:"",
      authLevel:0,
      cellphoneNo:"",
      email:"",
      /* eslint-disable @typescript-eslint/camelcase */
      extra__thumbImg:"",
      loginId:"",
      name:"",
      nickname:""
    },
    isLogined: computed(() => globalState.loginedMember.id != 0)
  });

  return globalState;
};

export const useGlobalState = (): GlobalState => inject(globalStateSymbol) as GlobalState;
