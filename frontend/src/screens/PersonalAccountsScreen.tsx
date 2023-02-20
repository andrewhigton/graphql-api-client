import React from 'react'
// @ts-ignore
import retailAccount from '../account';
// import { accountDetails } from '../account';
import { Row, Col, Container, Card, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from '../hooks'
import { Link } from 'react-router-dom';
// @ts-ignore
import { gql, useQuery } from '@apollo/client';
// @ts-ignore
import { RestLink } from "apollo-link-rest";
import { ApolloClient } from '@apollo/client';

type paymentsType = Array<{
	// Account: Array<{SchemeName: string, Identification: string, Name: string, SecondaryIdentification: string}>,
	AccountId: string,
	AccountSubType: string,
	AccountType: string,
	Currency: string,
	Description: string,
}>

interface PersonalScreenType {
	AccountsScreen: () => void
}


const getPersonalAccounts = gql`
  
  query GetAccounts {
    Account @rest(type: "PersonalAccount", path: "retail/v3.1/accounts") {
        Data {  
          Account
      }
    }  
  }
`;

const PersonalAccountsScreen: React.FC = () => {

	// let corpPayments: Array<{ 
	// AccountId: string,
	// AccountSubType: string,
	// AccountType: string,
	// Currency: string,
	// Description: string,
	// }> = payments['payments']
	

	const accountsScreen: any = useAppSelector((state) => state?.accountsScreen['screen'])

	
	const {loading, error, data} = useQuery(getPersonalAccounts, {
		fetchPolicy: 'no-cache'
	})

	let accountSelection: any = data ? data.Account.Data.Account : null;

	return (
		loading ? <h2>loading</h2> :
	
		<div>
			<Container>
			
			<h1 className='homepage-head'>{`${accountsScreen} accounts`}</h1>
			
			<Row>
				{data.Account.Data.Account.map((account: any) => {	
				

					return <Col sm={12} md={6} lg={4}>
							<Card className="card-main card-transactions" >
							
							<div className={accountsScreen === 'business' ? "card-business" : "card-personal"}>
							<Card.Header className={accountsScreen === 'business' ? "card-header" : "card-header-personal"} as="h5">
							Account
							</Card.Header>
								<Card.Body>	
								

								 <div className="wrapper">
								 	<div className="one">AccountId</div>
								 	<div className="two">AccountSubType</div>
								 	<div className="three">AccountType</div>
								 	<div className="four">Currency</div>
								 	<div className="five">Description</div>	
								 	<div className="six">{account.AccountId}</div>
								 	<div className="seven">{account.AccountSubType}</div>
								 	<div className="eight">{account.AccountType}</div>
								 	<div className="nine">{account.Currency}</div>
								 	<div className="ten">{account.Description}</div>

								 </div>
								 </Card.Body>	
						    </div>
						</Card>	
						</Col>		
					})
				}
			</Row>
			</Container>
			</div>
				)
			}
					

export default PersonalAccountsScreen;