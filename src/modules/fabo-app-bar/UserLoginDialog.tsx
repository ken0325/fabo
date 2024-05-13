import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import { UserContextContainer } from "../../contexts/UserContext";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
interface UserLoginDialogProps {
    open: boolean;
    handleCloseModal: () => void;    
}
const UserLoginDialog = ({open, handleCloseModal}:UserLoginDialogProps) => {    
  const { setAuth } = UserContextContainer.useContainer();
    const handleLogin = () => {
        setAuth(true)
        handleCloseModal()
    }
return (
    <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                登入
            </Typography>
            <Divider />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Button variant="contained" style={{width: '100%'}} onClick={handleLogin}>登入</Button>
            </Typography>
        </Box>
      </Modal>
)
}

export default UserLoginDialog;