import { useEffect } from 'react';
import { Box, Divider } from '@chakra-ui/react';
import TopNav from '../components/TopNav';
import SortPrice from '@/components/SortPrice';
import MainCardDisplayer from '@/components/card/MainCardDisplayer';
import CardDisplayer from '@/components/card/CardDisplayer';
import Footer from '@/components/Footer';

export default function Home({ data }: any[]) {
  useEffect(() => {
    () => getServerSideProps();
  }, []);

  return (
    <Box>
      <Box w="100%" px="25px">
        <SortPrice />
      </Box>
      <Divider mt="18.5px" mb="25.5px" borderBottom="bottom" />

      <Box mx="20px">
        <MainCardDisplayer />
      </Box>
      <Divider my="25px" borderBottom="bdBottom" />

      <CardDisplayer cards={data} />
      <Footer />
    </Box>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/get-cards`);
  const data = await res.json();

  return { props: { data } };
}
