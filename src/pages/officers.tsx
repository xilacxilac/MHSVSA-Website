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
					title='Title'
					name='Name'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
			</HStack>
			<HStack w='97%' spacing={10}>
				<ImageBox
					title='Title'
					name='Name'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url='https://bit.ly/dan-abramov'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
			</HStack>
		</VStack>
	);
}

function ImageBox({ title, name, desc, url, alt, ...rest}) {
	const[show, setShow] = React.useState(false)
	return (
		<>
			<Box
				role="group"
				mt={2}
				p={5}
				shadow='md'
				borderWidth='1px'
				flex='1'
				borderRadius='md'
				textAlign="center"
				bg='grey'
				//onMouseOver={handleToggle}
				onMouseEnter={() => setShow(true)}
				onMouseLeave={() => setShow(false)}
				{...rest}
			>
				<Heading mb={4} fontSize='xl'>{title}</Heading>
				<Image align='center' objectFit='cover' src={url} alt={alt}/>
				<Text mt={2} fontSize = 'large'>{name}</Text>
				{show && (
					<Text mt={2}> {desc}</Text>
				)}
			</Box>
	  	</>
	)
}
  