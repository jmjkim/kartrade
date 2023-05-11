import { getAuth } from 'firebase/auth';
import { Dispatch, SetStateAction, useEffect, useState, FC } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { CardData } from '@/pages/api/cards';
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import { Box, Divider } from '@chakra-ui/react';
import MainCardDisplayer from '@/components/card/MainCardDisplayer';
import LoginPage from '@/components/main/LoginPage';
import SignUpPage from '@/components/login/SignUp';
import CardDisplayer from '@/components/CardDisplayer';
import SortPrice from '@/components/nav/SortPrice';
import signOutUser from '../auth/auth_sign_out';
import CheckUserWithEmailLink from '../auth/email_link_complete'

export default function Home ({ cards }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const auth = getAuth()
  const router = useRouter()
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);

  console.log(auth);

  useEffect(() => {
    CheckUserWithEmailLink()
  }, [])

  const signOutUserAndRedirectToHome = () => {
    signOutUser()
    setShowLoginPage(false)
    router.push("/")
  }

  if (auth.currentUser !== null) {
    return (
      <>
        <button onClick={() => signOutUserAndRedirectToHome(setShowLoginPage, router)}>sign out</button>

        <SortPrice />
        <Divider 
          mt="18.5px" 
          mb="25.5px" 
          borderBottom="bdBottom" 
        />

        <Box px="25px">
          <MainCardDisplayer />
        </Box>
        <Divider 
          my="25px"
          borderBottom="bdBottom"
        />
        <CardDisplayer cards={cards} />
      </>
    )
  }

  if (showSignUpPage) {
    return <SignUpPage />
  }

  return (
    <>
      <button onClick={() => setShowLoginPage(true)}>bypass login</button>
      <LoginPage setShowSignUpPage={setShowSignUpPage} />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { sort } = context.query;
  const res = await fetch(`http://localhost:3000/api/cards`);
  const cards: CardData[] = await res.json();

  if (sort === 'price_asc' || sort === 'price_desc') {
    const res = await fetch(`http://localhost:3000/api/cards?sort=${sort}`);
    const cards: CardData[] = await res.json();

    return { props: { cards } }
  }
  return { props: { cards } };
}
