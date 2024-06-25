import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import { SalonInfoCardType } from "../../../../../types/SalonInfoCard";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const styles = {
  border: "1px solid #e0e0e0",
  borderRadius: 16,
  boxShadow:
    "rgba(61, 61, 61, 0.08) 0px 2px 4px 0px, rgba(61, 61, 61, 0.04) 0px 2px 12px 0px, rgba(61, 61, 61, 0.04) 0px 4px 4px 0px",
  marginBottom: 16,
};

// type Props = {
//   parameter: {
//     image: string;
//     salonId: number;
//     salonName: string;
//     salonLocation: string;
//     salonMarks: string;
//     salonComment: number;
//     salonTag: Array<string>;
//   };
// };

const SalonReviewCard = (props: SalonInfoCardType) => {
  return (
    <Card sx={{ maxWidth: 275, minWidth: 275 }} style={styles}>
      <CardActionArea href={`/salon/${props.parameter.salonId}/detail`}>
        <div style={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="140"
            image={`${props.parameter.image}`}
            alt=""
          />
          <div
            style={{
              position: "absolute",
              color: "white",
              top: 10,
              left: "15%",
              transform: "translateX(-50%)",
            }}
          >
            {props.parameter.discount.valueOf() ? (
              <Chip
                color="error"
                size="small"
                icon={<LocalOfferIcon />}
                label="優惠"
              />
            ) : null}
          </div>
        </div>
        <CardContent>
          <Typography component='div'
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
          <Typography sx={{ mb: 1 }} color="text.secondary" component='div'>
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
          <Stack direction="row" spacing={{ xs: 1 }} useFlexGap flexWrap="wrap" style={{ marginBottom: "5px"}}>
            {props.parameter.salonTag.map((item, index) => (
              <Chip label={item} key={index} variant="outlined" size="small" />
            ))}
          </Stack>
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "14rem",
              height: "5rem",
              display: "inline-block",
              whiteSpace: "pre-line",
            }}
          >
            <Typography variant="body2" color="text.secondary" component='div'>
              {props.parameter.salonDescription}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default SalonReviewCard;
