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
                                    src="data:image/jpeg;base64,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"
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
