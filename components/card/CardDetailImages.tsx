import { CardData } from "@/pages/api/get-cards"
import { Box, Divider } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react";

// type error
const CardDetailImages: React.FC<{ card: CardData }> = ({ card }) => {
    const detailImages = card.detailImage.map(img => img.replace('/public', ''));

    return (
        <>
            {detailImages.map((src: string, i: number) => {
                return (
                    <Box key={i}>
                      <Image 
                        src={src} 
                        alt="card" 
                        w="100%" 
                        h="100%" 
                        borderBottom='bdBottom' 
                        pt="15px" 
                    />
                      <Divider borderBottom="bdBottom" pb="15px" />
                    </Box>
                  );
                }
            )}
        </>
    )
}

export default CardDetailImages