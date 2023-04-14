import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

  
const CardDetailBreadcrumb = () => {
    return (
      <Breadcrumb separator={<ChevronRightIcon color='gray.500' />} w='100%' px="25px" my='13px' fontSize='fs1'>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink fontWeight='medium'>Card Detail</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    )
}

export default CardDetailBreadcrumb