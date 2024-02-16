import {NavLink} from "react-router-dom";

const Buttons = (props) => {
    // eslint-disable-next-line react/prop-types
    const {children, variant, to, hover, text} = props;
    return (
        <NavLink
            isActive={true}
            to={`${to}`}
            className={({isActive}) => isActive
                ? `block w-fit text-center px-4 py-3 ${variant} ${hover} rounded-md text-white hover:${text} font-semibold`
                : `block w-fit text-center px-4 py-3 ${hover} rounded-md ${text} hover:text-white font-semibold`}
        >
            {children}
        </NavLink>
    )
}

export default Buttons;