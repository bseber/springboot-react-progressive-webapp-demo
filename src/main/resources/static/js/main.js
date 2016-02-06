// ============================
// kudos http://babeljs.io/repl
// ============================

//const Link = ({
//    to,
//    active = false,
//    children
//}) => (
//    <a href={to} style={{fontWeight: active ? 'bold' : 'normal'}} >{children}</a>
//);
var Link = function Link(_ref) {
    var to = _ref.to;
    var _ref$active = _ref.active;
    var active = _ref$active === undefined ? false : _ref$active;
    var children = _ref.children;
    return React.createElement(
        'a',
        { href: to, style: { fontWeight: active ? 'bold' : 'normal' } },
        children
    );
};


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
var Navigation = function Navigation(_ref2) {
    var path = _ref2.path;
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


//const App = ({
//    content,
//    location
//}) => (
//    <div>
//        <header>
//            <Navigation path={location} />
//        </header>
//        <section>
//            <h1>{content}</h1>
//        </section>
//    </div>
//);
var App = function App(_ref3) {
    var content = _ref3.content;
    var location = _ref3.location;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'header',
            null,
            React.createElement(Navigation, { path: location })
        ),
        React.createElement(
            'section',
            null,
            React.createElement(
                'h1',
                null,
                content
            )
        )
    );
};


//const renderServer = ({
//    content = '',
//    location = '/'
//}) => {
//    return ReactDOMServer.renderToString (<App location={location} content={content} />);
//};
var renderServer = function renderServer(_ref4) {
    var _ref4$content = _ref4.content;
    var content = _ref4$content === undefined ? '' : _ref4$content;
    var _ref4$location = _ref4.location;
    var location = _ref4$location === undefined ? '/' : _ref4$location;

    return ReactDOMServer.renderToString(React.createElement(App, { location: location, content: content }));
};
