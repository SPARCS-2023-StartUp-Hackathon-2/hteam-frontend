import { Box, Button, Flex, Table, Text } from "@mantine/core";
import Badge from "components/common/Badge";
import ApplicantRow from "components/pages/recruitments/ApplicantRow";
import useApplicants from "hooks/useApplicants";
import Link from "next/link";
import React from "react";
import { Applicant } from "types/api";

function FormApplicantsSection({ rid }: { rid: string }) {
  const { data } = useApplicants(rid);
  if (data) {
    return (
      <Box
        sx={(theme) => ({
          backgroundColor: theme.white,
          padding: "22px 29px",
          border: `1px solid ${theme.colors.gray[1]}`,
          borderRadius: theme.radius.sm,
          width: "100%",
        })}
      >
        <Flex justify="space-between" sx={{ marginBottom: 20 }}>
          <Text
            c="gray.8"
            sx={(theme) => ({
              fontSize: "20px",
              fontWeight: 600,
            })}
          >
            서류 지원자
          </Text>
        </Flex>
        <Flex direction="column" gap={16}>
          {data.map((applicant) => (
            <ApplicantRow
              key={applicant.id}
              applicant={applicant}
              decisionButton={
                <Link
                  href={`/recruitments/${rid}/form?userId=${applicant.id}`}
                  passHref
                  legacyBehavior
                >
                  <Button
                    component="a"
                    styles={(theme) => ({
                      root: {
                        backgroundColor: theme.white,
                        padding: "10px 30px",
                        height: "auto",

                        fontSize: "15px",
                        fontWeight: 400,
                        border: `1px solid ${theme.colors.gray[1]}`,
                        color: theme.black,
                        borderRadius: theme.radius.sm,
                        "&:hover": {
                          backgroundColor: theme.colors.gray[1],
                        },
                      },
                      inner: {
                        height: "auto",
                      },
                    })}
                  >
                    지원 서류 보기
                  </Button>
                </Link>
              }
            />
          ))}
        </Flex>
      </Box>
    );
  } else {
    return <></>;
  }
}

export default FormApplicantsSection;
