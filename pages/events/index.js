import Image from "next/image";


const Index = ({ data }) => {
    return (
        <div>
            <h1>Events Page</h1>
            {
                data.map(ev => (
                    <a href={`/events/${ev.id}`}>
                        <Image src={ev.image} width={200} height={200} />
                        <h2>{ev.title}</h2>

                    </a>
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
