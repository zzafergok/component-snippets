import Header from "../block/header";
import Footer from "../block/footer";

interface IProps {
  children: React.ReactNode;
}

function Light({ children }: IProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Light;
