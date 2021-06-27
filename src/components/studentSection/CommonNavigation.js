import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import navLinkData from '../navbar/navlinkData';
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    sectionItem:{
         color:theme.palette.common.darkBlue,
         padding:'0.8em 1em',
         marginLeft:'1em',
         fontWeight:500,
         fontFamily: 'Ubuntu, sans-serif',
         cursor:'pointer'
    },
    sectionContainer:{
        backgroundColor:'#fff'
    },
    activeSectionItem:{
        backgroundColor:'rgba(218, 216, 216, 1)',
        borderTop:`3px solid ${theme.palette.common.orange}`
    }
}));

const CommonNavigation = ({setActiveSection,activeSection}) => {
    const classes = useStyles();
    
    return (
        <div>
            <Grid item container direction="row" justify="flex-end" className={classes.sectionContainer} alignItems="center">
                    <Grid item component={Link} to={`/${navLinkData[0].to}`} className={`${classes.sectionItem} ${activeSection === 1 && classes.activeSectionItem}`}
                    onClick={()=>setActiveSection(1)}
                    >
                        STUDENT
                    </Grid>
                    <Grid component={Link} to={`/${navLinkData[1].to}`} onClick={()=>setActiveSection(2)} item className={`${classes.sectionItem} ${activeSection === 2 && classes.activeSectionItem}`}>
                         CLUB
                    </Grid>
                    <Grid component={Link} to={`/${navLinkData[2].to}`} onClick={()=>setActiveSection(3)} item className={`${classes.sectionItem} ${activeSection === 3 && classes.activeSectionItem}`}>
                    TRAINING & PLACEMENT
                    </Grid>
                    <Grid component={Link} to={`/${navLinkData[3].to}`} onClick={()=>setActiveSection(4)} item className={`${classes.sectionItem} ${activeSection === 4 && classes.activeSectionItem}`}>
                    HOSTEL

                    </Grid>
                    <Grid component={Link} to={`/${navLinkData[4].to}`} onClick={()=>setActiveSection(5)} item className={`${classes.sectionItem} ${activeSection === 5 && classes.activeSectionItem}`}>
                    SOFT SKILLS
                    </Grid>
                </Grid>
        </div>
    )
}

export default CommonNavigation;
