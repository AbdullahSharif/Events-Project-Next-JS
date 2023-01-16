import Image from "next/image";
import Link from "next/link";


const Index = ({ data }) => {
    return (
        <div>
            <h1>Events Page</h1>
            {
                data.map(ev => (
                    <Link href={`/events/${ev.id}`} key={ev.id}>

                        <Image src={ev.image} width={200} height={200} alt={ev.title} />
                        <h2>{ev.title}</h2>


                    </Link>
                ))
            }

        </div>
    )
}

export default Index

export async function getStaticProps() {
    const { events_categories } = await import("../../data/data.json");
    return {
        props: {
            data: events_categories
        }
    }
}
