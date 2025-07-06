import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import { remove } from "../slice/addtocart";
import { Link } from 'react-router-dom';
import empty from '../images/no-cart.svg';

function Cartdis() {

    const count = useSelector((state)=>state.cart.value);
    const prices = useSelector((state)=>state.cart.price);
    const item = useSelector((state)=>state.cart.items);
    const gt = useSelector((state)=>state.cart.gst);
    const tp = useSelector((state)=>state.cart.tamt);
    const discount = useSelector((state)=>state.cart.dis);
    const famt = useSelector((state=>state.cart.pamt));

    const dispatch = useDispatch();

  return (
    <>
      <Container className="my-5">
        <Row>
            {/* product listing */}
            <Col lg={8} md={8} sm={12} xs={12} >
                    {
                      item && item.length > 0 ? (item.map((val,i)=>{
                        return(
                          <Card className="rounded-0 border">
                           <div className=" d-lg-flex">
                              <img src={val.thumbnail} alt=""  className="img-fluid"/>
                            <Card.Body>
                              <Link to={`/details/${val.id}`} className="brand text-black"><Card.Title >{val.title}</Card.Title></Link>
                              <p>{val.sku}</p>
                              <Card.Text>{val.description}</Card.Text>
                              <h4>₹ {val.price} <span className="text-success fs-6">{val.discountPercentage}% off</span> </h4>
                              <p className="text-danger" style={{cursor:'pointer'}} onClick={()=>{dispatch(remove(val))}}>REMOVE</p>
                            </Card.Body>
                           </div>
                          </Card>
                          
                        )
                      })) : <div className="text-center my-4"><img src={empty} alt="" className="img-fluid" /> <br /> <strong >No products in the cart.</strong></div>
                    }
            </Col>

            {/* billing part */}
            <Col lg={4} md={4} sm={12} xs={12} className="shadow h-25 position-sticky" style={{top:'12%'}}>
                <p class="fw-bold fs-3 mt-3">PRICE <span class="text-primary">DETAILS</span></p>
            <div class="shadow px-3 mb-1 bg-body rounded  ">
              

              <div class="d-flex justify-content-between">
                <p class="fw-bold fs-6"><i class="fa-solid fa-indian-rupee-sign"></i> Amount ({count} items) :</p>
                <p class="fs-6 fw-bold">₹ {prices}</p>
              </div>

              <div class="d-flex justify-content-between">
                <p class="fw-bold fs-6"><i class="fa-solid fa-percent"></i> GST(18%) :</p>
                <p class="fs-6 fw-bold" >₹ {gt}</p>
              </div>
            </div>

            <div class="shadow px-3 mb-1  bg-body rounded">
              <p class="fs-6 fw-bold text-end" >₹ {tp}</p>

              <div class="d-flex justify-content-between">
                <p class="fw-bold fs-6">Discount (10%) :</p>
                <p class="fs-6 fw-bold" >₹ {discount}</p>
              </div>
            </div>

            <div class="shadow p-3 mb-1 pb-0 bg-body rounded d-flex justify-content-between">
              <p class="fw-bold fs-6">Payable Amount :</p>
              <p class="fs-6 fw-bold">₹ {famt}</p>
            </div>
            <p className="text-center text-success">You will save ₹{discount} on this order</p>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cartdis;
