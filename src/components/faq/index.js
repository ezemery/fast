import React from 'react';
import Footer from '../footer';
import PersonImg from '../../assets/img/team_1.png';

import { FaGrin, FaMeh, FaFrown } from 'react-icons/fa';
import styled from 'styled-components'
const FaqStyle = styled.div`
.faq-page {
  @media screen and (max-width: 600px) {}

  .section-1 {
    padding-top: 151px;
    padding-bottom: 86px;
    text-align: center;
    justify-content: center;
    color: white;
    background: #363636;

    @media screen and (max-width: 600px) {
      padding-top: 159px;
      padding-bottom: 116px;
    }

    &-title {
      font-family: 'Graphik';
      font-size: 46px;
      line-height: 57px;
      text-align: center;
      color: white;
      margin-bottom: 39px;

      .green {
        color: #88d20f;
        font-weight: bold;
      }

      @media screen and (max-width: 600px) {
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 29px;
      }
    }

    &-desc {
      margin-top: 17px;
      font-family: 'Graphik';
      text-align: center;
      font-size: 16px;
      line-height: 25px;
      width: 378px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;

      @media screen and (max-width: 600px) {
        width: 286px;
        font-size: 16px;
        line-height: 25px;
        margin-bottom: 18px;
        margin-top: 0px;
      }
    }

    .green_wave {
      background: url('../../assets/img/green_wave.png') no-repeat center center;
      background-size: contain;
      height: 10px;
      background-position: center;
      margin-top: 76px;
      margin-bottom: 48px;

      @media screen and (max-width: 600px) {
        margin-top: 18px;
        margin-bottom: 63px;
      }
    }

    &-button {
      background: #88d20f;
      border-radius: 5px;
      font-family: Graphik;
      font-size: 18px;
      line-height: 150%;
      text-align: center;
      color: #ffffff;
      padding: 15px 21px;
      width: 195px;
      cursor: pointer;

      &:hover {
        background: #9ed24a;
      }
    }

    &-question {
      position: absolute;
      width: 590px;
      height: 71px;
      background: #ffffff;
      border-radius: 4px;
      margin-top: 50px;
      left: calc(50% - 295px);
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
      padding: 23px 53px;
      z-index: 1;

      @media screen and (max-width: 600px) {
        width: 300px;
        left: calc(50% - 150px);
        margin-top: 80px;
      }

      input {
        width: 100%;
        outline: none;
        border: none;

        &:before {
          content: ' ';
          background: url('../../assets/img/search.png') no-repeat center center;
          padding: 20px 25px;
        }
      }
    }

    &-back {
      &-1 {
        position: absolute;
        background: url('../../assets/img/faq_back_1.png') no-repeat center center;
        background-size: 100% 100%;
        width: 70px;
        height: 30px;
        left: 4%;
        margin-top: -250px;

        @media screen and (max-width: 600px) {
          width: 45px;
          height: 25px;
          left: 6%;
          margin-top: -320px;
        }
      }

      &-2 {
        position: absolute;
        background: url('../../assets/img/faq_back_2.png') no-repeat center center;
        background-size: 100% 100%;
        width: 40px;
        height: 70px;
        left: 5%;
        margin-top: -50px;

        @media screen and (max-width: 600px) {
          background: url('../../assets/img/faq_back_2.png') no-repeat center center;
          background-size: 100% 100%;
          width: 13px;
          height: 22px;
          left: 45%;
          margin-top: -325px;
        }
      }

      &-3 {
        position: absolute;
        background: url('../../assets/img/faq_back_3.png') no-repeat center center;
        background-size: 100% 100%;
        width: 25px;
        height: 31px;
        left: 26%;
        margin-top: -50px;

        @media screen and (max-width: 600px) {
          background: url('../../assets/img/faq_back_11.png') no-repeat center center;
          width: 14px;
          height: 22px;
          left: 5%;
          margin-top: -80px;
        }
      }

      &-4 {
        position: absolute;
        background: url('../../assets/img/faq_back_4.png') no-repeat center center;
        background-size: 100% 100%;
        width: 25px;
        height: 29px;
        left: 35%;
        margin-top: -140px;

        @media screen and (max-width: 600px) {
          background: url('../../assets/img/faq_back_12.png') no-repeat center center;
          background-size: 100% 100%;
          width: 45px;
          height: 20px;
          left: 5%;
          margin-top: 90px;
        }
      }

      &-5 {
        position: absolute;
        background: url('../../assets/img/faq_back_5.png') no-repeat center center;
        background-size: 100% 100%;
        width: 23px;
        height: 38px;
        left: 25%;
        margin-top: -250px;

        @media screen and (max-width: 600px) {
          background: url('../../assets/img/faq_back_12.png') no-repeat center center;
          position: absolute;
          background-size: 100% 100%;
          width: 45px;
          height: 20px;
          margin-left: 58%;
          margin-top: 90px;
        }
      }

      &-6 {
        position: absolute;
        background: url('../../assets/img/faq_back_6.png') no-repeat center center;
        background-size: 100% 100%;
        width: 20px;
        height: 23px;
        right: 20%;
        margin-top: -250px;

        @media screen and (max-width: 600px) {
          background: url('../../assets/img/faq_back_1.png') no-repeat center center;
          background-size: 100% 100%;
          width: 45px;
          height: 25px;
          right: 6%;
          margin-top: -320px;
        }
      }

      &-7 {
        position: absolute;
        background: url('../../assets/img/faq_back_7.png') no-repeat center center;
        background-size: 100% 100%;
        width: 22px;
        height: 22px;
        right: 8%;
        margin-top: 0px;

        @media screen and (max-width: 600px) {
          display: none;
        }
      }

      &-8 {
        position: absolute;
        background: url('../../assets/img/faq_back_8.png') no-repeat center center;
        background-size: 100% 100%;
        width: 17px;
        height: 32px;
        right: 19%;
        margin-top: -70px;

        @media screen and (max-width: 600px) {
          display: none;
        }
      }

      &-9 {
        position: absolute;
        background: url('../../assets/img/faq_back_9.png') no-repeat center center;
        background-size: 100% 100%;
        width: 23px;
        height: 38px;
        right: 34%;
        margin-top: -110px;

        @media screen and (max-width: 600px) {
          display: none;
        }
      }

      &-10 {
        position: absolute;
        background: url('../../assets/img/faq_back_10.png') no-repeat center center;
        background-size: 100% 100%;
        width: 60px;
        height: 35px;
        right: 6%;
        margin-top: -250px;

        @media screen and (max-width: 600px) {
          display: none;
        }
      }
    }
  }

  .section-2 {
    margin-top: 108px;
    padding: 63px 30px 26px 34px;
    background: #ffffff;
    box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 975px;
    margin-left: 20px;
    margin-right: 20px;

    @media screen and (max-width: 600px) {
      padding: 20px 20px;
    }

    &-question {
      font-family: 'Graphik Semibold';
      font-size: 18px;
      line-height: 150%;
      text-align: left;
      color: #2f2f2f;
      margin-bottom: 29px;

      .bold {
        font-weight: bolder;
      }

      @media screen and (max-width: 600px) {
        text-align: center;
        margin-bottom: 10px;
      }
    }

    &-answer {
      font-family: 'Graphik';
      font-size: 16px;
      line-height: 25px;
      color: #000;
      margin-top: 28px;
      margin-bottom: 32px;

      @media screen and (max-width: 600px) {
        display: block;
        width: 100%;
      }
    }

    &-row {
      margin-top: 10px;
      display: flex;

      @media screen and (max-width: 600px) {
        display: block;
        width: 100%;
      }

      &-avatar {
        width: 30px;
        height: 30px;
        margin-right: 20px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      &-left {
        margin-right: auto;
        display: flex;
      }

      &-right {
        margin-left: auto;
        display: flex;

        @media screen and (max-width: 600px) {
          margin-top: 10px;
        }
      }

      &-author {
        font-family: 'Graphik';
        font-size: 14px;
        line-height: 25px;
        color: #696969;
      }

      &-date {
        font-family: 'Graphik';
        font-size: 12px;
        line-height: 25px;
        color: #696969;
      }

      &-votes {
        font-family: 'Graphik';
        font-size: 12px;
        line-height: 25px;
        color: #676767;
        margin-right: 16px;
        background: #f9fafc;
        border-radius: 10px;
        padding: 0 12px;
        height: 25px;
        margin-top: 4px;
      }

      &-button {
        font-family: 'Graphik';
        border: 1px solid #88d20f;
        border-radius: 5px;
        color: #88d20f;
        padding: 3px 11px;
        font-size: 14px;
        line-height: 25px;
        cursor: pointer;
        height: 31px;

        &:hover {
          color: white;
          background: #88d20f;
        }
      }
    }
  }

  .section-3 {
    margin-top: 39px;
    width: 975px;
    background: #ffffff;
    box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 63px 34px;

    @media screen and (max-width: 600px) {
      width: 100%;
      margin: 20px 20px;
      padding: 36px 22px 22px 29px;
    }

    &-question {
      font-family: 'Graphik';
      font-size: 18px;
      line-height: 150%;
      color: #2f2f2f;
    }

    &-answer {
      margin-top: 10px;
      font-family: 'Graphik';
      font-size: 16px;
      line-height: 25px;
      color: #000000;

      &.last {
        display: none;
      }
    }

    &-code {
      background: url('../../assets/img/code_snippet.png') no-repeat center center;
      background-size: 100% 100%;
      border-radius: 5px;
      height: 117px;
      width: 100%;

      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    &-row {
      margin-top: 47px;
      display: flex;

      @media screen and (max-width: 600px) {
        display: block;
      }

      &-avatar {
        width: 30px;
        height: 30px;
        margin-right: 20px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      &-left {
        display: flex;

      }

      &-right {
        background: #eff2f7;
        border-radius: 10px;
        margin-left: 77px;
        padding: 6px 22px;
        font-family: 'Graphik';
        font-size: 14px;
        line-height: 25px;
        color: #676767;
        height: 34px;
        margin-top: auto;
        margin-bottom: auto;

        @media screen and (max-width: 600px) {
          display: none;
        }

        .like {
          font-size: 18px;
          color: #f5d11d;
          cursor: pointer;
          margin-left: 5px;

          &:first-child {
            margin-left: 20px;
          }

          &:hover {
            color: #b5a31b;
          }
        }
      }

      &-author {
        font-family: 'Graphik';
        font-size: 14px;
        line-height: 25px;
        color: #696969;
      }

      &-date {
        font-family: 'Graphik';
        font-size: 12px;
        line-height: 25px;
        color: #696969;
      }
    }
  }

  .section-4 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;

    @media screen and (max-width: 600px) {
      display: block;
    }

    .question {
      background: #ffffff;
      border: 1px solid #e5e9f2;
      border-radius: 5px;
      padding: 16px 29px;
      margin: 24px;

      @media screen and (max-width: 600px) {
        padding: 24px 22px;
      }

      &:hover {
        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.05);
      }


      &-heading {
        display: flex;

        @media screen and (max-width: 600px) {
          display: none;
        }
      }

      &-answers {
        background: #f9fafc;
        border-radius: 10px;
        font-family: 'Graphik';
        font-size: 14px;
        line-height: 25px;
        color: #676767;
        padding: 1px 13px;
      }

      &-viewall {
        margin-left: 12px;
        font-family: 'Graphik';
        font-size: 12px;
        line-height: 25px;
        color: #88d20f;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      &-title {
        font-family: 'Graphik';
        font-size: 18px;
        line-height: 150%;
        color: #2f2f2f;
        margin-top: 29px;
        margin-bottom: 46px;

        @media screen and (max-width: 600px) {
          margin-top: 0px;
          margin-bottom: 36px;
        }
      }

      &-row {
        display: flex;

        @media screen and (max-width: 600px) {
          display: block;
        }

        &-avatar {
          width: 30px;
          height: 30px;
          margin-right: 15px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }

        &-left {
          margin-right: auto;
          display: flex;
        }

        &-right {
          margin-top: auto;
          margin-left: auto;
          display: flex;
          height: 28px;

          @media screen and (max-width: 600px) {
            margin-top: 10px;
          }
        }
      }

      &-author {
        font-family: 'Graphik';
        font-size: 14px;
        line-height: 25px;
        color: #696969;
      }

      &-date {
        font-family: 'Graphik';
        font-size: 12px;
        line-height: 25px;
        color: #696969;
      }

      &-votes {
        font-family: 'Graphik';
        font-size: 12px;
        line-height: 25px;
        color: #676767;
        background: #f9fafc;
        padding: 1px 12px;
        border-radius: 10px;
      }

      &-button {
        border: 1px solid #88d20f;
        border-radius: 5px;
        color: #88d20f;
        padding: 1px 11px;
        margin-left: 19px;
        cursor: pointer;

        &:hover {
          background: #88d20f;
          color: white;
        }
      }
    }
  }

  .section-5 {
    margin-top: 137px;
    margin-bottom: 136px;
    padding: 48px 62px 38px 55px;
    background: #ffffff;
    border: 1px solid #696969;
    box-sizing: border-box;
    border-radius: 5px;
    width: 975px;

    @media screen and (max-width: 600px) {
      border-radius: 0;
      border: none;
      border-top: 1px solid #696969;
      width: 100%;
      margin-bottom: 10px;
      margin-top: 58px;
    }

    &-heading {
      font-family: 'Graphik';
      font-size: 28px;
      line-height: 120%;
      color: #363636;

      @media screen and (max-width: 600px) {
        text-align: center;
        margin-bottom: 56px;
      }
    }

    &-title {
      background: #ffffff;
      border: 0.5px solid #696969;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 13px 20px;
      font-size: 14px;
      line-height: 25px;
      margin-top: 42px;

      @media screen and (max-width: 600px) {
        margin-top: 25px;
      }

      input {
        border: none;
        outline: none;
        width: 100%;

        @media screen and (max-width: 600px) {
          text-align: center;
        }
      }
    }

    &-body {
      padding: 13px 20px;
      font-family: 'Graphik';
      font-size: 14px;
      line-height: 25px;
      margin-top: 41px;
      border: 0.5px solid #696969;
      border-radius: 4px;

      @media screen and (max-width: 600px) {
        margin-top: 25px;
      }

      textarea {
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        resize: none;

        @media screen and (max-width: 600px) {
          text-align: center;
        }
      }
    }

    &-button {
      margin-top: 42px;
      background: #88d20f;
      border: 1px solid #88d20f;
      border-radius: 5px;
      color: white;
      font-family: 'Graphik';
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      padding: 14px 42px;
      cursor: pointer;

      &:hover {
        color: #88d20f;
        background: white;
      }

      @media screen and (max-width: 600px) {
        margin-left: auto;
        margin-right: auto;
        margin-top: 25px;
      }
    }
  }
}
`;
import Header from '../../components/header';

