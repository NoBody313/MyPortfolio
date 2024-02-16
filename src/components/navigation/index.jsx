import Buttons from "../buttons/index.jsx";

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
        <nav className="flex flex-row w-full justify-between items-center py-8 px-16">
            <img src="/src/assets/logo.png" alt="img-logo" width={"42"} height={"42"} />
            <div className="flex flex-row gap-4">
            {renderItem()}
            </div>
        </nav>
    );
}

export default Navigation;