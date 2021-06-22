import { Typography } from '@material-ui/core';
import { Dialog, Grid, Slide, DialogContent, InputBase, Paper, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles,useTheme } from '@material-ui/styles';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { addAchievement } from '../../actions/studentSection';
import { connect } from 'react-redux';

// const useStylesBootstrap = makeStyles((theme) => ({
//     arrow: {
//         color: theme.palette.common.black
//     },
//     tooltip: {
//         backgroundColor: theme.palette.common.black,
//         fontFamily: 'Ubuntu, sans-serif',
//         fontSize: '0.8em'
//     }
// }));

const useStyles = makeStyles((theme) => ({
    header: {
        color: theme.palette.common.darkBlue,
        fontFamily: 'Ubuntu, sans-serif'
    },
    inputRoot: {
        color: theme.palette.common.darkBlue,
        fontFamily: 'Ubuntu, sans-serif'
    },
    title: {
        fontSize: '2.8em'
    },
    description: {
        fontSize: '1.3em'
    },
    imageContainer: {
        height: '15em',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    uploadIcon:{
        width:'0.8em',
        height:'0.8em',
        marginLeft:'0.5em'
   }  
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddAchievementModal = ({ setAddAchievementModal, addAchievementModalOpen,addAchievement }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [file, setFile] = useState(null);
    const [state,setState] = useState({
        title:"",
        description:""
    });
    const onChange = (e)=>{
        setState({...state,[e.target.name]:e.target.value});
    }
    const onFileChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setFile(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0] && e.target.files[0]);
    };

    const handleClose = () => {
        setAddAchievementModal(false);
    };

    return (
        <>
            <Dialog open={addAchievementModalOpen} TransitionComponent={Transition} keepMounted onClose={handleClose} maxWidth="sm" fullWidth>
                <Grid container justify="center" style={{ marginBottom: '2em', marginTop: '2em' }}>
                    <Typography variant="h4" className={classes.header}>
                        Add Achievement
                    </Typography>
                </Grid>
                <DialogContent>
                    <Grid container justify="center">
                        <Grid container direction="column" style={{ width: '25em', height: '100%' }}>
                            <Grid item>
                                <InputBase onChange={onChange} name="title" value={state.title} classes={{ root: classes.inputRoot }} className={classes.title} placeholder="Your title here" />
                            </Grid>
                            <Grid item>
                                <InputBase fullWidth multiline rowsMax={4} onChange={onChange} name="description" value={state.description} classes={{ root: classes.inputRoot }} className={classes.description} placeholder="Description ..." />
                            </Grid>
                            <Grid
                                item
                                component={Paper}
                                variant="outlined"
                                container
                                justify="center"
                                className={classes.imageContainer}
                                alignItems="center"
                                style={{ backgroundImage: `url(${file})` }}
                            >
                                <input type="file" onChange={onFileChange} id="imageUpload" style={{ display: 'none' }} />
                                
                                <label htmlFor="imageUpload">
                                    <Button component="span" variant="outlined" style={{color:file?'#fff':theme.palette.primary.main,borderColor:file?'#fff':theme.palette.primary.main}}>
                                        {file?"Change":"Upload"} <InsertPhotoIcon className={classes.uploadIcon} />
                                    </Button>
                                </label>
                            
                            </Grid>
                            {/* <Grid item container justify="center" style={{marginTop:'1em'}}>
                                <input type="file" onChange={onFileChange} id="imageUpload" style={{ display: 'none' }} />
                                <label htmlFor="imageUpload">
                                    <Button component="span" variant="contained" color="primary">
                                        Upload Image
                                    </Button>
                                </label>
                            </Grid> */}
                            <Grid item container justify="space-between" style={{ marginBottom: '2em', marginTop: '2em' }}>
                                
                                    <Button variant="contained" color="primary" onClick={()=>{
                                        handleClose();
                                        setState({
                                            title:"",
                                            description:''
                                        });
                                        setFile(null);
                                    }}>
                                        Discard
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={()=>{
                                        addAchievement({title:state.title,description:state.description,imgSrc:file});
                                        handleClose();
                                        setState({
                                            title:"",
                                            description:''
                                        });
                                        setFile(null);
                                    }}>
                                        post
                                    </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default connect(null,{addAchievement})(AddAchievementModal);
