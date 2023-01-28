import { Flex } from "@mantine/core";
import FormSectionEditor from "components/pages/forms/FormSectionEditor";

function FormSectionEditorView() {
  return (
    <Flex direction="column" gap={100} sx={{ flex: 1, padding: "84px 40px" }}>
      <FormSectionEditor order={2} type="checkbox" />
      <FormSectionEditor order={3} type="dropdown" />
    </Flex>
  );
}

export default FormSectionEditorView;
