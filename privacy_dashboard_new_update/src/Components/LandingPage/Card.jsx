import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Box,
  CardContent,
  Typography,
  Badge,
  Divider,
  Grid,
} from "@material-ui/core";

import { BiEdit } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { MdForum } from "react-icons/md";
import { BsPuzzleFill } from "react-icons/bs";
import { GrDocumentTime } from "react-icons/gr";
import { RiMailCheckFill } from "react-icons/ri";

const useStyles = makeStyles(() => ({
  card: {
    // borderStyle: "solid",
    // borderColor: "#010104",
    position: "relative",
    //width: '400px',
    height: '250px',
    borderRadius: "25px",
  },
  cardItem: {
    background:
      "linear-gradient(135deg, #1e5799 0%,#207cca 35%,#207cca 35%,#2989d8 55%,#7db9e8 100%)",
    position: "absolute",
    top: "-24px",
    left: "30px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
  },
  flexItem: {
    alignSelf: "center",
    marginTop: "10px",
  },
  title: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: "25px",
  },
  badge: {
    background: "#4EC144",
    borderRadius: "35px",
  },
  badgeText: {
    margin: "5px",
    fontSize: "12px",
    fontWeight: "bold",
  },
}));

export default function Card({ icon, title }) {

  const classes = useStyles();

  function Icon(icon){
    switch(icon){
      case 'RiMailCheckFill':
        return <RiMailCheckFill className={classes.flexItem} size="45px" />
      case 'BiEdit':
        return <BiEdit className={classes.flexItem} size="45px" />
      case 'AiOutlineMail':
        return <AiOutlineMail className={classes.flexItem} size="45px" />
      case 'MdForum':
        return <MdForum className={classes.flexItem} size="45px" />
      case 'BsPuzzleFill':
        return <BsPuzzleFill className={classes.flexItem} size="45px" />
      case 'GrDocumentTime':
        return <GrDocumentTime className={classes.flexItem} size="45px" />
      default:
        return null;
    }
  }

  return (
    <div>
      <Paper elevation={3} className={classes.card}>
        <Box className={classes.cardItem}>
          {Icon(icon)}
        </Box>
        <CardContent>
          <Typography className={classes.title}>{title}</Typography>
          <Grid
            container
            direction="row"
            justifycontent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Typography>Status: </Typography>
            </Grid>
            <Grid item>
              <Badge color="secondary" className={classes.badge}>
                <Typography className={classes.badgeText}>
                  Typography
                </Typography>
              </Badge>
            </Grid>
          </Grid>

          <Typography style={{ padding: "20px 0 20px 0" }}>
            Down Time 1 Day ago
          </Typography>
          <Divider />
          <Typography style={{ paddingTop: "20px" }}>
            Last Update 2021/07/10 00:00:00
          </Typography>
        </CardContent>
      </Paper>
    </div>
  );
}
