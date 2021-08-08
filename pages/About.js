import React, { useState } from 'react';
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



export default function About(){

	const useStyle = makeStyles((theme) => ({
	
		card:{
			
			height: '35vh',
			marginTop: '15vh'
			
		},
		
		cardHeader:{
			
			borderBottom: '1px solid ',
			textAlign: 'center'
			
		},
		
		letterSpacing: {
			
			letterSpacing: '5px',
			marginTop: '5vh'
			
		}
		
		
		
		
	
	}));
	
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

	const classes = useStyle();
	
	return (
	
		<Container >
			<Navigation />
			
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
					</Row>
			</FadeRightDiv>
						<FadeRightDiv>
			<Typography variant='h3'>Sponsoring</Typography>
				<Row xs={1} sm={2} md={'auto'} lg={'auto'} xl={'auto'}>
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
				
				</Row>
			</FadeRightDiv>
		<Footer />	
		</Container>
	
	);

}