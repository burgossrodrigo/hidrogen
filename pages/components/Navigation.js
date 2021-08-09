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

const useStyle = makeStyles((theme) => ({
	
	  menuIcon:{
	  
	  		[theme.breakpoints.only('xs')]: {
			
			float: 'right',
			marginLeft: '133px'
			
		},
		[theme.breakpoints.between('sm', 'xl')]: {
			
			display: 'none',
			
		}
	  
  },
  
    toolbar: {
	  
	  spacing: 8,
	  
  },
  
    breadCrumbs:{
	  
	  	[theme.breakpoints.only('xs')]: {
			
		display: 'none'
			
		},
		
		[theme.breakpoints.between('sm', 'xl')]: {
			
			display: 'flex',
			fontSize: '10px',
			width: '100vw',
			float: 'right',
			marginLeft: '2vw'
			
			
		}
	  
  },
  
  	title: {

		flexGrow: 1,
		position: 'relative',
			
	},
	
	  link: {
	  

	  fontSize: 16,
	  textTransform: 'uppercase',
	  justifyContent: 'center',
	  fontFamily: 'arial'
	  
  },
  
      imageIcon: {
	width: '30px',
	position: 'relative',
    height: '30px',
	marginRight: '2.2vw',
    marginTop: '0.6vw'
	
  },
  
  titleBox:{
	  
	  display: 'flex',
	  position: 'relative',
	  width: '30vw',
	  right: '2vw'
	  
  },
  
  carousel:{
	  
	  display: 'flex'
	  
  }
  
  
	
}));	 

export default function Navigation(){
	
		const classes = useStyle();
		
			return (<Box>
			
			<Toolbar>

			<div className={classes.titleBox}>
				
				<Typography variant='h4' className={classes.title}> 
				<Image width={35} height={30} src={hidrogen}/>
					Hidrogen 
				</Typography>
			</div>

			  <Breadcrumbs className={styles.breadCrumbs}>
			  <Link className={classes.link} color="inherit" href='' variant='inherit' >
				Home
			  </Link>
			  <Link className={classes.link} color="inherit" href='About' variant='inherit' >
				About
			  </Link>
			  <Link className={classes.link} color="inherit" href='Pancake' variant='inherit' >
				Top 100 PancakeSwap
			  </Link>
			  <Link className={classes.link} color="inherit" href='' variant='inherit' >
				Countdowns
			  </Link>
			  <Link className={classes.link} color="inherit" href='' variant='inherit' >
				Listed Tokens
			  </Link>
			  <Link className={classes.link} color="inherit" href='' variant='inherit' >
				Block reading
			  </Link>			  
			</Breadcrumbs>
			<Box className={classes.menuIcon} >
					<SideDrawer className={classes.menuIcon} >
						<IconButton className={classes.menuIcon} >
							<MenuIcon className={classes.menuIcon} color="primary" />
						</IconButton>
					</SideDrawer>
			</Box>				
			</Toolbar>
			<Box className={classes.carousel}>
				<Typography variant='h4'><Carousel /></Typography>
			</Box>

</Box>)}