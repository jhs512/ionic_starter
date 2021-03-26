import { reactive } from "@vue/reactivity";
import { inject } from "vue";

export const globalStateSymbol = Symbol('globalState');

export const createGlobalState = (): GlobalState => {
  return reactive({
    loginedMember: {
      id:0,
      regDate:"",
      updateDate:"",
    }
  });
};

export const useGlobalState = (): GlobalState => inject(globalStateSymbol) as GlobalState;
