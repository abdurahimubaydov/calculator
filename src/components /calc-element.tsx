import { GridItem, Button } from '@chakra-ui/react'
import { IElement } from '../types'

export const CalculatorElement = ({ value, Icon }: IElement) => {

    if (value == 'clear') {
        return (
            <GridItem>
                <Button width={'100%'}>
                    AC
                </Button>
            </GridItem>
        )
    }

    else if (value == '00') {
        return (
            <GridItem>
                <Button width={'100%'}>
                    00
                </Button>
            </GridItem>
        )
    }

    else if (value == ',') {
        return (
            <GridItem>
                <Button width={'100%'}>
                    ,
                </Button>
            </GridItem>
        )
    }


    return (
        <GridItem>
            <Button width={'100%'}>
                {value === 'clear' ? 'AC' : <Icon size={20} />}
            </Button>
        </GridItem>
    )
}
