import React, { useState } from 'react';
import Navigation from './components/Navigation.js';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Home.module.css';
import { Container, tr, Table, tbody, th, thead} from 'react-bootstrap';
import Footer from './components/Footer.js';
import Head from 'next/head';
import Link from 'next/link';

export default function Pancake(props) {
		
		 const [tokenData, setTokenData] = useState({});
		 var tokens = Object.entries(props.data);
		 console.log(props.data.data);


		
	const formatPercent = number =>
	`${new Number(number).toFixed(2)}%`
	
  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat(
      'en-US', 
      { 
        style: 'currency', 
        currency: 'USD',
        maximumSignificantDigits
      })
      .format(number);
		
  return (
		<div>
		  <Head>
			<title>Hidrogen</title>
			<meta name="Hidrogen - Pancake TOP 100" content="Binance Smart Chain token dashboard" />
			<link rel="icon" href="/favicon.ico" />
		  </Head>		
		<Navigation />
		<Container className={styles.container}>
		<Table className={styles.table} size="lg" striped bordered hover aria-label='pancakeswap-api'>
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
				<th><Link href={`/token/${token.symbol}`}>{token.name}</Link></th>					
					<th>{token.symbol}</th>
					<th>USD {token.price}</th>
					<th>{token.price_BNB}</th>
				</tr>
				
	
					
			))}
			</tbody>
		</Table>
		
				<Table className={styles.tableSmall} size="xs" striped bordered hover aria-label='pancakeswap-api'>
			<thead>
				<tr>
					<th>Token Name</th>
					<th>Price</th>		
				</tr>
			</thead >
			<tbody>
			{Object.values(props.data.data).map((token) => (
			

				
				<tr key={Object.keys(props.data.data)}>
					<th>{token.name}</th>					
					<th>USD {formatDollar(token.price, 2)}</th>
				</tr>
				
	
					
			))}
			</tbody>
		</Table>
	  <Footer />
	  </Container>
	  </div>
	  
  
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



