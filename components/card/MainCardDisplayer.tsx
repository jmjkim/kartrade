import photo1 from "../../public/photocard/photo1.svg"
import { Box } from "@chakra-ui/react"
import Image from "next/image"

const MainCardDisplayer = () => {
    return (
        <Box>
            <Image src={photo1} alt="main" />
        </Box>
    )
}

export default MainCardDisplayer