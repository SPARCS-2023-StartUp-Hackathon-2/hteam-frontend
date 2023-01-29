import { Flex, Text } from "@mantine/core";
import ArrowLeftIcon from "components/common/icons/ArrowLeftIcon";
import useRecruitment from "hooks/useRecruitment";
import Link from "next/link";
import { dateObjectToDateString } from "utils/date";

interface Props {
  rid: string;
  backLink?: string;
}

function BasicInfoSection({ rid, backLink }: Props) {
  const { data, isLoading } = useRecruitment(rid);

  if (isLoading) return null;
  if (!data) return null;
  return (
    <Flex justify="space-between" sx={{ marginBottom: 20 }}>
      <Flex gap="27px" align="baseline">
        <Link href={backLink || "/mypage"}>
          <ArrowLeftIcon />
        </Link>
        <Flex direction="column" align="baseline">
          <Text
            c="gray.8"
            sx={(theme) => ({
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: 16,
            })}
          >
            {data.name}
          </Text>
          <Text
            c="gray.8"
            sx={(theme) => ({
              fontSize: "15px",
              fontWeight: 400,
            })}
          >
            {dateObjectToDateString(new Date(data.startAt))} ~{" "}
            {dateObjectToDateString(new Date(data.endAt))}
          </Text>
        </Flex>
      </Flex>
      {/* NOTE: 삭제버튼 백엔드 및 프론트 일정으로 인해 일단 보류 */}
      {/* <Button
        styles={(theme) => ({
          root: {
            backgroundColor: theme.white,
            padding: "10px 30px",

            fontSize: "13px",
            fontWeight: 400,
            border: `1px solid ${theme.colors.gray[1]}`,
            color: theme.black,
            borderRadius: theme.radius.sm,
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          },
          inner: {
            height: "auto",
          },
        })}
      >
        <Text sx={{ lineHeight: 1, marginRight: 6 }}>삭제하기</Text> <CloseIcon />
      </Button> */}
    </Flex>
  );
}

export default BasicInfoSection;
