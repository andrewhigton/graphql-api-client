import { RESTDataSource } from "@apollo/datasource-rest";
//https://codesandbox.io/s/swapi-wrapper-0eojm?file=/index.ts:157-268

class EqualsMoneyAPI extends RESTDataSource {
  constructor(baseUrl) {
    super();
    this.baseURL = "https://sandbox.equals.co/api/";
  }
    //should i narrow down hwat the server fetches? or do that on the client?
    async getCorpAccounts() {
      let corpAccountsArray;
      const corpAccounts = await this.get('corporate/v3.1/accounts');
      corpAccountsArray = corpAccounts.Data.Account
      console.log('corpAccountsArray ', corpAccountsArray)    
      return corpAccountsArray;
  }
  
  // async getCorpBalances() {
  //     let corpBalancesArray;
  //     const corpBalances = await this.get('corporate/v3.1/balances');
  //     console.log('corpBalances ', corpBalances)    
  //     corpBalancesArray = corpAccounts.Data.Account
  //     console.log('corpBalancesArray ', corpBalancesArray)    
  //     return corpBalancesArray;
  // }

  // async getCorpTransactions() {
  //     let corpTransactionsArray;
  //     const corpTransactions = await this.get('corporate/v3.1/transactions');
  //     console.log('corpBalances ', corpTransactions)    
  //     corpTransactionsArray = corpAccounts.Data.Account
  //     console.log('corpBalancesArray ', corpTransactionsArray)    
  //     return corpTransactionsArray;
  // }



  //use this?
  // toAccount(person) {
  //   return {
  //     name: person.name,
  //     height: person.height,
  //     mass: person.mass,
  //     gender: person.gender,
  //     homeworld: person.homeworld
  //   };
  //}

 

  // async findAll() {
  //   const swapiResponse = await this.get("people");

  //   if (Array.isArray(swapiResponse.results)) {
  //     swapiResponse.results = swapiResponse.results.map((person) =>
  //       this.toPerson(person)
  //     );
  //   console.log('swapi ', swapiResponse)
  //   return swapiResponse;
  //   }
  //   return [];
  // }

  // async findAllByPage({ page }) {
  //   const swapiResponse = await this.get("people/", { page });

  //   if (Array.isArray(swapiResponse.results)) {
  //     swapiResponse.results = swapiResponse.results.map((person) =>
  //       this.toPerson(person)
  //     );
  //     return swapiResponse;
  //   }
  //   return [];
  // }

  // async findByName({ name }: { name: string }) {
  //   const swapiResponse = await this.get("people/", { search: name });
  //   if (Array.isArray(swapiResponse.results)) {
  //     swapiResponse.results = swapiResponse.results.map((person) =>
  //       this.toPerson(person)
  //     );
  //     return swapiResponse;
  //   }
  //   return [];
  // }

}

export default EqualsMoneyAPI;


// import { RESTDataSource } from "@apollo/datasource-rest";

// class equalsMoneyAPI extends RESTDataSource {
//   constructor() {
//     super()
//     this.baseURL = "https://sandbox.equals.co/api/"
//   }

//   async getCorpAccounts() {
//     return this.get('corporate/v3.1/accounts');

// 	}

// // async getCorpBalances(stateCode) {
// //     const response = await this.get(
// //     `state/${stateCode}.timeseries.json?apiKey=${process.env.COVID_ACT_NOW}`
// //     );
// //     return response;
// // 	}

// // async getCorpTransactions() {
// //     const response = await this.get(`counties.json?apiKey=${process.env.COVID_ACT_NOW}`);
// //     return response || [];
// // 	}


//}

//export default equalsMoneyAPI;


