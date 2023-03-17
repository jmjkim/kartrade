import { Flex, Box } from "@chakra-ui/react"

const SortPrice = () => {
    return (
        <Flex justify="space-between" fontSize="fs1">
            <select id="sort-by-price">
                <option value="">Price ($)</option>
                <option value="low2high">low to high</option>
                <option value="high2low">high to low</option>
            </select>

            <select id="sort-by">
                <option value="">Sort By</option>
                <option value="1">value 123</option>
                <option value="2">value 456</option>
            </select>
        </Flex>
    )
}

export default SortPrice