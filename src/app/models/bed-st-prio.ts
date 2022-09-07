export class bedStPrio{      
    private _bedId: number;    
    private _st: number;
    private _priority: number;
    
    constructor(bedId: number, st: number,priority:number){        
        this._bedId= bedId;
        this._st= st;        
        this._priority= priority;
    } 

    public get_bedId():number{
        return this._bedId;    
    }
    public get_st():number{
        return this._st;    
    }    
    public get_priority():number{
        return this._priority;    
    }    
    public set_bedId(num:number){
        this._bedId=num;    
    }
    public set_st(num:number){
        this._st=num;    
    }
    public set_priority(num:number){
        this._priority=num;    
    }
}