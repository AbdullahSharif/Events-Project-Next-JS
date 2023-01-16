import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => {
  return (
    <main className="home">
      {data.map((ev) => (
        <Link
          key={ev.id}
          href={`/events/${ev.id}`}
          passHref
          className="home-event"
        >
          <Image src={ev.image} height={200} width={200} alt={ev.title} />
          <div>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </main>
  );
};
export default HomePage;
