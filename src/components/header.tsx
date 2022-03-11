import { HStack, Link, Text, Image, VStack, Alert, AlertIcon, Center } from "@chakra-ui/react";
import { ColorModeSwitcher } from "@components/ColorModeSwitcher";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react"

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	const nameColor = useColorModeValue("/mhsvsa/mhsvsa_white.png", "/mhsvsa/mhsvsa_black.png");
	const background = useColorModeValue("#1a202c", "white");
	const textColor = useColorModeValue("white", "black");
	const width = findWidth();
	return (
		<VStack spacing="0px" bg={background}>
			<NotificationAlert 
				display="true" // show alert
				status="info" // alert type: error, success, warning, info
				text="Fundraiser to Support Ukraine: Starting from 4/1 to 4/15, we will be allowing pre-orders of food."
				href="/fundraiser"
				textColor={textColor}
				background={background}
			/>
			<HStack
				width={width}
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
					<NavigationBar href="/" text="Home" />
					<NavigationBar href="/aboutus" text="About Us" />
					<NavigationBar href="/officers" text="Officers" />
					<NavigationBar href="/events" text="Events" />
					<NavigationBar href="/contactus" text="Contact Us" />
					<ColorModeSwitcher />
				</HStack>
			</HStack>
		</VStack>
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

function NotificationAlert(props) {
	const displayed = (props.display) ? "flex" : "none"
	return (
		<Center display={displayed}>
			<Alert status={props.status} justify="center" bg={props.background}>
				<AlertIcon />
				<Text color={props.textColor}>
					{props.text} Check it out{' '}
					<Text as="u">
						<Link href={props.href} >
							here
						</Link>
					</Text>
				</Text>
			</Alert>
		</Center>
	);
}

const findWidth = () => {
	const [width, setWidth] = React.useState(0);
	React.useEffect(() => {
	    setWidth(window.innerWidth);
	});
	return width;
};