import { useState } from "react";
import { Center, Divider, Card } from "@chakra-ui/react";
import { Header } from "./components /card-header";
import { Body } from "./components /card-body";

export const App = (): JSX.Element => {
  const [expression, setExpression] = useState<string>('')

  return (
    <Center backgroundColor={'#f3f3f4'} h={'100vh'}>
      <Card
        pt={100}
        pr={3}
        pl={3}
        w={{ base: '100%', sm: '80%', md: '60%', lg: '35%' }}
        transition={'.2s'}
      >
        {/* Card header */}
        <Header
          expression={expression}
        />
        <Divider
          borderColor={'#E1E1E1'}
        />

        {/* Card body */}
        <Body
          expression={expression}
          setExpression={setExpression}
        />
      </Card>
    </Center >
  );
};
