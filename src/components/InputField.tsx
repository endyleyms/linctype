import React from 'react';
import { Input, Stack } from "@chakra-ui/react"


export default function InputField({ onChange }: any) {
  return (
    <Stack gap="4">
      <Input
        placeholder="Typing"
        variant="subtle"
        size="md"
        onChange={e => onChange(e.target.value)}
      />
    </Stack>
  )
}
