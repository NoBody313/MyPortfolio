import Buttons from "../buttons/index.jsx";
import ThemeSwitch from "../themeSwitch/index.jsx";

const Navigation = () => {
    const navItems = [
        {
            key: 'home',
            title: 'Home',
            link: '/'
        },
        {
            key: 'about',
            title: 'About',
            link: '/about'
        },
        {
            key: 'contact',
            title: 'Contact',
            link: '/contact'
        },
        {
            key: 'project',
            title: 'Project',
            link: '/project'
        }
    ]

    const renderItem = () => {
        return navItems.map((item) => (
            <Buttons
                variant="bg-blue-700"
                hover="hover:bg-blue-700"
                text="text-blue-700"
                key={item.key}
                to={item.link}
            >
                {item.title}
            </Buttons>
        ));
    }

    return (
        <nav className="flex flex-row w-full justify-between items-center py-8 px-24">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 64 53" fill="currentColor">
                <path
                    d="M41 31C41 32.5759 40.5085 34.1363 39.5537 35.5922C38.5989 37.0481 37.1993 38.371 35.435 39.4853C33.6707 40.5996 31.5762 41.4835 29.271 42.0866C26.9658 42.6896 24.4951 43 22 43V31H41Z"
                    className="text-blue-950 dark:text-blue-200"/>
                <path
                    d="M58.675 39L44 39C44 43.7675 47.4069 47.6094 51.6039 47.5248C58.9514 47.3768 60.1635 49.5622 63.1977 53C64.6008 47.555 64.7554 39 58.675 39Z"
                    className="text-blue-950 dark:text-blue-200"/>
                <path
                    d="M17.1125 0H51C51 9.62642 43.1329 17.3838 33.4411 17.2131C16.4741 16.9143 7.91772 17.0585 0.911246 24C-2.32883 13.0056 3.07153 -8.18348e-06 17.1125 0Z"
                    className="text-blue-950 dark:text-blue-200"/>
                <path
                    d="M22 43.2694L22 24Lnan nanL22 24C28.4176 24 33.5892 28.4735 33.4754 33.9845C33.2762 43.6324 33.3723 48.4978 38 52.4818C30.6704 54.3242 22 51.2534 22 43.2694Z"
                    className="text-blue-950 dark:text-blue-200"/>
                <path
                    d="M52 42.9338L52 23C47.5879 23 44.0324 27.6277 44.1107 33.3288C44.2476 43.3094 44.1815 48.3425 41 52.464C46.0391 54.3699 52 51.1932 52 42.9338Z"
                    className="text-blue-950 dark:text-blue-200"/>
                <path
                    d="M17 53C14.7675 53 12.5569 52.5861 10.4944 51.7821C8.43184 50.978 6.55778 49.7994 4.97918 48.3137C3.40059 46.828 2.14838 45.0641 1.29405 43.1229C0.439717 41.1817 -7.91226e-07 39.1011 1.20797e-06 37C1.29981e-06 34.8988 0.43972 32.8183 1.29405 30.8771C2.14838 28.9359 3.40059 27.172 4.97919 25.6863C6.55778 24.2006 8.43185 23.022 10.4944 22.2179C12.5569 21.4139 14.7675 21 17 21L17 37L17 53Z"
                    className="text-blue-950 dark:text-blue-200"/>
            </svg>
            <div className="flex flex-row gap-4">
                {renderItem()}
                <ThemeSwitch />
            </div>
        </nav>
    );
}

export default Navigation;