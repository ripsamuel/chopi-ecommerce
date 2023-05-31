import PropTypes from 'prop-types'
import './styles.css'

const Layout = ({ children }) => {
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    }
    return (
        <div className="flex flex-col mt-20 ml-20 items-center layout-container  ">
            {children}
        </div>
    )
}
export default Layout