function Question(props) {
	const { avatar, answers, question, author, date, votes } = props;
	return (
    <div className="question">
      <div className="question-heading">
        <div className="question-answers">{answers} Answers</div>
        <div className="question-viewall">VIEW ALL</div>
      </div>
      <div className="question-title">{question}</div>
      <div className="question-row">
        <div className="question-row-left">
          <div className="question-row-avatar">
            <img src={avatar} alt="author avatar"></img>
					</div>
					<div>
						<div className="question-author">{author}</div>
						<div className="question-date">{date}</div>
					</div>
        </div>
        <div className="question-row-right">
          <div className="question-votes">{votes} Votes</div>
          <div className="question-button">Upvote</div>
        </div>
      </div>
    </div>
  );
}
function Faq() {
	const question1 = {
		question: 'How can I add Fast to my website quickly and seamlessly?',
		answer:
			'Add fast to your website seamlessly by adding Fast source code to your website. This is dummy text. You can call on us to assist you with the process of adding Fast to your website and we would be glad to help you out. Everytime you add Fast to your website seamlessly, you’re helping to make the world a better place and free of passwords. Read more...',
		author: 'Domm Holland, CEO Fast AF',
		date: '23rd June, 3:34 am',
		votes: '6.4k',
	};

	const questions = [
    {
      answers: 4,
      avatar: PersonImg,
      question: 'How can i add Fast to my website quickly and seamlessly?',
      author: 'Domm Holland, CEO Fast AF',
      date: '23rd June, 3:34 am',
      votes: '6.4k Votes',
    },
    {
      answers: 4,
      avatar: PersonImg,
      question: 'How can i add Fast to my website quickly and seamlessly?',
      author: 'Domm Holland, CEO Fast AF',
      date: '23rd June, 3:34 am',
      votes: '6.4k Votes',
    },
    {
      answers: 4,
      avatar: PersonImg,
      question: 'How can i add Fast to my website quickly and seamlessly?',
      author: 'Domm Holland, CEO Fast AF',
      date: '23rd June, 3:34 am',
      votes: '6.4k Votes',
    },
    {
      answers: 4,
      avatar: PersonImg,
      question: 'How can i add Fast to my website quickly and seamlessly?',
      author: 'Domm Holland, CEO Fast AF',
      date: '23rd June, 3:34 am',
      votes: '6.4k Votes',
    },
  ];
	return (
    <FaqStyle>
    <div className="faq-page">
      <Header themeType="2" buttonName="Go Fast" type="gray"></Header>
      <div className="section-1">
        <div className="section-1-title">Got Questions?</div>
        <div className="section-1-desc">
          Find answers and let’s help you get sorted out and set up with Fast.
        </div>
        <div className="green_wave"></div>
        <div className="d-flex justify-content-center">
          <div className="section-1-button">Ask Questions</div>
        </div>
        <div className="section-1-question">
          <input placeholder="Search questions"></input>
        </div>
        <div className="section-1-back-1"></div>
        <div className="section-1-back-2"></div>
        <div className="section-1-back-3"></div>
        <div className="section-1-back-4"></div>
        <div className="section-1-back-5"></div>
        <div className="section-1-back-6"></div>
        <div className="section-1-back-7"></div>
        <div className="section-1-back-8"></div>
        <div className="section-1-back-9"></div>
        <div className="section-1-back-10"></div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="section-2">
          <div className="section-2-question">{question1.question}</div>
          <div className="section-2-answer">{question1.answer}</div>
          <div className="section-2-row">
            <div className="section-2-row-left">
              <div className="section-2-row-avatar">
                <img src={PersonImg} alt="author avatar"></img>
              </div>
              <div>
                <div className="section-2-row-author">{question1.author}</div>
                <div className="section-2-row-date">{question1.date}</div>
              </div>
            </div>
            <div className="section-2-row-right">
              <div className="section-2-row-votes">{question1.votes} Votes</div>
              <div className="section-2-row-button">UpVote</div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="section-3">
          <div className="section-3-question">
            What happens on this FAQ page when I click on an answer to view
            more?
          </div>
          <div className="section-3-answer">
            When you click on an answer to view more, the answer field expands
            and the full answer comes into view on this same page without
            loading another. In that way the user does not have to view another
            page to get their responses and can keep on learning more on our FAQ
            page. Rather than have stars as well to show how relevant a post is,
            it is my opinion that we have a mini survey at the bottom of each
            response to rate the quality of the response. Good, bad or okay.
          </div>
          <div className="section-3-code"></div>
          <div className="section-3-answer last">
            The answers that appear on top of the page would be determined by
            the number of upvotes. This helps rank the most frequently asked
            questions dynamically. Although when a user puts in a search query
            for a response, his search turns up the most relevant results.
          </div>
          <div className="section-3-row">
            <div className="section-3-row-left">
              <div className="section-3-row-avatar">
                <img src={PersonImg} alt="author avatar"></img>
							</div>
							<div>
								<div className="section-3-row-author">
									Domm Holland, CEO Fast AF
								</div>
								<div className="section-3-row-date">23rd June, 3:34 am</div>
							</div>
            </div>
            <div className="section-3-row-right">
              <span>Was this response helpful?</span>
              <FaGrin className="like"></FaGrin>
              <FaMeh className="like"></FaMeh>
              <FaFrown className="like"></FaFrown>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4">
        {questions.map(question => {
          return <Question key={question.date} {...question}></Question>;
        })}
      </div>
      <div className="d-flex justify-content-center">
        <div className="section-5">
          <div className="section-5-heading">Ask your Question</div>
          <div className="section-5-title">
            <input placeholder="Add Question Title*"></input>
          </div>
          <div className="section-5-body">
            <textarea placeholder="Add Body here*"></textarea>
          </div>
          <div className="section-5-title">
            <input placeholder="add relevant Tags here"></input>
          </div>
          <div className="d-flex justify-content-end">
            <div className="section-5-button">Ask Question</div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
    </FaqStyle>
  );
}

export default Faq;
