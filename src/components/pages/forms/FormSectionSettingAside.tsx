import { Box } from "@mantine/core";

function FormSectionSettingAside() {
  return (
    <Box
      component="aside"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        borderColor: theme.colors.gray[1],
        maxHeight: "100vh",
        minHeight: "100vh",
        maxWidth: "304px",
        width: "100%",
        overflow: "hidden",
      })}
    >
      asdf
    </Box>
  );
}

export default FormSectionSettingAside;
