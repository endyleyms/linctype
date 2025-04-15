import React from 'react';
import { Stat, Text } from "@chakra-ui/react"
import Typography from './Typography';

interface Props {
  title: string;
  value: number;
}

export default function Score({ title, value }: Props) {
  return (
    <Stat.Root>
      <Stat.Label>
        <Text textStyle={'sm'}>{title}</Text>
      </Stat.Label>
      <Stat.ValueText>
        <Text textStyle={'4xl'}>{value.toString()}</Text>
      </Stat.ValueText>
    </Stat.Root>
  )
}
