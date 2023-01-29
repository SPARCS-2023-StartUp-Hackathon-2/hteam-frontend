import { Button, Text } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import CopyButtonIcon from "components/common/icons/CopyButtonIcon";
import { ComponentProps, useCallback, useEffect } from "react";

interface Props extends ComponentProps<typeof Button> {
  targetLink: string;
}

function ShareButton({ targetLink, ...props }: Props) {
  const clipboard = useClipboard({ timeout: 500 });

  const handleClickButton = useCallback(() => {
    clipboard.copy(targetLink);
  }, [clipboard, targetLink]);

  useEffect(() => {
    if (clipboard.copied) {
      showNotification({
        title: "링크 복사 성공!",
        message: "링크가 클립보드에 복사되었습니다.",
        color: "green",
      });
    }
  }, [clipboard]);

  return (
    <Button
      onClick={handleClickButton}
      styles={(theme) => ({
        root: {
          backgroundColor: theme.white,
          padding: "10px 30px",
          height: "auto",

          fontSize: "15px",
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
      {...props}
    >
      <Text sx={{ lineHeight: 1, marginRight: 6 }}>설문 링크 공유</Text> <CopyButtonIcon />
    </Button>
  );
}

export default ShareButton;
