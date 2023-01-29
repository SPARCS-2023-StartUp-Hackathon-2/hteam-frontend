import { Image } from "@mantine/core";
import mainImage from "public/main.png";

function Home() {
  return <Image src={mainImage.src} alt="main" sx={{ marginTop: -80 }} />;
}

export default Home;
