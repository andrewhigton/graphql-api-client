import { gql } from "@apollo/client";



  export const getcorporateAccounts = gql`
    query GetAccounts {
      Account @rest(type: "Account", path: "corporate/v3.1/accounts") {
          Data {  
            Account 

        }
      }  
    }
  `;


  export const getpersonalAccounts = gql`
    query GetAccounts {
      Account @rest(type: "Account", path: "retail/v3.1/accounts") {
          Data {  
            Account
        }
      }  
    }
  `;





// const CorporateAccounts = gql`
//   query {
//     Account {
//       AccountId
//       Currency
//       AccountType
//       Description
//       Account {
//         Identification
//         Name  
//       }
//     } 
//   }
// `;

//export default CorporateAccounts



// const query = gql`
// query {
//     popular_artists(size: 2) {
//      artists {
//        name
//          artworks {
//              id
//              title
//              is_for_sale
//              price
//              image {
//                image_url
//           }
//         }
//       }
//     }
//  }
// `


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