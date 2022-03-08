import Header from "../block/header";
import Button from "../components/button";
import DefaultInput from "../components/input/default_input";

function Home() {
  const calistim = () => alert("Calisti");
  return (
    <>
      Home
      <Button onClick={calistim} />
      <DefaultInput type="number" />
    </>
  );
}

export default Home;
