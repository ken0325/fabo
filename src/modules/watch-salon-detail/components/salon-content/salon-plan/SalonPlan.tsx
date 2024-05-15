import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';
import { Button } from '@mui/base/Button';

const salonPlanCategory = [
    { id: "1", UUID: "123", salonUUID: "100", categoryName: "特別美髮優惠" },
    { id: "2", UUID: "124124", salonUUID: "100", categoryName: "染髮" },
    { id: "3", UUID: "wdqwdqwd", salonUUID: "12", categoryName: "洗剪吹" },
    { id: "4", UUID: "sdasd", salonUUID: "14", categoryName: "頭髮護理" },
    { id: "5", UUID: "asfcasfas", salonUUID: "777", categoryName: "電髮 (直/曲)" },
    { id: "6", UUID: "safdafghk", salonUUID: "555", categoryName: "挑染" },
    { id: "7", UUID: "fdhfgjfj", salonUUID: "100", categoryName: "頭皮護理" },
];

const planData = [
    { id: "1", uuid: "hviuh", salonUUID: "100", categoryUUID: "123", planName: "京喚羽重組修護", description: "重組修護", details: "服務包括：使用全新進化版京喚羽產品。加入新增成分，令修護效果比以往大大提升。配合產品蘊含的榮獲諾貝爾獎成份 - 富勒烯🏅能對抗自由基防止老化，並預防紫外線傷害效果：⬆️採用專利技術 - INKARAMI 凝聚結合技術⬆️髮絲強韌度能回復 140%📈⬆️改善髮質，帶來輕盈、柔軟、有光澤嘅髮絲😍⬆️而且擁有持久嘅修護效果✨對象：頭髮極度受損京喚羽系列就非常適合你使用！只要你是:✅經常漂髮✅長期電、染髮的習慣✅使用直捲髮器的習慣要令乾燥髮絲回復順滑亮澤 全新版京喚羽幫到你", cost: "498" },
    { id: "2", uuid: "qqwdqww", salonUUID: "100", categoryUUID: "123", planName: "abc", description: "abc", details: "abc", cost: "500" },
    { id: "3", uuid: "fsddf", salonUUID: "100", categoryUUID: "124124", planName: "Fiole染髮連洗剪造型", description: "提供完美及持久的染髮效果", details: "提供完美及持久的染髮效果", cost: "498" },
    { id: "4", uuid: "ghghj", salonUUID: "100", categoryUUID: "124124", planName: "中藥染髮連頭髮護理連洗剪造型", description: "提供完美及持久的染髮效果", details: "提供完美及持久的染髮效果", cost: "498" },
];

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {/* <Typography>{children}</Typography> */}
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function test(uuid: string, value: number, index: number) {
    const aaa = planData.filter(element => element.categoryUUID.includes(uuid));
    return (
        aaa.map((item, index, arr) => (
            <CustomTabPanel key={index} value={value} index={index}>
                {item.planName}<br />
                {item.description}<br />
                {item.cost}<br />
                {NestedModal(item.uuid, item.details)}
                <Button href="">
                    預約
                </Button>
            </CustomTabPanel>
        ))
    );
}


function NestedModal(uuid: string, details: string) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <TriggerButton onClick={handleOpen}>Open modal</TriggerButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                slots={{ backdrop: StyledBackdrop }}
            >
                <ModalContent sx={style}>
                    <h2 id="parent-modal-title" className="modal-title">
                        {uuid}
                    </h2>
                    <p id="parent-modal-description" className="modal-description">
                        {details}
                    </p>
                </ModalContent>
            </Modal>
        </div>
    );
}


const BasicTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const filteredGenre = salonPlanCategory.filter(element => element.salonUUID.includes("100"));

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" scrollButtons={true}>
                    {/* <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} /> */}
                    {filteredGenre.map((item, index, arr) => (
                        <Tab key={index} label={item.categoryName} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </Box>
            {filteredGenre.map((item, index, arr) => (
                // <Tab label={item.categoryName} {...a11yProps(index)} />
                test(item.UUID, value, index)
            ))}
            {/* <CustomTabPanel value={value} index={0}>
                Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel> */}
        </Box>
    )
};

const SalonPlan = () => {
    return (
        <div>
            <h1>|&nbsp;預約</h1>
            <BasicTabs />
        </div>
    );
};
export default SalonPlan;
const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean }>(
    (props, ref) => {
        const { open, ...other } = props;
        return (
            <Fade in={open}>
                <div ref={ref} {...other} />
            </Fade>
        );
    },
);

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
  `;

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
};

const ModalContent = styled('div')(
    ({ theme }) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      text-align: start;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border-radius: 8px;
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0 4px 12px
        ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
      padding: 24px;
      color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
  
      & .modal-title {
        margin: 0;
        line-height: 1.5rem;
        margin-bottom: 8px;
      }
  
      & .modal-description {
        margin: 0;
        line-height: 1.5rem;
        font-weight: 400;
        color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
        margin-bottom: 4px;
      }
    `,
);

const TriggerButton = styled(Button)(
    ({ theme }) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.5;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 150ms ease;
      cursor: pointer;
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  
      &:hover {
        background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      }
  
      &:active {
        background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
      }
  
      &:focus-visible {
        box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
        outline: none;
      }
    `,
);