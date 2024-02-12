import { useState } from "react";
import { Center, Divider, Card } from "@chakra-ui/react";
import { Header } from "./components /card-header";
import { Body } from "./components /card-body";

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

// console.log(eval('2 + 2').toString())

export const App = (): JSX.Element => {
  const [result, setResult] = useState<string>('1174')
  const [expression, setExpression] = useState<string>('47 x 13 + 563')




  return (
    <Center backgroundColor={'#f3f3f4'} h={'100vh'}>
      <Card
        pt={100}
        pr={3}
        pl={3}
        w={{ base: '100%', sm: '80%', md: '60%', lg: '35%' }}
      >
        {/* Card header */}
        <Header
          result={result}
          expression={expression}
        />
        <Divider
          borderColor={'#E1E1E1'}
        />

        {/* Card body */}
        <Body />
      </Card>
    </Center >
  );
};
