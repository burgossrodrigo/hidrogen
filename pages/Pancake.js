import React, { useState } from 'react';
import Navigation from './components/Navigation.js';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Home.module.css';
import { Container, tr, Table, tbody, th, thead} from 'react-bootstrap';
import Footer from './components/Footer.js';

export default function Pancake(props) {
		
		 const [tokenData, setTokenData] = useState({});
		 var tokens = Object.entries(props.data);
		 console.log(props.data.data);

	const useStyle = makeStyles((theme) => ({

			header: {
				
				
				[theme.breakpoints.only('xs')]: {
					flexGrow: 1
				},
				
				[theme.breakpoints.between('sm', 'xl')]: {
					flexGrow: 1
				}
				
			}
		
}));

	const classes = useStyle();
		
	const formatPercent = number =>
	`${new Number(number).toFixed(2)}%`
	
	const formatDollar = (number, maxSignificantDigits) =>
	new Intl.NumberFormat(
	
		'en-US',
		{
			
			style: 'currency',
			currency: 'usd'
			
		}
	
	)
		
  return (
		<Container>
		<Navigation />
		<Table className={styles.table} size="sm" striped bordered hover aria-label='pancakeswap-api'>
			<thead>
				<tr>
					<th>Token Name</th>
					<th>Token Symbol</th>
					<th>Price</th>
					<th>Price BNB</th>		
				</tr>
			</thead >
			<tbody>
			{Object.values(props.data.data).map((token) => (
			

				
				<tr key={Object.keys(props.data.data)}>
					<th>{token.name}</th>					
					<th>{token.symbol}</th>
					<th>USD {token.price}</th>
					<th>{token.price_BNB}</th>
				</tr>
				
	
					
			))}
			</tbody>
		</Table>
	  <Footer />
	  </Container>
  
 )
};

export async function getStaticProps(context) {	
  const resToken = await fetch('https://api.pancakeswap.info/api/v2/tokens');
  const data = await resToken.json()
  
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data } // will be passed to the page component as props

  }
}



