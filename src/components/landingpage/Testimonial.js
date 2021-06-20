import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import TestimonialCard from './TestimonialCard';
import testimonialData from './testmonialData';
import { useTheme, makeStyles } from '@material-ui/styles';
import { Grid, IconButton, useMediaQuery } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    btn: {
        color: '#fff',
        borderColor: '#fff',
        fontFamily: 'Ubuntu, sans-serif',
        fontWeight: 500,
        fontSize: '1.3em'
    },
    title: {
        color: '#fff',
        fontFamily: 'Ubuntu, sans-serif',
        fontWeight: 500,
        fontSize: '2em'
    },
    desp: {
        color: '#fff',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '1.3em'
    },
    btnroot: {
        borderRadius: 100,
        width: '2.5em',
        height: '2.5em',
        color: '#111',
        '&:hover': {
            backgroundColor: 'rgba(1,1,1,0.1)',
            color: '#000'
        },
        padding: 0
    }
}));

const Testimonial = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchLg = useMediaQuery(theme.breakpoints.down('lg'));
    const matchMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <ArrowBackIosIcon style={{ fontSize: '1em' }} /> : <ArrowForwardIosIcon style={{ fontSize: '1em' }} />;
        return (
            <Grid style={{ display: matchSm ? 'none' : 'flex', alignItems: 'center' }}>
                <IconButton className={classes.btnroot} onClick={onClick} disabled={isEdge}>
                    {pointer}
                </IconButton>
            </Grid>
        );
    };
    return (
        <>
            <Carousel
                itemsToShow={matchSm ? 1 : matchMd ? 2 : matchLg ? 3 : 1}
                renderArrow={myArrow}
                renderPagination={({ pages, activePage, onClick }) => {
                    return (
                        <Grid container direction="row" justify="center" alignItems="center" style={{ marginTop: '2em' }}>
                            {pages.map((page) => {
                                const isActivePage = activePage === page;
                                return (
                                    <FiberManualRecordIcon
                                        key={page}
                                        onClick={() => onClick(page)}
                                        style={{
                                            color: isActivePage ? theme.palette.common.orange : '#000',
                                            cursor: 'pointer',
                                            width: '0.6em',
                                            height: '0.6em',
                                            marginRight: '0.4em',
                                            borderRadius: 100,
                                            opacity: isActivePage ? 1 : 0.5
                                        }}
                                    ></FiberManualRecordIcon>
                                );
                            })}
                        </Grid>
                    );
                }}
            >
                {testimonialData.map((testimonial) => {
                    return <TestimonialCard key={testimonial.id} cardDetails={testimonial} />;
                })}
            </Carousel>
        </>
    );
};

export default Testimonial;
