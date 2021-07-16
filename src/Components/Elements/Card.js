import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import './Card.css';
import {
  Box,
  CardContent,
  Typography,
  Badge,
  Divider,
  Grid,
} from "@material-ui/core";


const useStyles = makeStyles(() => ({
  card: {
    position: "relative",
    height: '270px',
    borderRadius: "15px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
  },
  badgeText: {
    margin: "5px",
    fontSize: "15px",
    fontWeight: "bold",
    color: "white"
  },
}));

export default function Card({ icon, title, status }) {

  const classes = useStyles();


  return (
    <div>
      <Paper className="card">
        <Box className="cardItem">
          <div className="flexItem">{icon}</div>
        </Box>
        <CardContent>
          <div className="title">
            <div className="title-in">
              <h2>{title}</h2>
            </div>
          </div>

          <div className="cardContent">
            <Grid
              container
              direction="row"
              spacing={1}
            >
              <Grid item>
                {status === 'Active' ? 
                <Badge color="secondary"
                  style={{
                    background: "#4EC144",
                    borderRadius: "5px",
                  }}
                >
                  <Typography className={classes.badgeText}>
                    Active
                  </Typography>
                </Badge> :

                 <Badge color="secondary"
                  style={{
                    background: "red",
                    borderRadius: "5px",
                  }}
                >
                  <Typography className={classes.badgeText}>
                    Inactive
                  </Typography>
                </Badge>}
              </Grid>
            </Grid>

            <Typography style={{ padding: "20px 0 20px 0" }}>
              Down Time 1 Day ago
            </Typography>
            <Divider />
            <Typography style={{ paddingTop: "20px" }}>
              Last Update 2021/07/10 00:00:00
            </Typography>
          </div>
        </CardContent>
      </Paper>
    </div>
  );
}
