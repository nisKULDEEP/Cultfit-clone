import React from 'react'
import "./ProfilePage.css"
import {BsCart3} from "react-icons/bs";
import {FaHeartbeat} from "react-icons/fa";
import {MdOutlineSubscriptions} from "react-icons/md";
import {MdRedeem} from "react-icons/md";
import {FiLogOut} from "react-icons/fi";
import {MdOutlineSupportAgent} from "react-icons/md";
import {FiSettings} from "react-icons/fi";



export const ProfilePage = () => {
   const[formData , setFormData]= React.useState({
    first_name:"",
    last_name:"",
    gender:"",
    email:"",
    work_email:"",
    phone:"",
    date_of_birth:"",
    profile_pic:""
   });
//   console.log(formData)

   function handleChange(e){
       setFormData(prevFormData => {
           return {
               ...prevFormData,
               [e.target.name]: e.target.value
           }
       });
   }

   function handleSubmit(e) {
       e.preventDefault()
       console.log(formData)
   }


  return (
      <>
         {/* main div */}
        <div className='profileMaindiv' style={{display:"flex"}}>
            {/* left */}
            <div className='profileLeftbar' style={{width:"25%",height:"678px"}}>
                <div className='profile-row' style={{height:"25%"}}>
                    <div className='profile-row-left' style={{marginTop:"5%",display:"flex"}}>
                        {/* left row image */}
                        <div className='profile-row-left-img' style={{marginLeft:"10%",marginTop:"5%"}}>
                            <button style={{width:"75px",height:"80px",borderRadius:"50%"}}>
                                <img src='' alt='profileimage'/> 
                                {/* <input type="file" />  */}
                            </button>
                        </div>
                        <div style={{marginLeft:"10%",marginTop:"5%"}}>
                        <label>Name</label>
                        <h6 style={{color:"red",fontSize:"12px",fontWeight:"unset"}}>VIEW PROFILE</h6>
                        </div>
                    </div>
                </div>
                <div className='left-bar-col'>
                        <div className='left-bar-col-1' style={{marginLeft:"5%",marginTop:"7.5%",display:"flex"}}>
                            <div style={{width:"350px",cursor:"pointer"}}>Orders</div>
                            <div style={{display:"flex",flexDirection:"row-reverse",paddingRight:"7.5%",cursor:"pointer"}}><BsCart3/></div> 
                        </div>
                        <div className='left-bar-col-2' style={{marginLeft:"5%",marginTop:"7.5%",display:"flex"}}>
                            <div style={{width:"350px",cursor:"pointer"}}>Medical Records</div>
                            <div style={{display:"flex",flexDirection:"row-reverse",paddingRight:"7.5%",cursor:"pointer"}}><FaHeartbeat/></div> 
                        </div>
                        <div className='left-bar-col-3' style={{marginLeft:"5%",marginTop:"7.5%",display:"flex"}}>
                            <div style={{width:"350px",cursor:"pointer"}}>Active Packs and Subscription</div>
                            <div style={{display:"flex",flexDirection:"row-reverse",paddingRight:"7.5%",cursor:"pointer"}}><MdOutlineSubscriptions/></div> 
                        </div>
                        <div className='left-bar-col-4' style={{marginLeft:"5%",marginTop:"7.5%",display:"flex"}}>
                            <div style={{width:"350px",cursor:"pointer"}}>Redeem Vocher</div>
                            <div style={{display:"flex",flexDirection:"row-reverse",paddingRight:"7.5%",cursor:"pointer"}}><MdRedeem/></div> 
                        </div>
                        <div className='left-bar-col-5' style={{marginLeft:"5%",marginTop:"7.5%",display:"flex"}}>
                            <div style={{width:"350px",cursor:"pointer"}}>Account</div>
                            <div style={{display:"flex",flexDirection:"row-reverse",paddingRight:"7.5%",cursor:"pointer"}}><FiSettings/></div> 
                        </div>
                        <div className='left-bar-col-6' style={{marginLeft:"5%",marginTop:"7.5%",display:"flex"}}>
                            <div style={{width:"350px",cursor:"pointer"}}>Support</div>
                            <div style={{display:"flex",flexDirection:"row-reverse",paddingRight:"7.5%",cursor:"pointer"}}><MdOutlineSupportAgent/></div> 
                        </div>
                        <div className='left-bar-col-7' style={{marginLeft:"5%",marginTop:"7.5%",display:"flex"}}>
                            <div style={{width:"350px",cursor:"pointer"}}>Logout</div>
                            <div style={{display:"flex",flexDirection:"row-reverse",paddingRight:"7.5%",cursor:"pointer"}}><FiLogOut/></div> 
                        </div>
                       
                </div>
            </div>
            {/* right */}
            
                    <div className='profileRightbar' style={{width:"70%",height:"678px"}}>
                        {/* imagediv */}
                        <form>
                                <div className='profileimg' style={{width:"150px",height:"150px",marginLeft:"33%",marginTop:"7%"}}>
                                    <button style={{width:"150px",height:"150px",borderRadius:"50%"}}>
                                    <img src='' alt='profileimage'style={{width:"100%",border:"none",outline:"none",outlineColor:"Background"}}  /> 
                                    {/* <input type="file" name="profile_pic" style={{width:"350px",border:"none",outline:"none"}}/>  */}
                                    </button>
                                    </div> 
                        </form >
                        <h3 style={{marginLeft:"5%",marginTop:"5%"}}>PROFILE</h3>
                        <div className='Profile-description' style={{margin:"50px"}}>


                            <form onSubmit={handleSubmit}>

                            <div className='Col-1' style={{width:"50%",height:"300px"}}>
                                    {/* profile description */}
                            {/* name */}
                                    <div className='input-feild-container'>
                                        <label style={{fontSize: "12px",
            fontFamily: "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important"}}>NAME</label>
                                        <div input-container>
                                            <input type="text"
                                            name='first_name' 
                                            placeholder='Enter your name'
                                            onChange={handleChange} 
                                            value={formData.first_name} 
                                            style={{width:"350px",border:"none",outline:"none",borderBottom:"1px solid grey"
                                            }} 
                                            />
                                        </div>
                                    </div>
                            {/* gender */}
                                    <div className='input-feild-container'>
                                        <label style={{Font:"12px",fontSize: "12px",
            fontFamily: "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important"}}>GENDER</label>
                                        <div input-container>
                                        <input type="text" 
                                        name='gender' 
                                        onChange={handleChange}
                                        value={formData.gender}  
                                        style={{width:"350px",border:"none",outline:"none",borderBottom:"1px solid grey"
                                        }}
                                        />
                                        </div>
                                    </div>
                            {/* email */}
                                    <div className='input-feild-container' >
                                        <label style={{fontSize: "12px",
            fontFamily: "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important"}}>EMAIL</label>
                                        <div input-container>
                                            <input type="text"
                                            name='email' 
                                            placeholder='All primary Email' 
                                            onChange={handleChange}
                                            value={formData.email} 
                                            style={{width:"350px",border:"none",outline:"none",borderBottom:"1px solid grey"
                                            }}
                                            />
                                        </div>
                                    </div>

                            </div>  
                            <button style={{backgroundColor:"rgb(237,240,244)",borderRadius:"24px",marginRight:"5%",border:"none"}}>DISCARD</button><button style={{backgroundColor:"#fe3267",borderRadius:"24px",width:"92px",border:"none",color:"white"}} >SUBMIT</button>
                            </form>
                            <form>
                            <div className='Col-2'>
                                {/* phone number */}
                                    <div className='input-feild-container'  >
                                            <label style={{fontSize: "12px",
            fontFamily: "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important"}}>PHONE NUMBER</label>
                                            <div input-container>
                                                <input type="tel" 
                                                name='phone' 
                                                placeholder='Add phone number' 
                                                onChange={handleChange} 
                                                value={formData.phone}
                                                style={{width:"350px",border:"none",outline:"none",
                                                borderBottom:"1px solid grey"
                                                }} 
                                                />
                                            </div>
                                        </div>
                                {/* Date of birth */}
                                        <div className='input-feild-container' >
                                            <label style={{fontSize: "12px",
            fontFamily: "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important"}}>Date Of Birth</label>
                                            <div input-container>
                                            <input type="text" 
                                            name='date_of_birth' 
                                            placeholder='MM/DD/YYYY'
                                            onChange={handleChange} 
                                            value={formData.date_of_birth}
                                            style={{width:"350px",border:"none",outline:"none",borderBottom:"1px solid grey"
                                            }} 
                                            />
                                            </div>
                                        </div>
                                {/*Work email */}
                                        <div className='input-feild-container' >
                                            <label style={{fontSize: "12px",
            fontFamily: "BrandonTextWeb-Regular, HelveticaNeue,Helvetica,Roboto,Arial,sans-serif !important"}}>WORK EMAIL</label>
                                            <div input-container>
                                                <input type="text" 
                                                name='work_email'
                                                placeholder='Add work Email' 
                                                onChange={handleChange} 
                                                value={formData.work_email}
                                                style={{width:"350px",border:"none",outline:"none",borderBottom:"1px solid grey"
                                                }}/>
                                            </div>
                                        </div>

                            </div>
                            </form>
                        </div>
                    </div>
            
        </div>

      </>
    
  )
}
