import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, Grid, Stack, Typography } from "@mui/material";

const ApplyForm = () => {
  const [data, setData] = useState({ name: "", email: "", phoneNumber: "", inquiry: "" });

  const handleChange = (paramName: string, paramEmail: string, paramPhoneNumber: string, paramInquiry: string) => {
    setData({ name: paramName, email: paramEmail, phoneNumber: paramPhoneNumber, inquiry: paramInquiry });
  };

  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h3">Partner with Fabo.</Typography>
      <Typography variant="subtitle1">How Fabo helps growing your business? Just contact us and know more. <br />Our team will get back to you in 24 hours.</Typography>
      <Stack>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue={data.name == null ? "" : data.name}
          onChange={() => { handleChange("a", "a", "a", "a"); }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue={data.email == null ? "" : data.email}
          onChange={() => { handleChange("a", "a", "a", "a"); }}
        />
        <Grid container spacing={2}>
          <Grid xs={2}>
            <TextField
              label="phone"
              variant="outlined"
              fullWidth
              margin="normal"
              value={"852"}
            />
          </Grid>
          <Grid xs={10}>
            <TextField
              label="phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
              defaultValue={data.phoneNumber == null ? "" : data.phoneNumber}
              onChange={() => { handleChange("a", "a", "a", "a"); }}
            />
          </Grid>
        </Grid>
        <TextField
          label="Inquiry"
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue={data.inquiry == null ? "" : data.inquiry}
          onChange={() => { handleChange("a", "a", "a", "a"); }}
        />
        <textarea aria-label="minimum height" placeholder="Minimum 3 rows" />
      </Stack>
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        contact us
      </Button>
    </form>
  );
};

export default ApplyForm;