import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Layout>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <ContentWrapper>
        <Navbar />
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentWrapper>
    </Layout>
  );
}

/* ===============================
   Styled Components
================================ */

const Layout = styled.div`
  height: 100vh;
  display: flex;
  background-color: var(--bg-main);
  color: var(--text-primary);
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;
`;

const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2.4rem;

   /* 👇 Added for global centering */
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;