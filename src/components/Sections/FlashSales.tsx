import Flex from "../../ui/Flex/Flex"
import Font from "../../ui/Font/Font";
import SectionTitle from "../../ui/Section/SectionTitle"
import Time from "./Time";

const FlashSales = ()=>{
    return(
        <Flex justify="flex-start" gap="0" top="130px" direction="column" items="start">
            <Flex right="0" left="0"><SectionTitle>Today’s</SectionTitle></Flex>
            <Flex justify="flex-start"  gap="30px" right="0" left="0" items="flex-end">
                <Font fontSize="30px" fontWeight="800"  >Flash Sales</Font>
                <Time/>
            </Flex>
        </Flex>
    )
}
export default FlashSales;