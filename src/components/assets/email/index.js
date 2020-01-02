import React from 'react';
import styled from 'styled-components'
const EmailStyle = styled.div`
.assets-page-content-right {
  .email {
    font-family: 'Graphik';
    margin-top: 30px;

    @media screen and (max-width: 600px) {
      margin-top: 60px;
    }

    &-heading {
      font-size: 36px;

      @media screen and (max-width: 600px) {
        font-size: 16px;
      }
    }

    &-background {
      margin-top: 30px;
      background: #F9FAFC;
      border-radius: 10px;
      padding: 50px 65px;

      img {
        width: 585px;
        height: 1150px;
      }

      @media screen and (max-width: 600px) {
        width: 100%;
        margin-top: 15px;
        padding: 15px 20px;

        img {
          width: 100%;
          height: 500px;
        }
      }
    }
  }
}`;
import backImg from '../../../assets/img/assets_email.png'
export default function Email() {
  return (
    <EmailStyle>
    <div className="email">
      <div className="email-heading">Standard Company Newsletter</div>
      <div className="email-background">
        <img src={backImg} alt="back" />
      </div>
    </div>
    </EmailStyle>
  );
}
