import Event from "@/src/components/single-event/single-event";
const Page = ({ data }) => {
    return (
        <Event data={data} />
    );
}
export default Page

export async function getStaticPaths() {
    const { allEvents } = await import("../../../data/data.json");
    const allPaths = allEvents.map(path => {
        return {
            params: {
                category: path.city,
                id: path.id
            }
        }
    });

    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {


    const { allEvents } = await import("../../../data/data.json");
    const data = allEvents.find(ev => ev.id == context.params.id);

    return {
        props: {
            data
        }
    }
}