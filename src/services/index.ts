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
    const originUrl = 'http://localhost:8021/common/genFile/file/member/' + member.id + '/common/attachment/1';
    const url = 'http://localhost:8085/img?failWidth=40&failHeight=40&failText=U.U&width=40&height=40&url=' + originUrl;
    return url;
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

