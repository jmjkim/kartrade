import { Flex } from "@chakra-ui/react"
import Image from 'next/image'
import LogoGroup2751 from '../public/nav/LogoGroup2751.svg'
import LogoGroup2752 from '../public/nav/LogoGroup2752.svg'
import searchVector from '../public/nav/searchVector.svg'
import menuVector from '../public/nav/menuVector.svg'

const TopNav = () => {
    return (
        <Flex justify="space-between" w="100%" px="25px">
            <Flex align="center" gap={4}>
                <Image src={LogoGroup2751} alt="logo" width={38} />
                <Image src={LogoGroup2752} alt="brand" width={100} />
            </Flex>

            <Flex align="center" gap={6}>
                <Image src={searchVector} alt="search" />
                <Image src={menuVector} alt="menu" />
            </Flex>
        </Flex>
    )
}

export default TopNav