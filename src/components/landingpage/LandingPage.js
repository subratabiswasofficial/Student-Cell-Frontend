import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography, InputBase, useMediaQuery, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Features from './Features';
import Testimonial from './Testimonial';
import useStyles from '../../styles/Landingpage/landingpage';



const LandingPage = ({ setOpenAuthModal, openAuthModal }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchXs = useMediaQuery(theme.breakpoints.down('xs'));
    const matchSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Grid container direction="column">
                <Grid item container alignItems="center" justify="center" direction="column" className={classes.root}>
                    {/* First Item */}
                    <Grid
                        item
                        style={{
                            marginBottom: matchXs ? '5em' : '2em',
                            marginTop: matchXs ? '14em' : '20em'
                        }}
                    >
                        <Grid container>
                            <Grid item>
                                <Typography className={classes.text} paragraph align="center" variant="h2">
                                    <span
                                        style={{
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        BROWSE
                                    </span>{' '}
                                    OR{' '}
                                    <span
                                        style={{
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        MANAGE
                                    </span>{' '}
                                    YOUR DATA
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Second Item */}
                    <Grid
                        item
                        //   style={{ width: "100%", display: "flex", alignContent: "center" }}
                        container
                        justify="center"
                        style={{ marginBottom: '5em' }}
                    >
                        <Grid
                            container
                            // justify="center"
                            direction="row"
                            alignItems="center"
                            justify="space-between"
                            className={classes.inputItemRoot}
                        >
                            <Grid item>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <SearchIcon
                                            style={{
                                                color: theme.palette.common.lightDark,
                                                width: '1em',
                                                height: '0.9em',
                                                marginLeft: matchXs ? '0.2em' : '0.5em',
                                                opacity: 0.9,
                                                verticalAlign: 'middle',
                                                marginRight: matchXs ? '0.3em' : '0.5em',
                                                display: 'inline-block'
                                            }}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <InputBase
                                            placeholder="Search"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput
                                            }}
                                            style={{ display: 'inline-block' }}
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                style={{
                                    backgroundColor: theme.palette.common.orange,
                                    height: '100%',
                                    width: '3em',
                                    opacity: 1,
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                    cursor: 'pointer'
                                }}
                            >
                                <ArrowDropDownIcon
                                    style={{
                                        transform: 'rotate(270deg)',
                                        marginLeft: 2,
                                        color: '#fff',
                                        marginTop: 2,
                                        fontSize: '2.5em'
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Third Item */}
                    <Grid item container direction={matchXs ? 'column' : 'row'} justify="center" alignItems={matchXs ? 'center' : undefined} style={{ marginBottom: matchXs ? '3em' : '10em' }}>
                        <Grid item>
                            <Button className={classes.button} variant="contained">
                                Student View
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.button} variant="contained">
                                Admin View
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.button} variant="contained">
                                Cahier View
                            </Button>
                        </Grid>
                    </Grid>
                    {/* Fourth Item */}
                    <Grid item container justify="flex-start" style={{ padding: '1em' }}>
                        <Grid item>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography variant="body2" style={{ color: '#fff' }}>
                                        Contact Admin
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ color: '#fff' }}>
                                        Submit Complains
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    direction="column"
                    container
                    style={{
                        paddingTop: '2em',
                        background: 'linear-gradient(to bottom, #dce0e4 41%, #5f4f54 100%)'
                    }}
                >
                    <Grid
                        item
                        style={{
                            padding: matchSm ? '0em' : '1em',
                            marginTop: matchSm ? '5em' : '10em'
                        }}
                    >
                        <Features />
                    </Grid>
                    <Grid item>
                        <Typography
                            align="center"
                            variant="h4"
                            style={{
                                marginTop: matchSm ? '2em' : '4em',
                                fontFamily: 'Ubuntu, sans-serif'
                            }}
                        >
                            Testimonial
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        style={{
                            padding: matchSm ? '0em' : '3em',
                            marginTop: matchSm ? '2em' : '2em',
                            marginBottom: matchSm ? '5em' : '10em'
                        }}
                    >
                        <Testimonial />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default LandingPage;
