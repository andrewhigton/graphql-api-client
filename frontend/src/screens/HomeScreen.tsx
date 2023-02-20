import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks'
import { RootState } from '../reducers/index';
import rootReducer from '../reducers/index';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Dispatch } from 'redux';
// import { fetchPersonalBalances } from '../actions/personalPaymentsActions';
// import { fetchCorporateBalances } from '../actions/corporatePaymentsActions';
import { setAccountsScreen, clearAccountsScreen } from '../actions/setAccountsScreenActions';
import { PersonalPaymentsType } from '../reducers/personalReducer';
import SelectionScreen from './SelectionScreen'  
// import data from '../dummydata'

interface HomeScreenProps {
  fetchPersonalAccounts: () => void;
  //personalPaymentsList: [];
  personalPayments: PersonalPaymentsType;
  // personalPayments?: PersonalPaymentsType;
}

declare module 'react-redux' {
  interface DefaultRootState extends RootState { }
}

// interface IRootState {
//   state: typeof RootState;
// }




const HomeScreen: React.FC = ({ 
		// fetchPersonalAccounts,
  	// personalPayments,
  	//personalPayments
	// payment, 
	// business, 
	 })  => {
	
	const dispatch = useAppDispatch();
	const personalPaymentsList = useAppSelector((state) => state?.personalAccounts)

	const handleChange = (accountSelection: string) => {
		dispatch(clearAccountsScreen(''))
		if (accountSelection === 'business') {
			dispatch(setAccountsScreen('business'))
	} else if (accountSelection === 'personal') {
			dispatch(setAccountsScreen('personal'))
	} else {
		 	dispatch(setAccountsScreen('joint')) 
		//}
	}
}

	const loading = false;	
	const error = false;
	
	return (
		
			
			<Container className="main-background">
			<h1 className='homepage-head'>Welcome to your Equals Payments</h1>
			
			<Row>
				<Col sm={12} md={6} lg={4}>
				
				<Card className="card-main" >

						<div className="card-business">
						<Card.Header className="card-header" as="h5">Business</Card.Header>
							<Card.Body>	
							
							<div className="logo-div">
							<i className="equals-sign"></i>
							<div className="card-logo">
							<Card.Subtitle className="mb-2 text-muted equals-header">EQUALS</Card.Subtitle>
							<Card.Text className="mb-2 text-muted equals-subheader">Money</Card.Text>
							</div>
							</div>
							<Card.Text className="card-text">Read your Corporate Accounts, Balances & Transactions</Card.Text>
							<Link to="/selection">
							<Button 
							variant="outline-warning" 
							size="lg" 
							className="button-business"
							onClick={() => handleChange('business')}
							>Corporate Account</Button>
							</Link>
							    
						
						</Card.Body>	
					    </div>
				</Card>
				</Col>
				<Col sm={12} md={6} lg={4}>
				<Card className="card-main">
						<div className="card-personal">
						<Card.Header className="card-header-personal" as="h5">Personal</Card.Header>
							<Card.Body>

							<div className="fairfx-logo">
							<i className="fa-solid fa-money-check fa-4x personal-icon"></i>
							<Card.Text className="mb-2 text-muted fair-style">Fair</Card.Text>
							<Card.Text className="mb-2 text-muted fx-style">FX</Card.Text>
							</div>
							<Card.Text className="card-text">Read your Personal Retail Accounts, Balances & Transactions</Card.Text>
							<Link to="/selection">
							<Button 
							variant="outline-primary" 
							size="lg" 
							className="button-personal"
							onClick={() => handleChange('personal')}
							>Personal account</Button>{' '}
				      </Link>
						</Card.Body>	
						</div>	
				</Card>	
				</Col>
				<Col sm={12} md={6} lg={4}>
				<Card className="card-main">
					<div className="card-joint">
					<Card.Header className="card-header-joint" as="h5">Personal & Business</Card.Header> 
						<Card.Body>
			
						<div className="joint-logo-div fairfx-logo">
						<i className="fa-solid fa-money-check fa-4x personal-icon"></i>
						<i className="fa-solid fa-plus plus-logo"></i>
						<i className="equals-sign equals-sign-joint"></i>
						</div>
						<Card.Text className="card-text">Your Personal and Business Accounts, Balances & Transactions</Card.Text>
						<Link to="/selection">
						<Button 
						variant="primary" 
						size="lg" 
						className="button-joint"
						onClick={() => handleChange('joint')}
						>Personal & Business accounts</Button>{' '}
						</Link>
					</Card.Body>
					</div>
				</Card>
				</Col>				
			</Row>
				
			</Container>
			
			)
		}

export default HomeScreen;




