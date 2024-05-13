import {
  Button,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Box,
  FormGroup,
  FormControlLabel,
  Switch,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { UserContextContainer } from "../../contexts/UserContext";
import PersonalMenu from "./component/PersonalMenu";
import { FABO_APP_NAME_CHI } from "../app-fwk/constants/CommonConstatns";

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
            {FABO_APP_NAME_CHI}
          </Typography>
          <Button href="/apply" color="inherit">Join us</Button>
          {!auth ? (
            <Button color="inherit">Login</Button>
          ) : (
            <PersonalMenu
              handleMenu={handleMenu}
              handleClose={handleClose}
              anchorEl={anchorEl}
            />
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
