export interface customer{
    customerName : string,
    customerId : number,
    customerAccounts:customerAccount[],
    customerAddress : string,
    customerstatus : string
    customerPhone : string,
    customerEmailId : string,
    Gender : string,
    password : string,
    confirmPassword : string,
    userType : string,
}

export interface customerAccount{
     accountnumber : number,
     accounttype: string,
     balance : number,
     accountstatus : string,
}