import { Box, Button, Card, CardContent, CardMedia, Container, Stack, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const data = [
    { id: "1", avatar: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6", name: "邱泓基", works: 99 },
    { id: "2", avatar: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6", name: "楊廷曜", works: 109 },
    { id: "3", avatar: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6", name: "歐陽衛淇", works: 264 },
    { id: "4", avatar: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6", name: "利菱殷", works: 400 },
];

const SalonHairstylist = () => {
    return (
        <div>
            <h1>|&nbsp;髮型師 ({data.length})</h1>
            <Stack>
                {data.slice(0, 3).map((item, index, arr) =>
                    <Card onClick={() => { console.log('onClick'); }} key={index} sx={{ display: 'flex' }} style={{
                        marginBottom: 10
                    }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image={item.avatar}
                            loading="lazy"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    作品 ({item.works})
                                </Typography>
                            </CardContent>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyItems: 'end', justifyContent: 'flex-end' }}>
                            <NavigateNextIcon />
                        </Box>
                    </Card>)}
            </Stack>
            <hr/>
            <Button size="large" endIcon={<NavigateNextIcon />} onClick={() => { console.log('onClick'); }}>查看所有髮型師</Button>
        </div>
    );
};

export default SalonHairstylist;
