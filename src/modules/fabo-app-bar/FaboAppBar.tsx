import {
  Button,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  ListItemIcon,
  Box,
  FormGroup,
  FormControlLabel,
  Switch,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  AccountCircle,
  Logout,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import { UserContextContainer } from "../../contexts/UserContext";

interface FaboAppBarProps {
  drawerContent?: React.ReactNode;
  drawerOpen?: boolean;
  drawerOnClose?: () => void;
  drawerOnToggle?: () => void;
}

const FaboAppBar = ({
  drawerContent,
  drawerOpen = true,
  drawerOnClose,
  drawerOnToggle,
}: FaboAppBarProps) => {
  const { auth, setAuth } = UserContextContainer.useContainer();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={drawerOnToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            髮寳
          </Typography>
          {!auth && <Button color="inherit">Login</Button>}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar />
                  &nbsp;Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar />
                  &nbsp;My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {!!drawerContent && (
        <Drawer open={drawerOpen} onClose={drawerOnClose}>
        {drawerContent}
      </Drawer>
      )}
    </Box>
  );
};

export default FaboAppBar;
