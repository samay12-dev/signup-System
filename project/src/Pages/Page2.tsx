import React, { useState, useEffect } from 'react'
import "./style/page2.css"
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { updatePage2, selectPage2Data } from '../redux/features/Slice'

const Page2 = () => {
  const dispatch = useDispatch()
  const formData = useSelector(selectPage2Data)
  const [localData, setLocalData] = useState(formData)

  useEffect(() => {
    setLocalData(formData)
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { placeholder, value } = e.target
    let fieldName = ''
    
    if (placeholder === 'Street Address') fieldName = 'streetAddress'
    else if (placeholder === 'City') fieldName = 'city'
    else if (placeholder === 'State / Province') fieldName = 'state'
    else if (placeholder === 'Postal Code') fieldName = 'postalCode'
    else if (placeholder === 'Country') fieldName = 'country'

    const updatedData = { ...localData, [fieldName]: value }
    setLocalData(updatedData)
    dispatch(updatePage2(updatedData))
  }

  return (
    <>
      <div className="page">
        <div className="card">
          <h2>Where Do You Live</h2>
          <p className="step">step:2 of 3 Address Info</p>

          <form className="form">
            <div className="row">
              <input 
                type="text" 
                placeholder="Street Address" 
                value={localData.streetAddress}
                onChange={handleInputChange}
              />
              <input 
                type="text" 
                placeholder="City" 
                value={localData.city}
                onChange={handleInputChange}
              />
            </div>

            <div className="row">
              <input 
                type="text" 
                placeholder="State / Province" 
                value={localData.state}
                onChange={handleInputChange}
              />
              <input 
                type="text" 
                placeholder="Postal Code" 
                value={localData.postalCode}
                onChange={handleInputChange}
              />
            </div>

            <div className="row">
              <input 
                type="text" 
                placeholder="Country" 
                value={localData.country}
                onChange={handleInputChange}
              />
            </div>

            <div className="buttons">
              <Link to='/Page1' className='link'> 
                <button type="button" className="back">
                  Back
                </button>
              </Link> 
              
              <Link to='/Page3' className='link'>  
                <button type="submit" className="next">
                  Next Step  
                </button>
              </Link> 
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Page2 
