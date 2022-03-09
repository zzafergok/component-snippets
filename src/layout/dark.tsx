import Header from "../block/header";
import Footer from "../block/footer";

type IProps = {
  children: React.ReactNode;
};

function Dark({ children }: IProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Dark;
