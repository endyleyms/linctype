import React from 'react';
import { Input, Stack } from "@chakra-ui/react"


export default function InputField({ onChange }: any) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
    }
  };
  return (
    <Stack gap="4">
      <Input
        placeholder="Typing"
        variant="subtle"
        size="md"
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown} />
    </Stack>
  )
}
