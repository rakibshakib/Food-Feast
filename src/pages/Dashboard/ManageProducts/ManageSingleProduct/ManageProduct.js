import { Button } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ManageProduct.css'

const ManageProduct = ({ product, handleDeleteOrder }) => {
    const { url, name, description, price } = product;
    const para = description.slice(0, 100);
    // console.log(para)

    return (
        <Col className="p-2 manage-product" >
            <Card className="text-center" >
                <img src={product.url} className='card-img' alt="" />
                <Card.Body>
                    <Card.Title className="card-name">{product.name}</Card.Title>
                    <Card.Text className="card-description">{para}
                    </Card.Text>
                    <h6>Price: &#x24;{product.price}</h6>
                    <Button onClick={() => handleDeleteOrder(product._id)} variant="outlined" color="error">DELETE</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageProduct;