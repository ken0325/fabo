import { Grid } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SalonImages from "./salon-images/SalonImages";
import VerifiedIcon from '@mui/icons-material/Verified';

const SalonHeader = () => {
    return (
        <Grid
            // marginBottom={5}
        >
            <div
                style={{
                    display: "flex"
                }}
            >
                <h1>Hair Ponder(旺角店)</h1>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginLeft: 20
                    }}
                >
                    <VerifiedIcon></VerifiedIcon><h5>認證商戶</h5>
                </div>
            </div>
            <div
                style={{
                    paddingBottom: 10,
                    display: "flex",
                    justifyContent: "start",
                }}
            >
                <StarIcon></StarIcon>
                {'4.7(54個評價) 服務: 4.7 環境: 4.6 消費: 4.7'}
            </div>
            <div
                style={{
                    paddingBottom: 10,
                    display: "flex",
                    justifyContent: "start",
                }}
            >
                <LocationOnIcon></LocationOnIcon>
                {'旺角'}
            </div>
            <SalonImages />
        </Grid>
    );
};

export default SalonHeader;
