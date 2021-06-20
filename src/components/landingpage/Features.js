import { Button, Grid, Typography, IconButton, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React, { useRef } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import skills from '../../assets/skills_1.jpeg';
import collegeBuilding from '../../assets/collegeBuilding.png';
import achivements from '../../assets/achievements.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import useStyles from '../../styles/Landingpage/features';

const featureData = [
    {
        id: 1,
        title: 'Soft Skills',
        desp: 'description',
        buttonTitle: 'GALLERY'
    },
    {
        id: 2,
        title: 'Club Activities',
        desp: 'description',
        buttonTitle: 'CLUB'
    },
    {
        id: 3,
        title: 'My Achivements',
        desp: 'description',
        buttonTitle: 'ACHIVEMENTS'
    }
];



const Features = () => {
    const classes = useStyles();
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

    const carouselRef = useRef(null);
    let resetTimeout;
    const theme = useTheme();

    //   const onNextStart = (currentItem, nextItem) => {
    //     if (currentItem.index === nextItem.index) {
    //       // we hit the last item, go to first item
    //       carouselRef.current.goTo(0);
    //     }
    //   };

    //   const onPrevStart = (currentItem, nextItem) => {
    //     if (currentItem.index === nextItem.index) {
    //       // we hit the first item, go to last item
    //       carouselRef.current.goTo(featureData.length - 1);
    //     }
    //   };
    const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Carousel
                ref={carouselRef}
                onNextEnd={({ index }) => {
                    clearTimeout(resetTimeout);
                    if (index + 1 === featureData.length) {
                        resetTimeout = setTimeout(() => {
                            carouselRef.current && carouselRef.current.goTo(0);
                        }, 5000); // same time
                    }
                }}
                enableAutoPlay
                autoPlaySpeed={5000}
                itemsToShow={1}
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
                <Grid
                    container
                    direction="column"
                    style={{
                        backgroundImage: `url(${skills})`,
                        width: '100%',
                        height: '30em',
                        padding: matchSm ? '2.5em 1em 1em 1em' : '2.5em 2em 1em 2em',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        overflow: 'hidden'
                    }}
                    justify="space-between"
                >
                    <Grid item container justify="flex-end">
                        <Button variant="outlined" className={classes.btn}>
                            {featureData[0].buttonTitle}
                        </Button>
                    </Grid>
                    <Grid item container justify="flex-start" direction="column">
                        <Typography variant="h4" className={classes.title}>
                            {featureData[0].title}
                        </Typography>
                        <Typography variant="body2" paragraph className={classes.desp}>
                            {featureData[0].desp}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    style={{
                        backgroundImage: `url(${collegeBuilding})`,
                        width: '100%',
                        height: '30em',
                        padding: '2em 2em 2em 2em',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    justify="space-between"
                >
                    <Grid item container justify="flex-end" direction="column">
                        <Typography variant="h4" align="right" className={classes.title}>
                            {featureData[1].title}
                        </Typography>
                        <Typography variant="body2" align="right" paragraph className={classes.desp}>
                            {featureData[1].desp}
                        </Typography>
                    </Grid>
                    <Grid item container justify="flex-start">
                        <Button variant="outlined" className={classes.btn}>
                            {featureData[1].buttonTitle}
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    style={{
                        backgroundImage: `url(${achivements})`,
                        width: '100%',
                        height: '30em',
                        padding: '2.5em 2em 1em 2em',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    justify="space-between"
                >
                    <Grid item container justify="flex-end">
                        <Button variant="outlined" className={classes.btn}>
                            {featureData[2].buttonTitle}
                        </Button>
                    </Grid>
                    <Grid item container justify="flex-start" direction="column">
                        <Typography variant="h4" className={classes.title}>
                            {featureData[2].title}
                        </Typography>
                        <Typography variant="body2" paragraph className={classes.desp}>
                            {featureData[2].desp}
                        </Typography>
                    </Grid>
                </Grid>
            </Carousel>
        </>
    );
};

export default Features;
