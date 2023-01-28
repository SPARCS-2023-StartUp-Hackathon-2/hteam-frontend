import { Container } from "@mantine/core";
import FormSectionBlockList from "components/pages/forms/FormSectionBlockList";
import FormSectionEditorView from "components/pages/forms/FormSectionEditorView";
import FormSectionSettingAside from "components/pages/forms/FormSectionSettingAside";

function FormEditorPage() {
  return (
    <Container size="lg" sx={{ display: "flex" }}>
      <FormSectionBlockList />
      <FormSectionEditorView />
      <FormSectionSettingAside />
    </Container>
  );
}

export default FormEditorPage;
