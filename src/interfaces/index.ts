export interface SearchType{
    city: string;
    country: string;
}

export interface Country  {
    code: string
    name: string
}

export type Weather = {
    name: string
    main: {
        temp : number
        temp_max :  number
        temp_min : number
    }
}