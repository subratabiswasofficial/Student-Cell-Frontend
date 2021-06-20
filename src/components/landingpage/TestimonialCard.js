import React from 'react';
import { Card, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

// const useStyles = makeStyles((theme) => ({
//   avatar: {
//     position: "relative",
//     "&:before:nth-child(odd)": {
//       content: '""',
//       position: "absolute",
//       width: "30em",
//       height: "10em",
//       backgroundColor: "#EC6565",
//       top: -90,
//       left: -20,
//       transition: "all 0.4s ease",
//     },
//     "&:before:nth-child(even)": {
//       content: '""',
//       position: "absolute",
//       width: "30em",
//       height: "10em",
//       backgroundColor: "#69B2AE",
//       top: -90,
//       left: -20,
//       transition: "all 0.4s ease",
//     },
//     Overflow: "visible",
//   },
// }));

const pink = '#EC6565',
    green = '#5FC789',
    sky = '#69B2AE';

const TestimonialCard = ({ cardDetails: { name, img, year, company, jobDesp, department, id } }) => {
    const theme = useTheme();
    const matchSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        // <Grid container>
        <Card
            className={`avatar avatar__${(id % 3) + 1}`}
            style={{
                borderBottom: '4px solid #C4C4C4',
                width: matchSm ? '25em' : '25em',
                padding: '2em 0 1em 0',
                overflow: 'hidden',
                borderTopRightRadius: 13,
                borderTopLeftRadius: 13,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
            }}
        >
            <Grid
                container
                direction="column"
                alignItems="center"
                style={{
                    width: matchSm ? '25em' : '25em',
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
