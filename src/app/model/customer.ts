export interface customer{
    customername : string,
    customerid : number,
    accounts:account[],
    address : string,
    status : string
    Phone : string,
    emailId : string
}

export interface account{
     accountnumber : number,
     accounttype: string,
     balance : number,
     accountstatus : string,
}