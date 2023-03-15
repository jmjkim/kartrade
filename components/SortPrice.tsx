import { Flex, Select, Spacer } from "@chakra-ui/react"

const SortPrice = () => {
    return (
        <Flex w={"425px"} justify="space-between">
            <Select placeholder="Sort By" border="0" width="20vw">
                <option value="1">value1</option>
                <option value="2">value2</option>
            </Select>
            
            <Select placeholder="Price ($)" border="0" width="20vw">
                <option value="high2low">Price: high to low</option>
                <option value="low2high">Price: low to high</option>
            </Select>
        </Flex>
    )
}

export default SortPrice