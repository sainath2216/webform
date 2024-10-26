import { Component } from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
import "./index.css";

class WebPageForm extends Component {
    state = {
        nameInput: "",
        emailInput: "",
        messageInput: "",
        showNameError: false,
        showEmailError: false,
        showMessageError: false,
        isFormSubmitted: false,
    };

    onChangeName = (event) => {
        this.setState({
            nameInput: event.target.value });
    };

    onChangeEmailName = (event) => {
        this.setState({
            emailInput: event.target.value });
    };

    onChangeMessage = (event) => {
        this.setState({
            messageInput: event.target.value});
    };

    onSubmitForm = (event) => {
        event.preventDefault();
        const isValidName = this.validateName();
        const isValidEmail = this.validateEmail();
        const isValidMessage = this.validateMessage();

        if (isValidName && isValidEmail && isValidMessage) {
            this.setState({ isFormSubmitted: true });
        } else {
            this.setState({
                showNameError: !isValidName,
                showEmailError: !isValidEmail,
                showMessageError: !isValidMessage,
            });
        }
    };

    validateName = () => {
        const { nameInput } = this.state;
        return nameInput !== "";
    };

    validateEmail = () => {
        const { emailInput } = this.state;
        return emailInput !== "";
    };

    validateMessage = () => {
        const { messageInput } = this.state;
        return messageInput !== "";
    };

    onBlurName = () => {
        const isValidName = this.validateName();
        this.setState({ showNameError: !isValidName });
    };

    onBlurEmail = () => {
        const isValidEmail = this.validateEmail();
        this.setState({ showEmailError: !isValidEmail });
    };

    onBlurMessage = () => {
        const isValidMessage = this.validateMessage();
        this.setState({ showMessageError: !isValidMessage });
    };

    renderName = () => {
        const { nameInput, showNameError } = this.state;
        const className = showNameError ? 'input-field error-field' : 'input-field';
        return (
            <div className="input-container">
                <label className="label-item" htmlFor="name">
                    NAME
                </label>
                <input
                    type="text"
                    id="name"
                    className={className}
                    value={nameInput}
                    placeholder="Name"
                    onBlur={this.onBlurName}
                    onChange={this.onChangeName}
                />
                {showNameError && <p className="error-message">*Required</p>}
            </div>
        );
    };

    renderEmail = () => {
        const { emailInput, showEmailError } = this.state;
        const className = showEmailError ? 'input-field error-field' : 'input-field';

        return (
            <div className="input-container">
                <label className="label-item" htmlFor="email">
                    EMAIL
                </label>
                <input
                    type="email"
                    id="email"
                    className={className}
                    value={emailInput}
                    placeholder="Email"
                    onBlur={this.onBlurEmail}
                    onChange={this.onChangeEmailName}
                />
                {showEmailError && <p className="error-message">*Required</p>}
            </div>
        );
    };

    renderMessage = () => {
        const { messageInput, showMessageError } = this.state;
        const className = showMessageError ? 'input-field error-field' : 'input-field';

        return (
            <div className="input-container">
                <label className="label-item" htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    value={messageInput}
                    className={className}
                    onChange={this.onChangeMessage}
                    onBlur={this.onBlurMessage}
                    rows={6}
                    cols={32}
                />
                {showMessageError && <p className="error-message">*Required</p>}
            </div>
        );
    };

    renderForm = () => {
        return (
            <form onSubmit={this.onSubmitForm}>
                {this.renderName()}
                {this.renderEmail()}
                {this.renderMessage()}
                <button type="submit" className="button">
                    Submit
                </button>
            </form>
        );
    };

    renderSubmissionSuccess = () => {
        return (
            <div className="submitted-form">
                <div className="card-submit">
                    <MdOutlineDoneOutline className="done-icon" />
                    <p className="submit-para">Submitted Successfully</p>
                    <button
                        className="submit-btn"
                        type="button"
                        onClick={this.onClickAnotherResponse}
                    >
                        Submit Another Response
                    </button>
                </div>
            </div>
        );
    };

    onClickAnotherResponse = () => {
        this.setState({
            nameInput: '',
            emailInput: '',
            messageInput: '',
            isFormSubmitted: false,
            showNameError: false,
            showEmailError: false,
            showMessageError: false,
        });
    };

    render() {
        const { isFormSubmitted } = this.state;
        return (
            <div className="app-container">
                <div className="form-">
                    <h1 className="main-heading"><span className="s-heading">Registration</span> Form</h1>
                    <div>
                        {isFormSubmitted ? this.renderSubmissionSuccess() : this.renderForm()}
                    </div>
                </div>
            </div>
        );
    }
}

export default WebPageForm;
