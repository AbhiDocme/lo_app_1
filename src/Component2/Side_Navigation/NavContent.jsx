import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Chip,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Menu,
  Stack,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import MaterialUISwitch from "./NavbarFunctons";

const drawerWidth = 80;
function NavContent({ mobileOpen, setMobileOpen }) {
  const isnonMobileScreen = useMediaQuery("(min-width:992px)");
  // const isMobileScreen = useMediaQuery("(min-width:600px)");

  // const menuId = isnonMobileScreen;
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileMenuId = isnonMobileScreen;
  
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box width="60%">
        <Stack spacing={1}>
          <FormGroup>
            <FormControlLabel
              sx={{ transform: "translate(12px)" }}
              id="theme"
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            />
          </FormGroup>
          <FormGroup>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon
                sx={{ transform: "translate(26px,0)" }}
                color="action"
              />
            </Badge>
          </FormGroup>
          <Stack
            direction="row"
            sx={{
              width: "60%",
            }}
          >
            <Avatar
              sx={{ transform: "translate(20px)" }}
              sizes="small"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mamooty.jpg/220px-Mamooty.jpg"
            ></Avatar>
          </Stack>
        </Stack>
      </Box>
    </Menu>
  );

  return (
    <div>
      <AppBar
        color="inherit"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "1",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            fontSize={"medium"}
            color={"#6A4BFC"}
            fontWeight={700}
          >
            LOYALTRI
          </Typography>
          <Box
            sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          >
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "center",marginLeft:'1rem' }}
            >
              <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "grey",
                    borderRadius:'50px'
                  },
                  "&:hover fieldset": {
                    borderColor: "#6640EB",
                  },
                  "&.Mui-focused fieldset": {
                    border:'.5px solid #6640EB'
                  },
                }
              }}
                size="small"
                id="searchbar"
                autoComplete="off"
                placeholder="Search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <KeyboardCommandKeyIcon fontSize="15px" />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Box>
          {isnonMobileScreen ? (
            <Box>
              <Stack spacing={1} direction="row">
                <FormGroup>
                  <FormControlLabel
                    id="theme"
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  />
                </FormGroup>
                <FormGroup>
                  <Badge
                    badgeContent={2}
                    color="error"
                    sx={{ transform: "translate(-20px,15px)" }}
                  >
                    <NotificationsIcon color="action" />
                  </Badge>
                </FormGroup>
                <Chip
                  sx={{
                    transform: "translate(0px,5px)",
                    height: "2.3rem",
                    width: "9rem",
                  }}
                  
                  avatar={
                    <Avatar
                      sx={{ transform: "translate(-5px,0px)" }}
                      alt="Natacha"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mamooty.jpg/220px-Mamooty.jpg"
                    />
                  }
                  label={["First Name", <br />, "Email Address"]}
                  variant="filled"
                  color="default"
                />
              </Stack>
            </Box>
          ) : (
            <Box>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          )}

          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </div>
  );
}

export default NavContent;
