import { Grid, Typography, useMediaQuery, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Achievements from './Achievements';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        paddingTop: '7.45em',
        backgroundColor: 'rgba(232, 232, 232, 1)',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '5em'
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '4.9em'
        }
    },
    studentNavbarContainer: {
        backgroundColor: theme.palette.common.darkBlue,
        color: '#fff',
        paddingTop: '0.5em',
        position: 'sticky',
        top: '103.6px',
        zIndex: 303,
        [theme.breakpoints.down('sm')]: {
            position: 'static'
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
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10
        }
    },
    studentNavbarText: {
        fontFamily: 'Ubuntu, sans-serif',
        fontWeight: 500
    }
}));

const Achivements = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Grid container style={{}} className={classes.mainContainer} direction="column">
                {/* Student Navbar Section */}
                <Grid
                    item
                    container
                    component={Paper}
                    elevation={3}
                    square
                    direction={matchSm ? 'column' : 'row'}
                    justify={matchSm ? 'center' : 'space-around'}
                    className={classes.studentNavbarContainer}
                    alignItems="center"
                >
                    <Grid item className={`${classes.studentNavbarItem} ${classes.activeStudentNavbarItem}`}>
                        <Typography variant="body1" className={classes.studentNavbarText}>
                            ACHIEVEMENTS
                        </Typography>
                    </Grid>
                    <Grid item className={classes.studentNavbarItem}>
                        <Typography variant="body1" className={classes.studentNavbarText}>
                            RESEARCH
                        </Typography>
                    </Grid>
                    <Grid item className={classes.studentNavbarItem}>
                        <Typography variant="body1" className={classes.studentNavbarText}>
                            SEMESTER
                        </Typography>
                    </Grid>
                    <Grid item className={classes.studentNavbarItem}>
                        <Typography variant="body1" className={classes.studentNavbarText}>
                            MAR DOCUMENENTS
                        </Typography>
                    </Grid>
                    <Grid item className={classes.studentNavbarItem}>
                        <Typography variant="body1" className={classes.studentNavbarText}>
                            BILLING
                        </Typography>
                    </Grid>
                </Grid>
                {/* Student Navbar Section End */}

                {/* Student Achievements Section */}
                <Grid item>
                    <Achievements />
                </Grid>
                {/* Student Achievements Section */}
            </Grid>
        </>
    );
};

export default Achivements;
