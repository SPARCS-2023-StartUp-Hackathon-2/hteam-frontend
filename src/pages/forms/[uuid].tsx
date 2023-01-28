import { Button, Container, Flex } from "@mantine/core";
import FormSection from "components/pages/forms/FormSection";
import BasicFormSectionEditor from "components/pages/forms/BasicFormSectionEditor";
import useApplicantForm from "hooks/useApplicantForm";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { basicFormSectionState, formSectionListState } from "recoil/formEditor";
import { useEffect } from "react";
import { FormSectionItem } from "types/form";

function FormViewPage() {
  const router = useRouter();
  const uuid = router.query.uuid as string | undefined;
  const { data, isLoading } = useApplicantForm(uuid);

  const [formSectionList, setFormSectionList] = useRecoilState(formSectionListState);
  const basicFormSection = useRecoilValue(basicFormSectionState);

  useEffect(() => {
    if (!data) return;

    setFormSectionList(data.map((item) => ({ ...item, content: "" })));
  }, [data, setFormSectionList]);

  const handleSubmit = async () => {
    const body: { content: { data: FormSectionItem[] } } = {
      content: {
        data: [
          { ...formSectionList[0], content: basicFormSection },
          ...formSectionList.slice(1, formSectionList.length),
        ],
      },
    };
    console.log(body);
  };

  if (!uuid || isLoading || !data) return null;
  return (
    <Container size="xs" sx={{ paddingTop: 80, paddingBottom: 80 }}>
      <Flex direction="column" gap={80}>
        <BasicFormSectionEditor />
        {data.slice(1, data.length).map((item) => (
          <FormSection key={item.id} formSection={item} />
        ))}

        <Button color="primary.2" sx={{ borderRadius: 999 }} onClick={handleSubmit}>
          제출하기
        </Button>
      </Flex>
    </Container>
  );
}

export default FormViewPage;
