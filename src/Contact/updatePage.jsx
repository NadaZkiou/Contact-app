import React, { useState } from "react";
import { FaCamera, FaUser, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateContact } from "../Redux/contactSlice";
import { useNavigate, useLocation } from "react-router-dom";
import './updatePage.css'

export default function UpdatePage() {
  const location = useLocation()
  const contact = location.state?.contact

  const [info, setInfo] = useState({
    photo: contact.photo || require('../assets/user.jpg'),
    fname: contact.fname,
    lname: contact.lname,
    email: contact.email,
    phone: contact.phone,
    id: contact.id
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setInfo({
        ...info,
        photo: URL.createObjectURL(e.target.files[0]),
      })
    }
  }

  const handleUpdate = () => {
    const updatedContact = { ...info }
    dispatch(updateContact(updatedContact))
    navigate('/contacts')
  }

  return (
    <form className="form">
      <label htmlFor="photo" className="image-input">
        <input
          className="photo-input"
          type="file"
          id="photo"
          accept="image/*"
          onChange={handlePhotoChange}
        />
        <img className="defaultPhoto" src={info.photo} alt="Contact" />
      </label>
      <FaCamera className="photo" />

      <div className="flex">
        <label htmlFor="fname">
          <FaUser className="input-icon" />
          <input
            className="contact-input" type="text" id="fname" placeholder=" "value={info.fname}onChange={(e) => setInfo({ ...info, fname: e.target.value })} />
          <span>First Name</span>
        </label>

        <label htmlFor="lname">
          <FaUser className="input-icon" />
          <input className="contact-input"type="text" id="lname" placeholder=" " value={info.lname}onChange={(e) => setInfo({ ...info, lname: e.target.value })}/>
          <span>Last Name</span>
        </label>
      </div>

      <div className="flex">
        <label htmlFor="email">
          <MdEmail className="input-icon" />
          <input
            className="contact-input" type="email" id="email" placeholder=" " value={info.email}onChange={(e) => setInfo({ ...info, email: e.target.value })} />
          <span>Email</span>
        </label>

        <label htmlFor="phone">
          <FaPhone className="input-icon" />
          <input className="contact-input" type="tel"  id="phone"  placeholder=" " value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} />
          <span>Phone</span>
        </label>
      </div>

      <button className="addButton" type="button" onClick={handleUpdate}>Update Contact</button>
    </form>
  )
}
