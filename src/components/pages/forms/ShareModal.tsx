import { Button, Flex, Modal, Text } from "@mantine/core";
import Image from "next/image";
import { ComponentProps } from "react";
import checkImage from "public/check.png";
import ShareButton from "components/common/ShareButton";
import Link from "next/link";

interface Props extends ComponentProps<typeof Modal> {
  title?: string;
  rid: string;
  uuid: string;
}

function ShareModal({ title, rid, uuid, ...props }: Props) {
  return (
    <Modal centered withCloseButton={false} closeOnClickOutside={false} {...props}>
      <Flex direction="column" align="center" sx={{ width: "100%" }}>
        <Image
          src={checkImage}
          alt="check"
          width={56}
          style={{ marginTop: 74, marginBottom: 40 }}
        />
        {title && <Text>&lt; {title} &gt;</Text>}
        <Text fw={600} sx={{ fontSize: 24, marginBottom: 35 }}>
          모집 서류가 생성되었습니다.
        </Text>

        <ShareButton targetLink={`${process.env.NEXT_PUBLIC_HOMEPAGE_URL}/forms/${uuid}`} />

        <Link href={`/recruitments/${rid}`} passHref legacyBehavior>
          <Button
            component="a"
            type="submit"
            color="primary.2"
            sx={{
              display: "block",
              margin: "0 auto",
              borderRadius: 999,
              marginBottom: 170,
              marginTop: 24,
            }}
          >
            모집 페이지로 돌아가기
          </Button>
        </Link>
      </Flex>
    </Modal>
  );
}

export default ShareModal;
