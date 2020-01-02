import React, { useEffect, createRef, useRef } from 'react';
import styled from 'styled-components'
const OverviewStyle = styled.div`
.developers-overview {
	margin-left: 80px;
	padding-top: 20px;
	@media screen and (max-width: 600px) {
	  margin-left: 30px;
	  margin-right: 30px;
	}
  
	&-title {
	  font-family: 'Graphik';
	  font-size: 36px;
	  line-height: 40px;
	  color: #363636;
	}
  
	&-content {}
  
	.section {
	  display: flex;
	  border-bottom: 1px solid #e0e6ed;
	  padding-bottom: 52px;
	  padding-top: 48px;
  
	  @media screen and (max-width: 600px) {
		display: block;
	  }
  
	  &:last-child {
		border: none;
	  }
  
	  &-title {
		font-family: 'Graphik';
		font-size: 24px;
		line-height: 26px;
		color: #88d20f;
	  }
  
	  &-desc {
		margin-top: 20px;
		font-family: 'Graphik';
		font-size: 16px;
		line-height: 25px;
		color: #3d3d3d;
	  }
  
	  &-content {
		max-width: 410px;
	  }
  
	  &-img {
		width: 440px;
		height: 310px;
		margin-left: 51px;
  
		@media screen and (max-width: 600px) {
		  margin-left: 0px;
		  margin-top: 40px;
		  width: 100%;
		}
  
		img {
		  width: 100%;
		  height: 100%;
		}
	  }
	}
  }`;
import scrollToComponent from 'react-scroll-to-component';

import Back1Img from '../../../assets/img/developers_overview_1.png';
import Back2Img from '../../../assets/img/developers_overview_2.png';
import Back3Img from '../../../assets/img/developers_overview_3.png';
import Back4Img from '../../../assets/img/developers_overview_4.png';

const Section = React.forwardRef(props => {
	const { id, title, desc, img } = props;
	return (
		<div className="section" id={id}>
			<div className="section-content">
				<div className="section-title">{title}</div>
				<div className="section-desc">{desc}</div>
			</div>
			{img ? (
				<div className="section-img">
					<img src={img} alt=''></img>
				</div>
			) : null}
		</div>
	);
});

function Overview(props) {
	const { child } = props;
	const contents = [
		{
			id: 'Authentication',
			title: 'Authentication',
			desc:
				'The Fast API uses API keys to authenticate requests. You can view and manage your API keys in the Fast Dashboard. Test mode secret keys have the prefix sk_test_ and live mode secret keys have the prefix sk_live_. Alternatively, you can use restricted API keys for granular permissions. Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth. Authentication to the API is performed via HTTP Basic Auth. Provide your API key as the basic auth username value. You do not need to provide a password. All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.',
			img: Back1Img,
		},
		{
			id: 'Handling_Errors',
			title: 'Handling Errors',
			desc:
				"Fast uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the 5xx range indicate an error with Stripe's servers (these are rare). Some 4xx errors that could be handled programmatically (e.g., a card is declined) include an error code that briefly explains the error reported.",
		},
		{
			id: 'Expanding_Objects',
			title: 'Expanding Objects',
			desc:
				'Many objects contain the ID of a related object in their response properties. For example, a Charge may have an associated Customer ID. Those objects can be expanded inline with the expand request parameter. Objects that can be expanded are noted in this documentation. This parameter is available on all API requests, and applies to the response of that request only. You can expand recursively by specifying nested fields after a dot (.). For example, requesting invoice.customer on a charge will expand the invoice property into a full Invoice object, and will then expand the customer property on that invoice into a full Customer object. Expansions have a maximum depth of four levels (so for example,prop1.prop2.prop3.prop4 is the deepest allowed). You can expand multiple objects at once by identifying multiple items in the expand array.',
			img: Back2Img,
		},
		{
			id: 'Idempotent_Requests',
			title: 'Idempotent Requests',
			desc:
				"The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. This is useful when an API call is disrupted in transit and you do not receive a response. For example, if a request to create a charge does not respond due to a network connection error, you can retry the request with the same idempotency key to guarantee that no more than one charge is created. To perform an idempotent request, provide an additional Idempotency-Key: <key> header to the request. Stripe's idempotency works by saving the resulting status code and body of the first request made for any given idempotency key, regardless of whether it succeeded or failed. Subsequent requests with the same key return the same result, including 500 errors. An idempotency key is a unique value generated by the client which the server uses to recognize subsequent retries of the same request. How you create unique keys is up to you, but we suggest using V4 UUIDs, or another random string with enough entropy to avoid collisions. Keys expire after 24 hours, so a new request is generated if a key is reused outside of that time frame. The idempotency layer compares incoming parameters to those of the original request and errors unless they're the same to prevent accidental misuse. Results are only saved if an API endpoint started executing. If incoming parameters failed validation, or the request conflicted with another that was executing concurrently, no idempotent result is saved because no API endpoint began execution. It is safe to retry these requests. All POST requests accept idempotency keys. Sending idempotency keys in GET and DELETE requests has no effect and should be avoided, as these requests are idempotent by definition.",
			img: Back3Img,
		},
		{
			id: 'Request_IDs',
			title: 'Request IDs',
			desc:
				'Each API request has an associated request identifier. You can find this value in the response headers, under Request-Id. You can also find request identifiers in the URLs of individual request logs in your Dashboard. If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.',
			img: Back4Img,
		},
	];
	const elRef = useRef([...Array(5)].map(() => createRef()));

	useEffect(() => {
		if (child !== '') {
			// elRef.current.forEach(item => {
			// 	if (item.title === 'child')
			// });
			// debugger;
			scrollToComponent(elRef.current[2].current, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
		}
	});
	return (
		<OverviewStyle>
		<div className="developers-overview">
			<div className="developers-overview-title">Overview</div>
			<div className="developers-overview-content">
				{contents.map((content, index) => {
					return <Section key={content.title} {...content} ref={elRef.current[index]}></Section>;
				})}
			</div>
		</div>
		</OverviewStyle>
	);
}

export default Overview;