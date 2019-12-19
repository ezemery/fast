import React from 'react';
import Footer from '../../components/footer';
import PersonImg from '../../assets/img/team_1.png';

import { FaGrin, FaMeh, FaFrown } from 'react-icons/fa';

import './style.scss';
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
  );
}

export default Faq;
