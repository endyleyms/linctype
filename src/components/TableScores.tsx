import { Text, Flex, Box, Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";


type usersScore = {
  id: number,
  username: string,
  score: number,
  accuracy: number,
  firstStrikeAccuracy: number,
  wpm: number,
  words: number
}

interface Props {
  data: usersScore[] | null,
  loading: boolean
}

const TableScores = ({ data, loading }: Props) => {

  const getScoreColor = (score: number) => {
    if (score >= 1000) return "green.500"; // Puntajes altos
    if (score >= 700) return "yellow.500"; // Puntajes medios
    return "red.500"; // Puntajes bajos
  };

  return (
    <Box as="ul" listStyleType="none">
      {loading ? (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : (
        data?.map((user) => (
          <Flex
            as="li"
            key={user.id}
            align="center"
            mb={3}
            justify="space-between"
          >
            <Text fontSize="lg" fontWeight="bold">{user.username}</Text>
            <Text
              fontSize="lg"
              color={getScoreColor(user.score)}
              fontWeight="semibold"
            >
              {user.score}
            </Text>
          </Flex>
        ))
      )}
    </Box>
  );
};

export default TableScores;
