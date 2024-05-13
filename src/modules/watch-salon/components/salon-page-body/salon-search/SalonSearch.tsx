import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  styled,
} from "@mui/material";

const SalonSearch = () => {
  return (
    <Paper style={{ padding: 10, paddingLeft: 10, paddingRight: 10 }}>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">關鍵字</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
              ></IconButton>
            </InputAdornment>
          }
          label="關鍵字"
        />
      </FormControl>
      <Divider />
      <h3>地區</h3>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="中環" />
        <FormControlLabel control={<Checkbox />} label="銅鑼灣" />
        <FormControlLabel control={<Checkbox />} label="尖沙咀" />
        <FormControlLabel control={<Checkbox />} label="藍田" />
        <FormControlLabel control={<Checkbox />} label="觀塘" />
        <FormControlLabel control={<Checkbox />} label="紅磡" />
      </FormGroup>
      <Divider />
    </Paper>
  );
};

export default SalonSearch;
