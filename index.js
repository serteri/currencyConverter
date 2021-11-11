var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrencyInputValue = function (_React$Component) {
    _inherits(CurrencyInputValue, _React$Component);

    function CurrencyInputValue() {
        _classCallCheck(this, CurrencyInputValue);

        return _possibleConstructorReturn(this, (CurrencyInputValue.__proto__ || Object.getPrototypeOf(CurrencyInputValue)).apply(this, arguments));
    }

    _createClass(CurrencyInputValue, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                value = _props.value,
                handleChange = _props.handleChange;


            return React.createElement('input', { value: value, onChange: handleChange, type: 'number' });
        }
    }]);

    return CurrencyInputValue;
}(React.Component);

var CurrencyConverter = function (_React$Component2) {
    _inherits(CurrencyConverter, _React$Component2);

    function CurrencyConverter(props) {
        _classCallCheck(this, CurrencyConverter);

        var _this2 = _possibleConstructorReturn(this, (CurrencyConverter.__proto__ || Object.getPrototypeOf(CurrencyConverter)).call(this, props));

        _this2.state = {
            rate: 0.89,
            usd: 1,
            euro: 1 * 0.89

        };
        _this2.handleUsdChange = _this2.handleUsdChange.bind(_this2);
        _this2.handleEuroChange = _this2.handleEuroChange.bind(_this2);
        return _this2;
    }

    _createClass(CurrencyConverter, [{
        key: 'toUsd',
        value: function toUsd(amount, rate) {
            return amount * (1 / rate);
        }
    }, {
        key: 'toEuro',
        value: function toEuro(amount, rate) {
            return amount * rate;
        }
    }, {
        key: 'convert',
        value: function convert(equation, rate, amount) {
            var input = parseFloat(amount);

            if (Number.isNaN(input)) {
                this.setState({
                    usd: '',
                    euro: ''
                });
                return; // early return
            };
            return equation(input, rate).toFixed(3);
        }
    }, {
        key: 'handleUsdChange',
        value: function handleUsdChange(e) {

            var euro = this.convert(this.toEuro, this.state.rate, e.target.value);
            this.setState({
                usd: e.target.value,
                euro: euro
            });
        }
    }, {
        key: 'handleEuroChange',
        value: function handleEuroChange(e) {

            var usd = this.convert(this.toUsd, this.state.rate, e.target.value);
            this.setState({
                usd: usd,
                euro: e.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                rate = _state.rate,
                usd = _state.usd,
                euro = _state.euro;

            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'h2',
                    { className: 'currency' },
                    'Currency Converter'
                ),
                React.createElement(
                    'span',
                    { className: 'usd' },
                    'USD '
                ),
                React.createElement(CurrencyInputValue, { value: usd, handleChange: this.handleUsdChange }),
                React.createElement(
                    'span',
                    null,
                    '='
                ),
                React.createElement(
                    'span',
                    { className: 'euro' },
                    ' Euro '
                ),
                React.createElement(CurrencyInputValue, { value: euro, handleChange: this.handleEuroChange })
            );
        }
    }]);

    return CurrencyConverter;
}(React.Component);

ReactDOM.render(React.createElement(CurrencyConverter, null), document.getElementById('root'));