import { Container, Row, Col } from 'react-bootstrap';
import { IoIosMenu } from 'react-icons/io';
import styles from '../../styles/Home.module.css'
import { Toolbar, 
		 Divider, 
		 Typography, 
		 IconButton, 
		 Badge,
		 Button,
		 Box,
		 Icon,
		 Link,
		 Breadcrumbs
		 } from '@material-ui/core';
import SideDrawer from './SideDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from './Carousel';
import Image from 'next/image';
import hidrogen from '../img/hidrogen.png';

	 

export default function Navigation(){
	
		
			return (<Box className={styles.navigation}>
			
			<Toolbar>

			<div className={styles.titleBox}>
				
				<h2> 
				<Image width={35} height={30} src={hidrogen}/>
					Hidrogen 
				</h2>
			</div>
			  <div className={styles.breadCrumbsBox}>	
			  <Breadcrumbs className={styles.breadCrumbs}>
			  <Link className={styles.link} color="inherit" href='/' variant='inherit' >
				Home
			  </Link>
			  <Link className={styles.link} color="inherit" href='About' variant='inherit' >
				About
			  </Link>
			  <Link className={styles.link} color="inherit" href='Pancake' variant='inherit' >
				Top 100 PancakeSwap
			  </Link>
			  <Link className={styles.link} color="inherit" href='' variant='inherit' >
				Countdowns
			  </Link>
			  <Link className={styles.link} color="inherit" href='' variant='inherit' >
				Listed Tokens
			  </Link>
			  <Link className={styles.link} color="inherit" href='Block' variant='inherit' >
				<Badge color="primary" variant="dot">New Pairs</Badge>
			  </Link>			  
			</Breadcrumbs>
			</div>
			<Box className={styles.menuIcon} >
					<SideDrawer className={styles.menuIcon} >
						<IconButton className={styles.menuIcon} >
							<MenuIcon className={styles.menuIcon} fontSize='large' color="primary" />
						</IconButton>
					</SideDrawer>
			</Box>				
			</Toolbar>
			<Box className={styles.carousel}>
				<Typography variant='h4'><Carousel /></Typography>
			</Box>

</Box>)}