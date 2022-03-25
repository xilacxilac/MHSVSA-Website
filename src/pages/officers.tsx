import React from 'react';
import { VStack, Center, Text, Box, HStack, Heading, Image, Collapse} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function Officers() {
	const background = useColorModeValue("white", "black");
	return (
		<VStack bg='white' h='1500px'>
			<Center w='100%' height="270px" bg='lightgrey' color='black'>
				<Heading fontSize='300%'>Meet Our Executive!</Heading>
			</Center>
			<HStack w='97%' spacing={10}>
				<ImageBox
					title='Title'
					name='Name'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
			</HStack>
			<HStack w='97%' spacing={10}>
				<ImageBox
					title='Title'
					name='Name'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Title'
					name='Name'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
			</HStack>
		</VStack>
	);
}

function ImageBox({ title, name, desc, url, fallbackurl, alt, ...rest}) {
	const[show, setShow] = React.useState(false)
	return (
		<>
			<Box
				mt={2}
				p={5}
				shadow='md'
				borderWidth='1px'
				flex='1'
				borderRadius='md'
				bg='gray'
				onMouseEnter={() => setShow(true)}
				onMouseLeave={() => setShow(false)}
				{...rest}
			>
				<Heading align = 'center' mb={4} fontSize='xl'>{title}</Heading>
				<Center>
					<Image objectFit='cover' src={url} fallbackSrc={fallbackurl} alt={alt}/>
				</Center>
				<Text align='center' mt={2} fontSize = 'large'>{name}</Text>
				<Collapse in={show==true} animateOpacity>
					<Text mt={2}> {desc}</Text>
				</Collapse>
			</Box>
	  	</>
	)
}
  