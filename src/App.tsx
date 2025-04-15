import React, { ChangeEvent, useEffect, useState } from "react";

import "./App.css";
import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Score from "./components/Score";
import InputField from "./components/InputField";
import LetterDisplay from "./components/LetterDisplay";
import Typography from "./components/Typography";

const App: React.FC = () => {
  const [typeTest] = useState("This is the sentence to type");
  const [words, setWords] = useState(typeTest.split(" "));
  const [enteredText, setEnteredText] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [wordsPerMinute, setWordsPerMinute] = useState(0);

  const checkFinished = () => {
    if (!words.length) {
      if (startTime) {
        const timeMillis: number = new Date().getTime() - startTime.getTime();
        const wpm = calcWordsPerMinute(typeTest.length, timeMillis);
        setWordsPerMinute(wpm);
      }
    }
  }

  useEffect(() => {
    if (words.length !== 0) return;
    checkFinished();
  }, [words, checkFinished]);

  const calcWordsPerMinute = (charsTyped: number, millis: number): number =>
    Math.floor(charsTyped / 5 / (millis / 60000));

  const onWordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (started) {
      setStarted(true);
      setStartTime(new Date());
    }
    setEnteredText(e.currentTarget.value.trim());
    if (enteredText === words[0]) {
      setCorrectCount(correctCount + 1);
      setEnteredText("");
      setWords(words.slice(1));
    }
  };



  return (
    <Center bg="gray.50" p="10">
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

          <LetterDisplay />

          <Box>
            <InputField />
          </Box>

          <Flex justify="center" gap="6" pt="4">
            <Score title="You typed" value={correctCount} />
            <Score title="Words at" value={wordsPerMinute} />
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
};

export default App;
