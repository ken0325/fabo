import { Avatar, Button, DialogContentText, Grid, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';

const data = [
    {
        id: "1", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        image: [
            "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
            "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
            "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
            "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
            "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
            "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
            "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
            "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        ]
    },
    {
        id: "2", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "abc",
        image: [
            "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
            "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
            "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        ]
    },
    { id: "3", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "tttttttt", image: [] },
    { id: "4", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "goodgood", image: [] }
];

const styles = {
    border: "1px solid #e0e0e0",
    borderRadius: 16,
    boxShadow: "rgba(61, 61, 61, 0.08) 0px 2px 4px 0px, rgba(61, 61, 61, 0.04) 0px 2px 12px 0px, rgba(61, 61, 61, 0.04) 0px 4px 4px 0px",
    marginBottom: 16
};

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    // maxWidth: 400,
    marginBottom: 10,
    color: theme.palette.text.primary,
}));

const SalonCustomerComment = () => {
    return (
        <div>
            <h1>|&nbsp;評價 ({data.length})</h1>
            {/* {data.slice(0, 3).map((item, index, arr) => (
                <Card key={item.id} style={styles}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" src={`${item.avatar}`} />
                        }
                        title={`${item.name}`}
                        subheader={
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <StarIcon></StarIcon>
                                <p>{`${item.marks}`}&nbsp;&nbsp;&nbsp;{`${item.date}`}</p>
                            </Grid>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {`${item.comment}`}
                        </Typography>
                    </CardContent>
                </Card>
            ))} */}
            {data.slice(0, 3).map((item, index, arr) => (
                <StyledPaper
                    sx={{
                        // my: 1,
                        // mx: 'auto',
                        p: 2,
                    }}
                    key={item.id}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar aria-label="recipe" src={`${item.avatar}`} />
                        </Grid>
                        <Grid item xs container direction='column'>
                            <Typography>{`${item.name}`}</Typography>
                            <Grid item xs container direction='row'>
                                <Typography>{`${item.date}`}</Typography>&nbsp;&nbsp;
                                <StarIcon></StarIcon><Typography>{`${item.marks}`}</Typography>
                            </Grid>
                            <Typography>{`${item.comment}`}</Typography>
                            <Grid container spacing={1}>
                                <Grid container item spacing={3}>
                                    {item.image.map((imageItem, i, arr2) => (
                                        <Grid key={imageItem} item justifyContent="flex-start">
                                            <ImageListItem key={i} sx={{ width: 150, height: 100 }}>
                                                <img
                                                    srcSet={`${imageItem}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                    src={`${imageItem}?w=164&h=164&fit=crop&auto=format`}
                                                    loading="lazy"
                                                    onClick={() => console.log("click")}
                                                />
                                            </ImageListItem>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </StyledPaper>
            ))}
            <hr />
            <Button size="large" endIcon={<NavigateNextIcon />} onClick={() => { console.log('onClick'); }} href="/salon/100/comment">查看所有評價</Button>
        </div>
    );
};
export default SalonCustomerComment;
