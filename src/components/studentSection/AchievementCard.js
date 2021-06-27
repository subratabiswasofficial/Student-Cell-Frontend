import { Card, Grid, Typography, IconButton, Tooltip } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/styles';
import { deleteAchievement } from '../../actions/studentSection';
import { connect } from 'react-redux';

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
    actionButtonIcon: {
        // color: theme.palette.common.orange
        verticalAlign: 'bottom'
    },
    actionButtonItem: {
        padding: '1em 1em',
        cursor: 'pointer'
    },
    title: {
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '2.5em'
    },
    description: {
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '1em',
        textOverflow: 'ellipsis',
        wordWrap: 'break-word'
    },
    // descriptionContainer: {
    //     // whiteSpace: 'wrap',
    //     textOverflow: 'ellipsis',
    //     height: '4em',
    //     width: '100%',
    //     // padding: '2em',
    //     wordWrap: 'break-word'
    // },
    img: {
        width: '100%'
    },
    view: {
        backgroundColor: theme.palette.common.orange,
        color: '#fff',
        padding: '0.5em 1em',
        cursor: 'pointer'
    },
    imgItem: {
        maxHeight: '10em',
        overflow: 'hidden'
    }
}));

const AchievementCard = ({ achievementData,deleteAchievement }) => {
    const classes = useStyles();
    return (
        <>
            <Card style={{ width: '25em', marginTop: '3em' }}>
                <Grid container direction="column">
                    <Grid item container justify="space-between">
                        <Grid item className={classes.actionButtonItem} style={{ backgroundColor: 'rgba(181, 185, 192, 1)' }}>
                            <ExpandMoreIcon className={classes.actionButtonIcon} />
                        </Grid>
                        <Grid item>
                            <Tooltip arrow classes={useStylesBootstrap()} placement="top" title="Delete Achievement">
                                <IconButton
                                    onClick={() => {
                                        deleteAchievement(achievementData[0].id);
                                    }}
                                >
                                    <DeleteIcon className={classes.actionButtonIcon} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" style={{ padding: '0.5em 1em' }}>
                        <Grid item>
                            <Typography variant="h4" className={classes.title}>
                                {achievementData[0].title}
                            </Typography>
                        </Grid>
                        <Grid item className={classes.descriptionContainer}>
                            <Typography variant="body2" paragraph className={classes.description}>
                                {achievementData[0].description && achievementData[0].description.length > 150
                                    ? `${achievementData[0].description.slice(0, 150)}...`
                                    : achievementData[0].description && achievementData[0].description}
                            </Typography>
                        </Grid>
                        <Grid item className={classes.imgItem}>
                            <img className={classes.img} src={achievementData[0].imgSrc} alt="" />
                        </Grid>
                    </Grid>
                    <Grid item container justify="flex-end">
                        <Tooltip arrow classes={useStylesBootstrap()} placement="top" title="View full Achievement">
                            <Grid item className={classes.view}>
                                VIEW
                            </Grid>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};

export default connect(null,{deleteAchievement})(AchievementCard);
