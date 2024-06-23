import {
  Button,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Box,
  Drawer,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { UserContextContainer } from "../../contexts/UserContext";
import PersonalMenu from "./component/PersonalMenu";
import { FABO_APP_NAME_CHI } from "../app-fwk/constants/CommonConstatns";
import MailIcon from "@mui/icons-material/Mail";
import UserLoginDialog from "./UserLoginDialog";
import { useTranslation } from 'react-i18next';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import LanguageIcon from '@mui/icons-material/Language';

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
  const { auth } = UserContextContainer.useContainer();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string | undefined) => {
        i18n.changeLanguage(lng);
  };
  const [anchorElLanguageMenu, setAnchorElLanguageMenu] = useState<null | HTMLElement>(null);
  const openLanguageMenu = Boolean(anchorElLanguageMenu);
  const handleClickLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLanguageMenu(event.currentTarget);
  };
  const handleCloseLanguageMenu = () => {
    setAnchorElLanguageMenu(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <Button href="/apply" color="inherit">
            Join us
          </Button>
          <div>
            <Button
              id="fade-button"
              aria-controls={openLanguageMenu ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openLanguageMenu ? 'true' : undefined}
              onClick={handleClickLanguageMenu}
              color="inherit"
            >
              {<LanguageIcon />}{t('language')}
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorElLanguageMenu}
              open={openLanguageMenu}
              onClose={handleCloseLanguageMenu}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={() => {changeLanguage("zh"); handleCloseLanguageMenu();}}>繁體中文</MenuItem>
              <MenuItem onClick={() => {changeLanguage("en"); handleCloseLanguageMenu();}}>English</MenuItem>
            </Menu>
          </div>
          {!auth ? (
            <Button color="inherit" onClick={handleOpenModal}>Login</Button>
          ) : (
            <>
              <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
              </Badge>
              <PersonalMenu
                handleMenu={handleMenu}
                handleClose={handleClose}
                anchorEl={anchorEl}
              />
            </>
          )}
        </Toolbar>
      </AppBar>
      {!!drawerContent && (
        <Drawer open={drawerOpen} onClose={drawerOnClose}>
          {drawerContent}
        </Drawer>
      )}
      <UserLoginDialog open={open} handleCloseModal={handleCloseModal} />
    </Box>
  );
};

export default FaboAppBar;
