export class User{
    private _userId: number;
    private _username: string;
    private _firstName: string;
    private _lastName: string;
    private _occupation: string;
    private _state: number;
    private _password: string;

    constructor(userId: number, username: string, firstName: string, lastName: string, occupation: string, state: number, password: string){
        this._userId = userId;
        this._username = username;
        this._firstName= firstName;
        this._lastName= lastName;
        this._occupation= occupation;
        this._state = state;
        this._password=password;
    }

    public set userId(value: number){
        this._userId=value;        
    }
    public set username(value: string){
        this._username= value;
    }
    public set firstName(value: string){
        this._firstName= value;
    }
    public set lastName (value: string){
        this._lastName= value;
    }
    public set occupation(value: string){
        this._occupation= value;
    }
    public set state(state: number){
        this._state= state;
    }
    public set password(password: string ){
        this._password = password;
    }


    public get userId(): number{
       return this._userId;
    }
    public get username(): string{
       return this._username;
    }
    public get firstName():string{
        return this._firstName;
    }
    public get lastName(): string{
        return this._lastName;
    }
    public get occupation(): string{
        return this._occupation;
    }
    public get state(): number{
        return this._state;
    }
    public get password(): string{
        return this._password;
    }

}