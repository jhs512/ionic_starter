export interface GlobalState {
  loginedMember:Member;
  isLogined: boolean;
}

export interface Entity {
  id:number;
  regDate:string;
  updateDate:string;
}

export interface Article extends Entity {  
  boardId:number;
  memberId:number;
  title:string;
  body:string;
  extra__writer:string;
}

export interface Member extends Entity {  
	loginId:string;
	authLevel:number;
	name:string;
	nickname:string;
	cellphoneNo:string;
	email:string;
  extra__thumbImg:string;
}
