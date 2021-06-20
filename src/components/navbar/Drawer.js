import React, { useState } from 'react';
import {
    Grid,
    IconButton,
    //   List,
    //   ListItem,
    //   ListItemText,
    SwipeableDrawer,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Divider
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
// import logo from "../../img/logo.png";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import linkdatas from '../navbar/navlinkData';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    drawerIconContainer: {
        marginLeft: 'auto',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    drawerIcon: {
        height: '30px',
        width: '30px',
        color: '#fff'
    },
    drawer: {
        backgroundColor: '#fff',
        minWidth: '250px'
    },
    logo: {
        maxWidth: '17em',
        marginLeft: '-1em'
    },
    logoWraper: {
        backgroundColor: theme.palette.common.darkBlue,
        padding: '1em 0 1em 0',
        width: '100%'
    },
    accordion: {
        maxWidth: 300,
        border: 0
    },
    link: {
        color: theme.palette.common.darkBlue,
        fontSize: '1em',
        fontFamily: 'Ubuntu, sans-serif',
        cursor: 'pointer',
        marginTop: '0.7em',
        marginBottom: '0.7em'
    },
    heading: {
        color: theme.palette.common.darkBlue,
        fontSize: '1.1em',
        fontFamily: 'Ubuntu, sans-serif'
    }
}));

