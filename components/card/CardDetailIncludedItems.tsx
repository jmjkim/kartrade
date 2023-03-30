import { Card, CardHeader, CardBody, Text, Heading, Stack } from "@chakra-ui/react"

const CardDetailIncludedItems = () => {
    return (
        <Card variant="unstyled" w="100%" pb="22px">
            <CardHeader>
                <Heading fontSize="fs3" mb="15px">Specific Details</Heading>
            </CardHeader>

            <CardBody>
                <Stack>
                    <Text>Contains:</Text>
                    <Text>value 1</Text>
                    <Text>value 2</Text>
                    <Text>value 3</Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardDetailIncludedItems