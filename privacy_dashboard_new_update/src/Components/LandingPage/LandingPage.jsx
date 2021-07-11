import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography} from "@material-ui/core";

import Card from "./Card";
import MenuCard from "./MenuCard";

const useStyles = makeStyles(() => ({
  root: {
    margin: "20px",
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "60px",
    color: "#FCFCFC",
    marginBottom: "120PX",
    //left: '500px'
  },
  gridItem: {
    marginBottom: "50px",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  const cardDetails = [
    {
      icon: "BiEdit",
      title: "FOSS Blog"
    },
    {
      icon: "AiOutlineMail",
      title: "Mail Server"
    },
    {
      icon: "MdForum",
      title: "FOSS Forum"
    },
    {
      icon: "BsPuzzleFill",
      title: "KetchUp AddOn"
    },
    {
      icon: "GrDocumentTime",
      title: "Event 404"
    },
    {
      icon: "RiMailCheckFill",
      title: "RSVP App"
    },
  ];

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifycontent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={2}>
          <MenuCard />
        </Grid>
        <Grid item xs={10} style={{ position: "relative" }}>
          <Typography className={classes.header}>
            Welcome to FOSS NSBM Privacy Dashboard!
          </Typography>
          <Grid
            container
            spacing={2}
            direction="row"
            justifycontent="center"
            alignItems="center"
          >
            {cardDetails.map((item, key) => {
              return (
                <Grid
                  xl={4}
                  lg={4}
                  md={6}
                  sm={6}
                  xs={12}
                  className={classes.gridItem}
                  item
                  key={key}
                >
                  <Card icon={item.icon} title={item.title} />
                </Grid>
              );
            })}

            <Typography style={{ color: "white" }}>
              FOSS NSBM ABOUT US
            </Typography>
            <Typography
              style={{
                color: "white",
                position: "absolute",
                right: "0",
                bottom: "0",
              }}
            >
              ©2021, Designed by FOSS NSBM.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
