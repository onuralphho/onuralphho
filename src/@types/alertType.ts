
export interface IAlert{
    shown:boolean,
    type:string
}

export type AlertContextType = {
    alert:object,
    setAlert:any
}