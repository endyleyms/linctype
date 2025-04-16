import { Input, Stack } from "@chakra-ui/react"


export default function InputField({ value, onChange, placeholder }: any) {

  return (
    <Stack gap="4">
      <Input
        value={value}
        placeholder={placeholder}
        variant="subtle"
        size="md"
        onChange={e => onChange(e.target.value)}
      />
    </Stack>
  )
}
