export class PriorityModel2{      
    private _bedId: number;    
    private _priority: number;
    
    constructor( bedId: number, priority: number){        
        this._bedId= bedId;
        this._priority= priority;        
    } 
    
    public get_bedId():number{
        return this._bedId;    
    }
    public get_priority():number{
        return this._priority;    
    }

    public set_priority(num:number){
        this._priority=num;    
    }
    public set_bedId(num:number){
        this._bedId=num;    
    }
    

}