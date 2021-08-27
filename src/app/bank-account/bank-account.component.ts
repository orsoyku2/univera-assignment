import { Component, OnInit } from '@angular/core';
import { BankAccount,BankAccountService } from '../services/bank-account.service'
import notify from 'devextreme/ui/notify';


@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css'],
  providers: [BankAccountService],
})
export class BankAccountComponent implements OnInit {
  amount: number ;
  operation:string;
  bankAccounts: BankAccount[];
  itemCount: number;
  currentBankAccount: BankAccount;
    popupVisible = false;


  constructor(private bankAccountService: BankAccountService) {
    this.bankAccounts = bankAccountService.getBankAccounts();
    this.itemCount = this.bankAccounts.length;
    this.currentBankAccount = this.bankAccounts[0];
    this.amount = 0;
    this.operation ="";

  }
  showBankAccount(bankAccount: BankAccount) {
    this.currentBankAccount = bankAccount;
    this.popupVisible = true;
}

  ngOnInit(): void {
  }
  openDepositModal(bankAccount:BankAccount){
    this.amount = 0;
    this.operation = "deposit";
    this.currentBankAccount = bankAccount;
    this.popupVisible = true;
    // this.bankAccountService.deposit(bankAccount)
  }
  openWidthDrawMoneyModal(bankAccount:BankAccount){
    this.amount = 0;
    this.operation = "draw";
    this.currentBankAccount = bankAccount;
    this.popupVisible = true;
      // this.bankAccountService.widthDrawMoney(bankAccount)
  }
  formActionClick(currentBankAccount:BankAccount){

    if(this.operation === 'draw'){
      if(this.amount - currentBankAccount.balance < 0 ) {
        this.currentBankAccount = {...currentBankAccount,balance : currentBankAccount.balance- this.amount}
      }else{
        notify("We are unable to process your transaction because you do not have enough funds.", "warning", 1500);
      }
     
    }else{
      this.currentBankAccount = {...currentBankAccount,balance : currentBankAccount.balance+ this.amount}
    }

    this.bankAccounts = this.bankAccountService.getAccountsAfterUpdated(this.currentBankAccount);

  }
}
