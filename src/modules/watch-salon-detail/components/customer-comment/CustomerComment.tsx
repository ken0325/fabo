import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const data = [
    { id: "1", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." },
    { id: "2", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "abc" },
    { id: "3", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "tttttttt" },
    { id: "4", avatar: "/static/images/avatar/1.jpg", name: "abc", date: "2024年5月13日", marks: 5.0, comment: "goodgood" }
];

const styles = {
    border: "1px solid #e0e0e0",
    borderRadius: 16,
    boxShadow: "rgba(61, 61, 61, 0.08) 0px 2px 4px 0px, rgba(61, 61, 61, 0.04) 0px 2px 12px 0px, rgba(61, 61, 61, 0.04) 0px 4px 4px 0px",
    marginBottom: 16
};

const CustomerComment = () => {
    return (
        <div>
            <h1>|&nbsp;評價</h1>
            {data.slice(0, 3).map((item, index, arr) => (
                <Card key={item.id} style={styles}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" src={`${item.avatar}`}/>
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
            ))}
            <hr/>
            <Button size="large" endIcon={<NavigateNextIcon />} onClick={() => { console.log('onClick'); }}>查看所有評價</Button>
        </div>
    );
};
export default CustomerComment;
