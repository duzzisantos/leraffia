import "react-bootstrap/Carousel";
import "./App.css";
import ControlledCarousel from "./homepage/home";
import Offers from "./offers/offers";
import Sales from "./sales/sales";
import NavbarComponent from "./reusable-comps/navbar";
import FooterComponent from "./reusable-comps/footer";
import { Routes, Route } from "react-router-dom";
import Careers from "./corporate/careers";
import Investors from "./corporate/investors";
import Leadership from "./corporate/leadership";
import Partners from "./corporate/partners";
import Collaborate from "./community/collaborate";
import Contact from "./community/contact";
import CustomerService from "./community/customer-service";
import Projects from "./community/projects";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<ControlledCarousel />}></Route>
        <Route path="my-carousel" element={<ControlledCarousel />}></Route>
        <Route path="offers" element={<Offers />}></Route>
        <Route path="sales" element={<Sales />}></Route>
        <Route path="sales" element={<Sales />}></Route>
        <Route path="careers" element={<Careers />} />
        <Route path="partners" element={<Partners />} />
        <Route path="investors" element={<Investors />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="collaborate" element={<Collaborate />} />
        <Route path="projects" element={<Projects />} />
        <Route path="customer-service" element={<CustomerService />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
