import React from 'react';
import img from './img.jpg';
import './style.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import { ContextOne } from '../../Redux/store';
import Typography from '@material-ui/core/Typography';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
const styles = {
    media: {
        height: 0,
        paddingTop: '100%',
        opacity: '0.1', 
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    },
    card: {
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.849)',
        height: '570px'
    },
    overlay: {
        position: 'absolute',
        width: '75%',
        color: 'white',
        top: '46%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}

const style = theme => ({
    button: {
        margin: theme.spacing.unit,
        width: '300px',
        height: '54px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});


function CoverPhoto(props) {

    const { classes } = props;
    let { state } = React.useContext(ContextOne);
    const matches = useMediaQuery('(max-width:1100px)');
    const mobil = useMediaQuery('(max-width:640px)');
    const smallScreen = useMediaQuery('(max-width:500px)')

    return (
        <Card style={styles.card}>
            <CardMedia image={img} style={styles.media} />
            <div style={matches ? {
                ...styles.overlay,
                
                top: mobil ? '46%' : '45%'
            } :{ ...styles.overlay,
                width: '55%',
            }}>
                <div data-aos={mobil ? null : "fade-down"} >


                    {
                        mobil ? (
                            <h1>
                                {
                                    state.lenguage.coverText
                                }
                            </h1>
                        ) :
                            <h2>
                                {
                                    state.lenguage.coverText
                                }
                            </h2>
                    }

                </div>


                <Button style={{
                    marginTop: matches ? '0vh' : '15vh'
                }}
                    variant="contained"
                    color="secondary"
                    className={classes.button}>
                    {
                        state.lenguage.contact
                    }
                </Button>


                <ul
                    className='services'
                    style={{
                        marginTop:'5vh'
                    }}
                >
                    <li>
                        <Typography style={{ color: 'white', fontSize: mobil ? '18px' : '24px' }} >
                            Soluciones e-commerce.
                        </Typography>

                    </li>
                    <li >
                        <Typography style={{ color: 'white', fontSize: mobil ? '18px' : '24px' }} >
                            Desarrollo web.
                        </Typography>

                    </li>
                    <li>
                        <Typography style={{ color: 'white', fontSize: mobil ? '18px' : '24px' }} >
                            Desarrollo mobile.
                        </Typography>

                    </li>
                    <li>
                        <Typography style={{ color: 'white', fontSize: mobil ? '18px' : '24px' }} >
                            Servicios ERP y CRM.
                        </Typography>

                    </li>

                </ul>





            </div>





        </Card>
    )
}

export default withStyles(style)(CoverPhoto);
