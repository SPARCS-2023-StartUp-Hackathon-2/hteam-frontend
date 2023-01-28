import { Flex, Text, useMantineTheme, Textarea, Checkbox, Radio } from "@mantine/core";
import TextInput from "components/common/TextInput";
import { FormSectionItem } from "types/form";
import { ComponentProps } from "react";
import Dropdown from "components/common/Dropdown";
import { useRecoilState } from "recoil";
import { formSectionListState } from "recoil/formEditor";

interface Props extends ComponentProps<typeof Flex> {
  formSection: FormSectionItem;
}

function FormSection({ formSection, ...props }: Props) {
  const [formSectionList, setFormSectionList] = useRecoilState(formSectionListState);
  const currentFormSection =
    formSectionList.find((item) => item.id === formSection.id) || formSection;

  return (
    <Flex
      direction="column"
      sx={{ width: "100%", position: "relative", margin: "auto 0" }}
      {...props}
    >
      <Flex align="flex-start" gap={15}>
        <Text
          sx={(theme) => ({
            fontSize: 32,
            color: theme.colors.gray[8],
            lineHeight: "38px",
          })}
          fw="bold"
        >
          {formSection.order}
        </Text>

        <Flex direction="column" sx={{ flex: 1 }}>
          <Text
            sx={(theme) => ({
              fontSize: 32,
              color: theme.colors.gray[8],
              lineHeight: "38px",
              fontWeight: "bold",
              padding: 0,
              paddingRight: "32px",
            })}
          >
            {formSection.question}
          </Text>
          <Text
            sx={(theme) => ({
              marginBottom: 24,
              fontSize: 20,
              color: theme.colors.gray[8],
              padding: "0 2px",
            })}
          >
            {formSection.description}
          </Text>

          <Flex direction="column" gap={20}>
            {formSection.type === "shortText" && (
              <TextInput
                required={formSection.required}
                placeholder={formSection.content}
                value={currentFormSection.content}
                onChange={(e) =>
                  setFormSectionList((list) => {
                    const point = list.findIndex((item) => item.id === formSection.id);
                    return [
                      ...list.slice(0, point),
                      { ...currentFormSection, content: e.target.value },
                      ...list.slice(point + 1, list.length),
                    ];
                  })
                }
              />
            )}
            {formSection.type === "longText" && (
              <Textarea
                required={formSection.required}
                placeholder={formSection.content}
                value={currentFormSection.content}
                onChange={(e) =>
                  setFormSectionList((list) => {
                    const point = list.findIndex((item) => item.id === formSection.id);
                    return [
                      ...list.slice(0, point),
                      { ...currentFormSection, content: e.target.value },
                      ...list.slice(point + 1, list.length),
                    ];
                  })
                }
              />
            )}
            {formSection.type === "radio" && (
              <Radio.Group
                name={formSection.id.toString()}
                orientation="vertical"
                required={formSection.required}
                value={currentFormSection.content}
                onChange={(e) =>
                  setFormSectionList((list) => {
                    const point = list.findIndex((item) => item.id === formSection.id);
                    return [
                      ...list.slice(0, point),
                      { ...currentFormSection, content: e },
                      ...list.slice(point + 1, list.length),
                    ];
                  })
                }
              >
                {formSection.content.map((item: any) => (
                  <Radio
                    key={item.id}
                    value={item.data}
                    label={item.data}
                    required={formSection.required}
                  />
                ))}
              </Radio.Group>
            )}
            {formSection.type === "checkbox" && (
              <Checkbox.Group
                orientation="vertical"
                required={formSection.required}
                value={currentFormSection.content}
                onChange={(e) =>
                  setFormSectionList((list) => {
                    const point = list.findIndex((item) => item.id === formSection.id);
                    return [
                      ...list.slice(0, point),
                      { ...currentFormSection, content: e },
                      ...list.slice(point + 1, list.length),
                    ];
                  })
                }
              >
                {formSection.content.map((item: any) => (
                  <Checkbox
                    key={item.id}
                    value={item.data}
                    label={item.data}
                    required={formSection.required}
                  />
                ))}
              </Checkbox.Group>
            )}
            {formSection.type === "dropdown" && (
              <Dropdown
                required={formSection.required}
                data={formSection.content.map((item: any) => ({
                  value: item.data,
                  label: item.data,
                }))}
                defaultValue={formSection.content[0].data}
                value={currentFormSection.content}
                onChange={(e) =>
                  setFormSectionList((list) => {
                    const point = list.findIndex((item) => item.id === formSection.id);
                    return [
                      ...list.slice(0, point),
                      { ...currentFormSection, content: e },
                      ...list.slice(point + 1, list.length),
                    ];
                  })
                }
              />
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FormSection;
