import { Card, CardBody, Box, Flex, Text, Heading, VStack, Divider } from '@chakra-ui/react'
import Image from 'next/image'

const CardDisplayer = ({ cards }) => {
    return (
        cards.map((c: any) => {
            return (
                <Card key={c.id}>
                    <CardBody>
                        <Box borderBottom="#E5E5E5">
                            <Image src={c.mainImage} alt="card" width={370} height={420} />
                        </Box>

                        <VStack spacing="4" align={"flex-start"}>
                            <Flex gap="2">
                                <Box w="38px" height="38px" bg="gray" borderRadius="50%">
                                    <Image src={c.mainImage} alt="user" width={38} height={38} />
                                </Box>
                                <Text>
                                    @{c.nickname}
                                </Text>
                            </Flex>
                            <Divider />

                            <Heading size="md">
                                {c.title}
                            </Heading>

                            <Text>
                                {c.description}
                            </Text>
            
                            <Heading>
                                {`USD ${c.price}`}
                            </Heading>
                        </VStack>
                    </CardBody>
                </Card>
            )
        })
    )
}

export default CardDisplayer