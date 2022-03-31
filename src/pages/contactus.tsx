import { VStack, Center, Text, Heading } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function Events() {
	// TEMPORARILY DISABLED
	// const background = useColorModeValue("white", "black");
	// const textColor = useColorModeValue("black", "white");
	const background = "white";
	const textColor = "black"
	return (
		<VStack bg={background}>
			<Center w='100%' height="300px" bg='lightgray' color='black'>
				<Heading fontSize='300%'>Contact Us</Heading>
			</Center>
			<Center h="200px" bg={background}>
				<Text color={textColor} fontSize="20px">This page is still working in progress!</Text>
			</Center>
		</VStack>
	);
}
