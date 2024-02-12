import { CardBody } from '@chakra-ui/react'
import DATA from '../types/data'
import { Grid } from '@chakra-ui/react'
import { CalculatorElement } from './calc-element'

interface IValue {
    expression: string,
    setExpression: (newValue: string) => void
}

export const Body = ({ expression, setExpression }: IValue) => {

    return (
        <CardBody w={'100%'}>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {DATA.map((item, index) => (
                    <CalculatorElement
                        value={item.value}
                        Icon={item.icon}
                        key={index}
                        expression={expression}
                        setExpression={setExpression}
                    />
                ))}
            </Grid>
        </CardBody >
    )
}
