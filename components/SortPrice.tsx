import { Select, Flex, Box } from "@chakra-ui/react"

const SortPrice = () => {
    return (
        <Flex w="100%" justify="space-between" px="25px" gap="40%">
            <Select variant="unstyled" placeholder="Sort By" fontSize="fs1">
                <option value="1">value1</option>
                <option value="2">value2</option>
            </Select>

            <Select variant="unstyled" placeholder="Price ($)" fontSize="fs1">
                <option value="high2low">Price: high to low</option>
                <option value="low2high">Price: low to high</option>
            </Select>
        </Flex>
    )
}

export default SortPrice