import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid,Typography } from '@material-ui/core';
import collegeLogo from '../../assets/collegeLogo.png';
import navData from '../navbar/navlinkData';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    
    footer: {
        backgroundColor: theme.palette.common.darkBlue,
        width: "100%",
        // position: "relative",
        // zIndex: 1302,
        padding:'2em 0'
    },
    logo:{
        width:'7em'
    },
    copyrights:{
        fontFamily:'Ubuntu, sans-serif',
        fontSize:'1em',
        color:'#fff'
    },
    gridLink: {
        color: "white",
        fontSize: "0.75rem",
        fontFamily: "Arial",
        fontWeight: "bold",
        textDecoration: "none",
    },
    gridItem: {
        margin: "2rem",
    },
}));


const Footer = ({setIsInProfilePage,setIsInHomePage,setActiveSection}) => {
    const classes = useStyles();
    return (
        <>
            <footer className={classes.footer}>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <Grid container direction="column" alignItems="center">
                            <Grid item style={{marginBottom:'1em'}}>
                                 <img className={classes.logo} alt="" src={collegeLogo} />
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" className={classes.copyrights}>
                                 © 2021 JGEC, ALL RIGHTS RESERVED
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row">

                            <Grid item className={classes.gridItem}>
                                <Grid container direction="column" spacing={2}>
                                    {navData[0].links.map(link=>{
                                        return(
                                            <Grid component={Link} to={`/${navData[0].to}`} className={classes.gridLink} key={link.link} item
                                            onClick={()=>{
                                                setIsInHomePage(false);
                                                setIsInHomePage(false);
                                                setActiveSection(1);
                                            }}
                                            >
                                                 {link.link}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>

                            <Grid item className={classes.gridItem}> 
                            <Grid container direction="column" spacing={2}>
                                    {navData[1].links.map(link=>{
                                        return(
                                            <Grid component={Link} to={`/${navData[1].to}`} className={classes.gridLink} key={link.link} item
                                            onClick={()=>{
                                                setIsInHomePage(false);
                                                setIsInHomePage(false);
                                                setActiveSection(2);
                                            }}
                                            >
                                                 {link.link}
                                            </Grid>
                                        )
                                    })}
                            </Grid>
                            </Grid>

                            <Grid item className={classes.gridItem}>
                            <Grid container direction="column" spacing={2}>
                                    {navData[2].links.map(link=>{
                                        return(
                                            <Grid component={Link} to={`/${navData[2].to}`} className={classes.gridLink} key={link.link} item
                                           onClick={()=>{
                                                setIsInHomePage(false);
                                                setIsInHomePage(false);
                                                setActiveSection(3);
                                            }}
                                            >
                                                 {link.link}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>

                            <Grid item className={classes.gridItem}>
                            <Grid container direction="column" spacing={2}>
                                    {navData[3].links.map(link=>{
                                        return(
                                            <Grid component={Link} to={`/${navData[3].to}`} className={classes.gridLink} key={link.link} item
                                            onClick={()=>{
                                                setIsInHomePage(false);
                                                setIsInHomePage(false);
                                                setActiveSection(4);
                                            }}
                                            >
                                                 {link.link}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>

                            <Grid item className={classes.gridItem}>
                            <Grid container direction="column" spacing={2}>
                                    {navData[4].links.map(link=>{
                                        return(
                                            <Grid component={Link} to={`/${navData[4].to}`} className={classes.gridLink} key={link.link} item
                                            onClick={()=>{
                                                setIsInHomePage(false);
                                                setIsInHomePage(false);
                                                setActiveSection(5);
                                            }}
                                            >
                                                 {link.link}
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </footer>
        </>
    )
}

export default Footer;
