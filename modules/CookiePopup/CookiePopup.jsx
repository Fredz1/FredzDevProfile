import React, { useState, useLayoutEffect } from 'react';
import style from './cookiepopupStyle.module.scss';

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAccept = () => {
    // Logic to set cookie acceptance
    localStorage.setItem('cookieAccepted', 'true');
    setShowPopup(false);
  };

  useLayoutEffect(() => {
    //check if user has accepted cookies
    if(localStorage.getItem('cookieAccepted')) return setShowPopup(false);

    return setShowPopup(true);
   }, []);

  return (
    <>
      {showPopup && (
        <div className={ style.cookiePopup }>
          <h3>Cookie Policy</h3>
          <hr />
          <p>This website uses cookies to improve your experience. By using this site, you agree to our use of cookies.</p>
          <button onClick={handleAccept}>Ok, Thanks</button>
        </div>
      )}
    </>
  );
};

export default CookiePopup;
