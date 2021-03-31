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

  /* eslint-disable @typescript-eslint/camelcase */
  article_list(boardId: number) {
    return this.mainApi.article_list(boardId);
  }

  /* eslint-disable @typescript-eslint/no-inferrable-types */
  getMemberThumbImgUrl(id: number, width: number = 40, height: number = 40) {

    const originUrl = 'http://localhost:8021/common/genFile/file/member/' + id + '/common/attachment/1';
    const url = `http://localhost:8085/img?failWidth=${width}&failHeight=${height}&failText=U.U&width=${width}&height=${height}&url=` + originUrl;
    return url;
  }

  /* eslint-disable @typescript-eslint/no-inferrable-types */
  getArticleThumbImgUrl(id: number, width: number = 100, height: number = 100) {
    const originUrl = 'http://localhost:8021/common/genFile/file/article/' + id + '/common/attachment/1';
    const url = `http://localhost:8085/img?failWidth=${width}&failHeight=${height}&failText=U.U&width=${width}&height=${height}&url=` + originUrl;
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

