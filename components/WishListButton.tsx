import { Text, Button } from '@chakra-ui/react';
import ChakraImage from './utils/ChakraImage';
import wishListIcon from '../asset/icon/wishListIcon.svg';

const WishListButton = () => {
  return (
    <Button
      leftIcon={<ChakraImage src={wishListIcon} alt="wishlist" />}
      width="152px"
      height="55px"
      bg="#FFF"
      border="1px solid #777"
      borderRadius="74px"
      alignContent="center"
      justifyContent="center"
    >
      <Text fontSize="fs1" color="#1B1B1B">
        WISH LIST
      </Text>
    </Button>
  );
};

export default WishListButton;