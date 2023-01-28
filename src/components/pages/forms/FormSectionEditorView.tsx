import { Flex } from "@mantine/core";
import { useRecoilValue } from "recoil";
import FormSectionEditor from "components/pages/forms/FormSectionEditor";
import { formSectionListState, selectedFormSectionIdState } from "recoil/formEditor";

function FormSectionEditorView() {
  const formSectionList = useRecoilValue(formSectionListState);
  const selectedFormSectionId = useRecoilValue(selectedFormSectionIdState);
  const selectedFormSection = formSectionList.find(
    (formSection) => formSection.id === selectedFormSectionId
  );

  return (
    <Flex direction="column" gap={100} sx={{ flex: 1, padding: "84px 40px" }}>
      {selectedFormSection && (
        <FormSectionEditor
          dataId={selectedFormSection.id}
          order={selectedFormSection.order}
          type={selectedFormSection.type}
        />
      )}
    </Flex>
  );
}

export default FormSectionEditorView;
