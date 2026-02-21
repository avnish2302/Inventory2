import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar state

  return (
    <Layout>
      <SidebarWrapper>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </SidebarWrapper>

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
  display: flex;
  height: 100vh;
  background-color: var(--bg-main);
  color: var(--text-primary);
`;

const SidebarWrapper = styled.div`
  flex: 0 0 240px; /* Fix sidebar width */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2.4rem;
  flex: 1;
  overflow-y: auto;
  width: 100%;
`;