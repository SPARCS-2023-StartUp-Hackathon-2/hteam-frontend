import { Button, Flex, Modal, Text } from "@mantine/core";
import Image from "next/image";
import { ComponentProps } from "react";
import checkImage from "public/check.png";
import Link from "next/link";

interface Props extends ComponentProps<typeof Modal> {
  title?: string;
  onClose: any;
}

function ScheduleSendCompletedModal({ title, onClose, ...props }: Props) {
  return (
    <Modal
      centered
      withCloseButton={false}
      closeOnClickOutside={false}
      onClose={onClose}
      {...props}
    >
      <Flex direction="column" align="center" sx={{ width: "100%" }}>
        <Image
          src={checkImage}
          alt="check"
          width={56}
          style={{ marginTop: 54, marginBottom: 40 }}
        />
        {title && <Text>&lt; {title} &gt;</Text>}
        <Text fw={600} sx={{ fontSize: 24, marginBottom: 133 }}>
          인터뷰 타임블럭이 성공적으로 업데이트 되었습니다!
        </Text>

        <Button
          component="a"
          type="submit"
          color="primary.2"
          sx={{
            display: "block",
            margin: "0 auto",
            borderRadius: 999,
            marginBottom: 113,
            marginTop: 24,
          }}
          onClick={onClose}
        >
          확인
        </Button>
      </Flex>
    </Modal>
  );
}

export default ScheduleSendCompletedModal;
