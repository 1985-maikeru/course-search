// lib
import Link from "next/link";
import { Box as ChakraBox, Badge, Image, Wrap } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import Rating from '@mui/material/Rating';
// types
import { ITEM } from "@/types/golfCourseList/";

const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '10000円',
    reviewCount: 34,
    rating: 4,
}

const Box = ({ Item }: ITEM) => {
    return (
        <ChakraBox maxW='sm' borderWidth='1px' borderRadius='lg' padding={20}>
            <Image src={Item.golfCourseImageUrl || "/no-image.jpg"} alt={property.imageAlt} className="image" />
            <ChakraBox p='6'>
                <ChakraBox display='flex' alignItems='baseline'>
                    <ChakraBox
                        color='gray'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {Item?.address}
                    </ChakraBox>
                </ChakraBox>
                <ChakraBox
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {Item?.golfCourseName}
                </ChakraBox>
                <ChakraBox mb={10}>
                    {Item?.highway}
                    {/* <ChakraBox as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </ChakraBox> */}
                </ChakraBox>
                <ChakraBox as='span' ml='2' color='gray' fontSize='sm'>
                    評価
                </ChakraBox>
                <ChakraBox display='flex' mt='2' alignItems='center'>
                    <Rating value={Item?.evaluation} precision={0.5} readOnly />
                    {/* <ChakraBox as='span' ml='2' color='gray' fontSize='sm'>
                        {property.reviewCount} reviews
                    </ChakraBox> */}
                </ChakraBox>
            </ChakraBox>
        </ChakraBox>
    )
}

export default Box;
