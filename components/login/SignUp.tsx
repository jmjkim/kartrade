import { useState } from "react"
import { Flex, Text, Input, Divider, Button, VStack } from "@chakra-ui/react"
import googleIcon from "../../asset/icon/googleIcon.svg"
import facebookIcon from "../../asset/icon/facebookIcon.svg"
import twitterIcon from "../../asset/icon/twitterIcon.svg"
import ChakraImage from "../utils/ChakraImage"
import FirebaseAuth from '@/lib/firebase-auth';
// import sendAuthLinkToEmail from "@/lib/firebase-auth/auth_email_link_send"

const firebaseAuth = new FirebaseAuth();


const SignUpPage = () => {
    const [email, setEmail] = useState("")

    return (
        <Flex flexDir="column" width="100%" px="25px">
            <Text
                fontSize="fs6"
                fontWeight="medium"
                pt="48px"
                pb="55px"
            >Sign Up
            </Text>
            <Input
                fontSize="fs2"
                variant="unstyled"
                placeholder="NAME"
            />
            <Divider
                borderBottom="bdBottom"
                mb="42px"
            />
            <Input
                fontSize="fs2"
                variant="unstyled"
                placeholder="EMAIL"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Divider
                borderBottom="bdBottom"
            />
            <Button
                bg="#1B1B1B"
                colorScheme="white"
                borderRadius="74px"
                width="100%"
                height="55px"
                mt="35px"
                mb="51px"
                onClick={() => firebaseAuth.sendAuthLinkToEmail(email)}
            >
                <Text fontSize="fs3">SIGN UP</Text>
            </Button>

            <Text pb="46px">We will email you a magic code for password-free sign in.</Text>

            <Flex align="center">
                <Divider borderBottom="bdBottom" />
                <Text px="33px">OR</Text>
                <Divider borderBottom="bdBottom" />
            </Flex>

            <VStack spacing="19px" flexDir="column" mt="39px" mb="30px">
                <Button
                    leftIcon={<ChakraImage src={googleIcon} alt="google" width="20px" height="20px" />}
                    width="100%"
                    height="55px"
                    bg="#FFF"
                    border="1px solid #777"
                    borderRadius="74px"
                >
                    <Text fontSize="fs3">Continue with Google</Text>
                </Button>

                <Button
                    leftIcon={<ChakraImage src={facebookIcon} alt="facebook" width="20px" height="20px" />}
                    width="100%"
                    height="55px"
                    bg="#FFF"
                    border="1px solid #777"
                    borderRadius="74px"
                >
                    <Text fontSize="fs3">Continue with Facebook</Text>
                </Button>

                <Button
                    leftIcon={<ChakraImage src={twitterIcon} alt="twitter" width="20px" height="20px" />}
                    width="100%"
                    height="55px"
                    bg="#FFF"
                    border="1px solid #777"
                    borderRadius="74px"
                >
                    <Text fontSize="fs3">Continue with Twitter</Text>
                </Button>

                <Text pt="25px">By clicking Register or Continue with Google, Facebook, you are agree to Kartrade&apos;s <u><b>Terms of Use</b></u> and <u><b>Privacy Policy</b></u></Text>
            </VStack>
        </Flex>
    )
}

export default SignUpPage
