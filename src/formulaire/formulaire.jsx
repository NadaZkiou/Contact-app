import React, { useState } from "react";
import './formulaire.css';
import { FaCamera } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactSlice";
import user from '../assets/user.jpg';
import { FaUser, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function Formulaire() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [info, setInfo] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        photo: user
    })

    const handleAddContact = () => {
        const { fname, lname, email, phone, photo } = info;
        if(info.fname, info.phone){
            dispatch(addContact({ fname, lname, email, photo, phone }))
            navigate('/contacts')
        }else{
            alert("fill up the inputs")
            
        }
        
        setInfo({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            photo: user
        })
       
       
    }
    return (
        <form className="form">
            <label htmlFor="photo" className="image-input">
           
                <input className="input" type="file" id="photo" accept="image/*" 
                    onChange={(e) => setInfo({ ...info, photo: URL.createObjectURL( e.target.files[0]) })}
                /><img className="defaultPhoto"  src={info.photo}/>
               
            </label>
            <FaCamera className="photo" />

            <div className="flex">
                <label htmlFor="fname"><FaUser className="labelIcon"/>
                    <input
                        className="input"  type="text" id="firstname"placeholder=" "value={info.fname} onChange={(e) => setInfo({ ...info, fname: e.target.value })} />
                    <span>Firstname</span>
                </label>

                <label htmlFor="lname"><FaUser className="labelIcon"/>
                    <input className="input" type="text" id="lastname" placeholder=" " value={info.lname}  onChange={(e) => setInfo({ ...info, lname: e.target.value })}/>
                    <span>Lastname</span>
                </label>
            </div>

            <div className="flex2">
                <label htmlFor="email"><MdEmail className="labelIcon"/>
                    <input className="input" type="email" id="email" placeholder=" " value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })}/>
                    <span>Email</span>
                </label>

                <label htmlFor="phone"><FaPhone className="labelIcon"/>
                    <input className="input"type="tel"id="phone"placeholder=" "value={info.phone}onChange={(e) => setInfo({ ...info, phone: e.target.value })} />
                    <span>Phone</span>
                </label>
            </div>

            <button className="addButton" type="button" onClick={handleAddContact}> Add Contact </button>
        </form>
    )
}
