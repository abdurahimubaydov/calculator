import React from 'react'
import { CardBody } from '@chakra-ui/react'
import DATA from '../types/data'
import { Grid, GridItem, Button } from '@chakra-ui/react'
import { CalculatorElement } from './calc-element'

export const Body = () => {
    return (
        <CardBody w={'100%'}>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {DATA.map((item, index) => (
                    <CalculatorElement
                        value={item.value}
                        Icon={item.icon}
                        key={index}
                    />
                ))}
            </Grid>
        </CardBody >
    )
}
