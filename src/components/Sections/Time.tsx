import { useTheme } from "styled-components"
import Font from "../../ui/Font/Font"
import Flex from "../../ui/Flex/Flex";

const Time = ()=>{
    const theme = useTheme();
    return(
        <Flex gap="5px" justify="flex-start" items="end" width="80%">
            <div>
                <Font fontSize="12px">Days</Font>
                <Font fontSize={theme.fontSizes.big} fontWeight="700">03</Font>
            </div>
            <Font fontSize={theme.fontSizes.big} color={theme.colors.red_0}>:</Font>
            <div>
                <Font fontSize="12px">Days</Font>
                <Font fontSize={theme.fontSizes.big} fontWeight="700">03</Font>
            </div>
            <Font fontSize={theme.fontSizes.big} color={theme.colors.red_0}>:</Font>
            <div>
                <Font fontSize="12px">Days</Font>
                <Font fontSize={theme.fontSizes.big} fontWeight="700">03</Font>
            </div> <Font fontSize={theme.fontSizes.big} color={theme.colors.red_0}>:</Font>
            <div>
                <Font fontSize="12px">Days</Font>
                <Font fontSize={theme.fontSizes.big} fontWeight="700">03</Font>
            </div>
        </Flex>
    )
}
export default Time;