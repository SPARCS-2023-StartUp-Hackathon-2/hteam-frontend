import { Badge, Box, Flex, Text } from "@mantine/core";
import React from "react";

function PersonCard({ status, name, email, phone }: any) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.white,
        padding: "14px 26px",
        border: `1px solid ${theme.colors.gray[1]}`,
        borderRadius: theme.radius.sm,
        width: "100%",
      })}
    >
      <Flex direction="column" gap="8px">
        <Badge sx={{ width: "max-content" }}>{status}</Badge>
        <Text
          c="gray.8"
          sx={(theme) => ({
            fontSize: "15px",
            fontWeight: 400,
          })}
        >
          {name}
        </Text>
        <Text
          c="gray.8"
          sx={(theme) => ({
            fontSize: "15px",
            fontWeight: 400,
          })}
        >
          {email}
        </Text>
        <Text
          c="gray.8"
          sx={(theme) => ({
            fontSize: "15px",
            fontWeight: 400,
          })}
        >
          {phone}
        </Text>
      </Flex>
    </Box>
  );
}

export default PersonCard;
