import React, { useState } from 'react';
import Navigation from '../components/Navigation.js';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/Home.module.css';
import { Container, tr, Table, tbody, th, thead, Row, Col, Card} from 'react-bootstrap';
import Footer from '../components/Footer.js';
import Head from 'next/head';
import { Typography, List, ListItem } from '@material-ui/core';

export default function Pancake(props) {
		
		 const [tokenData, setTokenData] = useState({});
		 var tokens = Object.entries(props.data);
		 console.log(props.dataMaxSupply);


		
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
		<div>
		  <Head>
			<title>Hidrogen</title>
			<meta name="Hidrogen - Pancake TOP 100" content="Binance Smart Chain token dashboard" />
			<link rel="icon" href="/favicon.ico" />
		  </Head>		
		<Navigation />
		<Container>
		<div className={styles.token}>
			<h3>{props.data.data.name} </h3>
			<Row xs={1} sm={2} md={2} lg={2} xl={2}>
				<Col>
					<Card className={styles.card} raised={true}>
						<Card.Body>
						<Card.Title>Meta</Card.Title>
							<List>
								<ListItem>
									Symbol: {props.data.data.symbol}
							</ListItem>
							<ListItem>
								Price USD: {props.data.data.price}
							</ListItem>
							<ListItem>
								Price BNB: {props.data.data.price_BNB}
							</ListItem>
							</List>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className={styles.card} raised={true}>
						<Card.Body>
						<Card.Title>Supply</Card.Title>
							<List>
								<ListItem>
									Total supply: {props.dataMaxSupply.result}
							</ListItem>
							<ListItem>
								Circulatin supply: {props.dataCirculatingSupply.result}
							</ListItem>
							</List>
						</Card.Body>
					</Card>
				</Col>	
			</Row>
		</div>	
		<Footer />		
		</Container>
		
	  </div>
	  
  
 )
};

export async function getStaticProps(context) {	
  const resToken = await fetch("https://api.pancakeswap.info/api/v2/tokens/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82");
  const data = await resToken.json();
  const resMaxSupply = await fetch("https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&apikey=VPBWF48NC149A1VJA5MDHUNJK74N1KJB2S")
  const dataMaxSupply = await resMaxSupply.json();
  const resCirculatingSupply = await fetch("https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&&apikey=VPBWF48NC149A1VJA5MDHUNJK74N1KJB2S")
  const dataCirculatingSupply = await resCirculatingSupply.json();
  
  if (!data || !dataMaxSupply) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data, dataMaxSupply, dataCirculatingSupply } // will be passed to the page component as props

  }
}