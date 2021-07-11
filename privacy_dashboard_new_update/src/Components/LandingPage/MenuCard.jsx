import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { IoIosSpeedometer } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { MdForum } from "react-icons/md";
import { BsPuzzleFill } from "react-icons/bs";
import { GrDocumentTime } from "react-icons/gr";
import { RiMailCheckFill } from "react-icons/ri";

import {
  CardContent,
  Typography,
  Button,
  Divider,
  Card,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    height: "100vh",
    borderRadius: "25px",
    position: 'relative'
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "60px",
  },
  title2: {
    textAlign: "center",
    marginBottom: "10px",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },
  flexItem: {
    alignSelf: "left",
    margin: "10px 0 10px 50px",
  },
  button: {
    background: "linear-gradient(to bottom, #ffffff, #ffffff)",
    borderRadius: "8px",
    "&:hover": {    
      background: "linear-gradient(to bottom, #3b42b0, #3b42b0)",
    },
  },
}));

export default function MenuCard() {
  const classes = useStyles();

  return (
    <div>
      <Card elevation={3} className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>FOSS</Typography>
          <Typography className={classes.title2}>Privacy Dashboard</Typography>
          <Divider />
          <Box className={classes.btnGroup}>
            <Box className={classes.flexItem}>
              <Button className={classes.button} startIcon={<IoIosSpeedometer />}>
                Dashboard
              </Button>
            </Box>
            <Box className={classes.flexItem}>
              <Button className={classes.button} startIcon={<BiEdit />}>
                FOSS Blog
              </Button>
            </Box>
            <Box className={classes.flexItem}>
              <Button className={classes.button} startIcon={<AiOutlineMail />}>
                Mail Server
              </Button>
            </Box>
            <Box className={classes.flexItem}>
              <Button className={classes.button} startIcon={<MdForum />}>
                FOSS Forum
              </Button>
            </Box>
            <Box className={classes.flexItem}>
              <Button className={classes.button} startIcon={<BsPuzzleFill />}>
                Ketchup
              </Button>
            </Box>
            <Box className={classes.flexItem}>
              <Button className={classes.button} startIcon={<GrDocumentTime />}>
                Event 404
              </Button>
            </Box>
            <Box className={classes.flexItem}>
              <Button className={classes.button} startIcon={<RiMailCheckFill />}>
                RSVP App
              </Button>
            </Box>
          </Box>
        </CardContent>
        <Box style={{display: 'flex', flexDirection: 'column'}}>
        <Typography style={{textAlign: 'center', position: 'absolute', bottom: '5px', alignSelf: 'center'}}>Powered by FOSS NSBM</Typography>
        </Box>
      </Card>
    </div>
  );
}
