import { Button, Container, Flex, Modal } from "@mantine/core";
import FormSection from "components/pages/forms/FormSection";
import BasicFormSectionEditor from "components/pages/forms/BasicFormSectionEditor";
import useApplicantForm from "hooks/useApplicantForm";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { basicFormSectionState, formSectionListState } from "recoil/formEditor";
import { FormEvent, useEffect, useState } from "react";
import { BasicFormSectionItem, FormSectionItem } from "types/form";
import { axiosClient } from "lib/axios";

function FormViewPage() {
  const router = useRouter();
  const uuid = router.query.uuid as string | undefined;
  const { data, isLoading } = useApplicantForm(uuid);

  const [formSectionList, setFormSectionList] = useRecoilState(formSectionListState);
  const basicFormSection = useRecoilValue(basicFormSectionState);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!data) return;

    setFormSectionList(data.map((item) => ({ ...item, content: "" })));
  }, [data, setFormSectionList]);

  console.log(data);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body: BasicFormSectionItem & { content: { data: FormSectionItem[] } } = {
      ...basicFormSection,
      content: {
        data: [
          { ...formSectionList[0], content: basicFormSection },
          ...formSectionList.slice(1, formSectionList.length),
        ],
      },
    };

    try {
      await axiosClient.post(`/applicants/apply/${uuid}`, body);
      setShowModal(true);
    } catch (e) {
      console.error(e);
    }
  };

  if (!uuid || isLoading || !data) return null;
  return (
    <Container size="xs" sx={{ paddingTop: 80, paddingBottom: 80 }}>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap={80}>
          <BasicFormSectionEditor />
          {data.slice(1, data.length).map((item) => (
            <FormSection key={item.id} formSection={item} />
          ))}

          <Button type="submit" color="primary.2" sx={{ borderRadius: 999 }}>
            제출하기
          </Button>
        </Flex>
      </form>

      <Modal opened={showModal} onClose={() => setShowModal(false)} title="제출 완료!" />
    </Container>
  );
}

export default FormViewPage;
