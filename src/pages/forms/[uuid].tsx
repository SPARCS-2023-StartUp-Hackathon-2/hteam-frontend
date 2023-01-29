import { Button, Container, Flex, Modal, Text } from "@mantine/core";
import FormSection from "components/pages/forms/FormSection";
import BasicFormSectionEditor from "components/pages/forms/BasicFormSectionEditor";
import useApplicantForm from "hooks/useApplicantForm";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { basicFormSectionState, formSectionListState } from "recoil/formEditor";
import { FormEvent, useEffect, useState } from "react";
import { BasicFormSectionItem, FormSectionItem } from "types/form";
import { axiosClient } from "lib/axios";
import ApplicationCompleteModal from "components/pages/forms/ApplicationCompleteModal";

function FormViewPage() {
  const router = useRouter();
  const uuid = router.query.uuid as string | undefined;
  const { data, isLoading } = useApplicantForm(uuid);

  const [formSectionList, setFormSectionList] = useRecoilState(formSectionListState);
  const basicFormSection = useRecoilValue(basicFormSectionState);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!data) return;

    setFormSectionList(data.data.map((item) => ({ ...item, content: "" })));
  }, [data, setFormSectionList]);

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
    <Container size="xs" sx={{ paddingTop: 100, paddingBottom: 80 }}>
      <Text fw={600} sx={{ fontSize: 32, textAlign: "center", marginBottom: 80 }}>
        {data.metadata.title || "구버전"}
      </Text>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap={130}>
          <BasicFormSectionEditor />
          {data.data.slice(1, data.data.length).map((item) => (
            <FormSection key={item.id} formSection={item} />
          ))}

          <Button type="submit" color="gray.6" sx={{ width: 180, margin: "0 auto" }}>
            제출하기
          </Button>
        </Flex>
      </form>

      <ApplicationCompleteModal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title={data.metadata.title}
      />
    </Container>
  );
}

export default FormViewPage;
