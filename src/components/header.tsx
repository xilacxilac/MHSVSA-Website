import { HStack, Link, Text, Image } from "@chakra-ui/react";
import { ColorModeSwitcher } from "@components/ColorModeSwitcher";
import { useColorModeValue } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	const nameColor = useColorModeValue("/mhsvsa/mhsvsa_white.png", "/mhsvsa/mhsvsa_black.png");
	const background = useColorModeValue("#1a202c", "white");
	return (
		<HStack
			justify="space-between"
			bg={background}
			px="50px"
			py="0px"
			as="header"
		>
			<Link href="/">
				<Image
					src={nameColor}
					width={{
						base: "50px",
						sm: "100px",
						md: "200px",
						lg: "250px",
						xl: "350px",
					}}
				/>
			</Link>
			<HStack
				justify="center"
				align="center"
				spacing={{
					base: "0",
					sm: "10px",
					md: "20px",
					lg: "30px",
					xl: "40px",
				}}
			>
				<NavigationBar href="/aboutus" text="About Us" />
				<NavigationBar href="/officers" text="Officers" />
				<NavigationBar href="/events" text="Events" />
				<NavigationBar href="/contactus" text="Contact Us" />
				<ColorModeSwitcher />
			</HStack>
		</HStack>
	);
}

function NavigationBar(props) {
	const textColor = useColorModeValue("white", "black");
	return (
		<Link href={props.href}>
			<Text
				fontSize={{
					base: "xs",
					sm: "sm",
					md: "md",
					lg: "lg",
					xl: "xl",
				}}
				color={textColor}
			>
				{props.text}
			</Text>
		</Link>
	);
}
