import { Box } from '@chakra-ui/react'
import ChakraImage from './ChakraImage'
import LogoGroup2751 from '../asset/icon/nav/LogoGroup2751.svg';

const backgroundImageSize = [0, 0, 400];

const BackgroundImageDisplayer = () => {
    return (
        <Box minW={backgroundImageSize} minH={400}>
            <ChakraImage
              src={LogoGroup2751}
              alt="logo"
              width={backgroundImageSize}
              height={backgroundImageSize}
            />
        </Box>
    )
}

export default BackgroundImageDisplayer