
export interface PictureData {
    uri:string,
    key:string,
    width:number,
    height:number,
    spaceTakenInRow?:number,
    title?:string,
}

export interface StringList {
    key:string,
    title:string,
}

export interface UserProfile {
    firstName:string,
    familyName:string,
    email:string,
    dateOfBirth:string,
    tel:string,
    profession:string,
    professionalSpeciality:string
}