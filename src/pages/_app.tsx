import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@components/footer";
import Header from "@components/header";
import NotificationAlert from "@components/NotificationAlert";
import theme from "@styles/theme";
import { pageview } from "@lib/gtag";
import { META } from "config";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	// @ts-ignore
	const size = useWindowSize();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	
	return (
		<>
			<Head>
				<title>{META.title}</title>
				<link rel="icon" href="/vsa.ico" />
			</Head>
			<ChakraProvider theme={theme}>
				<NotificationAlert/>
				{/* <VerticallyCenter/> */}
				<Header />

				<Component {...pageProps} />

				<Footer />
			</ChakraProvider>
		</>
	);
}

// @ts-ignore feature disabled
function VerticallyCenter() {
	const { onClose } = useDisclosure();
	const [show, setShow] = useState(0);
	const arr = [true, false]
	return (
		<> 
			<Modal onClose={onClose} isOpen={arr[show]} isCentered>
				<ModalOverlay/>
				<ModalContent>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton onClick={() => {setShow(show + 1)}}/>
				<ModalBody>
					heheheha
				</ModalBody>
				<ModalFooter>
					<Button onClick={() => {setShow(show + 1)}}>Close</Button>
				</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
  }

export function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
	  width: undefined,
	  height: undefined,
	});
	useEffect(() => {
	  // Handler to call on window resize
	  function handleResize() {
		// Set window width/height to state
		setWindowSize({
		  width: window.innerWidth,
		  height: window.innerHeight,
		});
	  }
	  // Add event listener
	  window.addEventListener("resize", handleResize);
	  // Call handler right away so state gets updated with initial window size
	  handleResize();
	  // Remove event listener on cleanup
	  return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
  }