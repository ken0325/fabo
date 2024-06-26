import { Container, Box, Stack } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const styles = {
  border: "1px solid #e0e0e0",
  borderRadius: 16,
  boxShadow:
    "rgba(61, 61, 61, 0.08) 0px 2px 4px 0px, rgba(61, 61, 61, 0.04) 0px 2px 12px 0px, rgba(61, 61, 61, 0.04) 0px 4px 4px 0px",
  marginBottom: 16,
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
];

const SalonBaseInfo = () => {
  return (
    <Container
      style={{ height: "auto", padding: "5px" }}
    >
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        style={{ marginBottom: "5px" }}
      >
        <h1 style={{ justifyContent: "center", alignItems: "center" }}>
          Hair Ponder(旺角店)
        </h1>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
        >
          <VerifiedIcon></VerifiedIcon>
          <h5>認證商戶</h5>
        </Stack>
      </Stack>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <div
          style={{
            marginRight: "5px",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <LocationOnIcon></LocationOnIcon>
          {"旺角"}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
          }}
        >
          <StarIcon></StarIcon>
          {"4.7(54個評價) 服務: 4.7 環境: 4.6 消費: 4.7"}
        </div>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={0.5}
        style={{
          marginTop: "20px",
        }}
      >
        {itemData.slice(0, 4).map((item, index, arr) =>
          index === 3 ? (
            <Card style={styles} key={item.img}>
              <CardActionArea href="/salon/100/gallery">
                <CardMedia
                  component="img"
                  height="auto"
                  srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <Box
                  sx={{
                    // position: 'absolute',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // bottom: 0,
                    // left: 0,
                    // top: 0,
                    // right: 0,
                    // width: '100%',
                    // display: 'block',
                    // backgroundColor: 'rgba(0, 0, 0, 0.54)',
                    // color: 'white',
                    // padding: '100px',
                    // top: "50%",
                    // left: "50%",
                    // transform: "translate(-50%, -50%)",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.54)",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Typography variant="h5">More</Typography>
                </Box>
              </CardActionArea>
            </Card>
          ) : (
            <Card style={styles} key={item.img}>
              <CardActionArea href="/salon/100/gallery">
                <CardMedia
                  component="img"
                  height="auto"
                  srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </CardActionArea>
            </Card>
          )
        )}
      </Stack>
    </Container>
  );
};

export default SalonBaseInfo;
