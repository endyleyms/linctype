import { Flex } from '@chakra-ui/react'
import React from 'react'
import Letter from './Letter'


type Color = "success" | "fail" | "next" | 'none' | 'next';

interface Props {
  data: string;
  statuses: Color[];
}

export default function LetterDisplay({ data, statuses }: Props) {
  return (
    <Flex wrap="wrap" gap="2">
      {Array.from(data).map((char, index) => (
        <Letter key={index} text={char} color={statuses[index]} />
      ))}
    </Flex>
  )
}
