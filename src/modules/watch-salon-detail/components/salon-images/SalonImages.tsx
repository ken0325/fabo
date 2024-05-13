import { Box, Grid } from "@mui/material";
import { Paper, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const styles = {
    border: "1px solid #e0e0e0",
    borderRadius: 16,
    boxShadow: "rgba(61, 61, 61, 0.08) 0px 2px 4px 0px, rgba(61, 61, 61, 0.04) 0px 2px 12px 0px, rgba(61, 61, 61, 0.04) 0px 4px 4px 0px",
    marginBottom: 16
};

const SalonImages = () => {
    return (
        <Grid
        container
        direction="row"
        style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 50,
        }}
    >
        {itemData.slice(0, 4).map((item, index, arr) => (
            index == 3 ?
                <Card sx={{ maxWidth: 275 }} style={styles} key={item.img} onClick={() => console.log('test')}>
                    <CardActionArea>
                        <CardMedia
                            // style={{ filter: "grayscale(100%)" }}
                            component="img"
                            height="300"
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                justifyContent: 'center',
                                bottom: 0,
                                left: 0,
                                top: 0,
                                right: 0,
                                width: '100%',
                                display: 'block',
                                bgcolor: 'rgba(0, 0, 0, 0.54)',
                                color: 'white',
                                padding: '100px',
                            }}
                        >
                            <Typography variant="h5">More</Typography>
                        </Box>
                    </CardActionArea>
                </Card>
                :
                <Card sx={{ maxWidth: 275 }} style={styles} key={item.img} onClick={() => console.log('test')}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            // height="140"
                            height="300"
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </CardActionArea>
                </Card>
        ))}
    </Grid>
    );
};
export default SalonImages;
