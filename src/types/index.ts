export interface GlobalState {
  loginedMember: Member;
  authKey: string;
  isLogined: boolean;
  setLogined(authKey: string, member: Member): void;
  setLogouted(): void;
}

export interface Entity {
  id: number;
  regDate: string;
  updateDate: string;
}

export interface Article extends Entity {  
  boardId: number;
  memberId: number;
  title: string;
  body: string;
  extra__writer: string;
}

export interface Member extends Entity {  
	loginId: string;
	authLevel: number;
	name: string;
	nickname: string;
	cellphoneNo: string;
	email: string;
  extra__thumbImg: string;
}
