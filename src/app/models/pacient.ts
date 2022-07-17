export class Pacient{
    public _id: number;
    public _firstName: string;
    public _lastName: string;
    public _bedId: number;
    public _notesTableId: number;
    public _userTableId: number;

    constructor(pacientId: number, pacientFirstName: string, pacientLastName: string, bedId: number, notesTableId: number, userTableId: number){
        this._id= pacientId;
        this._firstName= pacientFirstName;
        this._lastName= pacientLastName;
        this._bedId= bedId;
        this._notesTableId= notesTableId;
        this._userTableId= userTableId;
    }

    public set id(pacient:number){
        this._id=pacient;
    }
    public get id():number{
        return this._id;
    }

    public set firstName(pacient:string){
        this._firstName=pacient;
    }
    public get firstName():string{
        return this._firstName;
    }
    public set lastName(pacient:string){
        this._lastName=pacient;
    }
    public get lastName():string{
        return this._lastName;
    }
    public set bedId(pacient: number){
        this._bedId=pacient;
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