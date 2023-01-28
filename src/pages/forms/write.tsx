import { Container } from "@mantine/core";
import FormSectionBlockAside from "components/pages/forms/FormSectionBlockAside";
import FormSectionEditorView from "components/pages/forms/FormSectionEditorView";
import FormSectionSettingAside from "components/pages/forms/FormSectionSettingAside";

function MakeFormPage() {
  return (
    <Container size="lg" sx={{ display: "flex" }}>
      <FormSectionBlockAside />
      <FormSectionEditorView />
      <FormSectionSettingAside />
    </Container>
  );
}

export default MakeFormPage;
