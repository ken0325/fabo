import {
  Box,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
  styled,
  Paper,
  Button,
} from "@mui/material";
import { Suspense } from "react";
import Carousel from "react-material-ui-carousel";
import SalonReviewCard from "../watch-salon/components/salon-page-body/salon-info/SalonInfoCard2";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {}
const HomeePage = (props: Props) => {
  var items = ["first", "second", "third"];
  var districts = ["觀塘", "葵青", "深水埗", "尖沙咀", "旺角"];
  var types = [
    "剪頭髮",
    "上門剪髮",
    "電髮",
    "染髮",
    "頭髮護理",
    "Barber Shop",
    "挑染 Highlight",
    "韓式髮型",
    "日系髮型",
    "頭皮護理",
    "駁髮",
    "植髮",
    "油頭",
    "小童剪髮",
  ];

  return (
    <Suspense fallback={<div>loading</div>}>
      <div className="App">
        <h1 style={{ textAlign: "start", display: "flex" }}>
          【髮型屋推介】香港No.1 Hair Salon 網上預約平台｜獨家優惠
        </h1>
        {/* Carousel */}
        <Grid>
          <Carousel
            height={250}
            animation={"slide"}
            duration={500}
            navButtonsAlwaysVisible={true}
            indicatorIconButtonProps={{
              style: {
                // padding: "10px",
              },
            }}
          >
            {items.map((item, i) => (
              <Box
                key={i}
                display="flex"
                // width={500}
                height={250}
                bgcolor="gray"
                alignItems="center"
                justifyContent="center"
                style={{ aspectRatio: 0 / 3 }}
              >
                {item}
              </Box>
              // <img
              //   srcSet={`${item}?w=500&h=200&fit=crop&auto=format&dpr=2 2x`}
              //   src={`${item}?w=500&h=200&fit=crop&auto=format`}
              //   alt={""}
              //   loading="lazy"
              //   style={{ aspectRatio: 3 / 2 }}
              // />
            ))}
          </Carousel>
        </Grid>
        {/* 熱門髮型屋推介 */}
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            style={{ marginBottom: "20px" }}
          >
            <h1>|&nbsp;熱門髮型屋推介</h1>
            <Button
              size="large"
              endIcon={<NavigateNextIcon />}
              onClick={() => {
                console.log("onClick");
              }}
              href="/search"
            >
              查看所有髮型屋
            </Button>
          </Stack>
          <Box sx={{ flexGrow: 1 }}>
            <Stack
              spacing={{ xs: 1 }}
              direction="row"
              useFlexGap
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
            >
              <SalonReviewCard
                parameter={{
                  image:
                    "https://staticfiles2.hellotoby.com/gallery/2024/05/91649002.jpeg!gallery-preview",
                  salonId: 1,
                  salonName: "髮型屋1",
                  salonLocation: "尖沙咀",
                  salonMarks: "4.5",
                  salonComment: 166,
                  salonTag: ["國際/本地認證"],
                  discount: true,
                  salonDescription: "La La Hair 擁有約10名專業的髮型師，所有髮型師皆有至少五年的理髮經驗。",
                }}
              />
              <SalonReviewCard
                parameter={{
                  image:
                    "https://staticfiles2.hellotoby.com/gallery/2023/01/32644722.jpeg!gallery-preview",
                  salonId: 2,
                  salonName: "髮型屋2",
                  salonLocation: "觀塘",
                  salonMarks: "3",
                  salonComment: 99,
                  salonTag: ["國際/本地認證", "日本品牌"],
                  discount: false,
                  salonDescription: "位於尖沙咀的Chinologic Hair，是全港首間採用Chinology髮哲學院品牌概念的髮廊。",
                }}
              />
              <SalonReviewCard
                parameter={{
                  image:
                    "https://staticfiles2.hellotoby.com/gallery/2020/02/77810155.png!gallery-preview",
                  salonId: 3,
                  salonName: "髮型屋3",
                  salonLocation: "觀塘",
                  salonMarks: "3.8",
                  salonComment: 156,
                  salonTag: ["日本品牌"],
                  discount: true,
                  salonDescription: "Hair Ma Ma 雖然位於觀塘屋苑，收費親民划算，但 Hair Ma Ma 以客為本，承諾給您貴價髮型屋的尊貴和專業的服務體驗。",
                }}
              />
              <SalonReviewCard
                parameter={{
                  image:
                    "https://staticfiles2.hellotoby.com/gallery/2021/09/79632940.jpeg!gallery-preview",
                  salonId: 4,
                  salonName: "髮型屋4",
                  salonLocation: "尖沙咀",
                  salonMarks: "4.4",
                  salonComment: 121,
                  salonTag: ["寬敞空間"],
                  discount: false,
                  salonDescription: "Hair Concept Salon位於銅鑼灣，交通便利，由地鐵站步行數分鐘便能到達。",
                }}
              />
            </Stack>
          </Box>
        </div>
        {/* 熱門髮型推介 */}
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            style={{ marginBottom: "20px" }}
          >
            <h1>|&nbsp;熱門髮型推介</h1>
            <Button
              size="large"
              endIcon={<NavigateNextIcon />}
              onClick={() => {
                console.log("onClick");
              }}
              href="#"
            >
              查看所有髮型
            </Button>
          </Stack>
        </div>
        {/* 各區髮型屋 */}
        <div>
          <h1>|&nbsp;香港各區的髮型屋Hair Salon</h1>
          <Stack
            spacing={2}
            style={{ whiteSpace: "pre-line" }}
            flexWrap="wrap"
            direction="row"
            useFlexGap
            divider={<Divider orientation="vertical" />}
            justifyContent="flex-start"
            alignItems="center"
          >
            {districts.map((district, i) => (
              <Link href="#" key={i}>
                {district}
              </Link>
            ))}
          </Stack>
        </div>
        {/* 髮型類別 */}
        <div>
          <h1>|&nbsp;香港各類型髮型屋Hair Salon</h1>
          <Stack
            spacing={2}
            style={{ whiteSpace: "pre-line" }}
            flexWrap="wrap"
            direction="row"
            useFlexGap
            divider={<Divider orientation="vertical" />}
            justifyContent="flex-start"
            alignItems="center"
          >
            {types.map((type, i) => (
              <Link href="#" key={i}>
                {type}
              </Link>
            ))}
          </Stack>
          <p>
            想搵2024髮型屋推介? Fabo 爲你搜羅全香港各區Hair
            Salon，包括日式髮型屋、韓式髮型屋及髮型師推介。我哋有大量剪髮及理髮服務優惠，男女老少都可以找到適合的髮型屋推介！無論剪髮、染髮、電髮、曲髮、做焗油treatment，甚至駁髮、漂染、Highlight、電梨花頭、bob
            hair、負離子直髮、paimore直療、巴西焗油、韓式髮型、日系髮型、耳圈染修瀏海、解決頭皮乾燥問題，Fabo
            都有至抵優惠畀你揀，快啲揀間Salon剪返個2024當季流行髮型啦！
          </p>
        </div>
        <hr />
        {/* Foba description */}
        <div>
          <h1>|&nbsp;髮型屋Hair Salon 常見問題</h1>
          <div style={{ marginBottom: 20 }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              2024香港髮型屋推介－點解選擇Fabo 預約髮型屋？
            </Typography>
            <Typography variant="body2" gutterBottom>
              Fabo 為你搜羅香港各區Salon優惠，你更可以經Fabo
              一次過瀏覽全港髮型屋資訊，輕鬆篩選你想搵嘅Salon。Fabo
              同時提供網上預約髮型屋服務，方便你搜羅及比較不同香港髮型屋，亦讓你以至抵價錢，打造理想的頭髮造型。Fabo
              上的salon偏佈銅鑼灣、尖沙咀、荃灣、觀塘、旺角、元朗等熱門地區，無論想去港九新界的髮型屋都可以快速找到！想找香港韓式髮型屋、日本髮型屋推介？各式男女造型、染髮、電髮、韓系髮型、剪頭髮、頭髮護理、梨花頭、Paimore直療等，Fabo
              都可為你搜羅全城最平最高質髮型屋。
            </Typography>
          </div>

          <div style={{ marginBottom: 20 }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              如何預約髮型屋Salon服務？
            </Typography>
            <Typography variant="body2" gutterBottom>
              你只需喺相關商戶頁面選取自己喜愛嘅服務，再點選預約，填妥人數、日期、時間和個人資料後，按付款即完成登記（網上付款／現場付款）。成功付款後，你會收到一封確認電郵，即代表預約成功！如你本身已經係Fabo
              用戶，你可隨時登入查看預約詳情；如果你係新用戶，我哋會喺你成功預約後以SMS形式將臨時登入資料傳送俾你，之後改返個私人密碼就得喇！
              小貼士：如果你未能如常收到郵件，請檢查電郵中嘅「垃圾郵件箱」，如發現內有Fabo
              發出電郵，請標記為「不是垃圾郵件」。
            </Typography>
          </div>
          <div style={{ marginBottom: 20 }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              經 Fabo 預約髮型屋Salon，會唔會收取手續費？
            </Typography>
            <Typography variant="body2" gutterBottom>
              Fabo
              唔會向顧客收取任何手續費，所有髮型屋費用已列明喺購買優惠單據中。
            </Typography>
          </div>
          <div style={{ marginBottom: 20 }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              我可以指定髮型師嗎？
            </Typography>
            <Typography variant="body2" gutterBottom>
              不同髮型屋服務和優惠都唔同，你可閱讀相關髮型屋優惠詳情，視乎指定髮型師會否提供相關優惠。如有需要，你亦可聯絡髮型屋查詢。
            </Typography>
          </div>
          <div style={{ marginBottom: 20 }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              預約頭髮造型服務，我需要支付按金嗎？
            </Typography>
            <Typography variant="body2" gutterBottom>
              Fabo 會列明需要支付按金嘅服務，如無列明則毋需按金。{" "}
            </Typography>
          </div>
          <div style={{ marginBottom: 20 }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              髮型屋有什麼服務範圍？剪髮、染髮、電髮等造型時長多久？
            </Typography>
            <Typography variant="body2" gutterBottom>
              髮型屋提供不同造型設計服務，不同造型服務需時各有長短。普通洗剪吹大概1小時，燙髮電髮可能需時3小時或以上，如需要漂染頭髮（如全頭漂染、highlight、漸變、耳圈染、底層染），造型服務時間也會加長至4小時以上。如需額外頭髮護理（焗油、髮質矯正、頭皮護理等），服務時間也會額外延長。髮型屋服務多元化，包括日系髮型、韓系髮型、歐美髮型等，實際服務範圍和時長詳情，可留意各髮型屋商戶頁面。
            </Typography>
          </div>
          <div style={{ marginBottom: 20 }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontWeight: "bold" }}
            >
              髮型屋Salon會提供售後服務嗎？{" "}
            </Typography>
            <Typography variant="body2" gutterBottom>
              有部分髮型屋會為顧客提供售後服務或保證期，髮型師會根據你頭髮嘅情況，判斷會否送上焗油或補色等服務。不同髮型屋Salon有不同服務優惠，未必每間髮型屋都有提供售後服務選項，你可留意各髮型屋商戶頁面服務內容。如果在Fabo
              購買優惠，而服務完結後有任何意見，可經Fabo
              商戶頁面留低評價。如有需要，亦可與我們聯絡。
            </Typography>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default HomeePage;
