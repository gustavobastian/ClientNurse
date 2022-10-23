export class PatientsTable{
    private _patientId: number;    
    private _bedId: number;
    constructor(bedId: number, patientId: number)
    {
        this._bedId= bedId;
        this._patientId= patientId;    
    }
    public get patientId(): number{
        return this._patientId;
    }
    public get bedId(): number{
        return this._bedId;
    }
    public set patientId(patientId: number){
        this._patientId= patientId;
    }
    public set bedId(bedId: number){
        this._bedId= bedId;
    }

}