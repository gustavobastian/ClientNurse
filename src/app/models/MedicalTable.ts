export class MedicalTable{
    private _username: string;    
    private _userID: number;
    constructor(username: string, userID: number)
    {
        this._username= username;
        this._userID= userID;    
    }
    public get username(): string{
        return this._username;
    }
    public get userID(): number{
        return this._userID;
    }
    public set username(username: string){
        this._username= username;
    }
    public set userID(userID: number){
        this._userID= userID;
    }

}