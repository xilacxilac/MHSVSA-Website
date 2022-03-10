import { VStack, Center, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function Gallery() {
	const background = useColorModeValue("white", "black");
	return (
		<VStack bg={background}>
			<Center>
				<Center boxSize="400px" bg={background}>
					<Text>Hello World!</Text>
				</Center>
			</Center>
		</VStack>
	);
}
