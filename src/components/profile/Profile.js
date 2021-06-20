import React, { useState } from 'react';
import { Avatar, Badge, Button, Grid, IconButton, InputAdornment, TextField, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from '../../styles/Profile/profile';



const Profile = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
    const [state, setState] = useState({
        Fname: 'Tenz',
        Lname: 'Tyson',
        email: 'shroudlovestenz@gmail.com',
        ph: '6969696969'
    });
    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };
    const notifications = [];
    for (let i = 1; i <= 100; i++) {
        notifications.push(i);
    }
    return (
        <>
            <Grid container direction={matchSm ? 'column' : 'row'} className={classes.container} justify="center" alignItems={matchSm ? 'center' : undefined}>
                {/* Profile section */}
                <Grid
                    item
                    style={{
                        backgroundColor: '#fff',
                        paddingTop: '1em',
                        borderRadius: 7,
                        height: '37em',
                        width: matchSm ? '100%' : '50%',
                        boxShadow: theme.shadows[4]
                    }}
                >
                    <Grid container direction="column" alignItems="center" justify="center">
                        <Grid item>
                            <Badge
                                badgeContent={
                                    <IconButton
                                        style={{
                                            backgroundColor: '#fff',
                                            padding: 6,
                                            position: 'relative',
                                            left: -15,
                                            top: -13,
                                            boxShadow: theme.shadows[4]
                                        }}
                                    >
                                        <EditIcon style={{ fontSize: '0.8em' }} />
                                    </IconButton>
                                }
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right'
                                }}
                            >
                                <Avatar
                                    style={{
                                        width: '6em',
                                        height: '6em',
                                        backgroundColor: 'rgba(159, 42, 42, 0.63)'
                                    }}
                                ></Avatar>
                            </Badge>
                        </Grid>
                        <Grid item style={{ marginTop: '1em' }}>
                            <Typography
                                variant="body2"
                                style={{
                                    fontFamily: 'Ubuntu, sans-serif',
                                    fontSize: '1.1em',
                                    fontWeight: 500
                                }}
                            >
                                Personal Details
                            </Typography>
                        </Grid>
                        <Grid item container className={classes.inputContainer}>
                            <form style={{ width: '100%' }} autoComplete="off">
                                <Grid item className={classes.inputItem}>
                                    <TextField fullWidth variant="outlined" label="First Name" name="Fname" required value={state.Fname} onChange={(e) => onChange(e)} autoFocus />
                                </Grid>
                                <Grid item className={classes.inputItem}>
                                    <TextField fullWidth variant="outlined" label="Last Name" name="Lname" required value={state.Lname} onChange={(e) => onChange(e)} />
                                </Grid>
                                <Grid item className={classes.inputItem}>
                                    <TextField fullWidth variant="outlined" label="Email" name="email" type="email" required value={state.email} onChange={(e) => onChange(e)} />
                                </Grid>
                                <Grid item className={classes.inputItem}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Phone-No."
                                        name="ph"
                                        required
                                        value={state.ph}
                                        onChange={(e) => onChange(e)}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">+91</InputAdornment>
                                        }}
                                    />
                                </Grid>
                                <Grid item className={classes.inputItem}>
                                    <Grid container alignItems="center" justify="flex-end">
                                        <Grid item style={{ marginRight: '2em' }}>
                                            <Typography variant="body2" style={{ color: theme.palette.common.orange }}>
                                                Reset Password
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Button className={classes.saveButton} variant="contained">
                                                Save
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Profile section End */}
                
                {/* Notifications Section */}

                <Grid
                    item
                    style={{
                        backgroundColor: '#fff',
                        paddingTop: '0.7em',
                        marginLeft: matchSm ? 0 : '1em',
                        borderRadius: 7,
                        height: '37em',
                        width: matchSm ? '100%' : '40%',
                        marginTop: matchSm ? '5em' : 0,
                        boxShadow: theme.shadows[4]
                    }}
                >
                    <Grid container direction="column" justify="center">
                        <Grid item container alignItems="center">
                            <Typography
                                variant="h5"
                                align="left"
                                style={{
                                    fontFamily: 'Ubuntu, sans-serif',
                                    fontSize: '1.7em',
                                    paddingBottom: '0.2em',
                                    paddingLeft: '0.5em'
                                }}
                            >
                                Notifications
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            style={{
                                width: '100%',
                                backgroundColor: 'rgba(196, 196, 196, 1)',
                                height: '30.8em',
                                overflowY: 'scroll'
                            }}
                        >
                            <Grid container style={{ padding: '0.2em 1em 0.2em 1em' }}>
                                {notifications.map((notification, ind) => {
                                    return (
                                        <Grid key={ind} item container direction="row" alignItems="center" justify="space-between" className={classes.notificationItem}>
                                            <Typography align="left" className={classes.notificationsText}>
                                                {`notification${ind + 1}`}
                                            </Typography>
                                            <Typography align="right" className={classes.link}>
                                                Click Here
                                            </Typography>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body2"
                                style={{
                                    fontFamily: 'Ubuntu, sans-serif',
                                    paddingTop: '0.65em',
                                    paddingRight: '1em',
                                    color: theme.palette.common.orange,
                                    fontSize: '0.95em',
                                    cursor: 'pointer'
                                }}
                                align="right"
                            >
                                Mark all as read
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* Notifications Section End */}
                </Grid>
            </Grid>
            
            {/* Table Data Section */}

            <Grid container direction="row" justify="space-between" alignItems="center" style={{ padding: '0 1em' }}>
                <Grid
                    item
                    style={{
                        padding: '1em 1.3em',
                        backgroundColor: '#D4D4D4',
                        marginTop: '0.8em',
                        borderTopRightRadius: 7,
                        borderTopLeftRadius: 7
                    }}
                >
                    <Typography style={{ fontFamily: 'Ubuntu, sans-serif', fontWeight: 500 }} variant="body2">
                        MANAGE DATA
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" style={{ height: '100vh', backgroundColor: '#D4D4D4' }}>
                <Typography
                    style={{
                        fontFamily: 'Ubuntu, sans-serif',
                        fontWeight: 500,
                        fontSize: '1.5em'
                    }}
                    variant="body2"
                >
                    Table
                </Typography>
            </Grid>
        </>
    );
};

export default Profile;
