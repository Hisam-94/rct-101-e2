import React from "react";
import Addproduct from "./AddProduct"
import Product from "./Product";
import Pagination from "./Pagination"
import { Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  
  return (
    <>
    <Flex>
    {/*  AddProduct */}
      <Addproduct/>
      <Grid><Product/></Grid>
      <Pagination/>
      {/* Pagination */}
    </Flex>
    </>
  );
};

export default Products;
