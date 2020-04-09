var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

StoreInformation = {
    name: 'Glasses Store',
    details: 'This is a Glasses Store',
    phone: '23124-1234',
    email: 'glassesStore@glassesStore.com',
    location: 'Street X, In Y'
};

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            title: StoreInformation.name,
            details: StoreInformation.details,
            phone: StoreInformation.phone,
            email: StoreInformation.email,
            location: StoreInformation.location
        };
        return _this;
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'card white' },
                React.createElement(
                    'div',
                    { className: 'card-content blue-text' },
                    React.createElement(
                        'span',
                        { id: 'cardTitle', className: 'card-title center-align' },
                        React.createElement(
                            'h1',
                            null,
                            this.state.title
                        )
                    ),
                    React.createElement(
                        'p',
                        { className: 'center-align' },
                        this.state.details
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col s6 card-action' },
                    React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'h4',
                            { className: 'blue-text' },
                            'Login'
                        )
                    ),
                    React.createElement('input', { placeholder: 'Enter your username', id: 'usernameLogin', type: 'text', className: 'validate' }),
                    React.createElement('input', { placeholder: 'Enter your password', id: 'passwordLogin', type: 'password', className: 'validate' }),
                    React.createElement(
                        'button',
                        { className: 'btn blue', type: 'submitLogin', name: 'action' },
                        'Submit',
                        React.createElement('i', { className: 'material-icons right' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col s6 card-action' },
                    React.createElement(
                        'span',
                        null,
                        React.createElement(
                            'h4',
                            { className: 'blue-text ' },
                            'Register'
                        )
                    ),
                    React.createElement('input', { placeholder: 'Enter your username', id: 'usernameRegister', type: 'text', className: 'validate' }),
                    React.createElement('input', { placeholder: 'Enter your password', id: 'passwordRegister', type: 'password', className: 'validate' }),
                    React.createElement(
                        'button',
                        { className: 'btn blue', type: 'submitRegister', name: 'action' },
                        'Submit',
                        React.createElement('i', { className: 'material-icons right' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col s12 white' },
                    React.createElement(
                        'span',
                        { className: 'blue-text' },
                        'Any doubt, contact us'
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'span',
                        { className: 'blue-text' },
                        'Phone: ',
                        this.state.phone
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'span',
                        { className: 'blue-text' },
                        'E-mail: ',
                        this.state.email
                    ),
                    React.createElement('br', null),
                    React.createElement(
                        'span',
                        { className: 'blue-text' },
                        'Location: ',
                        this.state.location
                    )
                )
            );
        }
    }]);

    return Login;
}(React.Component);

ReactDOM.render(React.createElement(Login, null), document.getElementById('root2'));