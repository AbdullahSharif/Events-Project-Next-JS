import Link from "next/link";
import Image from "next/image";
const Events = ({ data }) => {
  return (
    <div className="events-page">
      <h1>Events Page</h1>
      {data.map((ev) => (
        <Link
          href={`/events/${ev.id}`}
          key={ev.id}
          className="events-page-event"
        >
          <Image src={ev.image} width={200} height={200} alt={ev.title} />
          <h2>{ev.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Events;
