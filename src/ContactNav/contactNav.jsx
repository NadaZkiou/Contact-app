import { Link } from "react-router-dom";
import './contactNav.css'
import { TiContacts } from "react-icons/ti";
import { IoMdPersonAdd } from "react-icons/io";
export default function ContactNav() {
    return (
        <nav>
        <ul className="nav-links">
            <li>
            <Link to="/formulaire"><IoMdPersonAdd title="Add Contact"/></Link>
            </li>
            <li>
            <Link to="/contacts"><TiContacts title="Contact List"/></Link>
            </li>
        </ul>
        </nav>
    )
}