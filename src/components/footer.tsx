// eslint-disable-next-line import/no-default-export
import React from 'react';
import { HStack, VStack, Text, Divider, Heading, Wrap, WrapItem, Box, Link, Spacer } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md"

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
		<VStack h={{ lg: "800px", xl: "450px" }} bg={props.background} display={{base: "none", lg:"flex"}}>
			<Box h="25px"></Box>
			<HStack w={{base: props.width * .9125 + 10, lg: props.width * .7625 + 20}} justify={{lg:"center", xl:"space-in-between"}}>
				<HStack>
					<Wrap spacing={{lg: "100px", xl: "25px"}}>
						<WrapItem h="200px" w={{lg: "400px", xl: "400px"}}>
							<Box px="5px" py="10px" borderColor="gray">
								<VStack display="block">
									<Heading color={props.textColor} fontSize="17px">
										About Us
									</Heading>
									<Text color={props.textColor} fontSize="15px">
										The Vietnamese Student Association is a club at McLean High School dedicated
										to giving back to the community, and educating and spreading Vietnamese culture.
									</Text>
								</VStack>
							</Box>
						</WrapItem>
						<WrapItem h="150px" w="150px" bg="">
							<Box px="5px" py="10px" borderColor="gray">
								<VStack display="block">
									<Heading color={props.textColor} fontSize="17px" textAlign="left">
										Address
									</Heading>
									<Text color={props.textColor} fontSize="15px">
										Room Y223, <br/>
										1633 Davidson Rd, <br/>
										McLean, VA 22101
									</Text>
								</VStack>
							</Box>
						</WrapItem>
						<WrapItem h="200px" w="200px" bg="">
							<Box px="5px" py="10px" borderColor="gray">
								<VStack display="block">
									<Heading color={props.textColor} fontSize="17px" textAlign="left">
										Contacts
									</Heading>
									<Text color={props.textColor} fontSize="15px">
										mcleanvsa@gmail.com <br/>
										xilacxilac@gmail.com
									</Text>
								</VStack>
							</Box>
						</WrapItem>
					</Wrap>
				</HStack>
				<Spacer display={{lg: "none", xl:"flex"}}/>
				<Box display={{lg: "none", xl:"flex"}} h="200px">
					<HStack h="30px">
					<Link href="https://instagram.com/mclean_vsa/" isExternal>
						<FaInstagram color={props.textColor} size="30px"/>
					</Link>
					<Link href="mailto:mcleanvsa@gmail.com">
						<AiOutlineMail color={props.textColor} size="30px"/>
					</Link>
					<Link href="https://lms.fcps.edu/group/5470177459" isExternal>
						<MdOutlineSchool color={props.textColor} size="30px"/>
					</Link>
					</HStack>
				</Box>
			</HStack>
			<Box w={{lg: props.width * .7625 + 20}} h="30px">
				<Divider height="10px" borderColor="gray"/>
			</Box>
			<Text color={props.textColor}>
				Copyright © 2022 McLean High School Vietnamese Student Association
			</Text>
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

