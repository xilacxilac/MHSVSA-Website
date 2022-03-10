import React from 'react';
import { VStack, Text, Box, IconButton, useBreakpointValue, Stack, Heading, Container, Center, Wrap, WrapItem } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { useColorModeValue } from "@chakra-ui/react";

export default function Home() {
	// @ts-ignore
	const width = findWidth();
	console.log({width});
	const background = useColorModeValue("black", "white");
	const boxSize = {base: width * 0.45, md: width * .25};
	const boxContainerHeight = {base: (width * width * 0.091125) + 20, md: (width * width * 0.0625) + 10};
	return (
		<VStack bg={background}>
			<ImageCaptionCarousel />
			<VStack bg={background} h="2000px">
				<Box w={width} h="50px" bg={background}>

				</Box>
				<Box justify="center" bg="pink" w={{base: width * .9 + 10, md:width * .75 + 20}} maxH={boxContainerHeight}>
					<Wrap spacing="10px" >
						<WrapItem>
							<Center bg="blue" w={boxSize} h={boxSize}>
								About Us
							</Center>
						</WrapItem>
						<WrapItem>
							<Center bg="red" w={boxSize} h={boxSize}>
								Officers
							</Center>
						</WrapItem>
						<WrapItem>
							<Center bg="green" w={boxSize} h={boxSize}> 
								Events
							</Center>
						</WrapItem>
						<WrapItem>
							<Center bg="black" w={boxSize} h={boxSize}>
								Box 4
							</Center>
						</WrapItem>
						<WrapItem>
							<Center bg="purple" w={boxSize} h={boxSize}>
								Merch
							</Center>
						</WrapItem>
						<WrapItem>
							<Center bg="orange" w={boxSize} h={boxSize}>
								Contact Us
							</Center>
						</WrapItem>
					</Wrap>
				</Box>
			</VStack>
		</VStack>
	);
}
  
function ImageCaptionCarousel() {
	// Cards for the Carousel
	const cards = [
		{
		title: 'Holiday Bazaar',
		text:
			"",
		image:
			'/Album/21-12-11/2.jpg',
		},
		{
		title: 'Lunar New Year Celebration Meeting',
		text:
			"",
		image:
			'/Album/22-1-31/3.JPEG',
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
			height={'600px'}
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
			>
			<BiLeftArrowAlt size="40px"/>
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
			>
			<BiRightArrowAlt size="40px" />
			</IconButton>
			{/* Slider */}
			<Slider {...imageCarouselSettings} ref={(slider) => setSlider(slider)}>
			{cards.map((card, index) => (
				<Box
				key={index}
				height={'4xl'}
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
							<Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} textAlign="center">{card.title}</Heading>
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