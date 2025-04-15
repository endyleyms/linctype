import { Flex } from '@chakra-ui/react'
import React from 'react'
import Letter from './Letter'

const lorem = "Lorem ipsum dolor sit amet";

const getColorByIndex = (index: number): "success" | "fail" | "next" | undefined => {
  if (index % 5 === 0) return "success";
  if (index % 5 === 1) return "fail";
  if (index % 5 === 2) return "next";
  return undefined; // default color
};

export default function LetterDisplay() {
  return (
    <Flex wrap="wrap" gap="2">
      {Array.from(lorem).map((char, idx) => (
        <Letter key={idx} text={char} color={getColorByIndex(idx)} />
      ))}
    </Flex>
  )
}
