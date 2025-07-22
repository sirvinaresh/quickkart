import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../slice/addtocart';
import { HiBars3BottomLeft } from "react-icons/hi2";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Shopping() {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data,setdata] = useState([]);
    const [search,setsearch] = useState('');
    const [pro,setpro] = useState([]);
    const [active,setactive] = useState();

    const saved = useSelector((state)=>state.cart.items)

    useEffect(()=>{

        // set categories
        fetch('https://dummyjson.com/products/categories')
        .then((res)=>res.json())
        .then((data)=>setdata(data))


        // set products
        fetch('https://dummyjson.com/products')
        .then((response)=>response.json())
        .then((product)=>{
            setpro(product.products);            
        })

    },[])


        const itemsearch = () =>{
            fetch(`https://dummyjson.com/products/search?q=${search}`)
            .then((res)=>res.json())
            .then((src)=>setpro(src.products))
        }

        const prolist = (val) =>{
            setactive(val)
            fetch(`https://dummyjson.com/products/category/${val}`)
            .then((res)=>res.json())
            .then((data)=>setpro(data.products))

           
        }

        const sorting = (res) =>{

            if(res==="high"){
                fetch(`https://dummyjson.com/products?sortBy=price&order=desc`)
                .then((res)=>res.json())
                .then((data)=>setpro(data.products))
            }else{
                fetch(`https://dummyjson.com/products?sortBy=${res}&order=asc`)
                .then((res)=>res.json())
                .then((data)=>setpro(data.products))
            }
        }

        const dispatch = useDispatch();

  return (
    <>
    <Container fluid>
        <Row>  
            {/* categories for mobile */}
            <div className='mt-3 d-lg-none d-md-none'>
                <h4><HiBars3BottomLeft className='mb-2' onClick={handleShow}/> Categories</h4>

                <Offcanvas show={show} onHide={handleClose} className='w-75'>
                    <Offcanvas.Body>
                        <ul style={{listStyle:'none',}} className='p-0' >
                            {
                                data.map((val,i)=>{
                                    return(
                                        <li key={i} className='categories my-4 ' >
                                            <a href='#' onClick={()=>{prolist(val.slug); handleClose()}}  className={active === val.slug ? 'text-primary fw-bold' : ''}>{val.name}</a>
                                        </li>
                                    )
                                })
                            }
                         </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

            {/* categories for leptop or tab */}
            <Col lg={3} md={4} sm={12} xs={12} className='overflow-auto sidebar' style={{height:'770px',top:'12%'}}>
               <ul style={{listStyle:'none'}} >
                {
                    data.map((val,i)=>{
                        return(
                            <li key={i} className='categories my-4' >
                                <a href='#' onClick={()=>{prolist(val.slug)}}  className={active === val.slug ? 'text-primary fw-bold' : ''}>{val.name}</a>
                            </li>
                        )
                    })
                }
               </ul>
            </Col>

            <Col  lg={9} md={8} sm={12} xs={12} >
            {/* Search */}
            <div className='d-flex'>                                    
                <input type="text" className="form-control rounded-1 py-3 border-2 border-dark my-4"  placeholder="Search items..."
                 onChange={(e)=>{setsearch(e.target.value)}}></input>
            
                <button className='rounded-1 px-3 my-4 ms-2 fs-4 search-btn' onClick={itemsearch}><FaSearch /></button>
            </div>

            <div className='text-end'>
                <select name="" id="" className='rounded-1 py-2 px-3 border-2 border-dark' onChange={(e)=>{sorting(e.target.value)}}>
                    <option value="">Default sorting</option>
                    <option value="title">Sort by title</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="high">Sort by price: high to low</option>
                </select>
            </div>
            
                <Row>
                    {
                        pro.length > 1 ?  pro.map((items,i)=>{
                            const issaved = saved.some((item)=>item.id === items.id)
                            return(
                                <Col key={i} lg={3} md={6} sm={6} xs={6} className="d-flex">
                                    <Card className="my-4 border-0 shadow card-dis w-100">
                                        <Link to={`details/${items.id}`} className="brand">
                                        <Card.Img src={items.thumbnail} />
                                        </Link>

                                        <Card.Body className="card-body">
                                        <div>
                                            <Card.Title className="mt-3 fs-6 brand">{items.brand}</Card.Title>
                                            <Card.Title className="mt-3">{items.title}</Card.Title>
                                            <Card.Text className='mb-3'>₹ {items.price}</Card.Text>
                                        </div>

                                        <div className='mt-auto'>
                                            <input type="checkbox" className="btn-check" id={items.id} checked={issaved} onChange={(e) => e.target.checked ? dispatch(add(items)) : dispatch(remove(items))}/>
                                            <label className="mb-3  px-2 btn btn-outline-success rounded-0" htmlFor={items.id}>ADD</label>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }): <div className=' text-center'><img src={require('../images/productnot.jpg')}  className='img-fluid w-50'/> <h3>Product not found!!</h3></div>
                    }
                </Row>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Shopping