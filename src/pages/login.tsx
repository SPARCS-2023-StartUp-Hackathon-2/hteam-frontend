import { Box, Button, Flex, TextInput, Title, useMantineTheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

interface FormInput {
  id: string;
  password: string;
}

function LoginPage() {
  const theme = useMantineTheme();

  const form = useForm<FormInput>({
    initialValues: {
      id: "",
      password: "",
    },
  });

  const handleSubmit = (values: FormInput) => {
    console.log(values);
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

        <form
          onSubmit={form.onSubmit(handleSubmit)}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <TextInput
            id="id"
            label="아이디"
            placeholder="아이디를 입력해주세요."
            sx={{ marginBottom: 50 }}
            {...form.getInputProps("id")}
          />
          <TextInput
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            sx={{ marginBottom: 56 }}
            {...form.getInputProps("password")}
          />

          <Button type="submit">로그인</Button>
        </form>
      </Flex>
    </Flex>
  );
}

export default LoginPage;
