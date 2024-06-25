import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";

const styles = {
  border: "1px solid #e0e0e0",
  borderRadius: 16,
  boxShadow:
    "rgba(61, 61, 61, 0.08) 0px 2px 4px 0px, rgba(61, 61, 61, 0.04) 0px 2px 12px 0px, rgba(61, 61, 61, 0.04) 0px 4px 4px 0px",
  marginBottom: 16,
};

type Props = {
  parameter: {
    image: string;
    salonId: number;
    salonName: string;
    salonLocation: string;
    salonMarks: string;
    salonComment: number;
    salonTag: Array<string>;
  };
};

const SalonReviewCard = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 275, minWidth: 275 }} style={styles}>
      <CardActionArea href={`/salon/${props.parameter.salonId}/detail`}>
        <CardMedia
          component="img"
          height="140"
          image={`${props.parameter.image}`}
          alt=""
        />
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            style={{ marginBottom: 5 }}
          >
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <LocationOnIcon />
              {props.parameter.salonLocation}
            </Stack>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.parameter.salonName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <StarIcon /> {props.parameter.salonMarks} (
              {props.parameter.salonComment})
            </Stack>
          </Typography>
          <Stack
            direction="row"
            spacing={{ xs: 1 }}
            useFlexGap
            flexWrap="wrap"
          >
            {props.parameter.salonTag.map((item, index) => (
              <Chip label={item} key={index} variant="outlined" size="small" />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default SalonReviewCard;
