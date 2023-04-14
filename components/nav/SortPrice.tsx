import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const SortPrice: React.FC<{}> = () => {
  const router = useRouter()
  const { keyword } = router.query

  const sortCardsByPrice = (value: string) => {
    if (keyword !== undefined) {
      if (value === 'price_asc') {
        router.push(`search?keyword=${keyword}&sort=${value}`)
      } 
      else if (value === 'price_desc') {
        router.push(`search?keyword=${keyword}&sort=${value}`)
      } 
      else {
        router.push(`search?keyword=${keyword}`)
      }
    }
    else {
      if (value === 'price_asc') {
        router.push(`/?sort=${value}`)
      } 
      else if (value === 'price_desc') {
        router.push(`/?sort=${value}`)
      } 
      else {
        router.push('/')
      }
    }
  }


  return (
    <Flex justify="space-between" fontSize="fs1" px="25px" my="18.5px">
      <select onChange={e => sortCardsByPrice(e.target.value)}>
        <option value="default">Price ($)</option>
        <option value="price_asc">Low to High</option>
        <option value="price_desc">High to Low</option>
      </select>

      <select>
        <option value="">Sort By</option>
        <option value="1">value 123</option>
        <option value="2">value 456</option>
      </select>
    </Flex>
  );
};

export default SortPrice;
