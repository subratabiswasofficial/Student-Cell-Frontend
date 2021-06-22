import React from 'react';
import { Button, Dialog, DialogContent, Grid, Input, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import logo from '../../assets/logo.png';
import ClearIcon from '@material-ui/icons/Clear';
import useStyles from '../../styles/Landingpage/authModal';

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
                                    opacity: activeTab === 0 ? 1 : 0.5
                                }}
                                className={classes.tab}
                                onClick={() => setActiveTab(0)}
                            >
                                <Typography variant="body1" className={classes.tabText}>
                                    SIGN-IN
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                style={{
                                    opacity: activeTab === 1 ? 1 : 0.5
                                }}
                                className={classes.tab}
                                onClick={() => setActiveTab(1)}
                            >
                                <Typography variant="body1" className={classes.tabText}>
                                    SIGN-UP
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" alignItems="center">
                            <Grid
                                item
                                container
                                direction="column"
                                alignItems="center"
                                style={{
                                    maxWidth: matchXs ? '100vw' : matchSm ? '80%' : matchMd ? '70%' : '50%'
                                }}
                                className={classes.modalContainer}
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
