import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa';
import 'react-id-swiper/lib/styles/css/swiper.css';
import './style.scss';
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
		<div className="testimonial">
			<div className="desktop-layout">
				<Swiper {...desktopSwiperParams}>
					{comments.map(comment => {
						return (
							<div className="swiper-slide">
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
																	size={14}
																	color={'#FFC900'}
																	className={'ml-1'}
																></FaStar>
															);
														else
															return (
																<FaStar
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
					{comments.map(comment => {
						console.log(comment.author)
						return (
							<div className="swiper-slide">
								<div className="testimonial">
									<div className="testimonial-comment">{comment.description}</div>
									<div className="d-flex mt-3">
										<div className="m-auto">
											<div className="testimonial-rating">
												<div className="m-auto">
													{_.times(5, index => {
														if (index < comment.rating)
															return (
																<FaStar
																	size={14}
																	color={'#FFC900'}
																	className={'ml-1'}
																></FaStar>
															);
														else
															return (
																<FaStar
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
	);
}

export default Testimonial;
