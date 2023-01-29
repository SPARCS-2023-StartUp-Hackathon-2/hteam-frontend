import { Button, Flex, Modal, Text } from "@mantine/core";
import Image from "next/image";
import { ComponentProps } from "react";
import checkImage from "public/check.png";
import Link from "next/link";

interface Props extends ComponentProps<typeof Modal> {
  title?: string;
}

function ApplicationCompleteModal({ title, ...props }: Props) {
  return (
    <Modal centered withCloseButton={false} closeOnClickOutside={false} {...props}>
      <Flex direction="column" align="center" sx={{ width: "100%" }}>
        <Image
          src={checkImage}
          alt="check"
          width={56}
          style={{ marginTop: 54, marginBottom: 40 }}
        />
        {title && <Text>&lt; {title} &gt;</Text>}
        <Text fw={600} sx={{ fontSize: 24, marginBottom: 133 }}>
          서류 지원이 완료되었습니다.
        </Text>

        <Link href="/" passHref legacyBehavior>
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
          >
            Mozip 구경하기
          </Button>
        </Link>
      </Flex>
    </Modal>
  );
}

export default ApplicationCompleteModal;
