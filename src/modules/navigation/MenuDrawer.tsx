import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HouseIcon from '@mui/icons-material/House';
import SearchIcon from '@mui/icons-material/Search';
const menuList = [
  { text: "Home", icon: <HouseIcon />, path: "/" },
  { text: "Search", icon: <SearchIcon />, path: "/search" },
]
interface MenuDrawerProps {
  toggleDrawer?: (newOpen: boolean) => void;
}
const MenuDrawer = ({ toggleDrawer }: MenuDrawerProps) => {
  return (
    <Box
      sx={{ width: 250 }}
      onClick={() => toggleDrawer && toggleDrawer(false)}
    >
      <Divider />
      <List>
        {menuList.map((text, index) => (
          <ListItem key={text.text} disablePadding>
          <Link href={text.path} underline="none" color="inherit">
            <ListItemButton>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>

              <ListItemText primary={text.text} />
            </ListItemButton>
              </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default MenuDrawer;
