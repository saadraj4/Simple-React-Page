import PropTypes from 'prop-types' 

function Footer({ copyright }) {
    return (
        <footer>
            <p>{copyright}</p>
        </footer>
    );
}
Footer.defaultProps = {
    text: 'CopyRight 2023',

}

Footer.protoTypes = {
    text: PropTypes.string,
}
export default Footer  