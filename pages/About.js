import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from './components/Navigation.js';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem } from '@material-ui/core';
import styles from '../styles/Home.module.css';
import { Container } from 'react-bootstrap';
import { fadeInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Row, Col, Card,  } from 'react-bootstrap';
import computer from './img/computer.jpg';
import Image from 'next/image';
import Footer from './components/Footer.js';

	const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
 
	const FadeLeftDiv = styled.div`
	  animation: 1s ${fadeInLeftAnimation};
	  margin-top: 15vh;
	`;
	
	const fadeInRightAnimation = keyframes`${fadeInLeft}`;
 
	const FadeRightDiv = styled.div`
	  animation: 1s ${fadeInRightAnimation};
	  margin-top: 15vh;
	`;	




export default function About(){

	
	return (
	
			<div>
		  <Head>
			<title>Hidrogen</title>
			<meta name="Hidrogen - Pancake TOP 100" content="Binance Smart Chain token dashboard" />
			<link rel="icon" href="/favicon.ico" />
		  </Head>			
			<Navigation />
			<Container>
			
			<FadeLeftDiv>
			<Row xs={1} sm={2} md={2} lg={2} xl={2}>
				<Col>
				<h3>About Hidrogen</h3>
				<p>
					As hidrogen is the rocket fuel, Hidrogen born as a crypto dashboard that aim to help small gem tokens to reach it&apos;s maximum potential through exploratory analisis of it performance and data amostrage.
					Diferent from coimarketcap we do not need to wait a token to reach a minimum quantity of holders to display it&apos;s price, for example. 
					And we also aim to brings bout free and sponsored content for any solidity developer or company who want to bring they assets to the eye of the public.
				</p>
				</Col>
				<Col>
					<Image className={styles.img} src={computer} width={640} height={425} />
				</Col>
			</Row>		
			</FadeLeftDiv>
			
			<FadeRightDiv>
			<h3>Development</h3>
				<Row xs={1} sm={2} md={'auto'} lg={'auto'} xl={'auto'} >
						<Card className={styles.card} raised={true}>
							<Card.Body>
							<Card.Title>$600</Card.Title>
								<List>
									<ListItem>
										Token Smart Contract.
									</ListItem>
									<ListItem>
										Full dAPP with native token price chart.
									</ListItem>
									<ListItem>
										Telegram price bot.
									</ListItem>
								</List>
							</Card.Body>
						</Card>
						<Card className={styles.card} raised={true}>
							<Card.Body>
							<Card.Title>$800</Card.Title>
								<List>
									<ListItem>
										NFT minting platform.
									</ListItem>
									<ListItem>
										Full dAPP with native token and price chart.
									</ListItem>
									<ListItem>
										Telegram price bot.
									</ListItem>
								</List>
							</Card.Body>
						</Card>
						
						<Card className={styles.card} raised={true}>
							<Card.Body>
							<Card.Title>$900</Card.Title>
								<List>
									<ListItem>
										Crypto dashboard with 0x, Coing Gecko, Coin Marketcap and PancakeSwap API's integration.
									</ListItem>
									<ListItem>
										Full dAPP with native token price chart.
									</ListItem>
									<ListItem>
										Telegram price bot for the listed tokens.
									</ListItem>
								</List>
							</Card.Body>
						</Card>
					</Row>
			</FadeRightDiv>
						<FadeRightDiv>
			<Typography variant='h3'>Sponsoring</Typography>
				<Row xs={1} sm={2} md={'auto'} lg={'auto'} xl={'auto'}>
						<Card className={styles.card} raised={true}>
							<Card.Body>
							<Card.Title>$30/Week</Card.Title>
								<List>
									<ListItem>
										Sponsor a token of your choice on our platform. 
									</ListItem>
									<ListItem>
										Coin Gecko price, token price, social links in every portal page.
									</ListItem>
									<ListItem>
										Your token price on our Hidrogen Price Bot.
									</ListItem>
								</List>
							</Card.Body>
						</Card>

						<Card className={styles.card} raised={true}>
							<Card.Body>
							<Card.Title>$50/week</Card.Title>
								<List>
									<ListItem>
										Your countdown highlighted in every of our page.
									</ListItem>
									<ListItem>
										Your token chart highlighted in every of our page.
									</ListItem>
									<ListItem>
										Telegram price bot.
									</ListItem>
								</List>
							</Card.Body>
						</Card>
				
				</Row>
			</FadeRightDiv>
		<Footer />
		</Container>	
		</div>
	
	);

}