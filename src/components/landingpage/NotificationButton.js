import { Avatar, Badge, Paper, Menu, Grid, Typography, Divider } from '@material-ui/core';
import React, { useState } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import transparentBackground from '../../img/transparentBackground.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '0.8em'
    }
}));

const useStyles = makeStyles((theme) => ({
    menu: {
        backgroundColor: 'transparent',
        color: '#fff',
        borderRadius: '0px',
        transition: 'all 0.15s linear',
        overflow: 'visible'
    },
    container: {
        backgroundImage: `url(${transparentBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // boxShadow:theme.shadows[9],
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    header: {
        backgroundColor: theme.palette.common.orange,
        padding: '1em 3em',
        width: '25em',
        borderTopLeftRadius: 5,
        fontWeight: 400
    },
    headerText: {
        fontSize: '1.2em',
        fontFamily: 'Ubuntu, sans-serif'
    },
    notifications: {
        padding: '0 1em 0'
    },
    notificationItem: {
        backgroundColor: '#fff',
        width: '100%',
        padding: '0.7em'
    },
    notificationsText: {
        color: '#111',
        fontFamily: 'Ubuntu, sans-serif',
        maxWidth: '15em',
        wordWrap: 'break-word',
        fontSize: '1em'
    },
    notificationsFooter: {
        backgroundColor: theme.palette.common.orange,
        padding: '1.3em 3em',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    link: {
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '0.8em',
        marginLeft: 'auto',
        color: 'blue',
        cursor: 'pointer'
    },
    menuCloseButton: {
        backgroundColor: '#fff',
        opacity: 0.8,
        padding: '0.3em 0.7em',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.9
        },
        transition: 'all 0.3 ease'
    }
}));

const NotificationButton = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme();
    return (
        <>
            <Tooltip arrow classes={useStylesBootstrap()} title="Notifications">
                <Avatar
                    aria-owns={Boolean(anchorEl) ? 'notification-menu' : undefined}
                    aria-haspopup={Boolean(anchorEl) ? 'true' : undefined}
                    onClick={(e) => handleClick(e)}
                    style={{
                        width: '2.5em',
                        height: '2.5em',
                        overflow: 'visible',
                        backgroundColor: '#fff',
                        cursor: 'pointer',
                        position: 'fixed',
                        bottom: 30,
                        right: 30,
                        zIndex: 10,
                        opacity: !Boolean(anchorEl) ? 1 : 0
                    }}
                    component={Paper}
                    elevation={10}
                >
                    <Badge badgeContent={99} color="primary" max={9}>
                        <NotificationsIcon
                            style={{
                                color: theme.palette.common.orange,
                                fontSize: '1.8em'
                            }}
                        />
                    </Badge>
                </Avatar>
            </Tooltip>

            <Menu
                id="notification-menu"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                // MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                elevation={0}
                style={{ zIndex: 1302 }}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: -200,
                    horizontal: 0
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <Grid container direction="column">
                    <Grid item container justify="flex-end">
                        <Grid item onClick={handleClose} className={classes.menuCloseButton}>
                            <KeyboardArrowDownIcon style={{ color: '#111', verticalAlign: 'bottom' }} />
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" className={classes.container}>
                        <Grid item className={classes.header}>
                            <Typography variant="h4" className={classes.headerText} align="center">
                                Notifications
                            </Typography>
                        </Grid>
                        <Grid item style={{ overflowY: 'scroll', height: '25em' }}>
                            <Grid container direction="column" className={classes.notifications}>
                                <Grid item container direction="row" alignItems="center" justify="space-between" className={classes.notificationItem}>
                                    <Typography align="left" className={classes.notificationsText}>
                                        notification1{' '}
                                    </Typography>
                                    <Typography align="right" className={classes.link}>
                                        Click Here
                                    </Typography>
                                </Grid>
                                <Divider />

                                <Grid item container direction="row" alignItems="center" className={classes.notificationItem}>
                                    <Typography align="left" className={classes.notificationsText}>
                                        notification2{' '}
                                    </Typography>
                                    <Typography align="right" className={classes.link}>
                                        Click Here
                                    </Typography>
                                </Grid>
                                <Divider />

                                <Grid item container direction="row" alignItems="center" className={classes.notificationItem}>
                                    <Typography align="left" className={classes.notificationsText}>
                                        notification3fafafaaefaf afaefeaefffffffffffffffff ffffffffffffffffffff afeeeeeeeeeeeeeeee eeeeeeeaaefa fffffffffffffffffffffff{' '}
                                    </Typography>
                                    <Typography align="right" className={classes.link}>
                                        Click Here
                                    </Typography>
                                </Grid>
                                <Divider />

                                <Grid item container direction="row" alignItems="center" className={classes.notificationItem}>
                                    <Typography align="left" className={classes.notificationsText}>
                                        notification4
                                    </Typography>
                                    <Typography align="right" className={classes.link}>
                                        Click Here
                                    </Typography>
                                </Grid>
                                <Divider />

                                <Grid item container direction="row" alignItems="center" className={classes.notificationItem}>
                                    <Typography align="left" className={classes.notificationsText}>
                                        notification5
                                    </Typography>
                                    <Typography align="right" className={classes.link}>
                                        Click Here
                                    </Typography>
                                </Grid>
                                <Divider />

                                <Grid item container direction="row" alignItems="center" className={classes.notificationItem}>
                                    <Typography align="left" className={classes.notificationsText}>
                                        notification6
                                    </Typography>
                                    <Typography align="right" className={classes.link}>
                                        Click Here
                                    </Typography>
                                </Grid>
                                <Divider />

                                <Grid item container direction="row" alignItems="center" className={classes.notificationItem}>
                                    <Typography align="left" className={classes.notificationsText}>
                                        notification7{' '}
                                    </Typography>
                                    <Typography align="right" className={classes.link}>
                                        Click Here
                                    </Typography>
                                </Grid>
                                <Divider />

                                <Grid item container direction="row" alignItems="center" className={classes.notificationItem}>
                                    <Typography align="left" className={classes.notificationsText}>
                                        notification8
                                    </Typography>
                                    <Typography align="right" className={classes.link}>
                                        Click Here
                                    </Typography>
                                </Grid>
                                <Divider />
                                <Grid item container direction="row" alignItems="center" className={classes.notificationItem}>
                                    <Typography align="left" className={classes.notificationsText}>
                                        notification9
                                    </Typography>
                                    <Typography align="right" className={classes.link}>
                                        Click Here
                                    </Typography>
                                </Grid>
                                <Divider />
                                <Grid item container direction="row" alignItems="center" className={classes.notificationItem}>
                                    <Typography align="left" className={classes.notificationsText}>
                                        notification10
                                    </Typography>
                                    <Typography align="right" className={classes.link}>
                                        Click Here
                                    </Typography>
                                </Grid>
                                <Divider />
                                <Grid item container direction="row" alignItems="center" className={classes.notificationItem}>
                                    <Typography align="left" className={classes.notificationsText}>
                                        notification11
                                    </Typography>
                                    <Typography align="right" className={classes.link}>
                                        Click Here
                                    </Typography>
                                </Grid>
                                <Divider />
                            </Grid>
                        </Grid>
                        <Grid item className={classes.notificationsFooter}></Grid>
                    </Grid>
                </Grid>
            </Menu>
        </>
    );
};

export default NotificationButton;
