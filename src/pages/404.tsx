import { VStack, Heading, Link, Text } from "@chakra-ui/react";

export default function Error404(): JSX.Element {
	return (
		<VStack justify="center">
			<Heading>404 error</Heading>
			<Text>This page doesn't exist.</Text>
		</VStack>
	);
}
