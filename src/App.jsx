import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactNav from "./ContactNav/contactNav"
import Formulaire from "./formulaire/formulaire";
import Contact from "./Contact/contact";
import ContactInfo from "./Contact/contactInfo";
import UpdatePage from "./Contact/updatePage";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
     <ContactNav/>
      <Routes>
        <Route path="/" element={<Formulaire />} />
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/contactInfo"element={<ContactInfo/>}/>
        <Route path="/updatepage" element ={<UpdatePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}