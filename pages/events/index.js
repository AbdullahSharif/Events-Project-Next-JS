import Events from "@/src/components/events-page/events-page";


const Index = ({ data }) => {
    return (
        <Events data={data} />
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
