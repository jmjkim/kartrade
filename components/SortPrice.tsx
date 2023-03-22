import { Flex } from "@chakra-ui/react"
import { Dispatch, ReactComponentElement, SetStateAction } from "react"
import { CardData } from "@/pages/api/get-cards"

type SortPriceProps = {
    sortCardPriceDefault: Dispatch<SetStateAction<CardData[]>>;
    sortCardPriceLowToHigh: Dispatch<SetStateAction<CardData[]>>;
    sortCardPriceHighToLow: Dispatch<SetStateAction<CardData[]>>;
}

const SortPrice: React.FunctionComponent<SortPriceProps> = (props) => {
    const { sortCardPriceDefault, sortCardPriceLowToHigh, sortCardPriceHighToLow } = props

    return (
        <Flex justify="space-between" fontSize="fs1">
            <select id="sort-by-price" onChange={e => {
                if (e.target.value === "lowToHigh") {
                    sortCardPriceLowToHigh()
                    
                } else if (e.target.value === "highToLow") {
                    sortCardPriceHighToLow()
                    
                } else {
                    sortCardPriceDefault()
                }
            }}>
                <option value={""}>Price ($)</option>
                <option value={"lowToHigh"}>Low to High</option>
                <option value={"highToLow"}>High to Low</option>
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