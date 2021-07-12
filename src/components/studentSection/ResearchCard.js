import React from 'react';
import { Grid, Paper, Typography, Button, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    expandMoreContainer: {
        backgroundColor: 'rgba(181, 185, 192, 1)',
        width: '2.5em',
        height: '2.5em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    expandMoreIcon: {
        color: '#fff',
        verticalAlign: 'bottom',
        width: '1.2em',
        height: '1.2em'
    },
    title: {
        fontSize: '3em',
        fontFamily: 'Ubuntu, sans-serif',
        fontWeight: 400
    }
}));

const ResearchCard = ({ title, name }) => {
    const classes = useStyles();
    const description =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    return (
        <Grid container justify="center" style={{ marginBottom: '5em' }}>
            <Grid style={{ paddingBottom: '1em' }} component={Paper} elevation={0} container>
                <Grid item container justify="space-between">
                    <Grid item className={classes.expandMoreContainer}>
                        <ExpandMoreIcon className={classes.expandMoreIcon} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.title} variant="h2">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item container style={{ padding: '0 1em' }}>
                    <Grid item>
                        <Typography variant="body2" paragraph align="center">
                            {description.slice(0, 300) + '...'}
                        </Typography>
                    </Grid>
                    <Grid item container justify="flex-end">
                        <Typography variant="caption" paragraph>
                            ~ Posted by {name}.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container justify="center">
                    {/* <Grid item container > */}
                    <Button
                        variant="outlined"
                        style={{
                            color: 'rgba(251, 130, 22, 1)',
                            borderColor: 'rgba(251, 130, 22, 1)'
                        }}
                    >
                        Read More
                    </Button>
                    {/* </Grid> */}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ResearchCard;
