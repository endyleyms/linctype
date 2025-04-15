import React, { useState } from "react";

import "./App.css";
import Score from "./components/Score";
import { useActions } from "./Hooks/useActions";
import InputField from "./components/InputField";
import LetterDisplay from "./components/LetterDisplay";
import { useTypingStatus } from "./Hooks/useTypingStatus";
import ButtonComponent from "./components/ButtonComponent";
import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const lorem = "Lorem ipsum dolor sit amet";

const App: React.FC = () => {
  const { handleRestart, handleCancel } = useActions();
  const { statuses, correctCount, onWordChange, finished } = useTypingStatus(lorem);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);

  return (
    <Center minH="100vh" bg="gray.50" p="10">
      <Box textAlign="center" w="full">
        <Stack>
          <Heading as="h1" size="lg">
            <Text fontWeight="bold" textStyle={"2xl"}>{wordsPerMinute
              ? `You typed ${correctCount} words at ${wordsPerMinute} WPM.`
              : "Test Your Typing Speed, Scrub!"}</Text>
          </Heading>

          <Heading as="h3" size="md">
            <Text textStyle={"xl"}>Type the following:</Text>
          </Heading>

          <LetterDisplay data={lorem} statuses={statuses} />
          {!finished &&
            <Box margin={4}>
              <InputField onChange={onWordChange} />
            </Box>
          }
          {finished &&
            <Flex justify="center" gap="6" pt="4">
              <Score title="You typed" value={correctCount} />
              <Score title="Words at" value={wordsPerMinute} />
            </Flex>
          }
          <Center>
            <Flex justify="center" gap="6" pt="4" width={'1/2'}>
              <ButtonComponent text="Restart" onClick={handleRestart} />
              <ButtonComponent text="Cancel" onClick={handleCancel} />
            </Flex>
          </Center>
        </Stack>
      </Box>
    </Center>
  );
};

export default App;
