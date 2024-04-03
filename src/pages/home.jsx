import { Helmet } from "react-helmet";
import HomeUpperPart from "src/components/home/homeUpperPart";
import HomeMiddlePart from "src/components/home/homeMiddlePart";
import Footer from "src/components/footer/footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home: Harvest Mater</title>
      </Helmet>
      <HomeUpperPart />
      <HomeMiddlePart />
      <Footer />
    </>
  );
}
