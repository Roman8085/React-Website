import React from 'react';
import Image1 from '../images/logo.jpg';
// import { transition2d, backgroundTransition } from "react-hover-css";
import Image3 from '../images/ground.jpg';
import Image4 from '../images/healthy food.jpg';
import Image5 from '../images/library.jpg';
import Image6 from '../images/wash.jpg';
import Image7 from '../images/lond.jpg';
import Image8 from '../images/new.jpg';
import Image9 from '../images/testimonial1.jpg';
import Image10 from '../images/testimonial2.jpg';
import '../App.css';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
    
    <section class="header" style={{
      minHeight: "100vh",
      width: "100%",
      backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),url(${Image1})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      position: "relative",
  }}>
   
    <div className='text-box' style={{
      textAlign:"center",
      width: "90%",
      color: "White",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textlign: "center",
  }}>
    <h1 style={{
      fontSize: "62px",
      fontFamily: "Serif",
  }}>World's Biggest University</h1>
    <p style={{
      margin: "10px 0 40px",
      fontSize: "14px",
      fontFamily: "Serif",
      color: "white",
  }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus corrupti alias reprehenderit facilis
        error quo laudantium modi praesentium ipsum quos, dolorem ipsam molestias enim, totam voluptates velit
        quisquam blanditiis. Blanditiis nihil tenetur earum excepturi modi.</p>
    <button className="myBtn" ><Link to="https://www.google.com/" style={{
      display: "inline-block",
      textDecoration: "none",
      color: "white",
      fontFamily: "Serif",
     
    }}>Visit us to know more</Link></button>
</div>
</section>

<section class="course" style={{ width: "80%",
  margin: "auto",
  textAlign: "center",
  paddingTop: "100px",}}>
<h1 style={{ fontSize: "36px",
fontFamily: "Serif",
  fontWeight: "700",}}>Courses We Offer</h1>
<p style={{  color: "#777",
fontSize: "14px",
fontWeight: "300",
  lineHeight: "22px",
  padding: "10px",}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime laboriosam repudiandae, facere quisquam
    architecto vel autem amet rem alias perferendis voluptates vitae laudantium quod a ex. Inventore dolore
    minus pariatur? Impedit, nisi explicabo modi optio blanditiis, quo libero, nemo perspiciatis facilis
    laudantium fugiat. Facere cumque fugit eveniet quod eligendi deleniti, commodi id!</p>

<div class="row" style={{   marginTop: "5%",
  display: "flex",
  justifyContent: "space-between",}}>
    <div class="course-col" style={{  flexBasis: "31%",
      background: "#fff3f3",
      borderRadius: "10px",
      marginBottom: "5%",
      padding: "20px 12px",
      boxSizing: "border-box",
      transition: "0.5s",}}>
        <h3 style={{  textAlign: "center",
        fontWeight: "600",
        fontFamily: "Times and Roman",
        fontSize: "20px",
        margin: "10px 0",
    }}>Intermediate</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quam corrupti perferendis
            minima, deleniti fugiat ipsum doloremque vitae ad delectus atque suscipit ipsam dicta, aliquid
            nostrum possimus. Doloremque dolorem aut optio ipsam cum dignissimos dolore? Sequi dolorem incidunt
            illum dolore numquam error!</p>
    </div>
    <div class="course-col" style={{  flexBasis: "31%",
    background: "#fff3f3",
    borderRadius: "10px",
    marginBottom: "5%",
    padding: "20px 12px",
    boxSizing: "border-box",
    transition: "0.5s",}}>
        <h3 style={{  textAlign: "center",
        fontWeight: "600",
        fontFamily: "Times and Roman",
        fontSize: "20px",
        margin: "10px 0",
        }}>Degree</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quam corrupti perferendis
            minima, deleniti fugiat ipsum doloremque vitae ad delectus atque suscipit ipsam dicta, aliquid
            nostrum possimus. Doloremque dolorem aut optio ipsam cum dignissimos dolore? Sequi dolorem incidunt
            illum dolore numquam error!</p>
    </div>
    <div class="course-col" style={{  flexBasis: "31%",
    background: "#fff3f3",
    borderRadius: "10px",
    marginBottom: "5%",
    padding: "20px 12px",
    boxSizing: "border-box",
    transition: "0.5s",}}>
        <h3 style={{  textAlign: "center",
          fontWeight: "600",
          fontFamily: "Times and Roman",
          fontSize: "20px",
          margin: "10px 0",
      }}>Post Graduation</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quam corrupti perferendis
            minima, deleniti fugiat ipsum doloremque vitae ad delectus atque suscipit ipsam dicta, aliquid
            nostrum possimus. Doloremque dolorem aut optio ipsam cum dignissimos dolore? Sequi dolorem incidunt
            illum dolore numquam error!</p>
    </div>
</div>
</section>


<section class="campus" style={{   width: "80%",
  margin: "auto",
  fontFamily:"Times and Roman",
  textAlign: "center",
  paddingTop: "50px",}}>
<h1>Our Global Campus</h1>
<p style={{
  fontSize:"15px",
  fontWeight: "300",
  fontFamily: "Serif",
  }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, ratione quo ex iste aliquid amet quia
    nemo nobis vitae, hic blanditiis fuga sit optio sed molestiae eum adipisci nam dolorum.</p>

<div class="row">
    <div class="campus-col" style={{ flexBasis: "32%",
      borderRadius: "10px",
      marginBottom: "30px",
      overflow: "hidden",
      position: "relative",}}>
        <img src={Image7} alt="" style={{  width: "100%",
        display: "block", marginTop:"30px", borderRadius:"10px"}}/>
        <div class="layer">
            <h4>London</h4>
        </div>
    </div>

    <div class="campus-col" style={{ flexBasis: "32%",
    borderRadius: "10px",
    marginBottom: "30px",
    overflow: "hidden",
    position: "relative",}}>
        <img src={Image8} alt="" style={{  width: "100%",
        display: "block", marginTop:"30px", borderRadius:"10px"}}/>
        <div class="layer">
            <h4>New York</h4>
        </div>
    </div>
    
    <div class="campus-col" style={{ flexBasis: "32%",
    borderRadius: "10px",
    marginBottom: "30px",
    overflow: "hidden",
    position: "relative",}}>
        <img src={Image6} alt="" style={{  width: "100%",
          display: "block", marginTop:"30px", borderRadius:"10px"}}/>
        <div class="layer" style={{
          background: "transparent",
          height: "100%",
          width: "100%",
          position: "absolute",
          left: "0",
          right: "0",
          transition: "0.5s",
        }}>
            <h4>Washington</h4>
        </div>
    </div>
   </div>

</section>

<section class="facilities" style={{
  width: "80%",fontFamily: "Times and Roman",
  margin: "auto",
  textAlign: "center",
  paddingTop: "100px",
}}>
<h1>Our Facilities</h1>
<p style={{
  fontSize:"15px",
  fontWeight: "300",
  fontFamily: "Serif",
  }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum, natus, et voluptate aspernatur
    rerum vel quas iure fugiat doloribus quo ab ratione sed itaque, quasi aut maiores non deleniti. Dolores
    consequatur eaque, earum distinctio unde architecto fugit ut doloribus minus esse repudiandae, dolore
    similique.</p>

<div class="row">
    <div class="facilities-col" style={{
      flexBasis: "31%",
      borderRadius: "10px",
      marginBottom: "5%",
      textAlign: "left",
    }}>
        <img src={Image5} style={{    width: "100%",
          borderRadius: "10px",marginTop:"20px"}} alt=""/>
        <h3 style={{
          fontSize:"20px",
          fontWeight: "800",
          marginTop: "16px",
          fontFamily: "Times and Roman",
          textAlign: "left",
          marginBottom: "15px",}}>World Class Library</h3>
        <p style={{
          fontWeight: "300",
          marginTop: "16px",
          textAlign: "left",
          marginBottom: "15px",}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut fugiat magnam quidem laborum
            cupiditate aperiam? Praesentium cupiditate numquam natus placeat dolorum, a repellat assumenda vitae
            earum, id, aliquam corporis.</p>
    </div>

    <div class="facilities-col" style={{
      flexBasis: "31%",
      borderRadius: "10px",
      marginBottom: "5%",
      textAlign: "left",
    }}>
        <img src={Image3} style={{    width: "100%",
        borderRadius: "10px",marginTop:"20px"}} alt=""/>
        <h3 style={{
          fontSize:"20px",
          marginTop: "16px",
          fontWeight: "800",
          fontFamily: "Times and Roman",
          textAlign: "left",
          marginBottom: "15px",}}>Largest Play Ground</h3>
        <p style={{
          fontWeight: "300",
          marginTop: "16px",
          textAlign: "left",
          marginBottom: "15px",}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut fugiat magnam quidem laborum
            cupiditate aperiam? Praesentium cupiditate numquam natus placeat dolorum, a repellat assumenda vitae
            earum, id, aliquam corporis.</p>
    </div>

    <div class="facilities-col" style={{
      flexBasis: "31%",
      borderRadius: "10px",
      marginBottom: "5%",
      textAlign: "left",
    }}>
        <img src={Image4} style={{    width: "100%",
        borderRadius: "10px", marginTop:"20px"}} alt=""/>
        <h3 style={{
          fontSize:"20px",
          marginTop: "16px",
          fontWeight: "800",
          fontFamily: "Times and Roman",
          textAlign: "left",
          marginBottom: "15px",}}>Tasty and Healthy Food</h3>
        <p style={{
          fontWeight: "300",
          marginTop: "16px",
          textAlign: "left",
          marginBottom: "15px",}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut fugiat magnam quidem laborum
            cupiditate aperiam? Praesentium cupiditate numquam natus placeat dolorum, a repellat assumenda vitae
            earum, id, aliquam corporis.</p>
    </div>
</div>
</section>

<section class="testimonial" style={{   width: "90%",
  margin: "auto",
  paddingTop: "100px",
  fontFamily:"times and roman",
  textAlign: "center",}}>
<h1>What Our Students Says</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum maxime quis vitae, culpa eos aliquam eum
    consectetur sequi dolores obcaecati dolorem excepturi optio modi porro!</p>

<div class="row">
    <div class="testimonial-col" style={{ flexBasis: "45%",
      borderRadius: "10px",
      marginBottom: "15%",
      marginTop:"30px",
      textAlign: "left",
      fontSize:"15px",
      background: "#fff3f3",
      padding: "25px",
      cursor: "pointer",
      display: "flex",}}>
        <img src={Image9} style={{   height: "45px",
          marginLeft: "5px",
          marginRight: "30px",
          borderRadius: "50%",}} alt=""/>
        <div>
            <p style={{  padding: "0"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae expedita non ipsum saepe
                vitae sapiente animi nemo quisquam nostrum!</p>
        </div>
        <h3 style={{marginTop: "25px", marginLeft:"5px",
        textAlign: "left", fontSize:"15px"}}>Christine Berkley</h3>
    </div>
    <div class="testimonial-col" style={{ flexBasis: "44%",
    borderRadius: "10px",
    marginBottom: "15%",
    marginTop:"30px",
    marginLeft:"30px",
    textAlign: "left",
    background: "#fff3f3",
    padding:"25px",
    cursor: "pointer",
    display: "flex",}}>
        <img src={Image10} style={{   height: "40px",
        marginLeft: "5px",
        marginRight: "30px",
        borderRadius: "50%",}} alt=""/>
        <div>
            <p style={{  padding: "0"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae expedita non ipsum saepe
                vitae sapiente animi nemo quisquam nostrum!</p>
        </div>
        <h3 style={{  marginTop: "25px", marginLeft:"5px",
          textAlign: "left", fontSize:"15px"}}>Mark Mullentene</h3>
    </div>
</div>
</section>

<section class="cta" style={{
  margin: "auto",
  width: "80%",

  backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),url(${Image1})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "10px",
  textAlign: "center",
  padding: "100px 0",
}}>
<h1 style={{    color: "#fff",
  padding: "0",
  marginBottom: "40px",}}>Enroll for our Various Online Courses</h1>
<Link to="https://www.google.com/" style={{  textDecoration: "none",
color: "white",
border: "1px solid #f44336",
padding: "10px 15px",}}>Contact Us</Link>
</section>

<section class="footer" style={{  width: "100%",
  textAlign: "center",
  padding: "30px 0",}}>
<h4 style={{
  marginBottom: "25px",
  marginTop: "45px",
  marginLeft: "20px",
  fontWeight: "600",
fontFamily:"times and roman"}}>About Us</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, a possimus doloremque, ipsam necessitatibus
    beatae quibusdam facilis eum iste consequuntur voluptatibus, itaque repudiandae quas minima.</p>
<div class="icons">
    <i class="fa fa-facebook" ></i>
    <i class="fa fa-instagram" ></i>
    <i class="fa fa-whatsapp" ></i>
    <i class="fa fa-twitter" ></i>
</div>
<p>Made with<i class="fa fa-heart"></i></p>
</section>
    </div>
  )
}

