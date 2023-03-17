import { Card, CardBody, Box, VStack, HStack, Text, Heading, Divider, Avatar } from '@chakra-ui/react'
import Image from 'next/image'

const CardDisplayer = ({ cards }) => {
    return (
        cards.map((c: any) => {
            const mainImage = c.mainImage.replace("/public", "");
            console.log(c);

            return (
                <>
                    <Card 
                        key={c.id} 
                        variant="unstyled" 
                        w="100%" 
                        px="25px"
                        mb="25px"
                    >
                        <CardBody>
                            <Box pb="17px">
                                <Image 
                                    src={mainImage} 
                                    alt="card" 
                                    width={325} 
                                    height={325}
                                />
                            </Box>

                            <VStack spacing="4" align="start">
                                <HStack spacing="2">
                                    <Avatar src={mainImage} w="38px" h="38px" />
                                    <Text>
                                        @{c.nickname}
                                    </Text>
                                </HStack>

                                <Divider borderBottom="bdBottom"/>

                                <Heading fontWeight="medium" fontSize="fs4" lineHeight="lh1">
                                    {c.title}
                                </Heading>

                                <Text>
                                    {c.description}
                                </Text>

                                <Text fontSize="fs5" lineHeight="lh2">
                                    {`USD ${c.price}`}
                                </Text>
                            </VStack>
                        </CardBody>
                    </Card>
                    <Divider mt="22px" mb="25px" borderBottom="bdBottom" />
                </>
            )
        })
    )
}

export default CardDisplayer