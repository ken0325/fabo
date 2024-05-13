import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { UserContextContainer } from "../../contexts/UserContext";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
interface UserLoginDialogProps {
  open: boolean;
  handleCloseModal: () => void;
}
const UserLoginDialog = ({ open, handleCloseModal }: UserLoginDialogProps) => {
  const { setAuth } = UserContextContainer.useContainer();
  const handleLogin = () => {
    setAuth(true);
    handleCloseModal();
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ borderRadius: "10px" }}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          登入
        </Typography>
        <Divider />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField
            required
            id="outlined-required"
            label="登入"
            style={{ width: "100%" }}
          />
        </Typography>
        <FormHelperText id="outlined-weight-helper-text">
          請輸入電郵
        </FormHelperText>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">密碼</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="密碼"
            />
          </FormControl>
          <FormHelperText id="outlined-weight-helper-text">
            請輸入密碼
          </FormHelperText>
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            style={{ width: "100%" }}
            onClick={handleLogin}
          >
            登入
          </Button>
        </Typography>
        
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Button
            variant="text"
            style={{ width: "100%" }}
            onClick={handleLogin}
          >
            注冊
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default UserLoginDialog;
