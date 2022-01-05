import React from 'react';
import { Button } from '@mui/material';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    return (
        <>
        <div className='dashboard'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <h2 className="navbar-brand mx-auto" href="#">Dashboard</h2>
                </div>
            </nav>


            <div className="offcanvas offcanvas-start bg-light text-white sidebar" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
                    <button type="button" className="btn-close text-reset cross" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                </div>
                <div className="offcanvas-body sidebar-content">
                    <Link to="/home" className='pt-5'>Home</Link> <br />
                    <Link to="dashboardHome">Dashboard Home</Link> <br />
                    {/* {!admin && <>
                        <Link to="myOrders" >My Order</Link> <br />
                        <Link to="review">Review</Link><br />
                        <Link to="pay">Pay</Link><br /></>} */}
                    {/* {admin && <> */}
                    <Link to="manageOrders">Manage Orders</Link> <br />
                    <Link to="manageProducts">Manage Products</Link> <br />
                    <Link to="addProduct">Add Product</Link> <br />
                    <Link to="makeAdmin">Make Admin</Link> <br />
                    {/* </>} */}


                    <Button className='logOut-btn' variant="outlined" color="error" onClick={() => logout(navigate)}>Log out</Button>
                    <div className="dropdown mt-3">

                    </div>
                </div>
            </div>
            <main>
                <Outlet></Outlet>

            </main>
        </div>
        </>
    );
};

export default Dashboard;