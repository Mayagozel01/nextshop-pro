import styled, { useTheme } from 'styled-components';
import Flex from '../../ui/Flex/Flex';
import Font from '../../ui/Font/Font';

const HeaderDiv1 = styled(Flex)`
  background-color: ${props => props.theme.colors.black_1};
  padding-top: 10px;
  padding-bottom: 10px;
`;
export default function Header() {
  const theme = useTheme();
  return (
    <header>
      <HeaderDiv1 justify='end'>
        <Flex justify='end' gap='10px'>
          <Font color={theme.colors.white_0}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </Font>
          <Font
            color={theme.colors.white_0}
            fontWeight='700'
            textDecoration='underline'
          >
            ShopNow
          </Font>
        </Flex>
        <Font color={theme.colors.white_0}>English</Font>
      </HeaderDiv1>
      <div  className='headerDiv2'>
        <Font fontSize='24px' fontWeight='800'>Exclusive</Font>
      </div>
    </header>
  );
}
