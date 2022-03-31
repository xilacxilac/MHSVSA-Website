import React from 'react';
import { VStack, Center, Text, Box, HStack, Heading, Image, Collapse} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function Officers() {
	// const background = useColorModeValue("white", "black"); TEMPORARILY DISABLED
	return (
		<>
			<DesktopOfficers />
		</>
	);
}

function DesktopOfficers(props) {
	return (
		<VStack bg='white' h='1500px' display={{base: "none", lg:"flex"}}>
			<Center w='100%' height="300px" bg='lightgrey' color='black'>
				<Heading fontSize='300%'>Meet Our Executives!</Heading>
			</Center>
			<HStack w='97%' spacing={10}>
				<ImageBox
					title='President'
					name='The-Vinh (Calix) Tran-Luu'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Vice President'
					name='Nathan Ho'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Secretary'
					name='Vivianne Ngo'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Treasurer'
					name='Aurelia Nguyen'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
			</HStack>
			<HStack w='97%' spacing={10}>
				<ImageBox
					title='Director of Activites'
					name='Natalie Vu'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Director of Social Media'
					name='Thanh-Hoa (Mia) Tran-Luu'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Director of Transporation'
					name='Adam Vu'
					url=''
					fallbackurl='https://via.placeholder.com/300'
					alt='Dan Abramov'
					desc='This is where we put the information about the officer and 
						should hopefully show when I hover over their image'
				/>
				<ImageBox
					title='Director of Language'
					name='Ava Nguyen'
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