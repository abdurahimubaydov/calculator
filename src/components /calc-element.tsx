import { GridItem, Button } from '@chakra-ui/react';

interface IElement {
    value: string,
    Icon: any,
    expression: string,
    setExpression: (newValue: string) => void
}

export const CalculatorElement = ({ value, Icon, setExpression, expression }: IElement) => {

    if (value == 'clear') {
        return (
            <GridItem>
                <Button
                    width={'100%'}
                    onClick={() => {
                        setExpression('')
                    }}
                >
                    AC
                </Button>
            </GridItem>
        )
    }

    else if (value === '+/-') {
        return (
            <GridItem >
                <Button
                    width={'100%'}
                    onClick={() => {
                        if (expression.length === 0) {
                            setExpression('')
                        } else if (expression.length !== 0 && expression[0] === '-') {
                            let newExp = expression.slice(1, expression.length)
                            setExpression(newExp)
                        } else {
                            setExpression(`-${expression}`)
                        }
                    }}
                >
                    <Icon />
                </Button>
            </GridItem >
        )
    }

    else if (value == '00') {
        return (
            <GridItem>
                <Button
                    width={'100%'}
                    onClick={() => setExpression(expression += '00')}
                >
                    00
                </Button>
            </GridItem>
        )
    }

    else if (value == ',') {
        return (
            <GridItem
                onClick={() => {
                    if (expression.length !== 0 && expression.slice(-1) === ',') {
                        setExpression(expression += '')
                    } else if (expression.length === 0) {
                        setExpression(expression += '')
                    } else if (expression.slice(-1) === '+' || expression.slice(-1) === '-' || expression.slice(-1) === 'x' || expression.slice(-1) === '/') {
                        setExpression(expression += '')
                    } else {
                        setExpression(expression += value)
                    }
                }}
            >
                <Button width={'100%'}>
                    ,
                </Button>
            </GridItem>
        )
    }

    else if (value == '+') {
        return (
            <GridItem
                onClick={() => {
                    if (expression.slice(-1) === '-' || expression.slice(-1) === '/' || expression.slice(-1) === '*') {
                        let newExp = expression.slice(0, expression.length - 1)

                        setExpression(newExp += value)
                    } else if (expression.slice(-1) === '+') {
                        setExpression(expression += '')
                    } else {
                        setExpression(expression += value)
                    }
                }}
            >
                <Button width={'100%'}>
                    <Icon />
                </Button>
            </GridItem>
        )
    }

    else if (value == '-') {
        return (
            <GridItem
                onClick={() => {
                    if (expression.slice(-1) === '+' || expression.slice(-1) === '/' || expression.slice(-1) === '*') {
                        let newExp = expression.slice(0, expression.length - 1)

                        setExpression(newExp += value)
                    } else if (expression.slice(-1) === '-') {
                        setExpression(expression += '')
                    } else {
                        setExpression(expression += value)
                    }
                }}
            >
                <Button width={'100%'}>
                    <Icon />
                </Button>
            </GridItem>
        )
    }

    else if (value == '/') {
        return (
            <GridItem
                onClick={() => {
                    if (expression.slice(-1) === '+' || expression.slice(-1) === '-' || expression.slice(-1) === '*') {
                        let newExp = expression.slice(0, expression.length - 1)

                        setExpression(newExp += value)
                    } else if (expression.slice(-1) === '/') {
                        setExpression(expression += '')
                    } else {
                        setExpression(expression += value)
                    }
                }}
            >
                <Button width={'100%'}>
                    <Icon />
                </Button>
            </GridItem>
        )
    }

    else if (value == '*') {
        return (
            <GridItem
                onClick={() => {
                    if (expression.slice(-1) === '+' || expression.slice(-1) === '-' || expression.slice(-1) === '/') {
                        let newExp = expression.slice(0, expression.length - 1)

                        setExpression(newExp += value)
                    } else if (expression.slice(-1) === '*') {
                        setExpression(expression += '')
                    } else {
                        setExpression(expression += value)
                    }
                }}
            >
                <Button width={'100%'}>
                    <Icon />
                </Button>
            </GridItem>
        )
    }

    else if (value == '=') {
        return (
            <GridItem
                onClick={() => {
                    if (expression.slice(-1) === '+' || expression.slice(-1) === '-' || expression.slice(-1) === '/' || expression.slice(-1) === 'x') {
                        setExpression(expression += '')
                    } else if (expression.length === 0) {
                        setExpression(expression += '')
                    } else {
                        setExpression(eval(expression).toString())
                    }
                }}
            >
                <Button width={'100%'}>
                    <Icon />
                </Button>
            </GridItem>
        )
    }




    return (
        <GridItem>
            <Button width={'100%'} onClick={() => {
                setExpression(expression += value)
            }}>
                <Icon size={20} />
            </Button>
        </GridItem>
    )
}
