import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { add, remove } from '../slice/addtocart';

function Shopping() {
    
    const [data,setdata] = useState([]);
    const [search,setsearch] = useState('');
    const [pro,setpro] = useState([]);
    const [active,setactive] = useState();

    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then((res)=>res.json())
        .then((data)=>setdata(data))


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
            // console.log(active);
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

            {/* categories */}
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
                        pro.map((items,i)=>{
                            return(
                                <Col key={i} lg={3} md={6} sm={12} xs={12}>
                                    <Card className='my-4 border-0 shadow ' style={{minHeight:'470px'}}>
                                        <Link to={`details/${items.id}`} className=' brand'><Card.Img  src={items.thumbnail} /></Link>

                                        {/* <Card.Img  src={items.thumbnail} /> */}
                                        <Card.Body>
                                            {/* <Link to={`details/${items.id}`} className=' brand'>{items.brand}</Link> */}
                                            <Card.Title className='mt-3 fs-6 brand'>{items.brand}</Card.Title>
                                            <Card.Title className='mt-3'>{items.title}</Card.Title>
                                            <Card.Text>₹ {items.price}</Card.Text>
                            

                                            {/* <Button variant="outline-success" className='px-4 rounded-0 '>ADD</Button> */}
                                        </Card.Body>
                                            <div>
                                                <input type="checkbox" className="btn-check" id={items.id}  onChange={(e)=>{e.target.checked ? dispatch(add(items)) : dispatch(remove(items))}}></input>
                                                <label className="w-25 mb-3 ms-3 px-2 btn btn-outline-success rounded-0" htmlFor={items.id}>ADD</label>
                                            </div>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Shopping