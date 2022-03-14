import React from 'react';
import { VStack, Center, Text, Box, HStack, Heading, Collapse, Button, Image} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function Officers() {
	const background = useColorModeValue("white", "black");
	return (
		<VStack bg={background} h='2000px'>
			<Center w='100%' height="300px" bg='lightgrey' color='black'>
				<Heading fontSize='300%'>Meet Our Executive!</Heading>
			</Center>
			<HStack w='97%' spacing={10}>
				<ImageBox
					title='Plan Money'
					desc='The future can be even brighter but a goal without a plan is just a wish'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
				/>
				<ImageBox
					title='Plan Money'
					desc='The future can be even brighter but a goal without a plan is just a wish'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
				/>
				<ImageBox
					title='Plan Money'
					desc='The future can be even brighter but a goal without a plan is just a wish'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
				/>
				<ImageBox
					title='Plan Money'
					desc='The future can be even brighter but a goal without a plan is just a wish'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
				/>
			</HStack>
			<HStack w='97%' spacing={10}>
				<ImageBox
					title='Plan Money'
					desc='The future can be even brighter but a goal without a plan is just a wish'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
				/>
				<ImageBox
					title='Plan Money'
					desc='The future can be even brighter but a goal without a plan is just a wish'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
				/>
				<ImageBox
					title='Plan Money'
					desc='The future can be even brighter but a goal without a plan is just a wish'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
				/>
				<ImageBox
					title='Plan Money'
					desc='The future can be even brighter but a goal without a plan is just a wish'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
				/>
			</HStack>
		</VStack>
	);
}

function ImageBox({ title, desc, url, alt, ...rest}) {
	return (
	  <Box
		mt={2}
		p={5}
		shadow='md'
		borderWidth='1px'
		flex='1'
		borderRadius='md'
		textAlign="center"
		bg='grey'
		{...rest}
	  >
		<Heading mb={4} fontSize='xl'>{title}</Heading>
		<Image align='center' objectFit='cover' src={url} alt={alt}/>
		<Text>{desc}</Text>
	  </Box>
	)
  }
  