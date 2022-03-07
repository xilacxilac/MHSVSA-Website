import { VStack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function Home() {
	const background = useColorModeValue("white", "black");
	return <VStack bg={background}></VStack>;
}
