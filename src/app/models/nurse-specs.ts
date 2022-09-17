export class nurseSpec{
    private _nurseSpecId: number;
    private _userId: number;
    private _name: String;
    private _specId: number;

    constructor(nurseId: number, userId: number, name: String, specId: number){
        this._nurseSpecId= nurseId;
        this._userId= userId;
        this._name= name;
        this._specId= specId;
        
    }

    public get nurseSpecId(): number{
        return this._nurseSpecId;
    }
    public get userId(): number{
        return this._userId;
    }
    public get name(): String{
        return this._name;
    }
    public get specId(): number {
        return this._specId;
    }


}
