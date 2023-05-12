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
                    <Text>voluptate velit esse</Text>
                    <Text>excepteur sint</Text>
                    <Text>sunt in culpa qui officia</Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default CardDetailIncludedItems