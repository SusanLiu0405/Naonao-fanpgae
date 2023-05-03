import "../Styles/PurchaseModal.css";
import React, { useState } from "react";

function PurchaseModal(props) {
	const { showModal, closeModal, pushForm, buttonText, push, countdown } =
		props;

	const [formData, setFormData] = useState({
		fullName: "",
		shippingAddress: "",
		billingAddress: "",
		phone: "",
		useShippingForBilling: true,
	});

	const [errors, setErrors] = useState({});

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleUseShippingForBillingChange = (event) => {
		setFormData({
			...formData,
			useShippingForBilling: event.target.checked,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const errors = validateFormData(formData);
		setErrors(errors);
		if (Object.keys(errors).length === 0) {
			pushForm();
		}
	};

	const validateFormData = (formData) => {
		const errors = {};
		if (formData.fullName.trim() === "") {
			errors.fullName = "Full name is required.";
		}
		if (formData.shippingAddress.trim() === "") {
			errors.shippingAddress = "Shipping address is required.";
		}
		if (
			!formData.useShippingForBilling &&
			formData.billingAddress.trim() === ""
		) {
			errors.billingAddress = "Billing address is required.";
		}
		if (formData.phone.trim() === "") {
			errors.phone = "Phone is required.";
		}
		return errors;
	};

	return (
		showModal && (
			<div className="modal" style={{ display: showModal ? "block" : "none" }}>
				
				<div className="modal-content">
					<button aria-label="close button" className="close-btn" onClick={closeModal}>
						&times;
					</button>

					<form onSubmit={handleSubmit} className="form">
						<div className="form-grids">
							<div className="form-grid">
								<label htmlFor="fullName" className="form-label">
									Full Name *
								</label>
								<input
									className="form-input"
									type="text"
									id="fullName"
									name="fullName"
									value={formData.fullName}
									onChange={handleInputChange}
								/>
								{errors.fullName && (
									<span className="error">{errors.fullName}</span>
								)}
							</div>

							<div className="form-grid">
								<label htmlFor="shippingAddress" className="form-label">
									Shipping Address *
								</label>
								<input
									className="form-input"
									type="text"
									id="shippingAddress"
									name="shippingAddress"
									value={formData.shippingAddress}
									onChange={handleInputChange}
								/>
								{errors.shippingAddress && (
									<span className="error">{errors.shippingAddress}</span>
								)}
							</div>

							<div className="form-grid">
								<label htmlFor="billingAddress" className="form-label">
									Billing Address *
								</label>
								<input
									className="form-input"
									type="text"
									id="billingAddress"
									name="billingAddress"
									value={
										formData.useShippingForBilling
											? formData.shippingAddress
											: formData.billingAddress
									}
									onChange={handleInputChange}
									disabled={formData.useShippingForBilling}
								/>
								{errors.billingAddress && (
									<span className="error">{errors.billingAddress}</span>
								)}
							</div>

							<div className="form-grid">
								<label htmlFor="phone" className="form-label">
									Phone *
								</label>
								<input
									className="form-input"
									type="text"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
								/>
								{errors.phone && <span className="error">{errors.phone}</span>}
							</div>

							<div className="checkbox-grid">
								<label
									htmlFor="useShippingForBilling"
									className="checkbox-label"
								>
									Use shipping address for billing address
								</label>
								<input
									type="checkbox"
									id="useShippingForBilling"
									name="useShippingForBilling"
									checked={formData.useShippingForBilling}
									onChange={handleUseShippingForBillingChange}
								/>
							</div>

							<div className="form-grid submit">
								<button aria-label="submit button" className="submit-btn" disabled={push}>
									{buttonText}
								</button>
							</div>
						</div>
					</form>

					{push && (
						<div>
							<p>Submitting...</p>
							<p>Window will close in {countdown} seconds.</p>
						</div>
					)}
				</div>
			</div>
		)
	);
}

export default PurchaseModal;
