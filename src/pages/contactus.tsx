import { VStack, Center, Box, Heading, Button, extendTheme, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, useDisclosure } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaStripeS, FaInstagram } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';


export default function ContactUs() {
	const background = useColorModeValue("white", "black");
	var a = 'hey what good'
	const Overlay = () => (
		<ModalOverlay
		  bg='blackAlpha.0'
		  backdropFilter='blur(0px)'
		/>
	)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [text, setText] = React.useState('')
	return (
		<VStack bg='white' h='920px'>
			<Center w='100%' height="300px" bg='lightgray' color='black'>
				<Heading fontSize='300%'>Contact Us</Heading>
			</Center>
			<Box m={5} p={5} textAlign='center' color='black' borderBottom='1px' borderBottomColor='gray'>
				Feel free to check us out on any of our social media or send us an email
				for any questions or comments!
			</Box>
			<Box>
				<Button 
					m={1} 
					colorScheme='blue' 
					onClick={() => {
						setText('Schoology Code: 9J47-3QWD-6SHKD')
						onOpen()
					}}
					leftIcon={<FaStripeS />}
				>
					Schoology
				</Button>
				<Button 
					m={1} 
					colorScheme='red' 
					onClick={() => {
						setText('VSA Email: mcleanvsa@gmail.com President Tran-Luu\'s Email: xilacxilac@gmail.com')
						onOpen()
					}}
					leftIcon={<MdEmail />}
				>
					Email
				</Button>
				<Button 
					m={1} 
					color='black'
					transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
					bgGradient='linear(to-tr, #ffedbf, #fdd7a2, #fbbb9b, #faaf9f, #fe8e8e, #f097b5, #e297c1, #c198dd, #aba7ed, #9fadf2)' 
					_hover={{
						bgGradient:'linear(to-tr, #ffe49f, #fcc373, #f99969, #f7876f, #fd5555, #e86390, #d463a3, #a364cd, #817ce4, #6f85ec)'
					}}
					_active={{
						bgGradient: 'linear(to-tr, #FFDC80, #FCAF45, #F77737, #F56040, #FD1D1D, #E1306C, #C13584, #833AB4, #5851DB, #405DE6)',
						borderColor: '#bec3c9'
					}}
					onClick={() => {
						setText('Instagram: mclean_vsa')
						onOpen()
					}}
					leftIcon={<FaInstagram />}>
					Instagram
				</Button>
				<Modal trapFocus={false} isCentered isOpen={isOpen} onClose={onClose} size = '4xl'>
        			{Overlay}
        			<ModalContent top={90}>
          				<ModalHeader/>
          				<ModalBody>
            				{text}
          				</ModalBody>
          				<ModalFooter/>
        			</ModalContent>
      			</Modal>
			</Box>
		</VStack>
	);
}
