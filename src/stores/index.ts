import { GlobalState } from '@/types'
import { reactive } from "@vue/reactivity";
import { computed, inject } from "vue";

export const globalStateSymbol = Symbol('globalState');

class Singleton {
  static globalState: GlobalState;
}

export const createGlobalState = () => {
  if ( Singleton.globalState == null ) {
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

    Singleton.globalState = globalState;
  }

  return Singleton.globalState;
};

export const useGlobalState = (): GlobalState => inject(globalStateSymbol) as GlobalState;
export const useGlobalStateOnOutsideOfVue = createGlobalState;
