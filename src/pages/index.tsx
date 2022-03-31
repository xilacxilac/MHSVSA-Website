import React from 'react';
import { VStack, Text, Box, IconButton, useBreakpointValue, Stack, Heading,
	Container, Center, Wrap, WrapItem, Divider, Link } from "@chakra-ui/react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Slider from 'react-slick';
import { useColorModeValue } from "@chakra-ui/react";

export default function Home(): JSX.Element {
	const width = findWidth();
	// const background = useColorModeValue("black", "white"); TEMPORARILY DISABLED
	const background = "white";
	const boxSize = {base: width * 0.45, md: width * .25};
	console.log({width}, {boxSize})
	const boxContainerHeight = {base: (width * width * 0.091125) + 20, md: (width * width * 0.0625) + 10};
	return (
		<VStack bg={background}>
			<ImageCaptionCarousel />
			<VStack bg={background} >
				<Box h="30px" bg={background}></Box>
				<Box w={{base: width * .9125 + 10, md: width * .7625 + 20}}>
					<Divider height="10px" borderColor="gray"/>
				</Box>
				<Box h="10px" bg={background}></Box>
				<Box justify="center" w={{base: width * .9 + 10, md:width * .75 + 20}} maxH={boxContainerHeight}>
					<Wrap spacing="10px" >
						<CardBox bg="blue" boxSize={boxSize} text="About Us" href="/aboutus"/>
						<CardBox bg="red" boxSize={boxSize} text="Officers" href="/officers"/>
						<CardBox bg="green" boxSize={boxSize} text="Events" href="/events"/>
						<CardBox bg="black" boxSize={boxSize} text="Fundraiser" href="/fundraiser"/>
						<CardBox bg="purple" boxSize={boxSize} text="Merch" href="/merch"/>
						<CardBox bg="orange" boxSize={boxSize} text="Contact Us" href="/contactus"/>
					</Wrap>
				</Box>
				<Box w={{base: width * .9125 + 10, md: width * .7625 + 20}}>
					<Divider height="17.5px" borderColor="gray"/>
				</Box>
			</VStack>
		</VStack>
	);
}

function CardBox(props) {
	return (
		<WrapItem>
			<Link href={props.href}>
				<Center bg={props.bg} w={props.boxSize} h={props.boxSize}>
					<Text>
						{props.text}
					</Text>
				</Center>
			</Link>
		</WrapItem>
	);
}

function ImageCaptionCarousel() {
	// Cards for the Carousel (1530 x 600, width x height, https://www.iloveimg.com/crop-image http://www.simpleimageresizer.com/upload)
	const cards = [
		{
		title: 'Holiday Bazaar',
		text:
			"",
		image:
			'./ImageCarousel/1.jpg',
		},
		{
		title: 'Lunar New Year Celebration Meeting',
		text:
			"",
		image:
			'./ImageCarousel/2.jpeg',
		},
	];

	// Image Carousel Settings
	const imageCarouselSettings = {
		dots: true,
		arrows: false,
		fade: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	// Change State of Slider
	const [slider, setSlider] = React.useState<Slider | null>(null);
	
	// Mobile Optimization Breakpoint Values
	const top = useBreakpointValue({ base: '90%', md: '50%' });
	const side = useBreakpointValue({ base: '30%', md: '40px' });
  
	return (
		<Box
			position={'relative'}
			height={'625px'}
			width={'full'}
			overflow={'hidden'}	
		>
			<link
				rel="stylesheet"
				type="text/css"
				charSet="UTF-8"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>
			{/* Left Button */}
			<IconButton
				aria-label="left-arrow"
				variant="ghost"
				position="absolute"
				left={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickPrev()}
				_hover={{ background:"transparent", color:"red.300" }}
				_active={{ background:"transparent" }}
				_focus={{ outline:"none" }}
			>
			<GoChevronLeft size="40px"/>
			</IconButton>
			{/* Right Button */}
			<IconButton
				aria-label="right-arrow"
				variant="ghost"
				position="absolute"
				right={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickNext()}
				_hover={{ background:"transparent", color:"red.300" }}
				_active={{ background:"transparent" }}
				_focus={{ outline:"none" }}
			>
			<GoChevronRight size="40px" />
			</IconButton>
			{/* Slider */}
			<Slider {...imageCarouselSettings} ref={(slider) => setSlider(slider)}>
			{cards.map((card, index) => (
				<Box
					key={index}
					height="600px"
					position="relative"
					backgroundPosition="center"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					backgroundImage={card.image}
				>	
					{/* Customize the caption */}
					<Container size="container.lg" height="600px" position="relative">
						<Stack
							spacing={6}
							w={'full'}
							maxW={'lg'}
							position="absolute"
							top="80%"
							transform="translate(0, -50%)"
						>
							<Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} textAlign="center" 
								display="none" // TEMPORARILY DISABLED
							>{card.title}</Heading>
							<Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">{card.text}</Text>
						</Stack>
					</Container>
				</Box>
			))}
			</Slider>
		</Box>
	);
}

const findWidth = () => {
	const [width, setWidth] = React.useState(0);
	React.useEffect(() => {
	    setWidth(window.innerWidth);
	});
	return width;
};