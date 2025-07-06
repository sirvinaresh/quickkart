import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
function Contact() {
  return (
    <>
        <Container className=' my-5 '>
            <h2 className='text-center mb-5'>Contact</h2>
            <Row>
                <Col lg={7} md={6} sm={12} className='p-4 rounded-3'>
                   <form className="row g-3">
                        <h3>Contact with us ...</h3>
                        <div className=''>
                            <label htmlFor="inputEmail4" className="form-label">Your Name</label>
                            <input type="text" className="form-control border-black" id="inputEmail4" />
                        </div>

                        <div>
                            <label htmlFor="inputEmail4" className="form-label">Your Email</label>
                            <input type="email" className="form-control border-black" id="inputEmail4" />
                        </div>

                         <div>
                            <label htmlFor="inputEmail4" className="form-label">Subject</label>
                            <input type="text" className="form-control border-black" id="inputEmail4" />
                        </div>

                         <div>
                            <label htmlFor="inputEmail4" className="form-label">Your Message (optional)</label>
                            <textarea class="form-control border-black" rows={6} id="floatingTextarea"></textarea>
                        </div>
                        
                        <div className="col-12">
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </div>
                    </form>
                </Col>
                <Col lg={5} md={6} sm={12} className='border border-black rounded-2 p-3'>
                    <div className=''>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.18800900166!2d72.65747318239129!3d21.159120355102836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1751816925058!5m2!1sen!2sin" style={{width:'100%', height:'300px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    
                    <div className='my-3'>
                        <p><font className="text-dark fw-bold">Address <FaLocationDot /> :</font>  <br /> Surat, Gujarat, India</p>
                        <p><font className="text-dark fw-bold">Phone <IoMdCall /> :</font>  <br /> +12025550199</p>
                        <p><font className="text-dark fw-bold">Website <TbWorld /> :</font>  <br /> <a href="https://quickkart-jade.vercel.app/">https://quickkart-jade.vercel.app/</a></p>
                        <p><font className="text-dark fw-bold">Follow US:</font>  <br /><span className='gap-2 d-flex'><FaFacebook /><FaInstagram /><FaTwitter /><FaLinkedin /></span></p>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact