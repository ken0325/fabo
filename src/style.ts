import { createTheme } from "@mui/system";

const changeFontFamily = (obj: any, fontFamily: string) => {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            changeFontFamily(obj[key], fontFamily);
        } else {
            if (key === 'fontFamily') {
                obj[key] = fontFamily;
            }
        }
    }
    return obj
}

const basicThemeOptions = {}; // Declare basicThemeOptions variable

const getNewBasicTheme = () => {
    const NewThemeOptions = changeFontFamily(basicThemeOptions, 'Arial');
    const NewBasicTheme = createTheme(...NewThemeOptions);
    return NewBasicTheme
}

export const NewBasicTheme = getNewBasicTheme();