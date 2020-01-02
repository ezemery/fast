import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa';
import 'react-id-swiper/lib/styles/css/swiper.css';
import styled from 'styled-components'
const TestimonialStyle = styled.div`
.testimonial {
	width: 100%;

	.swiper-pagination-bullet-active {
		background: #7cb342;
	}

	.swiper-container {
		width: 100%;
	}

	.swiper-slide {
		width: 50%;
		font-family: 'Graphik';
		font-size: 24px;
		line-height: 26px;
		text-align: center;
		user-select: none;
		display: flex;
		color: #363636;

		&-prev,
		&-next {
			opacity: 0.5;
		}

		&-active {
			margin: auto;
		}
	}

	.testimonial {
		margin: auto;

		&-rating {
			display: flex;
		}

		&-comment {
			
			font-family: 'Graphik';
			font-size: 15px;
			// line-height: 6px;
			font-weight: 500;
			text-align: center;
			margin-left: auto;
			margin-right: auto;

			@media screen and (max-width: 600px) {
				font-size: 12px;
				line-height: 15px;
				width: 200px;
			}
		}

		&-user {
			margin-left: 16px;
			font-family: 'Graphik';
			font-size: 16px;
			line-height: 26px;
			text-align: center;

			@media screen and (max-width: 600px) {
				font-size: 14px;
				line-height: 25px;
			}
		}
	}

	.mobile-layout {
		justify-content: center;
		display: flex;
		display: none;
	}

	.desktop-layout {
		justify-content: center;
		display: flex;
		height: 100%;
	}

	@media screen and (max-width: 600px) {
		.mobile-layout {
			width: 100%;
			height: 100%;
			justify-content: center;
			display: flex;
		}

		.swiper-slide {
			width: 100%;
		}

		.swiper-wrapper {
			left: 0;
		}

		.desktop-layout {
			display: none;
		}
	}
}

`;
function Testimonial(props) {
	let { comments } = props;
	const desktopSwiperParams = {
		slidesPerView: 'auto',
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		centeredSlides: true,

		spaceBetween: 0,
		freeMode: true,
		initialSlide: 1,
		loopedSlides: 3,
		visibilityFullFit: true,
	};
	const mobileSwiperParams = {
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		slidesPerView: 'auto',
		spaceBetween: 0,
		// freeMode: true,
		initialSlide: 1,
		loopedSlides: 3,
		visibilityFullFit: true,
	};
	return (
		<TestimonialStyle>
		<div className="testimonial">
			<div className="desktop-layout">
				<Swiper {...desktopSwiperParams}>
					{comments.map((comment, indx)=> {
						return (
							<div className="swiper-slide" key={indx}>
								<div className="testimonial">
									<div className="testimonial-comment">{comment.description}</div>
									<div className="d-flex mt-3">
										<div className="m-auto d-flex">
											<div className="testimonial-rating">
												<div className="m-auto">
													{_.times(5, index => {
														if (index < comment.rating)
															return (
																<FaStar
																	key={index}
																	size={14}
																	color={'#FFC900'}
																	className={'ml-1'}
																></FaStar>
															);
														else
															return (
																<FaStar
																	key={index}
																	size={14}
																	color={'gray'}
																	className={'ml-1'}
																></FaStar>
															);
													})}
												</div>
											</div>
											<div className="testimonial-user">{comment.author}</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</Swiper>
			</div>
			<div className="mobile-layout">
				<Swiper {...mobileSwiperParams}>
					{comments.map((comment, indx) => {
						return (
							<div className="swiper-slide" key={indx}>
								<div className="testimonial">
									<div className="testimonial-comment">{comment.description}</div>
									<div className="d-flex">
										<div className="m-auto">
											<div className="testimonial-rating">
												<div className="m-auto">
													{_.times(5, index => {
														if (index < comment.rating)
															return (
																<FaStar
																	key={index}
																	size={14}
																	color={'#FFC900'}
																	className={'ml-1'}
																></FaStar>
															);
														else
															return (
																<FaStar
																	key={index}
																	size={14}
																	color={'gray'}
																	className={'ml-1'}
																></FaStar>
															);
													})}
												</div>
											</div>
											<div className="testimonial-user">{comment.author}</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</Swiper>
			</div>
		</div>
	</TestimonialStyle>
	);
}

export default Testimonial;
