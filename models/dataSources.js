import { RESTDataSource } from "@apollo/datasource-rest";

class EqualsMoneyAPI extends RESTDataSource {
  constructor(baseUrl) {
    super();
    this.baseURL = "https://sandbox.equals.co/api/";
  }
    
    async getCorpAccounts() {
      let corpAccountsArray;
      const corpAccounts = await this.get('corporate/v3.1/accounts');
      
      corpAccountsArray = corpAccounts.Data.Account;
      corpAccountsArray = corpAccountsArray.map((account) => 
        this.toAccount(account)
        )
      return corpAccountsArray;
  }

  async getCorpBalances() {
      let corpBalancesArray;
      const corpBalances = await this.get('corporate/v3.1/balances');
      // console.log('corpBalances ', corpBalances)    
      corpBalancesArray = corpBalances.Data.Balance;
      console.log('corpBalancesArray ', corpBalancesArray)    
      return corpBalancesArray;
  }

  async getCorpTransactions() {
      let corpTransactionsArray;
      const corpTransactions = await this.get('corporate/v3.1/transactions');
      // console.log('corpTransactions ', corpTransactions)    
      corpTransactionsArray = corpTransactions.Data.Transaction;
      console.log('corpTransactionsArray ', corpTransactionsArray)    
      return corpTransactionsArray;
  }


  toAccount(account) {
    return {
      AccountId: account.AccountId,
      AccountSubType: account.AccountSubType, 
      Currency: account.Currency,
      AccountType: account.AccountType,
      Description: account.Description,
      Account: {
        Identification: account.Account.Identification,
        Name: account.Account.Name,
        SecondaryIdentification: account.Account.SecondaryIdentification,
      }
    };
  }


}

export default EqualsMoneyAPI;


//https://codesandbox.io/s/swapi-wrapper-0eojm?file=/index.ts:157-268