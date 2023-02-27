import { useMediaQuery } from "react-responsive";

const Layout = () => {

    const isDesktopOrLaptop = useMediaQuery({ query: "(min-device-width: 1224px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });


    return (
		<>
			{isDesktopOrLaptop ? (
				<>
					

				</>
			) : (
                <>
					

				</>
            )}
		</>
	);

}

export default Layout;