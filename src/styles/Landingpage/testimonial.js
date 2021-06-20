import { makeStyles } from '@material-ui/styles';

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

export default useStyles;
