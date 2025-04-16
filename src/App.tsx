import React, { useContext } from "react";

import "./App.css";
import Score from "./components/Score";
import { useActions } from "./Hooks/useActions";
import InputField from "./components/InputField";
import LetterDisplay from "./components/LetterDisplay";
import { useTypingStatus } from "./Hooks/useTypingStatus";
import ButtonComponent from "./components/ButtonComponent";
import { TypeContext } from "./components/context/TypingContext";
import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import TableScores from "./components/TableScores";

const lorem = "Lorem ipsum dolor sit amet";

const App: React.FC = () => {
  const context = useContext(TypeContext);
  if (!context) {
    throw new Error("useTypingStatus must be used within a TypeContextProvider");
  }

  const { state } = context;
  const { handleRestart, handleCancel, handleChange, useHandleSumbmit, data, loading } = useActions();
  const { statuses, correctCount, onWordChange, finished, score, wpm } = useTypingStatus(lorem);

  return (
    <Center minH="100vh" bg="gray.50" p="10">
      <Box textAlign="center" w="full">
        <Stack>
          <Heading as="h1" size="lg">
            <Text fontWeight="bold" textStyle={"2xl"}>{wpm
              ? `You typed ${correctCount} words at ${wpm} WPM.`
              : "Test Your Typing Speed, Scrub!"}</Text>
          </Heading>

          <Heading as="h3" size="md">
            <Text textStyle={"xl"}>Type the following:</Text>
          </Heading>

          <LetterDisplay data={lorem} statuses={statuses} />
          {!finished &&
            <Box margin={4}>
              <InputField value={state.input} onChange={onWordChange} placeholder={'Typing'} />
            </Box>
          }
          {finished &&
            <Flex justify="center" gap="6" pt="4">
              <Score title="You typed" value={correctCount} />
              <Score title="WPM" value={wpm} />
              <Score title="Score" value={score} />
            </Flex>
          }
          <Center flexDirection={'column'}>
            <Flex justify="center" gap="6" width={'1/2'}>
              <ButtonComponent text="Cancel" onClick={handleCancel} />
              <ButtonComponent text="Restart" onClick={handleRestart} />
            </Flex>
            <Stack>
              {finished &&
                <>
                  <Center>
                    <Box margin={4} width={'full'}>
                      <InputField value={state.name} onChange={handleChange} placeholder={'Enter your name'} />
                      <ButtonComponent text="Submit" onClick={useHandleSumbmit} />
                    </Box>
                  </Center>
                  <TableScores data={data} loading={loading} />
                </>
              }
            </Stack>
          </Center>
        </Stack>
      </Box>
    </Center>
  );
};

export default App;
