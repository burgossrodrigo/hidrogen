import React, { useState } from 'react';
import Navigation from '../components/Navigation.js';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/Home.module.css';
import { Container, tr, Table, tbody, th, thead, Row, Col, Card} from 'react-bootstrap';
import Footer from '../components/Footer.js';
import Head from 'next/head';
import { Typography, List, ListItem } from '@material-ui/core';
import {
  ApolloClient,
  gql,
  NormalizedCacheObject,
  InMemoryCache 
} from '@apollo/client';

export default function Pancake(props) {
		
		 const [tokenData, setTokenData] = useState({});
		 const contract = '0x57cb3e01aa9fd9eb05eb2e2b4ed2c3965481c57e';


		
	  const formatDollar = (number, maximumSignificantDigits) =>
		new Intl.NumberFormat(
		  'en-US', 
		  { 
			style: 'currency', 
			currency: 'USD',
			maximumSignificantDigits
		  })
		  .format(number);
		  
		(async function(){
		await widgets.init('https://graphql.bitquery.io', '', {locale: 'en', theme: 'light'});
		var query = new widgets.query(`
			  
	{
	   ethereum (network: bsc){
		dexTrades( options: {desc: "date.date"},
		  smartContractAddress: 
		  {is:"0xAf85eBdea3870eF61e3459487cb03Ccdc2ef6e77"}
		) {
		  count
		  tradeAmount(in:USD)
		  date{
			date(format: "%Y-%m-%d")
		  }
		}
	  }
	}
	`);
		var wdts = new widgets.chartByTime('#pancake_pool_date_wise_trade_vol', query, 'ethereum.dexTrades', {
	 "title": "Pancake Pool's Trade vol date wise",
	 "chartOptions": {
	  "vAxes": {
	   "0": {
		"title": "Trade Volume"
	   }
	  },
	  "seriesType": "bars",
	  "series": {
	   "0": {
		"color": "#28a745"
	   }
	  }
	 },
	 "dataOptions": [
	  {
	   "title": {
		"label": "Date",
		"type": "date"
	   },
	   "path": "date.date"
	  },
	  {
	   "title": "Trade Amount",
	   "path": "tradeAmount"
	  }
	 ]
	});
		query.request();
		})();

	console.log(props.transactionData);		
		
  return (
		<div>
		  <Head>
			<title>Hidrogen</title>
			<meta name="Hidrogen - Pancake TOP 100" content="Binance Smart Chain token dashboard" />
			<script async src="https://cdn.jsdelivr.net/gh/bitquery/widgets@v1.3.8/dist/widgets.js"></script>
			<link rel="stylesheet" media="all" href="https://cdn.jsdelivr.net/gh/bitquery/widgets@v1.3.8/dist/assets/css/widgets.css" />
			<link rel="icon" href="/favicon.ico" />
		  </Head>		
		<Navigation />
		<Container>
		<div className={styles.token}>
			<h3>{props.data.data.name} </h3>
			<h4>Contract:</h4> 0x57cb3e01aa9fd9eb05eb2e2b4ed2c3965481c57e
			<Row xs={1} sm={2} md={2} lg={2} xl={2}>
				<Col>
					<Card className={styles.card} raised={true}>
						<Card.Body>
						<Card.Header><Card.Title>Meta</Card.Title></Card.Header>
						<List>
							<ListItem>
								Symbol: {props.data.data.symbol}
							</ListItem>
							<ListItem>
								Price USD: {formatDollar(props.data.data.price, 18)}
							</ListItem>
							<ListItem>
								Price BNB: {formatDollar(props.data.data.price_BNB, 18)}
							</ListItem>
						</List>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className={styles.card} raised={true}>
						<Card.Body>
						<Card.Header><Card.Title>Supply</Card.Title></Card.Header>
							<List>
								<ListItem>
									Total supply: {new Intl.NumberFormat(['en-US']).format(props.dataMaxSupply.result)}
							</ListItem>
							<ListItem>
								Circulatin supply: {new Intl.NumberFormat(['en-US']).format(props.dataCirculatingSupply.result)}
							</ListItem>
							</List>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<div id="pancake_pool_date_wise_trade_vol"></div>
				</Col>
				<Col>
					
				</Col>
			</Row>
		</div>
		<div className={styles.rugAllert}><h2>DEV rugged liquidity pool</h2></div>
		<Footer />		
		</Container>
		
	  </div>
	  
  
 )
};

export async function getStaticProps(context) {	
  const resToken = await fetch("https://api.pancakeswap.info/api/v2/tokens/0x57cb3e01aa9fd9eb05eb2e2b4ed2c3965481c57e");
  const data = await resToken.json();
  const resMaxSupply = await fetch("https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0x57cb3e01aa9fd9eb05eb2e2b4ed2c3965481c57e&apikey=VPBWF48NC149A1VJA5MDHUNJK74N1KJB2S")
  const dataMaxSupply = await resMaxSupply.json();
  const resCirculatingSupply = await fetch("https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=0x57cb3e01aa9fd9eb05eb2e2b4ed2c3965481c57e&&apikey=VPBWF48NC149A1VJA5MDHUNJK74N1KJB2S")
  const dataCirculatingSupply = await resCirculatingSupply.json();
  

    const client = new ApolloClient({
    
    uri: "https://graphql.bitquery.io",
    cache: new InMemoryCache(),
    
    });
  
  if (!data || !dataMaxSupply) {
    return {
      notFound: true,
    }
  }

  return {
	  
    props: { data, dataMaxSupply, dataCirculatingSupply  } // will be passed to the page component as props

  }
}