import { color } from "../../../theme";
import styled from "styled-components";

const width = 40;

export const Wrapper = styled.button`
	appearance: none;
	border: none;
	cursor: pointer;

	width: ${width}px;
	height: ${width}px;
	border-radius: ${width}px;
	transform-origin: center center;
	position: relative;

	transition-property: all;
	transition-duration: 230ms;
	transition-delay: 230ms;

	${({ showMenu }) =>
		!showMenu
			? `background-color: ${color.light};`
			: `background-color: ${color.dark};`}
`;
const Vector = styled.div`
	height: 2px;
	border-radius: 2px;
	position: absolute;
	top: 20px;
	left: 20px;
	transition-property: all;
	transition-duration: 230ms;
	pointer-events: none;

	background-color: ${({ showMenu }) =>
		!showMenu ? color.dark : color.light};
`;
export const Vectors = [
	styled(Vector)`
		width: 14px;
		transition-delay: 230ms;
		transform: ${({ showMenu }) =>
			!showMenu
				? `translate(-7px, -5px)`
				: `translate(-7px, -1px) rotate(45deg)`};
	`,
	styled(Vector)`
		width: 14px;
		transition-delay: 230ms;
		transform: translate(-7px, -1px)
			${({ showMenu }) => showMenu && `rotate(-45deg)`};
	`,
	styled(Vector)`
		width: 8px;
		transform: translate(-7px, 3px)
			${({ showMenu }) => showMenu && `scale(0, 1)`};
	`,
];

export default ({ showMenu, onChange }) => (
	<Wrapper showMenu={showMenu} onClick={onChange}>
		{Vectors.map((Vector, index) => (
			<Vector showMenu={showMenu} key={`toggle-vector-${index}`} />
		))}
	</Wrapper>
);
