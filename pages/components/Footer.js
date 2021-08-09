import { List, ListItem, TextField, Box, Form, Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import RedditIcon from '@material-ui/icons/Reddit';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col, button  } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';


		const useStyles = makeStyles((theme) => ({
		
		form: {
			
			margin: theme.spacing(1),
			marginLeft: '30%',
			display: 'flex',
			flexDirection: 'row',
			marginTop: '5vh'
			
			
		},
		
		list: {
			
			display: 'flex',
			flexDirection: 'row',
			marginLeft: '40%'

			
		},
		
		footer: {
			
			marginTop: '15vw',
			textAlign: 'center'
			
		},

		icon:{
			
			position: 'relative',
			marginRight: '3vw',
			marginTop: '15vw'
			
		},

		textInput:{
			
			marginRight: '3vw',
		
			
		},

		copyRight: {
			
			marginLeft: '25vw',
			marginTop: '5vh'
			
		},

		listLink:{
			
			marginTop: '5vh'
			
		},

		listLinkItem:{
			
			cursor: 'pointer'
			
		},

		socialList:{
			
			position: 'relative',
			left: '30vw'
			
		},

		comtactForm:{
			
			left: '30vw',
			position: 'relative'
			
		}	
		
		
	}));

export default function Footer(){
	

	
	const classes = useStyles();

	return(
		<>
		<Col className={styles.marginLeft}>
			<Row>		
				<box className={classes.socialList}>
					<TelegramIcon className={classes.icon} />
					<RedditIcon className={classes.icon} />
					<InstagramIcon className={classes.icon} />
					<TwitterIcon  className={classes.icon} />
					<FacebookIcon className={classes.icon} />
				</box>
			</Row>
			<Row>
				<box className={classes.contactForm}>
					<form className={classes.form}>
						<TextField id="outlined-basic" className={classes.textInput} label="Your email" variant="standard" />
						<Button variant="contained">Subscribe</Button>
					</form>
				</box>
			</Row>
		</Col>
		<div className={styles.listLink}>
		<Row xs={1} sm={2} md={3} lg={4} xl={4}>
				<ul>
					<li><h6>Listing forms</h6></li>
					<li className={classes.listLinkItem} onClick={() => {window.open('https://forms.gle/gPdXUWtGHCwm4xYo9');}}>Token listing</li>
					<li className={classes.listLinkItem} onClick={() => {window.open('https://forms.gle/PSDWWFtk7P71MEQT9');}}>Countdown listing</li>
				</ul>
				<ul>
					<li><h6>Tokens</h6></li>
					<li>Countdowns</li>
					<li>Listed Tokens</li>
					<li>PancakeSwap Top 100</li>
				</ul>
				<ul>
					<li><h6>Info</h6></li>
					<li>Home</li>
					<li>About</li>
				</ul>
				<ul>
					<li><h6>Contact</h6></li>
					<li>hidrogen.blockchain@hotmail.com</li>
					<li>+55 71 992828042</li>
				</ul>		
		</Row>
		</div>
		<Typography className={classes.copyRight}variant='h6'>© 2020 Copyright: Hidrogen All Rights Reserved</Typography>
		</>
	);

}