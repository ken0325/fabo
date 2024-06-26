import { Link, Grid, Container } from "@mui/material";

const SalonInfo = () => {
  return (
    <Container
      style={{ height: "auto", padding: "5px" }}
    >
      <h1>|&nbsp;商戶資訊</h1>
      <h3>地址</h3>
      <p>旺角彌敦道646號陶德大廈閣樓</p>
      <Link href="https://maps.app.goo.gl/chdFVvqyNSG6toBn7" target="_blank">
        查看地圖
      </Link>
      <h3>電話</h3>
      <p>54668846</p>
      <div>
        <h3>營業時間</h3>
        <p>營業中</p>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 50,
          }}
        >
          <Grid item xs={6}>
            星期一
          </Grid>
          <Grid item xs={6}>
            11:00 - 21:00
          </Grid>
          <Grid item xs={6}>
            星期二
          </Grid>
          <Grid item xs={6}>
            11:00 - 21:00
          </Grid>
          <Grid item xs={6}>
            星期三
          </Grid>
          <Grid item xs={6}>
            11:00 - 21:00
          </Grid>
          <Grid item xs={6}>
            星期四
          </Grid>
          <Grid item xs={6}>
            11:00 - 21:00
          </Grid>
          <Grid item xs={6}>
            星期五
          </Grid>
          <Grid item xs={6}>
            11:00 - 21:00
          </Grid>
          <Grid item xs={6}>
            星期六
          </Grid>
          <Grid item xs={6}>
            11:00 - 21:00
          </Grid>
          <Grid item xs={6}>
            星期日
          </Grid>
          <Grid item xs={6}>
            11:00 - 21:00
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default SalonInfo;
