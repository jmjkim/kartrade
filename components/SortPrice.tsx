import { Flex } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react"
import { CardData } from "@/pages/api/get-cards"

type SortPriceProps = {
    value: string;
    cards: CardData[];
    setCards: Dispatch<SetStateAction<CardData[]>>;
}

const sortCardsByPrice = (value: string, cards: CardData[], setCards: Dispatch<SetStateAction<CardData[]>>) => {
    if (value === "lowToHigh") {
        setCards([...cards].sort((a, b) => {
            if (a.price > b.price) {
                return 1
            } else if (a.price < b.price) {
                return -1
            } else {
                return 0
            }
        }))
    }

    else if (value === "highToLow") {
        setCards([...cards].sort((a, b) => {
            if (a.price > b.price) {
                return -1
            } else if (a.price < b.price) {
                return 1
            } else {
                return 0
            }
        }))
    } 

    else {
        setCards([...cards].sort((a, b) => {
            if (a.id > b.id) {
                return 1
            } else if (a.id < b.id) {
                return -1
            } else {
                return 0
            }
        }))
    }
}

const SortPrice: React.FC<SortPriceProps> = ({ cards, setCards }) => {
    return (
        <Flex justify="space-between" fontSize="fs1">
            <select id="sort-by-price" onChange={e => sortCardsByPrice(e.target.value, cards, setCards)}>
                <option value="default">Price ($)</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
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