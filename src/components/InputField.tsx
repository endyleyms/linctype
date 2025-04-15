import React from 'react';
import { Input, Stack } from "@chakra-ui/react"


export default function InputField() {
  return (
    <Stack gap="4">
      <Input placeholder="Typing" variant="flushed" size="md" />
    </Stack>
  )
}
