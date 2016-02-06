// ============================
// kudos http://babeljs.io/repl
// ============================
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


//const SillyRouter = (() => {
//
//    var listeners = [];
//
//    const pushState = (path) => {
//        window.history.pushState (null, null, path);
//        listeners.forEach (fn => fn (path));
//    };
//
//    const onTransition = (listener) => {
//        listeners.push (listener);
//        return () => {
//            listeners = listeners.filter (fn => fn === listener);
//        };
//    };
//
//    return {
//        pushState,
//        onTransition
//    };
//})();
var SillyRouter = (function () {

    var listeners = [];

    var pushState = function pushState(path) {
        window.history.pushState(null, null, path);
        listeners.forEach(function (fn) {
            return fn(path);
        });
    };

    var onTransition = function onTransition(listener) {
        listeners.push(listener);
        return function () {
            listeners = listeners.filter(function (fn) {
                return fn === listener;
            });
        };
    };

    return {
        pushState: pushState,
        onTransition: onTransition
    };
})();


//class Link extends React.Component {
//
//    componentDidMount () {
//
//        const listener = (event) => {
//            event.preventDefault ();
//            SillyRouter.pushState (this.props.to);
//        };
//
//        this.link.addEventListener ('click', listener);
//
//        this.unsubscribe = () => {
//            this.link.removeListener ('click', listener);
//        };
//    }
//
//    componentWillUnmount () {
//        this.unsubscribe ();
//    }
//
//    render () {
//
//        const {to, active, children} = this.props;
//
//        const       style = {};
//        if (active) style.fontWeight = 'bold';
//
//        return (
//            <a ref={node => this.link = node} href={to} style={style}>{children}</a>
//        );
//    }
//}
var Link = (function (_React$Component) {
    _inherits(Link, _React$Component);

    function Link() {
        _classCallCheck(this, Link);

        _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            var listener = function listener(event) {
                event.preventDefault();
                SillyRouter.pushState(_this.props.to);
            };

            this.link.addEventListener('click', listener);

            this.unsubscribe = function () {
                _this.link.removeListener('click', listener);
            };
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unsubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var to = _props.to;
            var active = _props.active;
            var children = _props.children;

            var style = {};
            if (active) style.fontWeight = 'bold';

            return React.createElement(
                'a',
                { ref: function (node) {
                    return _this2.link = node;
                }, href: to, style: style },
                children
            );
        }
    }]);

    return Link;
})(React.Component);


//const Navigation = ({
//    path
//}) => (
//    <nav>
//        <ul>
//            <li><Link to="/" active={/^\/?$/.test (path)}>Index</Link></li>
//            <li><Link to="/about" active={/^\/about$/.test (path)}>About</Link></li>
//        </ul>
//    </nav>
//);
var Navigation = function Navigation(_ref) {
    var path = _ref.path;
    return React.createElement(
        'nav',
        null,
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                React.createElement(
                    Link,
                    { to: '/', active: /^\/?$/.test(path) },
                    'Index'
                )
            ),
            React.createElement(
                'li',
                null,
                React.createElement(
                    Link,
                    { to: '/about', active: /^\/about$/.test(path) },
                    'About'
                )
            )
        )
    );
};


//const App = ({content, location}) => (
//    <div>
//        <header>
//            <Navigation path={location} />
//        </header>
//        <div>
//            <h1>{content}</h1>
//        </div>
//    </div>
//);
var App = function App(_ref2) {
    var content = _ref2.content;
    var location = _ref2.location;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'header',
            null,
            React.createElement(Navigation, { path: location })
        ),
        React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                content
            )
        )
    );
};


//class AppContainer extends React.Component {
//
//    constructor ({location = '/', content = ''}) {
//        super ();
//
//        this.state = {
//            location,
//            content
//        };
//    }
//
//    componentDidMount () {
//        SillyRouter.onTransition ((newPath) => {
//            const endpoint = newPath === '/' ? 'index' : newPath;
//            this.setState ({location: newPath, content: ''});
//            fetch (`api/${endpoint}`)
//                .then (response => response.text ())
//                .then (content => this.setState ({content}));
//        });
//    }
//
//    render () {
//        return (
//            <App {...this.state} />
//        );
//    }
//}
var AppContainer = (function (_React$Component) {
    _inherits(AppContainer, _React$Component);

    function AppContainer(_ref) {
        var _ref$location = _ref.location;
        var location = _ref$location === undefined ? '/' : _ref$location;
        var _ref$content = _ref.content;
        var content = _ref$content === undefined ? '' : _ref$content;

        _classCallCheck(this, AppContainer);

        _get(Object.getPrototypeOf(AppContainer.prototype), 'constructor', this).call(this);

        this.state = {
            location: location,
            content: content
        };
    }

    _createClass(AppContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            SillyRouter.onTransition(function (newPath) {
                var endpoint = newPath === '/' ? 'index' : newPath;
                _this.setState({ location: newPath, content: '' });
                fetch('api/' + endpoint).then(function (response) {
                    return response.text();
                }).then(function (content) {
                    return _this.setState({ content: content });
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(App, this.state);
        }
    }]);

    return AppContainer;
})(React.Component);



//const renderServer = ({
//    content = '',
//    location = '/'
//}) => {
//    return ReactDOMServer.renderToString (<AppContainer location={location} content={content} />);
//};
var renderServer = function renderServer(_ref4) {
    var _ref4$content = _ref4.content;
    var content = _ref4$content === undefined ? '' : _ref4$content;
    var _ref4$location = _ref4.location;
    var location = _ref4$location === undefined ? '/' : _ref4$location;

    return ReactDOMServer.renderToString(React.createElement(AppContainer, { location: location, content: content }));
};


//const render = (state) => (
//    ReactDOM.render (
//        <AppContainer {...state} />,
//        document.getElementById ('root')
//    )
//);
var render = function render(state) {
    return ReactDOM.render(React.createElement(AppContainer, state), document.getElementById('root'));
};
