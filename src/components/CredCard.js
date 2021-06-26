import React , { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { amber, green, blue, brown, orange, purple, red } from '@material-ui/core/colors';
import { CardHeader } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    align: 'center',
    display: 'inline-block',
    margin: '2vh 3vw 2vh 3vw',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  purple:{
    backgroundColor: purple[500],
  },
  red:{
    backgroundColor: red[500],
  },
  amber:{
    backgroundColor: amber[500],
  },
  blue:{
    backgroundColor: blue[500],
  },
  orange:{
    backgroundColor: orange[500],
  },
  brown:{
    backgroundColor: brown[500],
  },
  green:{
    backgroundColor: green[500],
  },
  ButtonGreen:{
    color: green[500],
  },
  ButtonBlue:{
    color: amber[500],
  },
  ButtonRed:{
    color: red[500],
  } 

});

export default function CredCard(props) {
  const classes = useStyles();
  const editCard = (event)=>{console.log("Edit card!!")};
  const visitWebsite = (event)=>{console.log("Hola")};
  const deleteCard = (e)=>{console.log("deleted")};
  const [elevation, setelevation] = useState(0);
  const elevate = (event)=>{setelevation(20);}
  const nonelevate = (event)=>{setelevation(0);}
  return (
    <Card className={classes.root} square={false} elevation={elevation} onMouseOver={elevate} onMouseOut={nonelevate}>
      <CardHeader
        avatar={
          <Avatar style={{backgroundColor:props.color}}>
            { props.website[0] }
          </Avatar>}
        title={<b><h2> {props.website} </h2></b>}
      />
      <CardContent>    
        <Typography variant="body2" component="p">
          <Link href={ props.url }>
            { props.url }
          </Link>
        </Typography>
        <Typography variant="body2" component="p" noWrap={true} display='block'>
          { props.description }
        </Typography>
        <Typography variant="body2" component="p">
          <b>Username</b> : { props.username }
        </Typography>

      </CardContent>
      <CardActions>
        <IconButton className={classes.ButtonBlue} onClick={editCard}>
          <EditIcon/>
        </IconButton>
        <IconButton className={classes.ButtonGreen} onClick={visitWebsite}>
          <ArrowForwardIosIcon/>
        </IconButton>
        <Fab className={classes.ButtonRed} onClick={deleteCard}>
          <DeleteIcon/>
        </Fab>
      </CardActions>
    </Card>
  );
}
CredCard.defaultProps = {
  website: 'Localhost',
  color: 'black',
  url: 'http://localhost:3000/',
  username: 'username',
  password: 'password',
  description: 'Give some description of the website'
}