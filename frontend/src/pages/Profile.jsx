import React from 'react';

function Profile() {

  return (
    <div className="profile-section">
      <div>
        <span>My Account</span>
        <span>Continue Shopping</span>
      </div>
      <div>
        <div>Account Info</div>
        <div>
          <div>First name: <span>John</span></div>
          <div>Last name: <span>Doe</span></div>
          <div>Email: <span>johndoeness@example.com</span></div>
          <div>Contact Number: <span>+12-23456789</span></div>
        </div>        
      </div>
      <div className="Orders">
        <div>
          <span>Order Id</span>
          <span>Date</span>
          <span>Shipped to</span>
          <span>Item(s)</span>
          <span>Order Total</span>
          <span>Status</span>
        </div>
        <div>
          <span>125sas212sa4s412s12</span>
          <span>12/22/2023</span>
          <span>12/22/2023</span>
          <span>Lorem ipsilum, ipsilum, ipsilum...</span>
          <span>$109.65</span>
          <span>Processing</span>
        </div>
        <div>End of result(s)</div>
      </div>
      <div>
        <div>ADDRESS BOOK</div>
        <div>
          <div>
            <span>John Doe</span>
            <button>Edit</button>
          </div>
          <div>1224, Brgy. Sesame St., Nyew York City, Philippines, 0000</div>
          <div>Mobile No: +63999-123-4567</div>
        </div>

        <div>
          <div>
            <span>John Doe</span>
            <button>Edit</button>
          </div>
          <div>1224, Brgy. Sesame St., Nyew York City, Philippines, 0000</div>
          <div>Mobile No: +63999-123-4567</div>
        </div>
        <div>
          Add Address
        </div>

      </div>

    </div>
  );
}

export default Profile;
