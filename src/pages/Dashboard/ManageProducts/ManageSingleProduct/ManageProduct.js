import { Button } from '@mui/material';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ManageProduct.css'

const ManageProduct = ({ product, handleDeleteOrder }) => {
    const { url, name, description, price } = product;
    const para = description.slice(0, 30);
    // console.log(para)

    return (
        <Col className="p-2 manage-product" >
            <Card className="text-center" >
                <Row>
                    <Col lg={4} md={4} sm={4} xs={4}>
                        <div className='card-img-container'><img src={product.url} className='card-img' alt="" /></div>
                    </Col>

                    <Col lg={8} md={8} sm={8} xs={8}className='product-info'>
                        <div>
                            <Card.Title className="card-name">{product.name}</Card.Title>
                            <Card.Text className="card-description">{para}...</Card.Text>
                            <h6>Price: &#x24;{product.price}</h6>
                        </div>

                    </Col>
                </Row>
                <Button onClick={() => handleDeleteOrder(product._id)} variant="outlined" color="error">DELETE</Button>

            </Card>
        </Col>
    );
};

export default ManageProduct;