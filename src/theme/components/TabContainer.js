import variable from "./../variables/platform";

export default (variables = variable) => {
	const platformStyle = variables.platformStyle;

	const tabContainerTheme = {
		elevation: 3,
		height: 50,
		flexDirection: "row",
		shadowColor: platformStyle === "material" ? "#000" : undefined,
		shadowOffset: platformStyle === "material" ? { width: 0, height: 2 } : undefined,
		shadowOpacity: platformStyle === "material" ? 0.2 : undefined,
		shadowRadius: platformStyle === "material" ? 1.2 : undefined,
		justifyContent: "space-around",
		marginVertical: 15,
		marginHorizontal: 10,
		borderColor: variables.topTabBarBorderColor,
	};

	return tabContainerTheme;
};
