import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExploreIcon from "@mui/icons-material/Explore";
import BusinessIcon from "@mui/icons-material/Business";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GroupIcon from "@mui/icons-material/Group";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import Card from "../Card/Card.jsx";
import logo from '../../Assets/Logo2.png';
import { useMediaQuery } from "@mui/material";
import NavContent from "./NavContent.jsx";

const drawerWidth = 85;

function SideBar(props) {
  const isnonMobileScreen = useMediaQuery("(min-width:992px)");
  // const isMobileScreen = useMediaQuery("(min-width:600px)");

  const topIcon = [
    <ExploreIcon fontSize="small" />,
    <BusinessIcon fontSize="small" />,
    <MonetizationOnIcon fontSize="small" />,
    <AccessTimeFilledIcon fontSize="small" />,
    <GroupIcon fontSize="small" />,
    <SpeedIcon fontSize="small" />,
  ];

  const bottomIcon = [
    <SettingsIcon fontSize="small" />,
    <HelpIcon fontSize="small" />,
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img
        src={logo}
        alt=""
        style={{ marginTop: "1rem", marginLeft: "1rem" }}
      />
      <List sx={isnonMobileScreen ? { marginTop: "1rem" } : { marginTop: "0" }}>
        {[
          "Discover",
          "Company",
          "Payroll",
          "Time",
          "Recruitment",
          "Performance",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{ display: "block", textAlign: "center", paddingTop: "0" }}
            >
              <ListItemIcon sx={{ display: "block" }}>
                <IconButton
                  sx={{
                    color: "white",
                    minWidth: "0",
                    border: ".1px solid",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#",
                    },
                  }}
                >
                  {topIcon[index]}
                </IconButton>
              </ListItemIcon>
              <Typography sx={{ color: "white", fontSize: "10px" }}>
                {text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ position: "absolute", bottom: "0" }}>
        {["Settings", "Help"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{ display: "block", textAlign: "center", paddingTop: "0" }}
            >
              <ListItemIcon sx={{ display: "block" }}>
                <IconButton
                  sx={{
                    color: "white",
                    minWidth: "0",
                    border: ".1px solid",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#",
                    },
                  }}
                >
                  {bottomIcon[index]}
                </IconButton>
              </ListItemIcon>
              <Typography sx={{ color: "white", fontSize: "10px" }}>
                {text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <NavContent mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} /> {/* Navbar */}

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#6A4BFC",
              borderRadius: "30px 0px 0px 30px",
              overflowX: "hidden",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#6A4BFC",
              borderRadius: "30px 0px 0px 30px",
              overflowX: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Card />  {/* Card detail page */}

      </Box>
    </Box>
  );
}

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
