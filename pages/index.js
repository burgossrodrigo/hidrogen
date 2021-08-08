import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CoinGecko from 'coingecko-api';
import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Toolbar, 
		 Divider, 
		 Typography, 
		 IconButton, 
		 Badge, 
		 Breadcrumbs,
		 Button,
		 Box,
		 Icon,
		 Link
		 } from '@material-ui/core';
import { Navbar, Nav, Container, Row, Col, Dropdown } from 'react-bootstrap';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import Script from 'next/script';

const coinGeckoClient = new CoinGecko();

export default function Home(props) {
	
	const [latestPrice, setLatestPrice] = useState(0);
	

    	 const { bnbData } = props.data;
		 console.log(props.data);

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
	
		const fetchData = async () => {
	  let bnbChart = { index: [], price: [], volumes: [] };
	  for (const item of props.data.prices) {
		  await bnbChart.index.push(item[0]);
		  await bnbChart.price.push(item[1]);
	  }
	  for (const item of props.data.total_volumes)
	  bnbChart.volumes.push(item[1]);
	  return bnbChart;
	};
	
		useEffect(() => {
		
		fetchData().then((chartData) => {
			initChart(chartData);
			setLatestPrice(parseFloat(chartData.price[chartData.price.length - 1]).toFixed(2));
		});
	}, []);
	
		const initChart = (bnbChart) => {
		let trace_price = {
			name: "Price ($)",
			x: bnbChart.index.map((t) => new Date(t)),
			y: bnbChart.price,
			xaxis: "x",
			yaxis: "y1",
			type: "scatter",
			mode: "lines+markers",
			marker: { color: "blue", size: 3 },
		};
		let trace_volumes = {
			name: "Volumne ($B)",
			x: bnbChart.index.map((t) => new Date(t)),
			y: bnbChart.volumes,
			xaxis: "x",
			yaxis: "y2",
			type: "bar",
			barmode: "relative",
			marker: {
				color: "rgb(49,130,189)",
				opacity: 0.7,
			},
		};
		let layout = {
			autosize: true,
			height: "100%",
			margin: {
				l: 50,
				r: 20,
				t: 50,
				pad: 3,
			},
			showlegend: false,
			xaxis: {
				domain: [1, 1],
				anchor: "y2",
			},
			yaxis: {
				domain: [0.1, 1],
				anchor: "x",
			},
			yaxis2: {
				showticklabels: false,
				domain: [0, 0.1],
				anchor: "x",
			},
			grid: {
				roworder: "bottom to top",
			},
		};
		let config = { responsive: true };
		let series = [trace_price, trace_volumes];
		Plotly.newPlot("chart", series, layout, config);
	};
	
	/* BSC CHART */
		
	const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  },
});
	

	

	
	
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
	
		console.log(bnbData);
	

	
  return (
    <div className={styles.container}>
	
      <Head>
        <title>Hidrogen</title>
        <meta name="Hidrogen" content="Binance Smart Chain token dashboard" />
        <link rel="icon" href="/favicon.ico" />
		<script async src="https://cdn.plot.ly/plotly-latest.min.js"></script>
		<script async src="https://widgets.coingecko.com/coingecko-coin-price-chart-widget.js"></script>
      </Head>
	  <Container>
		<Navigation />
		<Container className={styles.mainChart}>
				<h2>Sponsored Chart</h2>
				<h2 className='text-center text-primary'>BNB PRICE: $ {latestPrice}</h2>
				<div id='chart' className='p-0 m-0'></div>
		</Container>
			
			<Container className={styles.coinGeckoChart}>
				<h5>Sponsored tokens</h5>
				<Row xs={1} sm={2} md={'auto'} lg={'3'} xl={'auto'} >
					
					<coingecko-coin-price-chart-widget  coin-id="gmr-finance" currency="usd" height="300" width='300' locale="pt"></coingecko-coin-price-chart-widget>

					<coingecko-coin-price-chart-widget  coin-id="nft-art-finance" currency="usd" height="300" width='300' locale="pt"></coingecko-coin-price-chart-widget>

					<coingecko-coin-price-chart-widget  coin-id="shiba-bsc" currency="usd" height="300" width='300' locale="pt"></coingecko-coin-price-chart-widget>	
					
					<coingecko-coin-price-chart-widget  coin-id="safemoon" currency="usd" height="300" width='300' locale="pt"></coingecko-coin-price-chart-widget>
					
					<coingecko-coin-price-chart-widget  coin-id="pancakeswap-token" currency="usd" height="300" width='300' locale="pt"></coingecko-coin-price-chart-widget>
					
					<coingecko-coin-price-chart-widget  coin-id="aquagoat" currency="usd" height="300" width='300' locale="pt"></coingecko-coin-price-chart-widget>
					
					
				</Row>
		<Footer />		
			</Container>	
		</Container>
    </div>
	
	
  )
};

export async function getStaticProps(context) {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=1&interval=1m')
  const data = await res.json()
  const resBsc = await fetch('https://api.bscscan.com/api?module=token&action=tokeninfo&contractaddress=0xb1fccd3aa9661d05b64e077b19acd815b616bc38&apikey=VPBWF48NC149A1VJA5MDHUNJK74N1KJB2S');
  const dataBsc = await resBsc.json()	
  const resToken = await fetch('https://api.pancakeswap.info/api/v2/tokens');
  const dataToken = await resToken.json()
  
  if (!data || !dataBsc) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data, dataToken } // will be passed to the page component as props

  }
}



