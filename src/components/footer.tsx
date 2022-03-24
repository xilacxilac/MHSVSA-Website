// eslint-disable-next-line import/no-default-export
import React from 'react';
import { HStack, VStack, Text, Divider, Heading, Wrap, WrapItem, Box } from "@chakra-ui/react";

export default function footer(): JSX.Element {
	// const background = useColorModeValue("#1a202c", "gray.50");
	// const textColor = useColorModeValue("white", "black");
	const background = "red.50" // "gray.50";
	const textColor = "black";
	const width = findWidth();
	return (
		<>	
			<DesktopFoot width={width} background={background} textColor={textColor}/>
			<MobileFoot background={background} textColor={textColor}/>
    	</>
	);
}

function DesktopFoot(props) {
	return (
		<VStack h={{ sm: "1000px", xl: "450px" }} bg={props.background} display={{base: "none", lg:"flex"}}>
			<Box h="75px"></Box>
			<HStack>
				<Wrap spacing="100px">
					<WrapItem h="300px" w="300px">
						<Box px="5px" py="10px" border="1px" borderColor="gray">
							<VStack>
								<Heading color={props.textColor} fontSize="17px">
									About Us
								</Heading>
								<Text color={props.textColor} fontSize="15px" textAlign="center">
									A club dedicated to educating and spreading Vietnamese culture. Within the VSA we will
									explore Vietnamese culture including the food, fashion, and traditions while learning
									about the history and language of Vietnam.
								</Text>
							</VStack>
						</Box>
					</WrapItem>
					<WrapItem h="300px" w="150px">
						<Box px="5px" py="10px" border="1px" borderColor="gray">
							<VStack>
								<Heading color={props.textColor} fontSize="17px" textAlign="center">
									Address
								</Heading>
								<Text color={props.textColor} fontSize="15px" textAlign="center">
									Room Y223, <br/>
									1633 Davidson Rd, <br/>
									McLean, VA 22101
								</Text>
							</VStack>
						</Box>
					</WrapItem>
					<WrapItem h="300px" w="200px">
						<Box px="5px" py="10px" border="1px" borderColor="gray">
							<VStack>
								<Heading color={props.textColor} fontSize="17px" textAlign="center">
									Contacts
								</Heading>
								<Text color={props.textColor} fontSize="15px" textAlign="center">
									mcleanvsa@gmail.com <br/>
									xilacxilac@gmail.com
								</Text>
							</VStack>
						</Box>
					</WrapItem>
				</Wrap>
			</HStack>
			<Box bg={props.background} w={{base: props.width * .9125 + 10, md: props.width * .7625 + 20}}>
				<Divider height="10px" borderColor="gray"/>
			</Box>
		</VStack>
	);	
}

function MobileFoot(props) {
	return (
		<VStack display={{base: "flex", lg:"none"}}>
			<Text>
				pop
			</Text>
		</VStack>
	);
}

const findWidth = () => {
	const [width, setWidth] = React.useState(0);
	React.useEffect(() => {
	    setWidth(window.innerWidth);
	});
	return width;
};
