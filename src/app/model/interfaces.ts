export interface employee{
    id:number,
    name:string,
    department:string
    salary:number
}

export interface empaddup{
    name:string,
    department:string
    salary:number
}

export interface student{
    id:number,
    name:string,
    course:string
}

export interface stuaddup{
    name:string,
    course:string
}

export interface patchJson{
    op:string,
    path:string,
    value:string
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: employee[];
  error: any;
}

export interface ApiResponseSingleEmp {
  success: boolean;
  message: string;
  data: employee;
  error: any;
}