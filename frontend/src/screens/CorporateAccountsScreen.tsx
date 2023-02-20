import React from 'react'
// @ts-ignore
import retailAccount from '../account';
import moment from 'moment';
import { Row, Col, Container, Card, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from '../hooks'
import { Link } from 'react-router-dom';
// @ts-ignore
import { gql, useQuery } from '@apollo/client';
// @ts-ignore
import CorporateAccounts from '../gql/Query';
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

interface CorporateScreenType {
	AccountsScreen: () => void
}

const getCorporateAccounts = gql`
  query GetAccounts {
    Account @rest(type: "CorporateAccount", path: "corporate/v3.1/accounts") {
        Data {  
          Account 

      }
    }  
  }
`;


const CorporateAccountsScreen: React.FC = () => {

	// let corpPayments: Array<{ 
	// AccountId: string,
	// AccountSubType: string,
	// AccountType: string,
	// Currency: string,
	// Description: string,
	// }> = payments['payments']
	
	//choose account screen, business or personal
	const accountsScreen: any = useAppSelector((state) => state?.accountsScreen['screen'])

	//call the graphql api query 
	const {loading, error, data} = useQuery(getCorporateAccounts)

	//access the array in api
	let accountSelection: any = data ? data.Account.Data.Account : null;

	return (
		loading ? <h2>loading</h2> :
	
		<div>
			<Container>
			
			<h1 className='homepage-head'>{`${accountsScreen} accounts`}</h1>
			
			<Row>
				{accountSelection.map((account: any) => {	
				

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
					

export default CorporateAccountsScreen;