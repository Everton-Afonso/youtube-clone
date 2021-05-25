import React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Whatshot from "@material-ui/icons/Whatshot";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";
import LibraryMusic from "@material-ui/icons/LibraryMusic";
import Movie from "@material-ui/icons/Movie";

const useStyles = makeStyles((props) => ({
  root: {
    height: "100vh",
    backgroundColor: props.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: props.zIndex.drawer + 1,
  },
  icons: {
    paddingRight: props.spacing(4),
  },
  drawer: {
    width: "240px",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "240px",
    borderRight: "none",
  },
  menuIcon: {
    paddingRight: props.spacing(5),
    paddingLeft: props.spacing(6),
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    height: "30px",
  },
  listItemText: {
    fontSize: "14px",
  },
  listItem: {
    paddingTop: "4px",
    paddingBottom: "4px",
  },
  typography: {
    paddingBottom: "12px",
  },
  btn: {
    fontWeight: "600",
    border: "1px solid",
    borderRadius: "1px",
  },
}));

// const videos = [
//   {
//     id: 1,
//     title:
//       "FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29",
//     channel: "Lucas Nhimi",
//     views: "11 mi de visualizações",
//     date: "há 1 semana",
//     avatar: "/images/avatar.jpeg",
//     thumb: "/images/thumb1.png",
//   },
//   {
//     id: 2,
//     title:
//       "COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02",
//     channel: "Lucas Nhimi",
//     views: "957 mil visualizações",
//     date: "há 1 semana",
//     avatar: "/images/avatar.jpeg",
//     thumb: "/images/thumb2.png",
//   },
//   {
//     id: 3,
//     title:
//       "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
//     channel: "Lucas Nhimi",
//     views: "106 mil visualizações",
//     date: "há 1 semana",
//     avatar: "/images/avatar.jpeg",
//     thumb: "/images/thumb3.png",
//   },
//   {
//     id: 4,
//     title:
//       "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
//     channel: "Lucas Nhimi",
//     views: "5,6 mi de visualizações",
//     date: "há 1 semana",
//     avatar: "/images/avatar.jpeg",
//     thumb: "/images/thumb4.png",
//   },
//   {
//     id: 5,
//     title:
//       "EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26",
//     channel: "Lucas Nhimi",
//     views: "2,2 mi de visualizações",
//     date: "há 1 semana",
//     avatar: "/images/avatar.jpeg",
//     thumb: "/images/thumb5.png",
//   },
//   {
//     id: 6,
//     title: "COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
//     channel: "Lucas Nhimi",
//     views: "233 mil visualizações",
//     date: "há 1 semana",
//     avatar: "/images/avatar.jpeg",
//     thumb: "/images/thumb6.png",
//   },
//   {
//     id: 7,
//     title:
//       "PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01",
//     channel: "Lucas Nhimi",
//     views: "118 mil visualizações",
//     date: "há 1 semana",
//     avatar: "/images/avatar.jpeg",
//     thumb: "/images/thumb7.png",
//   },
//   {
//     id: 8,
//     title:
//       "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
//     channel: "Lucas Nhimi",
//     views: "1,9 mi de visualizações",
//     date: "há 1 semana",
//     avatar: "/images/avatar.jpeg",
//     thumb: "/images/thumb8.png",
//   },
// ];

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <img
            src={
              theme.palette.type === "dark"
                ? "/images/logoWhite.png"
                : "/images/logoDark.png"
            }
            alt="Logo dark para o tema light"
            className={classes.logo}
          />

          <div className={classes.grow} />

          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />

          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>

          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>

          <Button
            className={classes.btn}
            startIcon={<AccountCircleIcon />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />

            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Início"}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Whatshot />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Em Alta"}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Inscrições"}
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Biblioteca"}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <History />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Histórico"}
                  />
                </ListItem>
              </List>

              <Divider />

              <Box p={7}>
                <Typography className={classes.typography} variant="body2">
                  Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>

                <Button
                  className={classes.btn}
                  variant="outlined"
                  color="secondary"
                  startIcon={<AccountCircleIcon />}
                >
                  Fazer login
                </Button>
              </Box>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <LibraryMusic />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Música"}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Esportes"}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Jogos"}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Movie />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Filmes"}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Notícias"}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Ao vivo"}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Aprender"}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Vídeos do momento"}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Vídeo em 360º"}
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Procurar canais"}
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"MAIS DO YOUTUBE"}
                  />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>

        <Box p={8}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>
          {/* <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={2} md={4} sm={6} xs={12} key={item.id}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                  />
                </Box>
                <Box>
                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {`${item.views} • ${item.date}`}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid> */}
        </Box>
      </Box>
    </div>
  );
}

export default Home;
