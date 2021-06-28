/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Select, MenuItem, Paper, InputBase, InputAdornment, IconButton, Divider, useMediaQuery,Button } from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import { FormControl } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import AchievementCard from './AchievementCard';
import { Typography, Tooltip } from '@material-ui/core';
import AddAchievementModal from './AddAchievementModal';
import { connect } from 'react-redux';
import { loadAchievement } from '../../actions/studentSection';
import CircularProgress from '@material-ui/core/CircularProgress';


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
    // itemContainer: {
    //    background:'transparent'
    // },
    achievementsMainContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '0em',
            paddingRight: '0em'
        },
        scrollSnapAlign:'start'
    },
    actionButton: {
        padding: '0.8em 1em',
        cursor: 'pointer'
    },
    actionButtonIcon: {
        width: '1.2em',
        height: '1.2em',
        verticalAlign: 'bottom'
    },
    inputContainer: {
        padding: '0.7em 1em 0.7em 1.5em',
        marginBottom: '2em'
    },
    menuText: {
        fontFamily: 'Ubuntu, sans-serif',
        color: theme.palette.common.darkBlue,
        fontSize: '1.1em'
    },
    inputRoot: {
        fontFamily: 'Ubuntu, sans-serif',
        color: theme.palette.common.darkBlue,
        fontSize: '1.1em'
    },
    header: {
        color: theme.palette.common.darkBlue,
        fontSize: '1.2em',
        fontFamily: 'Ubuntu, sans-serif',
        fontWeight: 600,
        marginBottom: '3em'
    },
    viewMore:{
        backgroundColor:theme.palette.common.orange,
        color:'#fff',
        padding:'0.5em',
        "&:hover":{
            backgroundColor:theme.palette.common.orange,
        }
    }
    
}));

const Achievements = ({studentSection:{achievements,loading},loadAchievement}) => {
    const classes = useStyles();
    // const theme = useTheme();
    const [achivementFilter, setAchivementFilter] = useState('my-achievements');
    const [addAchievementModalOpen, setAddAchievementModal] = useState(false);

    const handleChange = (event) => {
        setAchivementFilter(event.target.value);
    };

    const customMatchSm = useMediaQuery('(max-width:850px)');

    



    useEffect(()=>{
       loadAchievement();
    },[])

    return (
        <>
            <Grid container id="achievements" direction="column" style={{ paddingTop: '4em' }} className={classes.achievementsMainContainer}>
                {/* Add Achivements and Filter Section */}
                <Grid item container justify="center">
                    <Typography variant="body1" align="center" paragraph className={classes.header}>
                        Achievements
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction={customMatchSm ? 'column' : 'row'}
                    justify={customMatchSm ? undefined : 'space-between'}
                    alignItems={customMatchSm ? 'center' : undefined}
                    className={classes.itemContainer}
                >
                    <Grid item style={{ marginBottom: customMatchSm ? '1em' : 0 }}>
                        <Grid container>
                            <Grid item style={{ marginRight: '1em' }}>
                                <Paper square className={classes.actionButton}>
                                    <MenuIcon className={classes.actionButtonIcon} />
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Tooltip arrow classes={useStylesBootstrap()} placement="top" title="Add Achievement">
                                    <Paper onClick={() => setAddAchievementModal(true)} square className={classes.actionButton}>
                                        <AddIcon className={classes.actionButtonIcon} />
                                    </Paper>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.inputContainer} square style={{ borderTopLeftRadius: customMatchSm ? 0 : 25, borderBottomLeftRadius: customMatchSm ? 0 : 25 }}>
                            <Grid container direction={customMatchSm ? 'column' : 'row'} justify={customMatchSm ? undefined : 'space-between'} alignItems={customMatchSm ? 'center' : undefined}>
                                <Grid item style={{ marginRight: customMatchSm ? 0 : '1em', marginBottom: customMatchSm ? '1em' : 0 }}>
                                    <FormControl>
                                        <Select id="select-achivement-filter" value={achivementFilter} onChange={handleChange} className={classes.menuText}>
                                            <MenuItem value="my-achievements" className={classes.menuText}>
                                                My Achievements
                                            </MenuItem>
                                            <MenuItem value="all-achievements" className={classes.menuText}>
                                                All Achievements
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Divider orientation="vertical" flexItem />
                                <Grid item style={{ marginLeft: customMatchSm ? 0 : '1em' }}>
                                    <InputBase
                                        classes={{ root: classes.inputRoot }}
                                        placeholder="Search Achievements"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton aria-label="search achievements">
                                                    <SearchIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                {/* Add Achivements and Filter Section End */}

                {!loading && achievements ? (
                    <>
                        <Grid
                            item
                            container
                            justify={customMatchSm ? 'center' : 'space-evenly'}
                            style={{
                                marginBottom: '5em'
                            }}
                        >
                            {achievements.length > 6
                                ?
                                achievements.slice(0,6).map((achievement, ind) => {
                                      return (
                                          <Grid item key={ind}>
                                              <AchievementCard achievementData={[achievement]} />
                                          </Grid>
                                      );
                                  })
                                : achievements.map((achievement, ind) => {
                                      return (
                                          <Grid item key={ind}>
                                              <AchievementCard achievementData={[achievement]} />
                                          </Grid>
                                      );
                                  })}
                        </Grid>
                        {!loading && achievements && achievements.length > 6 &&
                        
                          <Grid item container justify="center" 
                          style={{
                                marginBottom: '10em'
                            }}>
                              <Button className={classes.viewMore}>View More</Button>
                          </Grid>
                        }
                    </>
                ) : (
                    <>
                        <Grid item container style={{ height: '30em' }} justify="center" alignItems="center">
                            <CircularProgress />
                        </Grid>
                    </>
                )}
            </Grid>
            <AddAchievementModal setAddAchievementModal={setAddAchievementModal} addAchievementModalOpen={addAchievementModalOpen} />
        </>
    );
};

const mapStateToProps = (state)=>{
    return {
        studentSection:state.studentSection
    }
}

export default connect(mapStateToProps,{loadAchievement})(Achievements);
