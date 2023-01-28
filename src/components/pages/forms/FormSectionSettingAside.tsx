import { Box, Flex, Switch, Text } from "@mantine/core";
import { useRecoilState, useRecoilValue } from "recoil";
import Dropdown from "components/common/Dropdown";
import { formSectionListState, selectedFormSectionState } from "recoil/formEditor";
import { FormSectionType } from "types/form";

function FormSectionSettingAside() {
  const [formSectionList, setFormSectionList] = useRecoilState(formSectionListState);
  const selectedFormSection = useRecoilValue(selectedFormSectionState);

  if (!selectedFormSection) return null;

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
          value={selectedFormSection.type}
          onChange={(value: FormSectionType) =>
            setFormSectionList((list) => {
              if (!value) return list;

              const newSectionInfo = { ...selectedFormSection };
              newSectionInfo.type = value;

              switch (value) {
                case "shortText":
                case "longText":
                  newSectionInfo.content = "";
                  break;
                case "radio":
                case "checkbox":
                case "dropdown":
                  newSectionInfo.content = [
                    {
                      id: Date.now(),
                      data: "",
                    },
                  ];
              }
              const point = list.findIndex((item) => item.id === newSectionInfo.id);
              return [
                ...list.slice(0, point),
                newSectionInfo,
                ...list.slice(point + 1, list.length),
              ];
            })
          }
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
            <Switch
              checked={selectedFormSection.required}
              onChange={(e) =>
                setFormSectionList((list) => {
                  const newSectionInfo = { ...selectedFormSection };
                  newSectionInfo.required = e.currentTarget.checked;
                  const point = list.findIndex((item) => item.id === newSectionInfo.id);
                  return [
                    ...list.slice(0, point),
                    newSectionInfo,
                    ...list.slice(point + 1, list.length),
                  ];
                })
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default FormSectionSettingAside;
