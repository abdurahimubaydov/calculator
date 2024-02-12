import { CardHeader, Text } from "@chakra-ui/react";
import { IValue } from "../types";

export const Header = ({ expression }: IValue) => {
    return (
        <CardHeader
            display={'flex'}
            userSelect={'none'}
            flexDirection={'column'}
            alignItems={'flex-end'}
            mb={5}
        >
            <Text
                color={'#424242'}
                width={'100%'}
                fontSize={'6xl'}
                textAlign={'right'}
            >{expression}</Text>
        </CardHeader>
    );
};