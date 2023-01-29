import { Container } from "@mantine/core";
import FormSectionBlockList from "components/pages/forms/FormSectionBlockList";
import FormSectionEditorView from "components/pages/forms/FormSectionEditorView";
import FormSectionSettingAside from "components/pages/forms/FormSectionSettingAside";
import useFormInfo from "hooks/useFormInfo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { formSectionListState, selectedFormSectionIdState } from "recoil/formEditor";

function FormEditorPage() {
  const router = useRouter();
  const isModifyMode = Boolean(router.query.modify);
  const rid = router.query.rid as string | undefined;
  const { data } = useFormInfo(isModifyMode ? rid : undefined);
  const setFormSectionListState = useSetRecoilState(formSectionListState);
  const setSelectedFormSectionId = useSetRecoilState(selectedFormSectionIdState);

  useEffect(() => {
    if (isModifyMode) {
      if (!data) return;
      setFormSectionListState(data.content.data.slice(1, data.content.data.length));
    } else {
      setFormSectionListState([]);
    }
    setSelectedFormSectionId(0);
  }, [isModifyMode, data, setFormSectionListState, setSelectedFormSectionId]);

  return (
    <Container size="lg" sx={{ display: "flex", height: "calc(100vh - 80px)" }}>
      <FormSectionBlockList />
      <FormSectionEditorView />
      <FormSectionSettingAside />
    </Container>
  );
}

export default FormEditorPage;
