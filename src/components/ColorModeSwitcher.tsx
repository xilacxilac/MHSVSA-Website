import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(FaSun, FaMoon);
	const iconColor = useColorModeValue("white", "black");
	console.log({ colorMode });
	return (
		<IconButton
			size="10px"
			fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl", xl: "2xl" }}
			variant="ghost"
			color={iconColor}
			marginLeft="2"
			onClick={toggleColorMode}
			icon={<SwitchIcon />}
			aria-label={`Switch to ${text} mode`}
			{...props}

			display="none" // TEMPORARILY DISABLED
		/>
	);
};
