import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCard extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<ul>
					<li>Address: {this.props.address}</li>
					<li>Phone #: {this.props.phone}</li>
					<li>Work #: {this.props.work}</li>
					<li>Email: {this.props.email}</li>
				</ul>
			</div>
		);
	}
}

ContactCard.propTypes = {
	name: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	work: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
};

export default ContactCard;
