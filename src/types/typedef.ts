/*
  @types exports
*/

/** 
 * @type lecture time
*/
export type LectureTime = { startTime: string, endTime: string } 

/**
 * @type time type 
*/
export type TimeType = { hour: number, min: number}

/**
 * @type Api Response  
*/
export type IApisResponse = {
    Monday?:    Array <any>  | null ,
    Tuesday?:   Array <any>  | null ,
    Wednesday?: Array <any>  | null ,
    Thursday?:  Array <any>  | null ,
    Friday?:    Array <any>  | null ,
    Saturday?:  Array <any>  | null ,
    Sunday?:    Array <any>  | null  
}