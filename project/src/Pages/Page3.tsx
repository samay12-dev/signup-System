import "./style/page3.css"
import { Link } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { selectPage1Data, selectPage2Data, resetForm } from '../redux/features/Slice'

const Page3 = () => {
  const page1Data = useSelector(selectPage1Data)
  const page2Data = useSelector(selectPage2Data)
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(resetForm())
  }

  return (
    <>
      <div className="page">
        <div className="review-card">
          {/* Header */}
          <div className="header">
            <div className="icon">⚙️</div>
            <h2>Review Your Information</h2>
            <p className="step">Step 3 of 3 · Summary</p>
          </div>

          {/* Progress */}
          <div className="progress">
            <span className="dot active"></span>
            <span className="dot active"></span>
            <span className="dot active"></span>
            <span className="dot active"></span>
          </div>

          {/* Content */}
          <div className="content">
            {/* Left */}
            <div className="box">
              <h4>Personal Details</h4>

              <div className="item"><span>Name</span><span id='name'>{page1Data.fname || 'Not provided'}</span></div>
              <div className="item"><span>Email</span><span id='email'>{page1Data.email || 'Not provided'}</span></div>
              <div className="item"><span>Phone</span><span id='phone'>{page1Data.phone || 'Not provided'}</span></div>
              <div className="item"><span>Street</span><span>{page2Data.streetAddress || 'Not provided'}</span></div>
              <div className="item"><span>City</span><span>{page2Data.city || 'Not provided'}</span></div>
              <div className="item"><span>State</span><span>{page2Data.state || 'Not provided'}</span></div>
              <div className="item"><span>Postal Code</span><span>{page2Data.postalCode || 'Not provided'}</span></div>
              <div className="item"><span>Country</span><span id='country'>{page2Data.country || 'Not provided'}</span></div>
            </div>

            {/* Right */}
            <div className="box">
              <h4>Current Profile</h4>

              <div className="item"><span>Step 1</span><span>Basic Info</span></div>
              <div className="item"><span>Step 2</span><span>Address</span></div>
              <div className="item"><span>Step 3</span><span>Preferences</span></div>
              <div className="item"><span>Status</span><span>Completed</span></div>
            </div>
          </div>

          {/* Buttons */}
          <div className="actions">
            <button className="primary" onClick={handleReset}>Save Profile</button>
            <Link to='/Page1'> 
              <button className="secondary">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page3
