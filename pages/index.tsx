import { useEffect } from "react"
import { VStack, StackDivider, Box, Center } from "@chakra-ui/react"
import TopNav from "../components/TopNav"
import SortPrice from "@/components/SortPrice"
import MainCardDisplayer from "@/components/card/MainCardDisplayer"
import CardDisplayer from "@/components/card/CardDisplayer"

export default function Home({ data }: any[]) {
  useEffect(() => {
    () => getServerSideProps()
  }, [])
  
  return (
        <VStack
          divider={<StackDivider borderColor="#E5E5E5" />}
          spacing="4"
          maxW="425px"
          minH="100%"
          bg="#FFF"
          border={"1px solid"}
        >
          <Box pos="fixed" bg="#FFF" top="0" zIndex="9999" borderBottom="1px solid #E5E5E5" py="16px">
            <TopNav />
          </Box>
          <SortPrice />
          <MainCardDisplayer />
          <CardDisplayer cards={data} />
        </VStack>
    )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/get-cards`)
  const data = await res.json()
  
  return { props: { data } }
}
