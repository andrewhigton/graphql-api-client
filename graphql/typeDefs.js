// https://www.apollographql.com/docs/apollo-server/data/fetching-rest/
// https://dev.to/keonik/creating-a-graphql-api-while-utilizing-your-rest-api-55d9
import { gql } from 'apollo-server';

export const typeDefs = gql`
type Query {
     getCorpAccounts: [SingleAccount]!
  }

type SingleAccount {
  AccountId: String
  AccountSubType: String
  Currency: String
  AccountType: String
  Description: String
  Account: AccountDetails
}

type AccountDetails {
  Identification: String
  Name: String
  SecondaryIdentification: String
}

`

// type Query {
//      getCorpAccounts: AccountData!
//   }

// type AccountData { 
//   Meta: MetaData
//   Data: Accounts
// }

// type MetaData {
//   TotalPages: Int
//   FirstAvailableDateTime: String
//   LastAvailableDateTime: String
// }

// type Accounts: [SingleAccount!]!

// type SingleAccount {
//   AccountId: String
//   AccountSubType: String
//   Currency: String
//   AccountType: String
//   Description: String
//   Identification: String
//   Name: String
//   SecondaryIdentification: String
// }



//     getCorpBalances: balanceData
//      getCorpTransactions: transactionData

// type balanceData { 
//   Balance: [Balances]
// }

// type transactionData { 
//   Transaction: [Transactions]
// }

// type Transactions {
//      AccountId: String
//      Amount: String
//      Credit: String
//      Date: String
//      Status: String   
// }

// type Balances {
//      AccountId: String
//      Amount: String
//      Credit: String
//      Date: String
//      Type: String
// }

export default typeDefs;

//  type Query {
  
// type Accounts: [Data] 

// type Data: [Account]

// type Account: singleAccount

// type singleAccount {
//       AccountId: String
//       AccountSubType: String
//       Currency: String
//       AccountType: String
//       Description: String
//   }
// }   




// type Query {
//   Accounts: Data!
// }

// type Data {
//   Account: [SingleAccount]
// }


// const accountDetails = {
//   "Meta": {
//     "TotalPages": 1,
//     "FirstAvailableDateTime": "2020-07-17T10:52:16Z",
//     "LastAvailableDateTime": "2020-07-17T10:52:16Z"
//   },
//   "Data": {
//     "Account": [
//       {
//         "AccountId": "123",
//         "Currency": "EUR",
//         "AccountType": "Business",
//         "AccountSubType": "PrePaidCard",
//         "Description": "Euro card",
//         "Account": {
//           "SchemeName": [
//             "UK.OBIE.BBAN",
//             "UK.OBIE.IBAN",
//             "UK.OBIE.PAN",
//             "UK.OBIE.Paym",
//             "UK.OBIE.SortCodeAccountNumber"
//           ],
//           "Identification": "1222333344441113",
//           "Name": "John Johnson",
//           "SecondaryIdentification": "1234"
//         }
//       }
//     ]
//   }
// }


// type Query {
// 	accounts: [Data!]!
// }

// type Data {
//   	nestedAccounts: [Accounts!]!
// }

// type SingleAccount {
//       AccountId: String!
//       Currency: String!
//       AccountType: String!
//       Description: String!
// 	  Account: Acct!	
// }

// type Acct {
//  		Identification: String!
//  		Name: String!
//  }
 