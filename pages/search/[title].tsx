import CardDisplayer from "@/components/CardDisplayer"
import { InferGetServerSidePropsType } from "next"
import { GetServerSidePropsContext } from "next"
import { CardData } from "../api/cards"

const SearchResult = ({ cards }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <CardDisplayer cards={cards} />
}

export default SearchResult

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const res = await fetch(
      `http://localhost:3000/api/search/${context.query.title}`
    );
    const cards: CardData[] = await res.json();
  
    return { props: { cards } };
  }
  