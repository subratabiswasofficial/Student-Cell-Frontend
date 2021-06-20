import { createMuiTheme } from '@material-ui/core/styles';

const orange = '#FF7900';
const darkBlue = '#323C4F';

const theme = createMuiTheme({
    palette: {
        common: {
            darkBlue: darkBlue,
            orange: orange,
            lightDark: '#393C43'
        }
    },
    overrides: {
        MuiAccordion: {
            root: {
                border: '1px solid rgba(0, 0, 0, .125)',
                boxShadow: 'none',
                '&:not(:last-child)': {
                    borderBottom: 0
                },
                '&:before': {
                    display: 'none'
                },
                '&$expanded': {
                    margin: 'auto'
                }
            }
        },
        MuiTextField: {
            root: {
                // "& label":{
                //   color: 'rgba(249, 128, 19, 0.9)',
                // },
                '& label.Mui-focused': {
                    color: 'rgba(249, 128, 19, 0.9)'
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: 'green'
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'rgba(128, 128, 128, 0.8)'
                    },
                    '&:hover fieldset': {
                        borderColor: 'rgba(249, 128, 19, 0.9)'
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'rgba(249, 128, 19, 0.9)'
                    }
                }
            }
        }
    }
});

export default theme;
