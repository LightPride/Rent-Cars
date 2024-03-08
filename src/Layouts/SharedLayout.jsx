import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Container from "../components/UI/Container/Container";
import Loader from "../components/UI/Loader";
import Header from "../components/Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
