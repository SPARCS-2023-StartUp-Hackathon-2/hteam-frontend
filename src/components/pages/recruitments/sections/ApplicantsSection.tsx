import { Badge, Tabs, Box, Button, Flex, Center } from "@mantine/core";
import PreviousStepIcon from "components/common/icons/PreviousStepIcon";
import PersonCard from "components/common/PersonCard";
import useApplicants from "hooks/useApplicants";
import { MOCKUP_USERS } from "mockups/users";
import React from "react";
import NextStepIcon from "../../../common/icons/NextStepIcon";

function ApplicantsSection({ rid }: { rid: string }) {
  const { data, error, isLoading, mutate } = useApplicants(rid);
  console.log("APPL", data);
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.white,
        padding: "22px 29px",
        border: `1px solid ${theme.colors.gray[1]}`,
        borderRadius: theme.radius.sm,
        position: "relative",
        flex: 1,
      })}
    >
      <Tabs
        defaultValue="chat"
        styles={{
          root: {
            width: "100%",
          },
        }}
      >
        <Tabs.List>
          <Tabs.Tab
            rightSection={
              <Badge
                sx={{ width: 16, height: 16, pointerEvents: "none" }}
                variant="filled"
                size="xs"
                p={0}
              >
                6
              </Badge>
            }
            value="chat"
          >
            지원자
          </Tabs.Tab>
          <Tabs.Tab value="settings">면접관</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Center>
        <Flex gap="38px" align="center" sx={{ padding: 22 }}>
          <Button
            styles={(theme) => ({
              root: {
                borderColor: theme.colors.primary[3],
                backgroundColor: theme.colors.primary[0],
                color: theme.colors.gray[9],
                fontWeight: 400,
                "&:hover": {
                  backgroundColor: theme.colors.primary[1],
                },
              },
            })}
          >
            서류{" "}
          </Button>
          <Button
            styles={(theme) => ({
              root: {
                borderColor: theme.colors.gray[1],
                backgroundColor: theme.white,
                color: theme.colors.gray[9],
                fontWeight: 400,
                "&:hover": {
                  backgroundColor: theme.colors.gray[0],
                },
              },
            })}
          >
            면접{" "}
          </Button>
        </Flex>
      </Center>
      <Flex direction="column" gap="22px">
        {MOCKUP_USERS.map((user, index) => (
          <PersonCard key={index} {...user} />
        ))}
      </Flex>
    </Box>
  );
}

export default ApplicantsSection;
