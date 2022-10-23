export class Patient{
    public _id: number;
    public _firstName: string;
    public _lastName: string;
    public _bedId: number;
    public _notesTableId: number;
    public _userTableId: number;

    constructor(patientId: number, pacientFirstName: string, pacientLastName: string, bedId: number, notesTableId: number, userTableId: number){
        this._id= patientId;
        this._firstName= pacientFirstName;
        this._lastName= pacientLastName;
        this._bedId= bedId;
        this._notesTableId= notesTableId;
        this._userTableId= userTableId;
    }

    public set id(patient:number){
        this._id=patient;
    }
    public get id():number{
        return this._id;
    }
    public get patientId():number{
        return this._id;
    }

    public set firstName(patient:string){
        this._firstName=patient;
    }
    public get firstName():string{
        return this._firstName;
    }
    public set lastName(patient:string){
        this._lastName=patient;
    }
    public get lastName():string{
        return this._lastName;
    }
    public set bedId(patient: number){
        this._bedId=patient;
    }
    public get bedId():number{
        return this._bedId;
    }
    public set notesTableId(number: number){
        this._notesTableId=number;
    }
    public get notesTableId():number{
        return this._notesTableId;
    }
    public set userTableId(number: number){
        this._userTableId=number;
    }
    public get userTableId():number{
        return this._userTableId;
    }

}