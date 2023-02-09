import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style/profile.css'

function Profile() {

    const user = useSelector(state => state.cart.userDetails)

    return <div className='container-fluid '>
        <div className='row'>
            <div className='col-lg-3 '>

            </div>
            <div className='col-lg-6 profile'>
                <h4 className='mt-2 justify-content-letf'>Profile Details :-</h4>

                <div class="container okkk mt-4">
                    <form >
                        <div class="row mt-2">
                            <div class="col-25">
                                <label >Email</label>
                            </div>
                            <div class="col-75">
                                <input value={user[0].email}  />
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-25">
                                <label >User Name</label>
                            </div>
                            <div class="col-75">
                                <input value={user[0].userName}/>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-25">
                                <label >Date of Birth</label>
                            </div>
                            <div class="col-75">
                                <input value={user[0].dob} />
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-25">
                                <label >Gender</label>
                            </div>
                            <div class="col-75">
                                <input value={user[0].gender} />
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-25">
                                <label >Phone no</label>
                            </div>
                            <div class="col-75">
                                <input value={user[0].phone} />
                            </div>
                            <div className='link_btn p-0'>
                            <Link to='/home/profile/edit/data'> <button className='btn  btn_ok0 btn-1'> Edit</button></Link>
                             <Link to='/home/profile/edit/changepassword'><button className='btn  btn_ok0 btn-2'>ChangePassword</button></Link>
                            <Link to='/home/profile/edit/options/delete'><button className='btn  btn_ok0 btn-3'> Delete</button></Link>
                            </div>
                           

                        </div>

                        <br />
                        <br />
                        <br />
                    </form>
                </div>


            </div>


            <div className='col-lg-3  '>


            </div>




        </div>
    </div>

}

export default Profile