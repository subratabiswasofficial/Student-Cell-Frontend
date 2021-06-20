import React from 'react';
import { Button, Dialog, DialogContent, Grid, Input, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import jgecBackground from '../../img/landingpageBackground.jpg';
import logo from '../../img/logo.png';
import modal from '../../img/modal.png';
import modalContainer from '../../img/modalContainer.png';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundBlendMode: 'screen',
        background: `url(${jgecBackground}),url(${modal})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'all 3s ease-in-out',
        padding: '1em',
        [theme.breakpoints.down('xs')]: {
            mpadding: '0em'
        }
    },
    logo: {
        width: '17em',
        marginBottom: '3em',
        marginTop: '2em'
    },
    inputContainer: {
        marginBottom: '2em'
    },
    inputLabel: {
        marginRight: '5em',
        color: '#323C4F',
        fontFamily: 'Ubuntu, sans-serif',
        opacity: 0.7,
        [theme.breakpoints.down('sm')]: {
            marginRight: '3em'
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: '1em'
        }
    },
    inputRoot: {
        backgroundColor: '#fff',
        width: '20em',
        border: '1px solid #525E6C',
        borderRadius: '5px',
        padding: '0 0.5em 0 1em',
        [theme.breakpoints.down('sm')]: {
            width: '15em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '14em',
            padding: '0.3em 0.3em 0.3em 0.5em'
        }
    },
    header: {
        color: '#323C4F',
        fontFamily: 'Ubuntu, sans-serif',
        opacity: 0.7,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5em'
        }
    },
    inputInput: {
        color: '#323C4F',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '0.9em'
    },
    activeTab: {},
    tab: {
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '1.1em'
    },
    submitBtn: {
        backgroundColor: theme.palette.common.orange,
        '&:hover': {
            backgroundColor: theme.palette.common.orange
        },
        padding: '0.5em 1.5em',
        color: '#fff',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '1.1em',
        marginRight: '2em'
    }
}));

const AuthModal = ({ setOpenAuthModal, openAuthModal, activeTab, setActiveTab }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchXs = useMediaQuery(theme.breakpoints.down('xs'));
    const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchMd = useMediaQuery(theme.breakpoints.down('md'));
    const matches = useMediaQuery('(max-width:360px)');
    return (
        <>
            <Dialog fullScreen style={{ backgroundBlendMode: 'screen' }} open={openAuthModal} onClose={() => setOpenAuthModal(false)}>
                <DialogContent className={classes.root}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <img src={logo} className={classes.logo} alt="Jalpaigudi Government Engineering College" />
                        </Grid>
                        <Grid container justify="center">
                            <Grid
                                item
                                style={{
                                    backgroundColor: '#F8F8F8',
                                    padding: '1em 2em',
                                    borderTopRightRadius: '5px',
                                    borderTopLeftRadius: '5px',
                                    marginRight: '1px',
                                    //   borderBottom:
                                    //     activeTab !== 0 ? "2px solid rgba(#fff,.3)" : "inherited",
                                    opacity: activeTab === 0 ? 1 : 0.5,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease-in-out'
                                }}
                                onClick={() => setActiveTab(0)}
                            >
                                <Typography variant="body1" className={classes.tab}>
                                    SIGN-IN
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                style={{
                                    backgroundColor: '#F8F8F8',
                                    padding: '1em 2em',
                                    borderTopRightRadius: '5px',
                                    borderTopLeftRadius: '5px',
                                    //   borderBottom:
                                    //     activeTab !== 1 ? "2px solid rgba(#fff,.3)" : "inherited",
                                    opacity: activeTab === 1 ? 1 : 0.5,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease-in-out'
                                }}
                                onClick={() => setActiveTab(1)}
                            >
                                <Typography variant="body1" className={classes.tab}>
                                    SIGN-UP
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            //   style={{
                            //     background: `url(${modalContainer})`,
                            //   }}
                        >
                            <Grid
                                item
                                container
                                direction="column"
                                alignItems="center"
                                style={{
                                    background: `url(${modalContainer})`,
                                    backgroundRepeat: 'no-repeat',
                                    maxWidth: matchXs ? '100vw' : matchSm ? '80%' : matchMd ? '70%' : '50%',
                                    padding: '3em 0 3em 0',
                                    borderRadius: '15px'
                                }}
                            >
                                <Grid item>
                                    <Typography variant="h4" className={classes.header}>
                                        “Enter your details”
                                    </Typography>
                                </Grid>
                                {activeTab === 1 ? (
                                    <form
                                        style={{ width: '100%', marginTop: '5em' }}
                                        autoComplete="off"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        <Grid item container justify="center" alignItems="center" className={classes.inputContainer} direction={matches ? 'column' : 'row'}>
                                            <Grid item className={classes.inputLabel}>
                                                <Typography variant="subtitle2">First Name :</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Input
                                                    disableUnderline={true}
                                                    classes={{
                                                        root: classes.inputRoot,
                                                        input: classes.inputInput
                                                    }}
                                                    placeholder="Enter your First name"
                                                    inputProps={{ 'aria-label': 'description' }}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item container justify="center" alignItems="center" className={classes.inputContainer} direction={matches ? 'column' : 'row'}>
                                            <Grid item className={classes.inputLabel}>
                                                <Typography variant="subtitle2">Last Name :</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Input
                                                    disableUnderline={true}
                                                    classes={{
                                                        root: classes.inputRoot,
                                                        input: classes.inputInput
                                                    }}
                                                    placeholder="Enter your Last name"
                                                    inputProps={{ 'aria-label': 'description' }}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item container justify="center" alignItems="center" className={classes.inputContainer} direction={matches ? 'column' : 'row'}>
                                            <Grid item className={classes.inputLabel}>
                                                <Typography variant="subtitle2">E-Mail :</Typography>
                                            </Grid>
                                            <Grid item style={{ marginRight: '-1.9em' }}>
                                                <Input
                                                    error={true}
                                                    disableUnderline={true}
                                                    classes={{
                                                        root: classes.inputRoot,
                                                        input: classes.inputInput
                                                    }}
                                                    type="email"
                                                    placeholder="Enter your E-mail Adress"
                                                    inputProps={{ 'aria-label': 'description' }}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item container justify="center" alignItems="center" className={classes.inputContainer} direction={matches ? 'column' : 'row'}>
                                            <Grid item className={classes.inputLabel}>
                                                <Typography variant="subtitle2">Phone No. :</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Input
                                                    disableUnderline={true}
                                                    classes={{
                                                        root: classes.inputRoot,
                                                        input: classes.inputInput
                                                    }}
                                                    placeholder="Enter your Contact Number"
                                                    inputProps={{ 'aria-label': 'description' }}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item container justify="center" alignItems="center" className={classes.inputContainer} direction={matches ? 'column' : 'row'}>
                                            <Grid item className={classes.inputLabel}>
                                                <Typography variant="subtitle2">Password :</Typography>
                                            </Grid>
                                            <Grid item style={{ marginRight: '-0.4em' }}>
                                                <Input
                                                    disableUnderline={true}
                                                    classes={{
                                                        root: classes.inputRoot,
                                                        input: classes.inputInput
                                                    }}
                                                    type="password"
                                                    placeholder="Password"
                                                    inputProps={{ 'aria-label': 'description' }}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item container justify="center" alignItems="center">
                                            <Button variant="contained" type="submit" className={classes.submitBtn} disableRipple>
                                                Submit
                                            </Button>
                                            <Button onClick={() => setOpenAuthModal(false)}>
                                                <ClearIcon /> cancel
                                            </Button>
                                        </Grid>
                                    </form>
                                ) : (
                                    <form
                                        style={{ width: '100%', marginTop: '5em' }}
                                        autoComplete="off"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        <Grid item container justify="center" alignItems="center" className={classes.inputContainer}>
                                            <Grid item className={classes.inputLabel}>
                                                <Typography variant="subtitle2">E-Mail :</Typography>
                                            </Grid>
                                            <Grid item style={{ marginRight: '-1.9em' }}>
                                                <Input
                                                    error={true}
                                                    disableUnderline={true}
                                                    classes={{
                                                        root: classes.inputRoot,
                                                        input: classes.inputInput
                                                    }}
                                                    type="email"
                                                    placeholder="Enter your E-mail Adress"
                                                    inputProps={{ 'aria-label': 'description' }}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid item container justify="center" alignItems="center" className={classes.inputContainer}>
                                            <Grid item className={classes.inputLabel}>
                                                <Typography variant="subtitle2">Password :</Typography>
                                            </Grid>
                                            <Grid item style={{ marginRight: '-0.4em' }}>
                                                <Input
                                                    disableUnderline={true}
                                                    classes={{
                                                        root: classes.inputRoot,
                                                        input: classes.inputInput
                                                    }}
                                                    type="password"
                                                    placeholder="Password"
                                                    inputProps={{ 'aria-label': 'description' }}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item container justify="center" alignItems="center">
                                            <Button variant="contained" type="submit" className={classes.submitBtn} disableRipple>
                                                Submit
                                            </Button>
                                            <Button onClick={() => setOpenAuthModal(false)}>
                                                <ClearIcon /> cancel
                                            </Button>
                                        </Grid>
                                    </form>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default AuthModal;
