import React, { useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Menu, IconButton, Avatar } from '@material-ui/core';
import navlinkdatas from './navlinkData';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from '../../styles/Navbar/studentMenu';


const StudentMenu = ({ anchorEl, handleClose, anchorId, activeLink, setActiveLink }) => {
    const classes = useStyles();
    const data = navlinkdatas.filter((data) => data.id === anchorId);
    useEffect(() => {
        setActiveLink(0);
    }, [anchorId, setActiveLink]);
    const theme = useTheme();
    return (
        <>
            <Menu
                id={anchorId}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                elevation={0}
                style={{ zIndex: 1302 }}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 20,
                    horizontal: 0
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <Grid container direction="column">
                    <Grid item container direction="row" className={classes.menuContainer}>
                        <Grid item sm>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                style={
                                    {
                                        // backgroundColor: "#7E8490",
                                        // minHeight: "15em",
                                    }
                                }
                            >
                                {data.length !== 0 &&
                                    data[0].links.map((linkdata, ind) => {
                                        return (
                                            <Grid
                                                item
                                                key={linkdata.link}
                                                className={activeLink === ind ? classes.activeNavItem : classes.navItem}
                                                onMouseOver={() => setActiveLink(ind)}
                                                style={{
                                                    paddingTop: '0.5em',
                                                    paddingBottom: '0.5em'
                                                }}
                                            >
                                                <Typography
                                                    variant="h4"
                                                    className={classes.navLinks}
                                                    style={{
                                                        marginTop: ind === 0 ? '1em' : '0.5em',
                                                        marginBottom: ind === data[0].links.length - 1 ? '1em' : '0.5em'
                                                    }}
                                                >
                                                    {linkdata.link}
                                                </Typography>
                                            </Grid>
                                        );
                                    })}
                            </Grid>
                        </Grid>
                        {/* Description section */}
                        <Grid
                            item
                            container
                            alignItems="center"
                            style={{
                                backgroundColor: '#fff',
                                width: '45em',
                                borderBottom: '1px solid #C4C4C4'
                            }}
                            xs
                        >
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                // style={{ marginTop: "auto" }}
                            >
                                <Grid item>
                                    <Typography variant="body2" paragraph align="center" className={classes.des}>
                                        {data.length !== 0 && activeLink < data[0].links.length ? data[0].links[activeLink].desp : 'Select One'}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton className={classes.desIcon}>
                                        <ArrowForwardIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Second Row */}

                    <Grid
                        item
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        style={{ width: '100%', backgroundColor: '#fff', padding: '1em', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}
                    >
                        <Grid item style={{ width: '50%' }}>
                            <Grid container direaction="row" alignItems="center" justify="flex-start" style={{ width: '100%' }}>
                                <Grid item xs={1}>
                                    <Avatar style={{ fontSize: '1.25em' }}>P</Avatar>
                                </Grid>
                                <Grid item container direction="column" xs={6} style={{ marginLeft: '1em' }}>
                                    <Grid item>
                                        <span style={{ color: '#323C4F', opacity: 0.63 }} className={classes.subtext}>
                                            PRINCIPAL
                                        </span>
                                    </Grid>
                                    <Grid item>
                                        <span style={{ color: '#323C4F', opacity: 0.63 }} className={classes.subtext}>
                                            Ph: 8478934225
                                        </span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row">
                                <Grid item style={{ marginRight: '2em' }}>
                                    <Typography variant="body2" style={{ color: theme.palette.common.darkBlue }} className={classes.subtext}>
                                        Contact Admin
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ color: theme.palette.common.darkBlue }} className={classes.subtext}>
                                        Submit Complain
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Menu>
        </>
    );
};

export default StudentMenu;
