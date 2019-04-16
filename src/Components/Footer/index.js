import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ISO6391 from 'iso-639-1';
import { loadText } from '../../Redux/Actions/translateText';
import { ContextOne } from '../../Redux/store';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: 10,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: '10px',
    },
}));

function SimpleSelect() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
        labelWidth: 0,
    });
    
    let  context = React.useContext(ContextOne)
    const stateRedux= context.state;
    const  dispatch= context. dispatch;

    const [codeLenguage, setCodeLenguage] = React.useState([
        'es', 
        'en', 
        'ru', 
        'fr'
    ])
    const inputLabelRef = React.useRef(null);

    React.useEffect(() => {
        setState({
            ...state,
            labelWidth: ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth,
        });
    }, []);

    function handleChange(event) {

        loadText(stateRedux.lenguage, event.target.value, stateRedux.prevCode, dispatch)
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <form className={classes.root} autoComplete="off">
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabelRef} htmlFor="outlined-age-simple">
                    Idioma
        </InputLabel>
                <Select
                    value={state.age}
                    onChange={handleChange}
                    input={
                        <OutlinedInput labelWidth={state.labelWidth} name="age" id="outlined-age-simple" />
                    }
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>

                    {
                        codeLenguage.map(code => {
                            return (
                                <MenuItem value={code}>
                                    {ISO6391.getName(code)}
                                </MenuItem>)
                        })
                    }


                </Select>
            </FormControl>

        </form>
    );
}

export default SimpleSelect;