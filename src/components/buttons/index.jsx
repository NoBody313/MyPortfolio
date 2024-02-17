import {NavLink} from "react-router-dom";

const Buttons = (props) => {
    // eslint-disable-next-line react/prop-types
    const {children, to, hover, text} = props;
    return (
        <NavLink
            isActive={true}
            to={`${to}`}
            className={({isActive}) => isActive
                ? `block w-fit text-center px-4 py-3 bg-blue-500 hover:bg-blue-700 dark:bg-blue-200 dark:hover:bg-blue-500 rounded-md text-white dark:text-blue-900 dark:hover:text-white font-semibold`
                : `block w-fit text-center px-4 py-3 ${hover} rounded-md dark:hover:bg-blue-500 dark:text-blue-200 dark:hover:text-white ${text} hover:text-white font-semibold`}
        >
            {children}
        </NavLink>
    )
}

export default Buttons;