import React from "react";
import {
    Face, 
    KeyboardArrowDown, 
    Notifications, 
    Pinterest, 
    Search, 
    Textsms} from '@mui/icons-material';
import { IconButton } from '@mui/material'
import styled from "@emotion/styled";

function Header() {
    return(
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <Pinterest />
                </IconButton>
            </LogoWrapper>
            <HomePageButton>
                <a href="/">Home</a>
            </HomePageButton>
            <FollowingButton>
                <a href="/">Following</a>
            </FollowingButton>
            <SearchWrapper>
                <SearchBar>
                    <IconButton 
                    sx={{
                        ":hover": {
                         bgcolor: "transparent"
                        }
                    }}
                    >
                        <Search />
                    </IconButton>
                    <form>
                        <input type="text" placeholder="Search..." />
                        <button type="submit"></button>
                    </form>
                </SearchBar>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <Textsms />
                </IconButton>
                <IconButton>
                    <Face/>
                </IconButton>
                <IconButton>
                    <KeyboardArrowDown/>
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    )
    
}

export default Header;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
    
`
const LogoWrapper = styled.div`
    .MuiSvgIcon-root{
        color: red;
        font-size: 32px;
        cursor: pointer;
    }
`

const HomeButton = styled.div`
    display: flex;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
`

const HomePageButton = styled(HomeButton)`
    min-width: 90px;
    background-color: rgb(17, 17, 17);

    a{
        text-decoration: none;
        color:white;
        font-weight: 700;
    }
`
const FollowingButton = styled(HomeButton)`
    min-width: 123px;
    background-color: white;

    a{
        text-decoration: none;
        color: black;
        font-weight: 700;
    }

    :hover{
        background-color: #e1e1e1;
    }
`
const SearchWrapper = styled.div`
    flex: 1;
`
const SearchBar = styled.div`
    background-color: #efefef;
    height: 48px;
    display: flex;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;
    form {
        display: flex;
        flex: 1;
    }

    form > input {
        background-color: transparent;
        border: none;
        font-size: 16px;
        width: 100%;
        margin-left: 5px;
        margin-right: 5px;
    }

    form > button {
        display: none;
    }

    input:focus {
        outline: none;
    }
    

`
const IconsWrapper = styled.div`
    margin-left: 10px;
`