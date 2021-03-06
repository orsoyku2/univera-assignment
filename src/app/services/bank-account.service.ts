import { Injectable } from '@angular/core';

export class BankAccount{
    id!: number;
    accountName!:string;
    balance!:number;
}



@Injectable()
export class BankAccountService {
  bankAccounts: BankAccount[] = [
    {id:1,accountName:"First Account",balance:100000},
    {id:2,accountName:"Second Account",balance:30000},
    {id:3,accountName:"Third Account",balance:40000}
];
    getBankAccounts(): BankAccount[] {
        return this.bankAccounts;
    }
    getAccountsAfterUpdated(account:BankAccount):BankAccount[]{
      console.log("servicee account",account)
      const indexOfUpdatedItem = this.bankAccounts.findIndex(itm=>itm.id === account.id);
      console.log({indexOfUpdatedItem})
      if(indexOfUpdatedItem>=0){
        this.bankAccounts[indexOfUpdatedItem] = account;
      }
      return this.bankAccounts
    }
}

