import { useRouter } from 'next/router'
import {
    Image,
    Card,
    CardBody,
    Box,
    VStack,
    HStack,
    Text,
    Heading,
    Divider,
    Avatar,
} from '@chakra-ui/react';

const CardDetailDisplayer = () => {
    const router = useRouter()
    const { cardID } = router.query

    return (
        <Box>
            <Card>
                Card ID: { cardID }
            </Card>
        </Box>
    );
}

export default CardDetailDisplayer