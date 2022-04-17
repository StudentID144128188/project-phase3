import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ItemListingPage from "../pages/ItemListingPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import AboutPage from "../pages/AboutPage";
import SupportPage from "../pages/SupportPage";
import NotFoundPage from "../pages/NotFoundPage";
import ItemDescriptionPage from "../pages/ItemDescriptionPage";
import DashboardAdminPage from "../pages/DashboardAdminPage";
import DashboardUserPage from "../pages/DashboardUserPage";
import CreatePropertyPage from "../pages/CreatePropertyPage";
import UpdatePropertyPage from "../pages/UpdatePropertyPage";
import ViewPropertiesPage from "../pages/ViewPropertiesPage";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="properties" element={<ItemListingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="properties/:id" element={<ItemDescriptionPage />} />
          <Route path="dashboard/admin" element={<DashboardAdminPage />} />
          <Route path="dashboard/user" element={<DashboardUserPage />} />
          <Route path="create/property" element={<CreatePropertyPage />} />
          <Route path="update/property/:id" element={<UpdatePropertyPage />} />
          <Route path="view/properties" element={<ViewPropertiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
