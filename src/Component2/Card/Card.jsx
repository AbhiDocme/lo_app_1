import * as React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ImageIcon from "@mui/icons-material/Image";
import CardContentPage from "./CardContent";

function Cardcomp() {
  const isnonMobileScreen = useMediaQuery("(min-width:992px)");

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={isnonMobileScreen ? { width: "40%" } : { width: "100%" }}>
        <Typography variant="h5" fontWeight={600}>
          Hi, Khadija Ahmed
        </Typography>
        <Typography
          fontSize={"small"}
          sx={{ paddingTop: ".5rem", width: "fit-content" }}
        >
          Customizing your workspace, make it more enjoyable and comfortable to
          work!
        </Typography>
        <Box>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <Avatar
                sx={{ bgcolor: "red", objectFit: "contain" }}
                aria-label="recipe"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mamooty.jpg/220px-Mamooty.jpg"
              ></Avatar>
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              id="post"
              placeholder="What's on your mind"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <ImageIcon />
            </IconButton>
          </Paper>

          <CardContentPage /> {/* Card contant page  */}

        </Box>
      </Box>
      <Box
        sx={
          isnonMobileScreen
            ? {
                height: "auto",
                width: "60%",
                backgroundColor: "#e5e5e5",
                marginLeft: "1rem",
              }
            : { display: "none" }
        }
      ></Box>
    </Box>
  );
}

export default Cardcomp;
