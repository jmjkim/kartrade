import { Flex, Text, Input, Divider, Button, VStack } from "@chakra-ui/react"
import { useState, Dispatch } from "react";
import googleIcon from "../../asset/icon/googleIcon.svg"
import facebookIcon from "../../asset/icon/facebookIcon.svg"
import twitterIcon from "../../asset/icon/twitterIcon.svg"
import ChakraImage from "../utils/ChakraImage"
import sendAuthLinkToEmail from "@/auth/auth_email_link_send";
import { provider } from "../../auth/google/auth_google_provider_create"
import { SignInWithPopup } from "../../auth/google/auth_google_signin_popup"
import { useRouter } from "next/router";

const LoginPage = ({ setShowSignUpPage }: Dispatch<React.SetStateAction<boolean>>) => {
    const router = useRouter()
    const [ email, setEmail ] = useState("")

    return (
        <Flex 
            flexDir="column" 
            width="100%" 
            px="25px"
        >
            <Text 
                fontSize="fs6" 
                fontWeight="medium" 
                pt="48px" 
                pb="55px"
            >
                Sign In
            </Text>
            <Input 
                fontSize="fs2" 
                variant="unstyled" 
                placeholder="EMAIL" 
                onChange={(e) => setEmail(e.target.value)}
             />
            <Divider borderBottom="bdBottom" />

            <Button
                bg="#1B1B1B"
                colorScheme="white"
                borderRadius="74px"
                width="100%"
                height="55px"
                mt="35px"
                mb="51px"
                onClick={() => sendAuthLinkToEmail(email)}
            >
                <Text fontSize="fs3">
                    SIGN IN
                </Text>
            </Button>

            <Flex align="center">
                <Divider borderBottom="bdBottom" />
                <Text px="33px">
                    OR
                </Text>
                <Divider borderBottom="bdBottom" />
            </Flex>

            <VStack 
                spacing="19px" 
                flexDir="column" 
                mt="39px" 
                mb="30px"
            >
                <Button
                    leftIcon={ 
                        <ChakraImage 
                            src={googleIcon} 
                            alt="google" 
                            width="20px" 
                            height="20px" 
                        /> }
                    width="100%"
                    height="55px"
                    bg="#FFF"
                    border="1px solid #777"
                    borderRadius="74px"
                    onClick={() => SignInWithPopup(provider, router)}
                >
                    <Text fontSize="fs3">
                        Continue with Google
                    </Text>
                </Button>

                <Button
                    leftIcon={ 
                        <ChakraImage 
                            src={facebookIcon} 
                            alt="facebook" 
                            width="20px" 
                            height="20px"
                        /> }
                    width="100%"
                    height="55px"
                    bg="#FFF"
                    border="1px solid #777"
                    borderRadius="74px"
                >
                    <Text fontSize="fs3">
                        Continue with Facebook
                    </Text>
                </Button>

                <Button
                    leftIcon={ 
                        <ChakraImage 
                            src={twitterIcon} 
                            alt="twitter" 
                            width="20px" 
                            height="20px"
                        /> }
                    width="100%"
                    height="55px"
                    bg="#FFF"
                    border="1px solid #777"
                    borderRadius="74px"
                >
                    <Text fontSize="fs3">
                        Continue with Twitter
                    </Text>
                </Button>
            </VStack>

            <Text>
                We will email you a magic code for password-free sign in. Or you can 
                <u>
                    <b id="show_sign_up_page" onClick={() => setShowSignUpPage(true)}>
                        sign up manually
                    </b>
                </u>
            </Text>
        </Flex>
    )
}

export default LoginPage