import { useEffect } from "react"
import { Box, Divider } from "@chakra-ui/react"
import TopNav from "../components/TopNav"
import SortPrice from "@/components/SortPrice"
import MainCardDisplayer from "@/components/card/MainCardDisplayer"
import CardDisplayer from "@/components/card/CardDisplayer"
import Footer from "@/components/Footer"

export default function Home({ data }: any[]) {
  useEffect(() => {
    () => getServerSideProps()
  }, [])
  
  return (
    <Box bg="gray.100">
      <Box ml="50%" maxW="325px" fontFamily="body" bg="white">
        <TopNav />
        <Divider 
          mt="16px" 
          mb="18px" 
          borderBottom="bottom"
        />

        <SortPrice />
        <Divider
          mt="18.5px" 
          mb="25.5px"
          borderBottom="bottom"
        />

        <MainCardDisplayer />
        <Divider my="25px" borderBottom="bdBottom" />

        <CardDisplayer cards={data} />

        <Footer />
      </Box>
    </Box>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/get-cards`)
  const data = await res.json()
  
  return { props: { data } }
}
