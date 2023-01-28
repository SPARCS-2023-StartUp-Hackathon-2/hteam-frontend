import { Container } from "@mantine/core";
import { useRouter } from "next/router";

function FormViewPage() {
  const router = useRouter();
  const uuid = router.query.uuid as string | undefined;

  if (!uuid) return null;
  return <Container size="lg"></Container>;
}

export default FormViewPage;
