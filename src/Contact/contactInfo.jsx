import React from "react";
import './contactInfo.css';
import { useNavigate, useLocation } from "react-router-dom";
import { FaPhone, FaTrash, FaPen } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../Redux/contactSlice";

export default function ContactInfo() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const contact = location.state?.contact

  const handleDelete = (contact) => {
    dispatch(deleteContact(contact))
    navigate('/contacts')
  }

  const handleUpdate = (contact) => {
    navigate('/updatepage', { state: { contact } })
  }
  return (
    <div className="contacting">
      <div className="head">
        <img src={contact.photo} className="contactPic" />
        <h1 className="fullName">{`${contact.fname} ${contact.lname}`}</h1>
      </div>
      <div className="info">
        <div className="contact-item">
          <FaPhone className="Icon" />
          <p>{contact.phone}</p>
        </div>
        <div className="contact-item">
          <MdEmail className="Icon" />
          <p>{contact.email}</p>
        </div>
      </div>
      <div className="buttons">
        <button className="deleteupdate" onClick={() => handleUpdate(contact)}>
          <FaPen className="fontButton" />
        </button>
        <button className="deleteupdate" onClick={() => handleDelete(contact)}>
          <FaTrash className="fontButton" />
        </button>
      </div>
    </div>
  )
}

