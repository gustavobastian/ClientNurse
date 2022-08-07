export class PacientsTable{
    private _pacientId: number;    
    private _bedId: number;
    constructor(bedId: number, pacientID: number)
    {
        this._bedId= bedId;
        this._pacientId= pacientID;    
    }
    public get pacientId(): number{
        return this._pacientId;
    }
    public get bedId(): number{
        return this._bedId;
    }
    public set pacientId(pacientId: number){
        this._pacientId= pacientId;
    }
    public set bedId(bedId: number){
        this._bedId= bedId;
    }

}