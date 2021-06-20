import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import useStyles from '../../styles/Landingpage/testimonialCard';

const pink = '#EC6565',
    green = '#5FC789',
    sky = '#69B2AE';

const TestimonialCard = ({ cardDetails: { name, img, year, company, jobDesp, department, id } }) => {
    // const theme = useTheme();
    // const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    return (
        // <Grid container>
        <Card
            className={`${classes.avatar} ${(id%3 + 1) === 1? classes.avatar1: (id%3 + 1) === 2? classes.avatar2:classes.avatar3} ${classes.card}`}
        >
            <Grid
                container
                direction="column"
                alignItems="center"
                style={{
                    width: '25em',
                    overflow: 'visible'
                }}
            >
                <Grid item style={{ zIndex: 4, marginBottom: '0.5em' }}>
                    <div
                        style={{
                            width: '5em',
                            height: '5em',
                            border: `3px solid ${(id % 3) + 1 === 1 ? pink : (id % 3) + 1 === 2 ? sky : green}`,
                            backgroundImage: `url(${img})`,
                            zIndex: 4,
                            borderRadius: 100,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                        src=""
                    ></div>
                </Grid>
                <Grid item style={{ zIndex: 4, marginBottom: '2em' }}>
                    <Typography variant="body2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                        {name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container justify="center">
                        <Grid
                            item
                            style={{
                                maxHeight: '6em',
                                maxWidth: '21em',
                                overflowY: 'scroll'
                            }}
                        >
                            <Typography
                                paragraph
                                style={{
                                    color: 'rgba(0,0,0,0.5)',
                                    fontFamily: 'Ubuntu, sans-serif'
                                }}
                                variant="caption"
                                align="center"
                            >
                                {jobDesp}
                            </Typography>
                        </Grid>
                        <Grid item style={{ marginTop: '2em' }}>
                            <Typography align="center" paragraph variant="subtitle2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                                B.Tech - {department}, <span style={{ display: 'block' }}>{year}</span>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align="center" variant="subtitle2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                                <span style={{ fontWeight: 'bold' }}>Placed In :</span> {company}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
        // </Grid>
    );
};

export default TestimonialCard;
