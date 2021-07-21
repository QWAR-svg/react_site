import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {Container, Toolbar, AppBar, IconButton, Typography, Box, Paper, Grid ,CardMedia, CardActions, Card, CardContent} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
   
  mainFeaturesPost : {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"

  },

  mainFeaturesPostContent : {
    position: "relative",
    padding: theme.spacing(3),
    margin: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
    
  },

  overlay : {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0, .3)"
  },

  center : {
    justifyContent: "center"
  },

  right: {
    marginRight: 25
  },
  cardMedia: {
    paddingTop: "56%"
  },
  cardContent: {
    flexGrow: 1
  },

  cardGrid: {
    marginTop: theme.spacing(4)
  }
   
}))

const cards = [
  {
    "img": "https://picsum.photos/200/300",
    "title": "London fpweifjpwenkiw",
    "id" : 5
  },
  {
    "img": "https://picsum.photos/500/300",
    "title": "Madrid fwpeojwpeim",
    "id": 85
  },
  {
    "img": "https://picsum.photos/800/300",
    "title": "Paris fwepikekmfems",
    "id": 53
  },
  {
    "img": "https://picsum.photos/400/300",
    "title": "Alabama flkwnlkdn",
    "id" : 97
  }
];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
    <AppBar position="fixed"> 
        <Container fixed>
            <Toolbar className = "toolBar">
              <IconButton 
              className={classes.menuButton}
              edge="start"  color="inherit" aria-label="menu" >
                <MenuIcon />
              </IconButton>
              <Typography
              className={classes.title}
              variant="h5" >Web-UI</Typography>
              <Box ml={6}>
                <Button  
                  className={classes.right}
                color="primary" variant="outlined">
                  Log in
                </Button>
              </Box>

              <Button color="secondary" variant="contained">
                Sign up
              </Button>

          </Toolbar>
        </Container>
    </AppBar>

    <main>
      <Paper className={classes.mainFeaturesPost}
      style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
        <Container fixed>
          <div className={classes.overlay}/>
          <Grid  className={classes.center} container>
            <Grid item md={6}>

              <div className={classes.mainFeaturesPostContent}>
                <Typography
                variant= "h3"
                component="h1"
                color= "inherit"
                gutterBottom
                >
                  Blog 
                </Typography>

                <Typography
                component="h5"
                color= "inherit"
                gutterBottom
                paragraph
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing eliorporis soluta quos iste quis autem ducLorem
                  imus esse, saepe laudantium voluptate vero vel minima blanditiis!Lorem
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem dolore natus in nihil, repellat nesciunt maiores cum ad accusamus eius itaque deleniti? Animi voluptatum illo ducimus possimus, commodi culpa.
                </Typography>
                <Button
                
                variant="contained"
                color= "secondary">
                  Learn more
                </Button>

              </div>
            </Grid>
          </Grid>
        </Container>
        
      </Paper>

      <div className={classes.MainContent}>
        <Container maxWidth="md">
          <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          >
            Hiodpwjdaks dslvmdlsdmdlm
          </Typography>
          <Typography
          variant="h5"
          align="center"s
          color="textSecondary"
          gutterBottom
          paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti voluptatum delectus molestias, vero tempore tempora nemo fuga, impedit repudiandae quos beatae dolores blanditiis eius. Sequi impedit sit ut beatae?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ipsum quod dignissimos illum accusantium esse animi, deleniti sint labore iusto eveniet perspiciatis dicta, hic, expedita tempora iure magni repellendus odit?
          </Typography>


          <div className={classes.mainButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">Hello</Button>
              </Grid>

              <Grid item>
                <Button variant="outlined" color="primary">Learning</Button>
              </Grid>
            </Grid>

          </div>
        </Container>

      </div>

      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key="card" xs ={12} sm= {6} md= {4}>
            <Card className={classes.card}>
              <CardMedia
              className={classes.cardMedia}
              image= {card.img}
              title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                variant="h5"
                 gutterBottom>
                   {card.title}
                </Typography>

                <Typography >
                  Blog post. Bla bla bla 
                </Typography>

              </CardContent>

              <CardActions>
              <Button size="small"
              color="primary">
                View
              </Button>

              <Button size="small"
              color="primary">
                ED
              </Button>

              <LayerIcon/>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </main>

    <footer>
      <Typography variant="h6" align="center" gutterBottom>Bye</Typography>

          <BottomNavigation 
           onChange={handleChange}
          value={value}
          className={classes.root}>
          
          <BottomNavigationAction

            label="Recents"
            value="recents"
            icon={<RestoreIcon/>}
          />

          <BottomNavigationAction

            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon/>}
          />

          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon/>}
          />

          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon/>}
          />
          </BottomNavigation>
    </footer>
    </>
  );
}

export default App;
