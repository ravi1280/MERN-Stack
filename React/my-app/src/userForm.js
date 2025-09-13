import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";

const UserForm = props => {

    const [id,setID] = useState(0);
    const [name,setName] = useState("");

  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "lightgray", marginBottom: 2, display: "block" }}
    >
      <Grid item xs={12}>
        <Typography
          component={"h1"}
          sx={{ color: "darkblue" }}
        >
          User Form
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex",marginTop:'20px' }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "darkblue",
            textAlign: "center",
            fontSize: "16px",
            marginRight: "20px",
            display: "block",
            width: "100px",
          }}
        >
          ID
        </Typography>

        <Input 
          id="id"
          type="number"
          name="id"
          sx={{ width: "400px" }}
          value={id}
          onChange={e => setID(e.target.value)}
         
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "darkblue",
            textAlign: "center",
            fontSize: "16px",
            marginRight: "20px",
            display: "block",
            width: "100px",
          }}
        >
          Name
        </Typography>

        <Input
          id="name"
          type="text"
          name="name"
          sx={{ width: "400px" }}
          value={name}
          onChange={e => (setName(e.target.value))}
          
        />
      </Grid>

      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "darkblue",
          color: "#00000",
          marginLeft: "20px",
          marginTop: "20px",
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
            backgroundColor: "lightblue",
            color: "#000000",
          },
        }}
        onClick={() => {}}
      >
        Add
      </Button>
    </Grid>
  );
};

export default UserForm;
