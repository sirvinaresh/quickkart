import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';
import { IoStarSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../slice/addtocart";
import { TbTruckDelivery } from "react-icons/tb";

function Description() {
  const [pro, setpro] = useState([]);

  const params=useParams()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((response) => response.json())
      .then((product) => {setpro(product)});
  }, [params.id]);

  const dispatch = useDispatch()
  return (
    <>
      <Container className="my-5">
        <Row  className="my-5 " >

              <Col lg={5} md={3} sm={12} xs={12} >
                <img src={pro.thumbnail} alt="" className="img-fluid w-100 object-fit-cover thum" />
                <div className=" d-flex justify-content-evenly">
                    {
                      pro.images && pro.images.map((tit,i)=>{
                        return(
                          <img src={tit} style={{width:'15%'}} className="border" alt="" />
                        )
                      })
                    }
                </div>
                <div className="text-center my-5">
                  <Button variant="outline-success" className="rounded-0 p-3" onClick={()=>{dispatch(add(pro))}}><FaCartArrowDown /> ADD TO CART</Button> 
                  <Button variant="outline-warning" className="rounded-0 p-3 ms-4"><GiElectric /> BUY NOW</Button>
                </div>
              </Col>

              <Col lg={7} md={9} sm={12} xs={12} className="ps-lg-5">
               
                    {
                       pro.tags && pro.tags.map((it,i)=>{
                            return(
                                <button className="me-2 border-0 px-3 my-2">{it}</button>
                            )
                        })
                    }
                
                <h3>{pro.title}</h3>

                <p>{pro.category} - {pro.brand}</p>

                <h6 >{pro.description}</h6>

                <p><button className="border-0 px-2 bg-success text-light rounded-1">{Math.floor(pro.rating)}<IoStarSharp className="mb-1" /></button> Ratings </p>

                <p className="text-success fw-bold">Extra {pro.discountPercentage}% off</p>

                <h3>₹ {pro.price}  <small className={pro.availabilityStatus === "In Stock" ? 'text-success' : 'text-danger'}>{pro.availabilityStatus}</small></h3>

                <p className="">{pro.brand} - {pro.warrantyInformation}</p>

                <p><strong><TbTruckDelivery /> {pro.shippingInformation}</strong></p>

                <p className="text-success">{pro.returnPolicy}</p> <br />

                <h4 >Product Description</h4>

                <Table className="description">
                    <tbody>
                        <tr>
                            <td>Brand</td>
                            <td>{pro.brand}</td>
                        </tr>

                        <tr>
                            <td>Sku</td>
                            <td>{pro.sku}</td>
                        </tr>

                        <tr>
                            <td>Weight</td>
                            <td>{pro.weight}</td>
                        </tr>

                        <tr>
                            <td>Brand</td>
                            <td>{pro.brand}</td>
                        </tr>
                        
                    </tbody>
                </Table>
              </Col> 

              <Col className="ps-4 mt-5">
                    <h3 className="my-4">Ratings & Reviews</h3>
                    {
                     pro.reviews && pro.reviews.map((val,i)=>{
                        return(
                            <p>
                              <button className={`border-0 px-2 text-light rounded-1 ${val.rating < 3 ? 'bg-danger' : 'bg-success'}`}>
                              {val.rating}<IoStarSharp className="mb-1" />
                              </button> 
                              <p>{val.comment}</p>
                              <p className="text-secondary">{val.reviewerName} <MdVerified />, {val.date}</p>
                            </p>
                        )
                      })
                    }
                    

              </Col>
            </Row>

      </Container>
    </>
  );
}

export default Description;
