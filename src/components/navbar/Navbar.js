/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { AppBar, Avatar, Grid, Typography, Hidden, useMediaQuery } from '@material-ui/core';
import logo from '../../img/logo.png';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import StudentMenu from './StudentMenu';
import Drawer from './Drawer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import useStyles from '../../styles/Navbar/navbar';

const Navbar = ({ setOpenAuthModal, auth: { isAuthenticated, loading }, setActiveTab, isInProfilePage, setIsInProfilePage,setWhiteNavbar,whiteNavbar,setActiveSection,activeSection }) => {
    

    

    // active Section settings
    useEffect(() => {
        if (window.location.pathname === '/profile/me') {
            setIsInProfilePage(true);
        } else if (window.location.pathname === '/studentSection') {
            setActiveSection(1);
            setWhiteNavbar(true);
            setIsInProfilePage(false);
        } else if (window.location.pathname === '/clubSection') {
            setActiveSection(2);
            setWhiteNavbar(true);
            setIsInProfilePage(false);
        } else if (window.location.pathname === '/placementSection') {
            setActiveSection(3);
            setWhiteNavbar(true);
            setIsInProfilePage(false);
        } else if (window.location.pathname === '/hostelSection') {
            setActiveSection(4);
            setWhiteNavbar(true);
            setIsInProfilePage(false);
        } else if (window.location.pathname === '/skillsSection') {
            setActiveSection(5);
            setWhiteNavbar(true);
            setIsInProfilePage(false);
        } else {
            setActiveSection(null);
            setWhiteNavbar(false);
            setIsInProfilePage(false);
        }
    }, []);

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const [anchorId, setAnchorId] = useState('student-menu');
    const [isMenuOpen, setMenu] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
    // const matchXs = useMediaQuery(theme.breakpoints.down("xs"));

    const handleClick = (e, id) => {
        setAnchorEl(e.currentTarget);
        setAnchorId(id);
        setMenu(true);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setAnchorId(null);
        setMenu(false);
    };
    return (
        <>
            <AppBar elevation={activeSection !== null ? 3 : 0} position={matchSm ? 'fixed' : activeSection !== null ? 'fixed' : 'absolute'} style={{ backgroundColor: 'transparent' }}>
                <Grid container alignItems="center" justify="space-between" className={classes.appbar}>
                    <Grid
                        item
                        component={Link}
                        to="/"
                        onClick={() => {
                            setWhiteNavbar(false);
                            setActiveSection(null);
                            setIsInProfilePage(false);
                        }}
                    >
                        <img className={classes.logo} src={logo} alt="Jalpaigudi Government Engineering College" />
                    </Grid>
                    <Grid item>
                        {!matchSm ? (
                            <Grid container alignItems="center" style={{ marginRight: '1em' }}>
                                <Grid item style={{ marginRight: '1em' }}>
                                    {isAuthenticated ? (
                                        !isInProfilePage ? (
                                            <Typography component={Link} to="/profile/me" onClick={() => setIsInProfilePage(true)} variant="body1" style={{ cursor: 'pointer', color: '#fff' }}>
                                                PROFILE
                                            </Typography>
                                        ) : (
                                            <Typography
                                                component={Link}
                                                to="/"
                                                onClick={() => {
                                                    setIsInProfilePage(false);
                                                    setWhiteNavbar(false);
                                                }}
                                                variant="body1"
                                                style={{ cursor: 'pointer', color: '#fff', fontSize: '1.2em' }}
                                            >
                                                <ArrowBackIosIcon style={{ verticalAlign: 'bottom', fontSize: '1.5em' }} /> Back
                                            </Typography>
                                        )
                                    ) : (
                                        <Typography variant="body1" style={{ cursor: 'pointer' }} onClick={() => setOpenAuthModal(true)}>
                                            LOGIN
                                        </Typography>
                                    )}
                                </Grid>
                                <Grid item>
                                    {isAuthenticated ? (
                                        !isInProfilePage ? (
                                            <Avatar style={{ width: '2em', height: '2em' }}>A</Avatar>
                                        ) : null
                                    ) : (
                                        <Typography variant="body1" style={{ cursor: 'pointer', marginLeft: '1em', marginRight: '1em' }} onClick={() => setOpenAuthModal(true)}>
                                            REGISTER
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        ) : (
                            <Drawer
                                isInProfilePage={isInProfilePage}
                                setIsInProfilePage={setIsInProfilePage}
                                setActiveTab={setActiveTab}
                                setOpenAuthModal={setOpenAuthModal}
                                openDrawer={openDrawer}
                                setOpenDrawer={setOpenDrawer}
                            />
                        )}
                    </Grid>
                </Grid>
                {!isInProfilePage && (
                    <Hidden smDown>
                        <AppBar elevation={0} position="static" style={{ backgroundColor: whiteNavbar ? 'white' : 'transparent', zIndex: 303 }}>
                            <Grid container style={{}} justify="flex-end" alignItems="center">
                                <Grid item className={classes.navItem} style={{ borderTop: activeSection === 1 ? `4px solid ${theme.palette.common.orange}` : undefined }}>
                                    <Typography
                                        className={classes.navlink}
                                        variant="body2"
                                        aria-owns={Boolean(anchorEl) ? 'student-menu' : undefined}
                                        aria-haspopup={Boolean(anchorEl) ? 'true' : undefined}
                                        onClick={(e) => handleClick(e, 'student-menu')}
                                    >
                                        STUDENT{' '}
                                        <ArrowDropDownIcon
                                            style={{
                                                transform: `rotate(${isMenuOpen && anchorId === 'student-menu' ? '180deg' : '0deg'})`
                                            }}
                                            className={classes.navIcon}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.navItem} style={{ borderTop: activeSection === 2 ? `4px solid ${theme.palette.common.orange}` : undefined }}>
                                    <Typography
                                        className={classes.navlink}
                                        variant="body2"
                                        aria-owns={Boolean(anchorEl) ? 'club-menu' : undefined}
                                        aria-haspopup={Boolean(anchorEl) ? 'true' : undefined}
                                        onClick={(e) => handleClick(e, 'club-menu')}
                                    >
                                        CLUB{' '}
                                        <ArrowDropDownIcon
                                            style={{
                                                transform: `rotate(${isMenuOpen && anchorId === 'club-menu' ? '180deg' : '0deg'})`
                                            }}
                                            className={classes.navIcon}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.navItem} style={{ borderTop: activeSection === 3 ? `4px solid ${theme.palette.common.orange}` : undefined }}>
                                    <Typography
                                        className={classes.navlink}
                                        variant="body2"
                                        aria-owns={Boolean(anchorEl) ? 'placement-menu' : undefined}
                                        aria-haspopup={Boolean(anchorEl) ? 'true' : undefined}
                                        onClick={(e) => handleClick(e, 'placement-menu')}
                                    >
                                        TRANING AND PLACEMENT{' '}
                                        <ArrowDropDownIcon
                                            style={{
                                                transform: `rotate(${isMenuOpen && anchorId === 'placement-menu' ? '180deg' : '0deg'})`
                                            }}
                                            className={classes.navIcon}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.navItem} style={{ borderTop: activeSection === 4 ? `4px solid ${theme.palette.common.orange}` : undefined }}>
                                    <Typography
                                        className={classes.navlink}
                                        variant="body2"
                                        aria-owns={Boolean(anchorEl) ? 'hostel-menu' : undefined}
                                        aria-haspopup={Boolean(anchorEl) ? 'true' : undefined}
                                        onClick={(e) => handleClick(e, 'hostel-menu')}
                                    >
                                        HOSTEL{' '}
                                        <ArrowDropDownIcon
                                            style={{
                                                transform: `rotate(${isMenuOpen && anchorId === 'hostel-menu' ? '180deg' : '0deg'})`
                                            }}
                                            className={classes.navIcon}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    style={{
                                        marginRight: '1em',
                                        borderTop: activeSection === 5 ? `4px solid ${theme.palette.common.orange}` : undefined
                                    }}
                                    className={classes.navItem}
                                >
                                    <Typography
                                        className={classes.navlink}
                                        variant="body2"
                                        aria-owns={Boolean(anchorEl) ? 'skills-menu' : undefined}
                                        aria-haspopup={Boolean(anchorEl) ? 'true' : undefined}
                                        onClick={(e) => handleClick(e, 'skills-menu')}
                                    >
                                        SOFT SKILLS{' '}
                                        <ArrowDropDownIcon
                                            style={{
                                                transform: `rotate(${isMenuOpen && anchorId === 'skills-menu' ? '180deg' : '0deg'})`
                                            }}
                                            className={classes.navIcon}
                                        />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </AppBar>
                    </Hidden>
                )}
            </AppBar>

            <StudentMenu
                anchorEl={anchorEl}
                setWhiteNavbar={setWhiteNavbar}
                anchorId={anchorId}
                setActiveSection={setActiveSection}
                handleClose={handleClose}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
            />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps)(Navbar);
