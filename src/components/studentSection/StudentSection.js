import { Grid, Typography, useMediaQuery, Paper,Hidden } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Achievements from './Achievements';
import CommonNavigation from '../layout/CommonNavigation';
import Research from './Research';
import Mardocuments from './Mardocuments';
import Biling from './Biling';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        paddingTop: '4.99em',
        backgroundColor: 'rgba(232, 232, 232, 1)',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '5em'
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '4.9em'
        },
        scrollSnapType: 'mandatory'
    },
    studentNavbarContainer: {
        backgroundColor: theme.palette.common.darkBlue,
        color: '#fff',
        paddingTop: '0.5em',
        position: 'sticky',
        top: '-1px',
        zIndex: 303,
        [theme.breakpoints.down('sm')]: {
            position: 'static',
            paddingBottom: '0.5em'
        }
    },
    studentNavbarItem: {
        padding: '1em 3em 1em 3em',
        cursor: 'pointer'
    },
    activeStudentNavbarItem: {
        backgroundColor: 'rgba(232, 232, 232, 1)',
        color: theme.palette.common.darkBlue,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        [theme.breakpoints.down('sm')]: {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }
    },
    studentNavbarText: {
        fontFamily: 'Ubuntu, sans-serif',
        fontWeight: 500
    },
    sectionItem: {
        color: theme.palette.common.darkBlue,
        padding: '1em',
        marginLeft: '1em',
        fontWeight: 500,
        fontFamily: 'Ubuntu, sans-serif',
        cursor: 'pointer'
    },
    sectionContainer: {
        backgroundColor: '#fff'
    },
    activeSectionItem: {
        backgroundColor: 'rgba(218, 216, 216, 1)',
        borderTop: `3px solid ${theme.palette.common.orange}`
    }
}));

const Achivements = ({ activeSection, setActiveSection }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
    const [elevation, setElevation] = useState(false);
    const [activeStickyItem, setActiveStickyItem] = useState(1);

    const changeElevation = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 170) {
            setElevation(true);
        } else {
            setElevation(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeElevation);
        return () => {
            window.removeEventListener('scroll', changeElevation);
        };
    });
    return (
        <>
            <Grid container style={{}} className={classes.mainContainer} direction="column">
                <Hidden smDown>
                    <CommonNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
                </Hidden>
                {/* Student Navbar Section */}
                <Grid
                    item
                    container
                    component={Paper}
                    elevation={elevation ? 4 : 0}
                    square
                    direction={matchSm ? 'column' : 'row'}
                    justify={matchSm ? 'center' : 'space-around'}
                    className={classes.studentNavbarContainer}
                    alignItems="center"
                >
                    <Grid
                        item
                        onClick={() => {
                            setActiveStickyItem(1);
                        }}
                        className={`${classes.studentNavbarItem} ${activeStickyItem === 1 && classes.activeStudentNavbarItem}`}
                    >
                        <Typography variant="body1" align="center" className={classes.studentNavbarText}>
                            ACHIEVEMENTS
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        onClick={() => {
                            setActiveStickyItem(2);
                        }}
                        className={`${classes.studentNavbarItem} ${activeStickyItem === 2 && classes.activeStudentNavbarItem}`}
                    >
                        <Typography variant="body1" align="center" className={classes.studentNavbarText}>
                            RESEARCH
                        </Typography>
                    </Grid>
                    {/* <Grid item className={classes.studentNavbarItem}>
                        <Typography variant="body1" className={classes.studentNavbarText}>
                            SEMESTER
                        </Typography>
                    </Grid> */}
                    <Grid
                        item
                        onClick={() => {
                            setActiveStickyItem(3);
                        }}
                        className={`${classes.studentNavbarItem} ${activeStickyItem === 3 && classes.activeStudentNavbarItem}`}
                    >
                        <Typography variant="body1" align="center" className={classes.studentNavbarText}>
                            MAR DOCUMENENTS
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        onClick={() => {
                            setActiveStickyItem(4);
                        }}
                        className={`${classes.studentNavbarItem} ${activeStickyItem === 4 && classes.activeStudentNavbarItem}`}
                    >
                        <Typography variant="body1" align="center" className={classes.studentNavbarText}>
                            BILLING
                        </Typography>
                    </Grid>
                </Grid>
                {/* Student Navbar Section End */}

                {/* Student Achievements Section */}
                {activeStickyItem === 1 && (
                    <Grid item>
                        <Achievements />
                    </Grid>
                )}
                {/* Student Achievements Section */}

                {/* Student Research Section */}
                {activeStickyItem === 2 && (
                    <Grid item>
                        <Research />
                    </Grid>
                )}
                {/* Student Research Section */}

                {/* Student Mardocuments Section */}
                {activeStickyItem === 3 && (
                    <Grid item>
                        <Mardocuments />
                    </Grid>
                )}
                {/* Student Mardocuments Section */}

                {/* Student Biling Section */}
                {activeStickyItem === 4 && (
                    <Grid item>
                        <Biling />
                    </Grid>
                )}
                {/* Student Biling Section */}
            </Grid>
        </>
    );
};

export default Achivements;
