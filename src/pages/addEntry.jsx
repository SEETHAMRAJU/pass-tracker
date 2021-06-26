import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NavBar from '../components/NavBar';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'block',
    // flexDirection: 'column',
    alignItems: 'left',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  submit: {
    margin: theme.spacing(3, 7, 0),
    width: '40%',
  },
}));

export default function AddCred(props) {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [URL, setURL] = useState('');

    function changeUsername(event){
        setUsername(event.target.value);  
    }
    function changeDescription(event){
        setDescription(event.target.value);  
    }
    function changeURL(event){
        setURL(event.target.value);  
    }
    function changeWebsite(event){
        setWebsite(event.target.value);
    }
    function changePassword(event){
        setPassword(event.target.value);
    }

    function clearForm(event){
        setPassword('');
        setUsername('');
        setDescription('');
        setURL('');
        setWebsite('');
    }
    function submitForm(event){
        console.log(event);
        console.log("I did ");
    }

  return (
      <div style={{height:'100%'}}>
      <NavBar title="Add Entry"></NavBar>

    <Container component="main" maxWidth="md" style={{marginBottom:'20vh'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h2" style={{align:"left"}}>
          Add Credentials for a website
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            name="Website"
            label="Website"
            autoComplete="current-password"
            value={ website }
            onChange={ changeWebsite }
        />
        <TextField
            variant="outlined"
            margin="normal"
            name="URL"
            label="URL"
            autoComplete="current-password"
            value={ URL }
            onChange={ changeURL }
        />
        <TextField
            variant="outlined"
            margin="normal"
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
            value={ username }
            onChange={changeUsername}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={ password }
            onChange={ changePassword }
          />
        <TextField
            variant="outlined"
            margin="normal"
            name="password"
            label="Description"
            id="description"
            autoComplete="current-password"
            value={ description }
            onChange={ changeDescription }
            multiline
          />
          <div style={{display:'flex'}}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={ submitForm }
            startIcon={<SaveIcon/>}
            >
            Save
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={ clearForm }
            startIcon={<ClearIcon/>}
            >
            Clear
          </Button>
          
          </div>
        </form>
      </div>
    </Container>
    </div>
  );
}