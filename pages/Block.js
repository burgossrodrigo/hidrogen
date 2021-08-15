import React, { useState } from 'react';
import Navigation from './components/Navigation.js';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Home.module.css';
import { Container, tr, Table, tbody, th, thead, Row, Col } from 'react-bootstrap';
import Footer from './components/Footer.js';
import Head from 'next/head';
import { Typography } from '@material-ui/core';
import {
  ApolloClient,
  gql,
  NormalizedCacheObject,
  InMemoryCache 
} from '@apollo/client';
import Link from 'next/link';

export default function Pancake(props) {
	
	console.log(props.data.ethereum.arguments);
	
	
	
	
		
  return (
		<div>
		  <Head>
			<title>Hidrogen</title>
			<meta name="Hidrogen - Block Heading" content="Binance Smart Chain token dashboard" />
			<link rel="icon" href="/favicon.ico" />
		  </Head>		
		<Navigation />
		<Container>
			<Table className={styles.table} striped bordered hover aria-label='new-pools-api'>
				<thead>
					<tr>
						<th>Pair address</th>
						<th>Block height</th>		
					</tr>
				</thead >
				<tbody>
				{props.data.ethereum.arguments.map((block) => (
				

					
					<tr key={block.id}>
						<Link href={`https://bscscan.com/address/${block.reference.address}`}><th style={{cursor: 'pointer'}}>{block.reference.address}</th></Link>					
						<th>{block.block.height}</th>
					</tr>
					
		
						
				))}
				</tbody>
			</Table>		
		</Container>
		<Footer />
	  </div>
	  
  
 )
};

export async function getStaticProps(context) { 

    const client = new ApolloClient({
    
    uri: "https://graphql.bitquery.io",
    cache: new InMemoryCache(),
    
    });

const { data } = await client.query({



query: gql`
{
  ethereum(network: bsc) {
    arguments(
      smartContractAddress: {is: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"}
      smartContractEvent: {is: "PairCreated"}
      argument: {is: "pair"}
      options: {desc: "block.height", limit: 9}
    ) {
      block {
        height
      }
      argument {
        name
      }
      reference {
        address
      }
    }
  }
}

`,

});




  return {
    props: { data } // will be passed to the page component as props

  }
}