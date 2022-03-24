import { Box, Flex, HStack, Link, IconButton, useDisclosure, useColorModeValue, Stack, Image, Text } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from "@components/ColorModeSwitcher";
import { ReactNode } from "react";
import React from "react";

const Links = [["Home", "/"], ["About Us", "/aboutus"], ["Officers", "/officers"], ["Events", "/events"],
	["Fundraiser", "/fundraiser"],["Merch", "/merch"], ["Contact Us", "/contactus"]];
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
	color={useColorModeValue("white", "black")}
    href={children[1]}>
    {children[0]}
  </Link>
);

export default function Header(): JSX.Element {
  	// TEMPORARILY DISABLED
	// const nameColor = useColorModeValue("/mhsvsa/mhsvsa_white.png", "/mhsvsa/mhsvsa_black.png");
	// const background = useColorModeValue("#1a202c", "white");
	// const textColor = useColorModeValue("white", "black");
	const nameColor = "/mhsvsa/mhsvsa_black.png";
	const background = "white";
	const textColor = "black";
	const width = findWidth();
  return (
    <>	
		<DesktopNav width={width} background={background} nameColor={nameColor} textColor={textColor}/>
		<MobileNav background={background} textColor={textColor}/>
    </>
  );
}

function DesktopNav(props) {
	return (
		<HStack
			justify="space-between"
			bg={props.background}
			px="50px"
			py="0px"
			as="header"
			display={{base: "none", lg:"flex"}}
		>
			<Link href="/">
				<Image
					src={props.nameColor}
					width={{
						base: "50px",
						sm: "100px",
						md: "200px",
						lg: "250px",
						xl: "350px",
						}}
				/>
			</Link>
			<HStack
				justify="center"
				align="center"
				spacing={{
					base: "0",
					sm: "10px",
					md: "20px",
					lg: "30px",
					xl: "40px",
				}}
			>
				<NavigationBar href="/" text="Home" />
				<NavigationBar href="/aboutus" text="About Us" />
				<NavigationBar href="/officers" text="Officers" />
				<NavigationBar href="/events" text="Events" />
				<NavigationBar href="/fundraiser" text="Fundraiser" />
				<NavigationBar href="/merch" text="Merch" />
				<NavigationBar href="/contactus" text="Contact Us" />
				<ColorModeSwitcher />
			</HStack>
		</HStack>
	);
}

function MobileNav(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box bg={props.background} px={4} display={{base: "block", lg:"none"}}>
    		<Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
				<IconButton
					size="md"
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={'Open Menu'}
					display={{ lg: 'none' }}
					onClick={isOpen ? onClose : onOpen}
					color={props.textColor}
					bg="{props.background}"
          		/>
          		<HStack spacing={8} alignItems={'center'}>
					<ColorModeSwitcher />
            		<Box color={props.textColor}>
						<Text fontSize="20px" display={{base: "none", sm: "flex"}}>
							MHS Vietnamese Student Association
						</Text>
						<Text fontSize="20px" display={{base: "flex", sm: "none"}}>
							McLean HS VSA
						</Text>
					</Box>
					<HStack
						as={'nav'}
						spacing={4}
						display={{ base: 'none', lg: 'flex' }}
					>
						{Links.map((link) => (
							// @ts-ignore
							<NavLink key={link}>{link}</NavLink>
						))}
					</HStack>
          		</HStack>
        	</Flex>
			{isOpen ? (
				<Box pb={4} display={{ lg: 'none' }}>
					<Stack as={'nav'} spacing={4}>
						{Links.map((link) => (
							// @ts-ignore
							<NavLink key={link}>{link}</NavLink>
						))}
					</Stack>
				</Box>
			) : null}
      	</Box>
	);
}

function NavigationBar(props) {
	// const textColor = useColorModeValue("white", "black"); TEMPORARILY DISABLED
	const textColor = "black";
	return (
		<Link href={props.href}>
			<Text
				fontSize={{
					base: "xs",
					sm: "sm",
					md: "md",
					lg: "lg",
					xl: "xl",
				}}
				color={textColor}
				_hover={{ color: "gray.500" }}
			>
				{props.text}
			</Text>
		</Link>
	);
}

const findWidth = () => {
	const [width, setWidth] = React.useState(0);
	React.useEffect(() => {
	    setWidth(window.innerWidth);
	});
	return width;
};