import React from 'react'
import Header from '../../components/header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const NotFoundPageStyle = styled.div`
    text-align: center;
    min-height: 90vh;
    padding-top: 6rem;
    display: flex;
    align-items: center;
    word-break:break-word;
    h1{
        font-family: Graphik;
        font-style: normal;
        font-weight: 900;
        font-size: 350px;
        line-height: 330px;
        /* identical to box height */
        color: #F7F7F7;
    }
    h3{
        font-family: Graphik;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        text-align:center;
        line-height: 50px;
        /* or 179% */
        /* Body text color */
        color: #2F2F2F;
    }
    button{
        background: #363636;
        color: #fff;
        padding: 13px 60px;
        border-radius: 5px;
        margin: 3rem auto 0;
    }
    @media( max-width : 585px ) {
        h1{
            font-size: 152px !important;
            line-height: normal !important;
            /* identical to box height */
            color: #F7F7F7;
        }
    }
    @media( max-width : 989px ) {
        h1{
            font-size: 180px !important;
            line-height: normal !important;
            /* identical to box height */
            color: #F7F7F7;
        }
    }
    @media( max-width : 220px ){
        h1{
            font-size: 152px !important;
            line-height: normal !important;
            /* identical to box height */
            color: #F7F7F7;
        }
    }
`
const NotFoundPage = () => {
    return (
        <>
            <Header themeType="2"></Header>
            <NotFoundPageStyle>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12">
                            <h1>404</h1>
                            <h3>Looks like you got lost</h3>
                            <p>The page you are looking for doesnt exist or has been moved</p>
                            <Link to="/"><button className="d-block">Go Back</button></Link>
                        </div>
                    </div>
                </div>
            </NotFoundPageStyle>
            
        </>
    )
}

export default NotFoundPage