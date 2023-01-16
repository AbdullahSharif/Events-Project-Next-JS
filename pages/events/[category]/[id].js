import Image from "next/image";
const Page = ({ data }) => {
    return (
        <div style={{ color: "white" }}>
            <h1>{data.title}</h1>
            <Image src={data.image} alt={data.title} width={300} height={300} />
            <p>{data.description}</p>


        </div>
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
    console.log(data);
    return {
        props: {
            data
        }
    }
}