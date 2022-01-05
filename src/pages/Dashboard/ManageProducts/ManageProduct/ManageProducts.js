import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageProduct from '../ManageSingleProduct/ManageProduct';
import './ManageProducts.css'

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        fetch('https://pacific-refuge-96429.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    const handleDeleteOrder = _id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://pacific-refuge-96429.herokuapp.com/foods/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = products.filter(order => order._id !== _id)
                        setProducts(remainingOrders);
                        setSuccess(true);
                    }
                })
        }
    }
    return (
        <div className='manage-products'>
            <h2 className='text-center my-4'>Manage Products</h2>
            <Row xs={1} sm={1} md={2} lg={2} className="w-100 m-0 ">
                {
                    products.map(product => <ManageProduct key={product._id} product={product} handleDeleteOrder={handleDeleteOrder}></ManageProduct>)
                }
                {success && <Alert severity="error" className="alert">This Product has been Successfully Deleted</Alert>}
            </Row>
        </div>
    );
};

export default ManageProducts;