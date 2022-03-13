import { HStack, Link, Text, Image, VStack, Alert, AlertIcon, Center, CloseButton, Button } from "@chakra-ui/react";
import { ColorModeSwitcher } from "@components/ColorModeSwitcher";
import { useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import React from "react"

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	const nameColor = useColorModeValue("/mhsvsa/mhsvsa_white.png", "/mhsvsa/mhsvsa_black.png");
	const background = useColorModeValue("#1a202c", "white");
	const notificationBackground = "blue.50"
	const textColor = useColorModeValue("white", "black");
	const width = findWidth();
	const showTopNavBar = {base: "none", lg: "flex"};
	return (
		<VStack spacing="0px" bg={notificationBackground}>
			<NotificationAlert 
				status="info" // alert type: error, success, warning, info
				text="Fundraiser to Support Ukraine: Starting from 4/1 to 4/15, we will be allowing pre-orders of food."
				href="/fundraiser"
				textColor={textColor}
				background={notificationBackground}
			/>
			<HStack
				width={width}
				justify="space-between"
				bg={background}
				px="50px"
				py="0px"
				as="header"
				display={showTopNavBar}
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
					<NavigationBar href="/fundraiser" text="Fundraiser" />
					<NavigationBar href="/merch" text="Merch" />
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
	// To disable NotificationAlert all together, set UseState(0) to UseState(1) and set setShow(show + 1) to setShow(show)
	const [show, setShow] = useState(0);
	const arr = ["flex", "none"] // show alert (show = "flex", hide = "none")
	const [hide, setHide] = useState(1)
	return (
		<HStack display={arr[show]}
			spacing={{
				base: "-25px",
				sm: "-25px",
				md: "-25px",
				lg: "-15px",
				xl: "0px",
			}}>
			<Center>
				<Alert status={props.status} justify="center" bg={props.background}>
					<AlertIcon color="blue.300"/>
					<Text color={props.textColor}
						// Notification Font Size - change for every new notification
						fontSize={{
							base: "13px",
							sm: "14px",
							md: "14px",
							lg: "16px",
							xl: "16px",
						}}
					>
						{props.text} Check it out{' '}
						<Text as="u">
							<Link href={props.href} >
								here
							</Link>
						</Text>
						!
					</Text>
				</Alert>
			</Center>
			<Button onClick={() => {
				setShow(show + hide);
				setHide(hide - 1);
			}}>
				<CloseButton color={props.textColor}/>
			</Button>
			
		</HStack>
	);
}

const findWidth = () => {
	const [width, setWidth] = React.useState(0);
	React.useEffect(() => {
	    setWidth(window.innerWidth);
	});
	return width;
};