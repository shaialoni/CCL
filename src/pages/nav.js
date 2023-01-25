import React from "react"
import { Flex } from "theme-ui"
import { NavLink } from "theme-ui"
import { Box } from "theme-ui"
import {Button} from "theme-ui"

// import {
//     Flex,
//     NavLink,
//     Logo,
//     Box,
//     Button
// } from "theme-ui"

const Nav = () => {
    return (
    
        <Flex as="nav" sx={{justifyContent: 'space-between'}}>
        <Flex sx={{ alignItems: 'center' }}>
            <div>
            <NavLink href="#!" sx={{ p: '2', display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '2'}}>
                <Flex sx={{ minWidth: 40 }}/> Gallery
            </NavLink>
            </div>
            <NavLink href="#!" p={2}>
            Docs
            </NavLink>
            <NavLink href="#!" p={2}>
            Blog
            </NavLink>
        </Flex>
        <Box sx={{ display: 'flex', placeItems: 'center' }}>
            <Button py={1}>Get Started</Button>
        </Box>
        </Flex>
    )
}

export default Nav