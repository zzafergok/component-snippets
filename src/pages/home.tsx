import Header from "../block/header";
import InputIndex from "../components/input/index";
import ButtonIndex from "../components/button/index";
import SubHeader from "../block/sub_header";

function Home() {
  return (
    <>
      <SubHeader
        leftText="Black Lives Matter"
        rightText="Stop war in Ukraine"
      />
      <ButtonIndex />
      <InputIndex />
    </>
  );
}

export default Home;
