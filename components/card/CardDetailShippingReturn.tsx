import { Card, CardHeader, CardBody, Text, Heading, Stack } from "@chakra-ui/react"

const CardDetailShippingReturn = () => {
    return (
        <Card variant="unstyled" w="100%" pt="30px" pb="22px">
            <CardHeader>
                <Heading fontSize="fs3" mb="15px">Shipping & Returns</Heading>
            </CardHeader>

            <CardBody>
                <Stack>
                    <Text>Shipping: Free home delivery worldwide</Text>
                    <Text>Delivery: 2-5 days delivery</Text>
                    <Text>Returns: Free 30-day return policy</Text>
                    <Text>Warranty: Lifetime warranty</Text>
                    <Text>Tax & Import: Tax and import duties included</Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardDetailShippingReturn