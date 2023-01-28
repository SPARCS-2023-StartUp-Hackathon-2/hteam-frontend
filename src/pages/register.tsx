import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

interface FormInput {
  username: string;
  password: string;
  groupName: string;
  smtpHost: string;
  smtpEmail: string;
  smtpPassword: string;
}

function RegisterPage() {
  const theme = useMantineTheme();

  const form = useForm<FormInput>({
    initialValues: {
      username: "",
      password: "",
      groupName: "",
      smtpHost: "",
      smtpEmail: "",
      smtpPassword: "",
    },
  });

  const handleSubmit = (values: FormInput) => {
    console.log(values);
  };

  return (
    <Container size="xs">
      <Flex direction="column" align="center" sx={{ position: "relative", padding: "50px 0" }}>
        <Box sx={{ position: "absolute", top: 56, left: 0 }}>
          <Link href="/login">
            <IconArrowLeft size={28} color={theme.colors.gray[5]} />
          </Link>
        </Box>

        <Title order={1} color="gray.9" fw={600} sx={{ fontSize: 32, marginBottom: 37 }}>
          회원가입
        </Title>

        <form onSubmit={form.onSubmit(handleSubmit)} style={{ width: "100%" }}>
          <Flex direction="column" gap={28} sx={{ width: "100%", marginBottom: 50 }}>
            <Flex gap={68} sx={{ width: "100%" }}>
              <TextInput
                label="아이디"
                placeholder="아이디를 입력해주세요."
                sx={{ flex: 1 }}
                {...form.getInputProps("username")}
              />
              <TextInput
                label="비밀번호"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                sx={{ flex: 1 }}
                {...form.getInputProps("password")}
              />
            </Flex>
            <TextInput
              label="단체명"
              placeholder="ex) 대한대학교 민국동아리, 한국 컴퍼니 등..."
              {...form.getInputProps("groupName")}
            />
            <Flex gap={48} align="center">
              <Text color="gray.9" fw={600} align="center">
                SMTP
                <br />
                설정
              </Text>
              <Flex direction="column" gap={28} sx={{ width: "100%" }}>
                <TextInput
                  label="호스트"
                  placeholder="SMTP 호스트 주소를 적어주세요."
                  {...form.getInputProps("username")}
                />
                <TextInput
                  label="이메일"
                  placeholder="SMTP 이메일 주소를 적어주세요."
                  {...form.getInputProps("username")}
                />
                <TextInput
                  label="비밀번호"
                  placeholder="SMTP 비밀번호를 적어주세요."
                  {...form.getInputProps("username")}
                />
              </Flex>
            </Flex>
          </Flex>

          <Button type="submit" sx={{ display: "block", margin: "0 auto" }}>
            회원가입
          </Button>
        </form>
      </Flex>
    </Container>
  );
}

export default RegisterPage;
