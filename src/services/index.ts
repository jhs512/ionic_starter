import { MainService } from "@/types";
import { inject } from "vue";

export const mainServiceSymbol = Symbol('globalState');

class Singleton {
  static mainService: MainService;
}

export const createMainService = () => {
  if ( Singleton.mainService == null ) {
    Singleton.mainService = new MainService();
  }

  return Singleton.mainService;
};

export const useMainService = (): MainService => inject(mainServiceSymbol) as MainService;

