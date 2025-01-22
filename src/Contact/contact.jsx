import React from "react";
import { useSelector} from "react-redux";
import './contact.css';
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Contact() {
    const[search, setSearch] = useState("");
    const contacts = useSelector((state)=>state.contacts.contacts)
    const navigate = useNavigate()
    const filteredSearch = contacts.filter((contact)=>
       {
        const fullname = `${contact.fname} ${contact.lname}`.toLowerCase()
       return fullname.includes(search.toLowerCase())
       }

    )
    const handleSearch = (e) => {
       setSearch(e.target.value) 
    }
    function handleInfo(contact){
        navigate('/contactInfo',{state:{contact}})
    }
    
    return(
        <div>
            <input type="text" placeholder="Search" value={search} className="searchBar" onChange={handleSearch}/><FaSearch className="searchIcon" />
            <ul className="contactList">{filteredSearch.map((contact, phone) => {
                return (
                <>
                <li key={phone} onClick={()=>handleInfo(contact)}>
                        <img src={contact.photo} alt="user" className="userImage" />
                        <p>{`${contact.fname} ${contact.lname}`}</p>
                    </li></>
                )
                })}
               
            </ul>
        </div>

    )
    
}