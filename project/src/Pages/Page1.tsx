import React, { useState, useEffect } from "react";
import "./style/page1.css"
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updatePage1, selectPage1Data } from "../redux/features/Slice";

const Page1 = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectPage1Data);
  const [localData, setLocalData] = useState(formData);

  useEffect(() => {
    setLocalData(formData);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const updatedData = { ...localData, [id]: value };
    setLocalData(updatedData);
    dispatch(updatePage1(updatedData));
  };

  return (
    <main>
      <div className="card">
        <div className="header">
          <div id="h">
            <span id="heading1">Create Your Profile</span>
          </div>
          <span id="b1">Tell Us About Yourself</span>

          <div className="circle">
            <span id="circle1">1</span>
            <span id="circle2">2</span>
            <span id="circle3">3</span>
          </div>

          <div className="steps">
            Step: <span className="count">1</span>
          </div>
        </div>

        <div className="main">
          <form id="form">
            <div className="n1">
              <label htmlFor="fname">Name</label>
              <input 
                type="text" 
                id="fname" 
                value={localData.fname}
                onChange={handleInputChange}
              />
            </div>

            <div className="n2">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                value={localData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="n3">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={localData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="n4">
              <label htmlFor="phone">Phone No</label>
              <input 
                type="number" 
                id="phone" 
                value={localData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="btn1">
              <Link to='/Page2' className='link'>    
                <button id="btn1" type="button">
                  Next   
                </button>
              </Link>   
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page1;