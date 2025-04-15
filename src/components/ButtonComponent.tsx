import React from 'react';
import { Button, Stack } from "@chakra-ui/react"

interface Props {
  text: string;
  onClick: any;
}

export default function ButtonComponent({ text, onClick }: Props) {
  return (
    <Stack width={'full'}>
      <Button onClick={onClick} variant="surface">
        {text}
      </Button>
    </Stack>
  )
}
