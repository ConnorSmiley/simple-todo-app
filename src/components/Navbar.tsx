import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const NavbarContainer = styled.nav`
    ${tw`
    bg-blue-500
    h-12
    w-screen
    z-10
    
    `}
`

export default function Navbar() {

    return(
       <>
       <NavbarContainer />
       </>
    )
}
