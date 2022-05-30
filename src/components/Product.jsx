import React from "react";
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'
const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product" direction={['column']} spacing='10px' boxShadow='lg' p='6' rounded='md' bg='white'>
      <Image data-cy="product-image" src='https://bit.ly/dan-abramov' alt='Dan Abramov'borderRadius='10px'/>
      <Flex justifyContent="space-between">
      <Text data-cy="product-category" fontSize='2xl'>Jeans</Text>
      <Tag size={{10:"px"}} key={1} variant='solid' colorScheme='teal'>
        <TagLabel data-cy="product-gender">Unisex</TagLabel>
      </Tag>
      </Flex>
      
      <Heading data-cy="product-title" as='h3' size='lg'>React Tshirt</Heading>
      <Box data-cy="product-price" w='100%' p={4} color='black'>Rs.300/Unit</Box>
      
    </Stack>
  );
};

export default Product;
