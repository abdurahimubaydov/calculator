import { CardHeader, Text } from "@chakra-ui/react";
import { IValue } from "../types";

export const Header = ({ expression, result }: IValue) => {
    return (
        <CardHeader display={'flex'} userSelect={'none'} flexDirection={'column'} alignItems={'flex-end'} mb={5}>
            <Text
                color={'#424242'}
                fontSize={'6xl'}
            >{result}</Text>

            <Text
                color={'#cecaca'}
                fontSize={'xl'}
            >{expression}</Text>
        </CardHeader>
    );
};