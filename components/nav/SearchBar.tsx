import { Flex, Input } from '@chakra-ui/react'
import { useState } from 'react'
import ChakraImage from '../ChakraImage'
import { useRouter } from 'next/router'
import searchIcon from '../../asset/icon/searchIcon.svg'

const SearchBar = ({ handleClick }) => {
    const router = useRouter()
    const [ searchInput, setSearchInput ] = useState("")

    const handleInputChange = (e: string) => {
        setSearchInput(e)
    }

    const handleInputSubmit = (e: string) => {
        if (e === "Enter") {
            setSearchInput("")
            handleClick()
            router.push(`/search/${searchInput}`)
        }
    }

    return (
        <Flex zIndex={1} pos="absolute" width={['100%', '380px']} px="25px" py="20px" backgroundColor="white" borderTop="bdBottom" borderBottom="bdBottom">
            <ChakraImage src={searchIcon} alt="search" />
            <Input 
                type="text" 
                onKeyDown={e => handleInputSubmit(e.key)} 
                onChange={e => handleInputChange(e.target.value)} 
                value={searchInput} 
                variant='unstyled' 
                placeholder="Search by card, person or group" 
                htmlSize={2} 
                fontSize="fs3" 
                size="lg" 
                width="100%" />
        </Flex>
    )
}

export default SearchBar
  