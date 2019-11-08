import React from 'react'
import './style.scss';
import backImg from '../../../assets/img/assets_email.png'
export default function Email() {
  return (
    <div className="email">
      <div className="email-heading">Standard Company Newsletter</div>
      <div className="email-background">
        <img src={backImg} alt="back" />
      </div>
    </div>
  );
}
