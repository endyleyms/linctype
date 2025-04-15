import React from 'react';
import { Card, Text } from "@chakra-ui/react"


interface Props {
  text: string;
  color?: 'none' | 'next' | 'success' | 'fail';
}


const colorMap = {
  none: 'none',
  next: 'none',
  success: 'green.500',
  fail: 'red.500',
};

const textMap = {
  none: 'gray',
  next: 'gray',
  success: 'white',
  fail: 'white',
};

const underlineMap = {
  none: 'white',
  next: 'blue.500',
  success: 'white',
  fail: 'white',
};

export default function Letter({ color = 'none', text }: Props) {
  const bgColor = colorMap[color];
  const textColor = textMap[color];
  const underlineColor = underlineMap[color];


  return (
    <Card.Root bg={bgColor} size="lg" boxShadow="md" borderRadius="md" p="4">
      <Card.Body>
        <Text
          fontSize="xl"
          fontWeight="bold"
          color={textColor}
          textDecoration="underline"
          textDecorationColor={underlineColor}
          textUnderlineOffset="4px"
        >
          {text}
        </Text>
      </Card.Body>
    </Card.Root>
  )
}
