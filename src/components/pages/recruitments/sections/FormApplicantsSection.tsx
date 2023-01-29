import { Box, Button, Flex, Table, Text } from "@mantine/core";
import Badge from "components/common/Badge";
import useApplicants from "hooks/useApplicants";
import React from "react";
import { Applicant } from "types/api";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

const getRows = (elements: Applicant[]) =>
  elements.map((element) => (
    <tr key={element.name}>
      <td>
        <Badge state={element.formState}></Badge>
      </td>
      <td>{element.name}</td>
      <td>{element.phoneNumber}</td>
      <td>{element.email}</td>
      <td>{new Date(element.submittedAt).toLocaleDateString("ko-KR")}</td>
      <td>
        <Button
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
      </td>
    </tr>
  ));
function FormApplicantsSection({ rid }: { rid: string }) {
  const { data } = useApplicants(rid);
  if (data) {
    const rows = getRows(data);

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
        <Flex>
          <Table>
            {/* <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
            </tr>
          </thead> */}
            <tbody>{rows}</tbody>
          </Table>
        </Flex>
      </Box>
    );
  } else {
    return <></>;
  }
}

export default FormApplicantsSection;