const Drawer = ({ openDrawer, setOpenDrawer, auth: { isAuthenticated, loading }, setOpenAuthModal, setActiveTab, setIsInProfilePage, isInProfilePage }) => {
    const classes = useStyles();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
                anchor="right"
            >
                <Grid container direction="column" alignItems="center">
                    <Grid item className={classes.logoWraper}>
                        <Grid container alignItems="center" justify="space-between" style={{ padding: '0.5em 1.5em 0.5em 1.1em' }}>
                            <Grid item>
                                {isAuthenticated ? (
                                    <Typography
                                        style={{ color: '#fff', cursor: 'pointer', fontFamily: 'Ubuntu, sans-serif' }}
                                        variant="body1"
                                        component={Link}
                                        to="/profile/me"
                                        onClick={() => {
                                            setIsInProfilePage(true);
                                            setOpenDrawer(false);
                                        }}
                                    >
                                        PROFILE
                                    </Typography>
                                ) : (
                                    <Typography
                                        style={{ color: '#fff', cursor: 'pointer', fontFamily: 'Ubuntu, sans-serif' }}
                                        variant="body1"
                                        onClick={() => {
                                            setOpenAuthModal(true);
                                            setActiveTab(0);
                                            setOpenDrawer(false);
                                        }}
                                    >
                                        Login
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item>
                                {isAuthenticated ? (
                                    <Typography style={{ color: '#fff', cursor: 'pointer', opacity: 0.85, fontFamily: 'Ubuntu, sans-serif' }} variant="body1">
                                        Logout
                                    </Typography>
                                ) : (
                                    <Typography
                                        style={{ color: '#fff', cursor: 'pointer', fontFamily: 'Ubuntu, sans-serif' }}
                                        variant="body1"
                                        onClick={() => {
                                            setOpenAuthModal(true);
                                            setActiveTab(1);
                                            setOpenDrawer(false);
                                        }}
                                    >
                                        Signup
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item style={{ width: '100%' }}>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordion} elevation={0}>
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                                style={{
                                                    color: expanded === 'panel1' ? theme.palette.common.orange : 'inherit'
                                                }}
                                            />
                                        }
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography
                                            className={classes.heading}
                                            style={{
                                                color: expanded === 'panel1' ? theme.palette.common.orange : 'inherit'
                                            }}
                                        >
                                            STUDENT
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        style={{
                                            backgroundColor: '#C4C4C4',
                                            width: '100%',
                                            opacity: 0.9
                                        }}
                                    >
                                        <Grid container direction="column">
                                            {linkdatas[0].links.map((linkName) => {
                                                return (
                                                    <Grid item key={linkName.link}>
                                                        <Typography variant="body2" className={classes.link}>
                                                            {linkName.link}
                                                        </Typography>
                                                    </Grid>
                                                );
                                            })}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                            </Grid>

                            {/* Second Accordion */}

                            <Grid item>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.accordion} elevation={0}>
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                                style={{
                                                    color: expanded === 'panel2' ? theme.palette.common.orange : 'inherit'
                                                }}
                                            />
                                        }
                                        aria-controls="panel2bh-content"
                                        id="panel2bh-header"
                                    >
                                        <Typography
                                            className={classes.heading}
                                            style={{
                                                color: expanded === 'panel2' ? theme.palette.common.orange : 'inherit'
                                            }}
                                        >
                                            CLUB
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        style={{
                                            backgroundColor: '#C4C4C4',
                                            opacity: 0.9,
                                            width: '100%'
                                        }}
                                    >
                                        <Grid container direction="column">
                                            {linkdatas[1].links.map((linkName) => {
                                                return (
                                                    <Grid item key={linkName.link}>
                                                        <Typography variant="body2" className={classes.link}>
                                                            {linkName.link}
                                                        </Typography>
                                                    </Grid>
                                                );
                                            })}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                            </Grid>

                            {/* Third Accordion */}

                            <Grid item>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.accordion} elevation={0}>
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                                style={{
                                                    color: expanded === 'panel3' ? theme.palette.common.orange : 'inherit'
                                                }}
                                            />
                                        }
                                        aria-controls="panel3bh-content"
                                        id="panel3bh-header"
                                    >
                                        <Typography
                                            className={classes.heading}
                                            style={{
                                                color: expanded === 'panel3' ? theme.palette.common.orange : 'inherit'
                                            }}
                                        >
                                            TRANING AND PLACEMENTS
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        style={{
                                            backgroundColor: '#C4C4C4',
                                            opacity: 0.9,
                                            width: '100%'
                                        }}
                                    >
                                        <Grid container direction="column">
                                            {linkdatas[2].links.map((linkName) => {
                                                return (
                                                    <Grid item key={linkName.link}>
                                                        <Typography variant="body2" className={classes.link}>
                                                            {linkName.link}
                                                        </Typography>
                                                    </Grid>
                                                );
                                            })}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                            </Grid>

                            {/* Fourth Accordion */}

                            <Grid item>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.accordion} elevation={0}>
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                                style={{
                                                    color: expanded === 'panel4' ? theme.palette.common.orange : 'inherit'
                                                }}
                                            />
                                        }
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header"
                                    >
                                        <Typography
                                            className={classes.heading}
                                            style={{
                                                color: expanded === 'panel4' ? theme.palette.common.orange : 'inherit'
                                            }}
                                        >
                                            HOSTEL
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        style={{
                                            backgroundColor: '#C4C4C4',
                                            opacity: 0.9,
                                            width: '100%'
                                        }}
                                    >
                                        <Grid container direction="column">
                                            {linkdatas[3].links.map((linkName) => {
                                                return (
                                                    <Grid item key={linkName.link}>
                                                        <Typography variant="body2" className={classes.link}>
                                                            {linkName.link}
                                                        </Typography>
                                                    </Grid>
                                                );
                                            })}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                            </Grid>

                            {/* Fifth Accordion */}

                            <Grid item>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={classes.accordion} elevation={0}>
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon
                                                style={{
                                                    color: expanded === 'panel5' ? theme.palette.common.orange : 'inherit'
                                                }}
                                            />
                                        }
                                        aria-controls="panel5bh-content"
                                        id="panel5bh-header"
                                    >
                                        <Typography
                                            className={classes.heading}
                                            style={{
                                                color: expanded === 'panel5' ? theme.palette.common.orange : 'inherit'
                                            }}
                                        >
                                            SOFT SKILLS
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        style={{
                                            backgroundColor: '#C4C4C4',
                                            opacity: 0.9,
                                            width: '100%'
                                        }}
                                    >
                                        <Grid container direction="column">
                                            {linkdatas[4].links.map((linkName) => {
                                                return (
                                                    <Grid item key={linkName.link}>
                                                        <Typography variant="body2" className={classes.link}>
                                                            {linkName.link}
                                                        </Typography>
                                                    </Grid>
                                                );
                                            })}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawerIcon}></MenuIcon>
            </IconButton>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps)(Drawer);
