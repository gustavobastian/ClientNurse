export class bedStats{      
    private _bedId: number;    
    private _st: number;
    
    constructor(bedId: number, st: number){        
        this._bedId= bedId;
        this._st= st;        
    } 

    public get_bedId():number{
        return this._bedId;    
    }
    public get_st():number{
        return this._st;    
    }    
    
    public set_bedId(num:number){
        this._bedId=num;    
    }
    public set_st(num:number){
        this._st=num;    
    }

}