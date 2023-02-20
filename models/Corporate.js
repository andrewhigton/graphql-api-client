const { model, Schema } = require('mongoose')


const CorporateAccounts = gql`
  query {
    Account {
      AccountId
      Currency
      AccountType
      Description
      Account {
        Identification
        Name  
      }
    } 
  }
`;

const corporateAccountsSchema = new Schema({
  accountid: String,
  identification: String,
  name: String,
  currency: String,
  accounttype: String,
  description: String
})

module.exports = model('corporateAccounts', corporateAccountsSchema )


// {
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