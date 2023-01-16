import Image from "next/image";
import Link from "next/link";

const Page = ({ data, pageName }) => {
    return (
        <div>
            <h1>Events in {pageName}</h1>
            {
                data.map(ev => (
                    <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref className="events-page-event">

                        <Image src={ev.image} height={200} width={300} alt={ev.title} />
                        <div>
                            <h2>{ev.title}</h2>
                            <p>{ev.description}</p>
                        </div>


                    </Link>
                ))
            }

        </div>
    );
}
export default Page

export async function getStaticPaths() {
    const { events_categories } = await import("../../../data/data.json");
    const events = events_categories.map(ev => {
        return {
            params: {
                category: ev.id.toString()
            }
        }
    });

    return {
        paths: events,
        fallback: false
    }

}

export async function getStaticProps(context) {

    const { allEvents } = await import("../../../data/data.json")
    const data = allEvents.filter(ev => ev.city === context?.params.category);


    return {
        props: {
            data,
            pageName: context?.params.category
        }
    }
}