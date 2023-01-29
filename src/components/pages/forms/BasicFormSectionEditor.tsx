import { Flex } from "@mantine/core";
import BasicInfoInput from "components/pages/forms/BasicInfoInput";
import { ComponentProps } from "react";
import { useRecoilState } from "recoil";
import { basicFormSectionState } from "recoil/formEditor";

interface Props extends ComponentProps<typeof Flex> {}

function BasicFormSectionEditor(props: Props) {
  const [basicFormSection, setBasicFormSection] = useRecoilState(basicFormSectionState);

  return (
    <Flex direction="column" gap={30} sx={{ width: "100%", margin: "auto 0" }} {...props}>
      <BasicInfoInput
        order={1}
        title="이름을 입력해주세요."
        required
        value={basicFormSection.name}
        onChange={(e) => setBasicFormSection((data) => ({ ...data, name: e.target.value }))}
      />
      <BasicInfoInput
        type="email"
        order={2}
        title="이메일을 입력해주세요."
        required
        value={basicFormSection.email}
        onChange={(e) => setBasicFormSection((data) => ({ ...data, email: e.target.value }))}
      />
      <BasicInfoInput
        type="number"
        order={3}
        title="전화번호를 입력해주세요."
        required
        placeholder="띄어쓰기 없이 기입해주세요."
        value={basicFormSection.phoneNumber}
        onChange={(e) => setBasicFormSection((data) => ({ ...data, phoneNumber: e.target.value }))}
      />
    </Flex>
  );
}

export default BasicFormSectionEditor;
