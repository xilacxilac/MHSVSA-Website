import { useColorModeValue, Button, Alert, AlertIcon, Center, CloseButton, HStack, Link, Text } from '@chakra-ui/react';
import { useState } from "react";
import { setCookie, getCookie } from "../lib/cookie";

export default function NotificationAlert(): JSX.Element {
    // To disable NotificationAlert all together, set UseState(0) to UseState(1) and set setShow(show + 1) to setShow(show)
	const [show, setShow] = useState(0);
	if (getCookie("notification") == "false") {
		if (show == 0) {
			setShow(show + 1)
		}
		console.log(getCookie("notification"));
	}

	else {
		if (show == 1) {
			setCookie("notification", "false", 1);
		}
	}
    const notificationBackground = "blue.50";
	// const textColor = useColorModeValue("white", "black"); TEMPORARILY DISABLED
	const textColor = "black";
    const settingsNotificationAlert = [
		"info", // alert type: error, success, warning, info
		"Fundraiser to Support Ukraine: Starting from 4/1 to 4/15, we will be allowing pre-orders of food.", // Text
		"/fundraiser" // href
	]
    return (
		((show == 0) ? (
			<HStack display="flex" justify="center" bg={notificationBackground}
				spacing={{
					base: "-25px",
					sm: "-25px",
					md: "-25px",
					lg: "-15px",
					xl: "0px",
				}}>
				<Center>
					{/* @ts-ignore */}
					<Alert status={settingsNotificationAlert[0]} justify="center" bg={notificationBackground}>
						<AlertIcon color="blue.300"/>
						<Text color={textColor}
							// Notification Font Size - change for every new notification
							fontSize={{
								base: "13px",
								sm: "14px",
								md: "14px",
								lg: "16px",
								xl: "16px",
							}}
						>
							{settingsNotificationAlert[1]} Check it out{' '}
							<Text as="u">
								<Link href={settingsNotificationAlert[2]} >
									here
								</Link>
							</Text>
							!
						</Text>
					</Alert>
				</Center>
				<Button background={notificationBackground} 
					_hover={{ background: "white"}}
					onClick={() => {
						if (show == 0) {
							setShow(show + 1);
						}
					}}
				>
					<CloseButton color={textColor}
						_hover={{ background: "none"}}
					/>
				</Button>
			</HStack>
		) : (
			null
		))
    );
}