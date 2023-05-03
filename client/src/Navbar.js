import { 
    Box,
    Flex, 
    Container, 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Input,
    Button,
    IconButton,
    Text,
    useMediaQuery,
    Collapse,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
 } from "@chakra-ui/react";
 import { SearchIcon } from '@chakra-ui/icons'
 import { Link } from "react-router-dom";
 import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
 import React from "react";

function Navbar() {

    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const desktopDevice = 
                <Flex justify='center' gap={8} wrap='wrap'
                    w={{
                    sm: '30em', // 480px
                    md: '48em', // 768px
                    lg: '62em', // 992px
                    xl: '80em', // 1280px
                    '2xl': '96em', // 1536px
                    }}>
                    <Text fontSize='2xl' as={Link} to='/general'>頭條</Text>
                    <Text fontSize='2xl' as={Link} to='/science'>科學</Text>
                    <Text fontSize='2xl' as={Link} to='technology'>科技</Text>
                    <Text fontSize='2xl' as={Link} to='sports'>運動</Text>
                    <Text fontSize='2xl' as={Link} to='business'>財經</Text>
                    <Text fontSize='2xl' as={Link} to='entertainment'>娛樂</Text>
                    <Text fontSize='2xl' as={Link} to='health'>健康</Text>
                </Flex>
    const mobileDevice = 
                <Flex justify='center' gap={2} wrap='wrap'>
                    <Text fontSize='xl' as={Link} to='/general'>頭條</Text>
                    <Text fontSize='xl' as={Link} to='/science'>科學</Text>
                    <Text fontSize='xl' as={Link} to='technology'>科技</Text>
                    <Text fontSize='xl' as={Link} to='sports'>運動</Text>
                    <Text fontSize='xl' as={Link} to='business'>財經</Text>
                    <Text fontSize='xl' as={Link} to='entertainment'>娛樂</Text>
                    <Text fontSize='xl' as={Link} to='health'>健康</Text>
                    <IconButton w='20%' onClick={onOpen} ef={btnRef} colorScheme='teal' aria-label='Search icon' icon={<SearchIcon />} />
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>搜尋</DrawerHeader>

                        <DrawerBody>
                            <Input placeholder='今天想看什麼新聞?' />
                            <label>#川普拜登大選</label>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                            取消
                            </Button>
                            <Button colorScheme='blue'>搜尋</Button>
                        </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Flex>
    return (
        <Flex as='header' wrap='wrap' justify='center'
        w={{
            sm: '30em', // 480px
            md: '48em', // 768px
            lg: '62em', // 992px
            xl: '80em', // 1280px
            '2xl': '96em', // 1536px
        }}>
            <Container centerContent='true' maxW='md'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 750 100"
                >
                    <g>
                        <g
                        fontFamily="Brandmark Sans 2 Color"
                        fontSize="72"
                        textAnchor="middle"
                        >
                        <path
                            fill="#216f82"
                            d="M195.33 22.068l37.326 55.948h-12.868L195.81 41.571v36.445h-11.67V22.068h11.19zm37.326 0v43.24c-7.832-4.795-10.95-13.987-11.589-16.225V22.068h11.589zm57.278 45.879v10.23h-41.803v-55.95h40.924v10.232H260.6v35.408l29.333.08h.001zm-21.5-12.629l1.438-10.23h16.464v10.23h-17.902zm78.341-33.25l14.627 55.948h-10.631l-10.47-41.242-10.63 41.242h-13.27L299.14 22.068h13.347l11.031 41.482 10.71-41.482h12.548-.001zm20.222 46.198c-7.674-4.636-7.434-11.35-7.434-11.67l9.032-34.528h12.71l-14.308 46.198zm50.685-23.658c8.312 2.477 17.664 5.354 17.664 17.104 0 10.23-8.233 16.864-20.941 16.864-8.553 0-17.425-3.277-23.898-8.711l4.795-10.071c5.436 4.795 13.428 8.231 19.263 8.231 4.715 0 7.513-2.078 7.513-5.594 0-4.635-5.116-6.154-11.03-7.912l-1.918-.48c-2.878-1.278-4.318-2.958-4.396-7.194 0-1.758.719-3.676.719-3.676.64-1.76 1.838-2.797 2.397-3.438 1.759 2.32 5.595 3.518 9.832 4.797v.08z"
                            className="c1"
                        ></path>
                        <path
                            fill="#5bbe86"
                            d="M397.7 48.284c-2.397-2.318-3.995-5.515-3.995-10.23 0-10.07 8.151-16.625 20.86-16.625 7.273 0 14.866 2.237 20.462 5.994l-4.718 10.312c-5.674-3.358-12.547-5.676-16.943-5.676a16.628 16.628 0 00-6.235 1.199c-4.237 1.678-6.393 4.715-6.793 5.275-.56.799-3.757 5.435-2.637 9.751h-.001z"
                            className="c3"
                        ></path>
                        <path
                            fill="#216f82"
                            d="M502.933 46.366v19.262c-5.276 7.833-14.547 12.868-25.578 12.868-17.264 0-30.292-12.308-30.292-28.694 0-16.144 13.028-28.373 30.292-28.373 9.513 0 17.665 3.677 23.18 9.671l-10.79 6.394c-3.278-3.117-7.673-5.035-12.229-5.035-9.352 0-17.904 7.673-17.904 17.504 0 9.75 8.713 17.664 17.904 17.664 5.435 0 10.63-2.719 13.907-7.034v-3.836h-11.11V46.526l22.62-.16zm58.244 31.571H547.03l-9.911-18.303h-8.072v18.304h-12.55v-55.95h22.86c13.427 0 21.1 5.994 21.1 18.304 0 9.43-3.996 15.346-11.27 17.904l11.99 19.74v.001zm-12.468-37.166c0-6.154-3.596-8.472-10.072-8.472h-9.67v17.105h9.67c6.395 0 10.072-2.398 10.072-8.632v-.001zm56.711-18.703h-13.27l-22.7 55.949h12.79l7.512-20.381 8.632-22.31 15.905 42.69h13.351l-22.22-55.948zm65.998-.08v10.55h-44.84v-10.55h44.84zm-28.775 16.864c5.835-4.635 12.469 0 12.469 0v39.085h-12.548V38.853h.078l.001-.001zm81.717 29.095v10.23h-41.802v-55.95h40.923v10.232h-28.454v35.408l29.333.08zm-21.5-12.629l1.438-10.23h16.465v10.23H702.86z"
                            className="c1"
                        ></path>
                        </g>
                        <image
                        width="150"
                        height="150"
                        x="5.64"
                        y="-25"
                        xlinkHref="data:image/png;base64,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"
                        ></image>
                    </g>
                </svg>
            </Container>
            { isMobile ? mobileDevice : desktopDevice }
            
            <Flex as='form' centerContent='true' justifyContent='flex-end' gap='2' minW='100%'>
                
            </Flex>
        </Flex>
    )
}

export default Navbar;