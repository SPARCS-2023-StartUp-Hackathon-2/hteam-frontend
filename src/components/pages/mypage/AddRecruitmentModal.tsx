import { Button, Flex, Modal, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useAuth } from "components/common/AuthProvider";
import TextInput from "components/common/TextInput";
import { axiosClient } from "lib/axios";
import { ComponentProps } from "react";

interface FormInput {
  name: string;
  startAt: string;
  endAt: string;
}

interface Props extends ComponentProps<typeof Modal> {}

function AddRecruitmentModal({ onClose, ...props }: Props) {
  const form = useForm<FormInput>({
    initialValues: {
      name: "",
      startAt: "",
      endAt: "",
    },
  });

  const { axiosAuthHeader } = useAuth();

  const handleSubmit = async (values: FormInput) => {
    const body = {
      ...values,
      startAt: values.startAt + "T00:00:00",
      endAt: values.endAt + "T00:00:00",
    };
    try {
      await axiosClient.post("/recruitments", body, axiosAuthHeader);
      showNotification({
        title: "모집 추가 성공",
        message: "모집이 성공적으로 추가되었습니다.",
        color: "green",
      });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal
      centered
      withCloseButton={false}
      onClose={onClose}
      {...props}
      styles={{ modal: { padding: "92px 42px 77px !important" } }}
    >
      <Text fw={600} sx={{ fontSize: 24, marginBottom: 56 }}>
        모집 정보를 입력해주세요.
      </Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="모집 이름"
          placeholder="신입부원 모집"
          required
          withAsterisk={false}
          sx={{ width: "100%", marginBottom: 40 }}
          {...form.getInputProps("name")}
        />
        <Text color="gray.9" sx={{ fontSize: 14, marginBottom: 12 }}>
          모집 일정
        </Text>
        <Flex align="center" justify="space-between" sx={{ marginBottom: 71 }}>
          <TextInput
            type="date"
            required
            sx={{ width: "fit-content" }}
            {...form.getInputProps("startAt")}
          />
          ~
          <TextInput
            type="date"
            required
            sx={{ width: "fit-content" }}
            {...form.getInputProps("endAt")}
          />
        </Flex>
        <Button
          type="submit"
          color="primary.2"
          sx={{ display: "block", margin: "0 auto", borderRadius: 999 }}
        >
          모집 시작하기
        </Button>
      </form>
    </Modal>
  );
}

export default AddRecruitmentModal;
