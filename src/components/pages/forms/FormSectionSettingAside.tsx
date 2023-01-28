import { Box, Flex, Switch, Text } from "@mantine/core";
import Dropdown from "components/common/Dropdown";

function FormSectionSettingAside() {
  return (
    <Box
      component="aside"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        borderColor: theme.colors.gray[1],
        maxHeight: "100vh",
        minHeight: "100vh",
        maxWidth: "304px",
        width: "100%",
        overflow: "hidden",
      })}
    >
      <Flex
        sx={(theme) => ({
          borderBottom: "1px solid",
          borderColor: theme.colors.gray[1],
          padding: 25,
        })}
        justify="space-between"
        align="center"
      >
        <Text fw="bold" size="md">
          설문 문항
        </Text>
      </Flex>

      <Flex
        sx={(theme) => ({
          borderBottom: "1px solid",
          borderColor: theme.colors.gray[1],
          padding: 25,
        })}
        direction="column"
      >
        <Text fw="bold" color="gray.6" sx={{ fontSize: 15, marginBottom: 22 }}>
          질문 유형
        </Text>
        <Dropdown
          kind="default"
          data={[
            { value: "shortText", label: "단답형" },
            { value: "longText", label: "장문형" },
            { value: "radio", label: "객관식" },
            { value: "checkbox", label: "체크박스" },
            { value: "dropdown", label: "드롭다운" },
          ]}
          defaultValue="shortText"
        />
      </Flex>

      <Flex
        sx={(theme) => ({
          borderBottom: "1px solid",
          borderColor: theme.colors.gray[1],
          padding: 25,
        })}
        direction="column"
      >
        <Text fw="bold" color="gray.6" sx={{ fontSize: 15, marginBottom: 25 }}>
          질문 설정
        </Text>
        <Flex direction="column" sx={{ padding: "0 15px" }}>
          <Flex justify="space-between">
            <Text color="gray.6" sx={{ fontSize: 15 }}>
              필수
            </Text>
            <Switch />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default FormSectionSettingAside;
