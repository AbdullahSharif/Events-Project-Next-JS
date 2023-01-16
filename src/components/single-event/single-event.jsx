import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
const Event = ({ data }) => {
  let inputEmail = useRef("");
  const router = useRouter();
  //   console.log(inputEmail);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const eventId = router?.query.id;
    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          eventId,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <>
      <div className="event">
        <h1>{data.title}</h1>
        <Image src={data.image} alt={data.title} width={1000} height={500} />
        <p>{data.description}</p>
      </div>
      <form onSubmit={handleSubmit} className="register-form">
        <label htmlFor="email">Register for this event</label>
        <input
          ref={inputEmail}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email..."
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Event;
