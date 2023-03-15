import { Flex, Box } from "@chakra-ui/react"
import Image from 'next/image'
import LogoGroup2751 from '../public/nav/LogoGroup2751.svg'
import LogoGroup2752 from '../public/nav/LogoGroup2752.svg'
import searchVector from '../public/nav/searchVector.svg'
import menuVector from '../public/nav/menuVector.svg'

const TopNav = () => {
    return (
        <Flex w="425px" justify="space-between">
            <Flex align="center" gap={4}>
                <Box>
                    <Image src={LogoGroup2751} alt="logo" width={38} />
                </Box>
                <Box>
                    <Image src={LogoGroup2752} alt="brand" width={100} />
                </Box>
            </Flex>

            <Flex align="center" gap={4}>
                <Box>
                    <Image src={searchVector} alt="search" />
                </Box>
                <Box>
                    <Image src={menuVector} alt="menu" />
                </Box>
            </Flex>
        </Flex>
    )
}

export default TopNav