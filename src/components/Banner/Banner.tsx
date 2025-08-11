import Flex from '../../ui/Flex/Flex';
import Font from '../../ui/Font/Font';
import apple from '../../assets/pictures/homepage/1200px-Apple_gray_logo 1.png';
import iphone from '../../assets/pictures/homepage/bannerPhone.png';
import iconArrowRight from '../../assets/pictures/homepage/icons arrow-right.png';
import styled, { useTheme } from 'styled-components';

const FlexBanner = styled(Flex)`
  background-color: ${props => props.theme.colors.black_1};
`;

const Banner = () => {
  const theme = useTheme();
  return (
    <Flex justify='space-between' gap='35px' items='start'>
      <Flex
        paddingTop='35px'
        direction='column'
        items='start'
        gap='10px'
        left='0'
        right='5%'
        justify='space-between'
        rightBorder='1px solid black'
        width='20%'
      >
        <Font>Woman’s Fashion</Font>
        <Font>Men’s Fashion</Font>
        <Font>Electronics</Font>
        <Font>Home & Lifestyle</Font>
        <Font>Medicine</Font>
        <Font>Sports & Outdoor</Font>
        <Font>Baby’s & Toys</Font>
        <Font>Groceries & Pets</Font>
        <Font>Health & Beauty</Font>
      </Flex>
      <FlexBanner
        left='5%'
        right='0'
        flexBorder='2px solid firebrick'
        justify='space-between'
        gap='5%'
        top="35px"
        width='80%'
      >
        <Flex direction='column' left='20px' items='start' gap='20px'>
          <Flex justify='space-between' gap='10px' left='0' right='0'>
            <img src={apple} alt='iphonelogo' />
            <Font color={theme.colors.white_0}>iPhone 14 Series</Font>
          </Flex>
          <Font fontSize='30px' color={theme.colors.white_0}>
            Up to 10% off Voucher
          </Font>
          <Flex left='0' right='0' gap='10px'>
            <Font textDecoration='underline' color={theme.colors.white_0}>
              {' '}
              Shop Now
            </Font>{' '}
            <img src={iconArrowRight} alt='rigthICon' />
          </Flex>
        </Flex>
        <img src={iphone} alt='iphone' width={450} />
      </FlexBanner>
    </Flex>
  );
};

export default Banner;
