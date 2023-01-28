import { Box, Button, Flex, TextInput, Title, useMantineTheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowLeft } from "@tabler/icons-react";
import { axiosClient } from "lib/axios";
import Link from "next/link";

interface FormInput {
  username: string;
  password: string;
}

function LoginPage() {
  const theme = useMantineTheme();

  const form = useForm<FormInput>({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async (values: FormInput) => {
    const { data } = await axiosClient.post("/users/signin", values);
    console.log(data);
  };

  return (
    <Flex justify="center" sx={{ minHeight: "calc(100vh - 80px)", height: "100%" }}>
      <Flex
        direction="column"
        align="center"
        sx={(theme) => ({
          position: "relative",
          width: 550,
          height: 660,
          boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.1)",
          transform: "translateY(10%)",
        })}
      >
        <Box sx={{ position: "absolute", top: 30, left: 30 }}>
          <Link href="/">
            <IconArrowLeft size={28} color={theme.colors.gray[5]} />
          </Link>
        </Box>

        <Title
          order={1}
          color="gray.9"
          fw={600}
          sx={{ fontSize: 32, marginTop: 80, marginBottom: 52 }}
        >
          로그인
        </Title>

        <form onSubmit={form.onSubmit(handleSubmit)} style={{ width: "100%" }}>
          <Flex direction="column" align="center" sx={{ width: "100%" }}>
            <TextInput
              label="아이디"
              placeholder="아이디를 입력해주세요."
              required
              sx={{ marginBottom: 50, width: 260 }}
              {...form.getInputProps("username")}
            />
            <TextInput
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              required
              sx={{ marginBottom: 56, width: 260 }}
              {...form.getInputProps("password")}
            />

            <Button
              type="submit"
              color="primary.2"
              sx={{ marginBottom: 12, width: 162, borderRadius: "999px" }}
            >
              로그인
            </Button>
            <Link href="/register" passHref legacyBehavior>
              <Button
                component="a"
                variant="outline"
                color="gray.2"
                sx={(theme) => ({ width: 162, borderRadius: "999px", color: theme.colors.gray[9] })}
              >
                회원가입
              </Button>
            </Link>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}

export default LoginPage;
