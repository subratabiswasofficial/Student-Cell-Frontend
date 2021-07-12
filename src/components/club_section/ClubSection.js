import { Grid, Hidden } from '@material-ui/core';
import React from 'react';
import CommonNavigation from '../layout/CommonNavigation';
import { makeStyles } from '@material-ui/styles';

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
        }
    },
    studentNavbarContainer: {
        backgroundColor: theme.palette.common.darkBlue,
        color: '#fff',
        paddingTop: '0.5em',
        position: 'sticky',
        top: '-1px',
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

const ClubSection = ({ activeSection, setActiveSection }) => {
    const classes = useStyles(0);
    return (
        <>
            <Grid container className={classes.mainContainer} direction="column">
                <Hidden smDown>
                    <CommonNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
                </Hidden>
            </Grid>
        </>
    );
};

export default ClubSection;
