import { Flex, Text } from "@mantine/core";
import TextInput from "components/common/TextInput";
import BasicInfoInput from "components/pages/forms/BasicInfoInput";
import { useRecoilState } from "recoil";
import { basicFormSectionState } from "recoil/formEditor";

function BasicFormSectionEditor() {
  const [basicFormSection, setBasicFormSection] = useRecoilState(basicFormSectionState);

  return (
    <Flex direction="column" gap={30} sx={{ width: "100%" }}>
      <BasicInfoInput
        order={1}
        title="이름을 입력해주세요."
        value={basicFormSection.name}
        onChange={(e) => setBasicFormSection((data) => ({ ...data, name: e.target.value }))}
      />
      <BasicInfoInput
        type="email"
        order={2}
        title="이메일을 입력해주세요."
        value={basicFormSection.email}
        onChange={(e) => setBasicFormSection((data) => ({ ...data, email: e.target.value }))}
      />
      <BasicInfoInput
        type="number"
        order={3}
        title="전화번호를 입력해주세요."
        placeholder="띄어쓰기 없이 기입해주세요."
        value={basicFormSection.phoneNumber}
        onChange={(e) => setBasicFormSection((data) => ({ ...data, phoneNumber: e.target.value }))}
      />
    </Flex>
  );
}

export default BasicFormSectionEditor;
