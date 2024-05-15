import {Link, Stack } from "@mui/material";
import BusinessHours from "./salon-business-hours/SalonBusinessHours";

const SalonInfo = () => {
    return (
        <div>
            <h1>|&nbsp;商戶資訊</h1>
            <h3>地址</h3>
            <p>旺角彌敦道646號陶德大廈閣樓</p>
            <Link href="https://maps.app.goo.gl/chdFVvqyNSG6toBn7" target="_blank">查看地圖</Link>
            <h3>電話</h3>
            <p>54668846</p>
            <BusinessHours />
        </div>
    );
};

export default SalonInfo;
