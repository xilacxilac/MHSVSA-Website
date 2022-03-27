import { VStack, Center, Text, Container, Heading, Box, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function AboutUs() {
	const background = useColorModeValue("white", "black");
	return (
		<VStack bg='white' h='1500px'>
			<Center w='100%' height="300px" bg='lightgray' color='black'>
				<Heading fontSize='300%'>About Us</Heading>
			</Center>
			<Container maxW='container.lg'>
				<Center my={5}>
					<Image boxSize='25%' objectFit='cover' src='logo.png' alt='Dan Abramov' fallbackSrc='https://via.placeholder.com/250'/>
				</Center>
				<Text m={10} color='black'>
					There are many benefits to a joint design and development system. Not only
  					does it bring benefits to the design team, but it also brings benefits to
					engineering teams. It makes sure that our experiences have a consistent look
					and feel, not just in our design specs, but in production
				</Text>
				<Box padding={5} bg='gray.700' color='white'>
					We can put whatever we want here and what not. If there is anything interesting
					like a quote or something we can put it in. I was also thinking if we have like
					a video of a couple activities we have done and what not, that works too. I can 
					embed that here if you would like.
					<Center my={5}>
						<Image boxSize='25%' objectFit='cover' src='' alt='Dan Abramov' fallbackSrc='https://via.placeholder.com/250'/>
					</Center>
					There are many benefits to a joint design and development system. Not only
					does it bring benefits to the design team, but it also brings benefits to
					engineering teams. It makes sure that our experiences have a consistent look
					and feel, not just in our design specs, but in production.
				</Box>
			</Container>
		</VStack>
	);
}
