import { Member } from "@/types";
import { inject } from "vue";
import { getMainApi, MainApi } from "@/apis"

export class MainService {
  private mainApi: MainApi;

  constructor() {
    this.mainApi = getMainApi();
  }

  /* eslint-disable @typescript-eslint/camelcase */
  member_authKey(loginId: string, loginPw: string) {
    return this.mainApi.member_authKey(loginId, loginPw);
  }

  getMemberThumbImgUrl(member: Member) {
    return "https://i.pravatar.cc/45?img=13&k=" + member.id
  }
}

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

