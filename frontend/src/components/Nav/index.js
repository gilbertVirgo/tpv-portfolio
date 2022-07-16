import { Overlay, Wrapper } from "./styles";

import Logo from "./components/Logo";
import React from "react";
import Tags from "./components/Tags";
import Toggle from "./components/Toggle";
import { useLocation } from "react-router-dom";

export default () => {
	const location = useLocation();
	const [showMenu, setShowMenu] = React.useState();
	const [showLogo, setShowLogo] = React.useState();

	React.useEffect(() => {
		setShowLogo(location.pathname !== "/");
		setShowMenu(false);
	}, [location]);

	return (
		<React.Fragment>
			<Overlay showMenu={showMenu} />
			<Wrapper>
				<Toggle
					showMenu={showMenu}
					onChange={() => setShowMenu(!showMenu)}
				/>
				<Logo show={showLogo} showMenu={showMenu} />
			</Wrapper>
			<Tags showMenu={showMenu} />
		</React.Fragment>
	);
};
