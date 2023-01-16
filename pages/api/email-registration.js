import path from "path";
import fs from "fs";
function createPath() {
    return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
    const extractedData = fs.readFileSync(filePath);
    const data = JSON.parse(extractedData);
    return data;
}

export default function handler(req, res) {
    const filePath = createPath();
    const { events_categories, allEvents } = extractData(filePath);
    if (!allEvents) return res.status(404).json({ message: "No such event exists!" });


    if (req.method == "POST") {
        const { email, eventId } = req.body;
        const newAllEvents = allEvents.map(ev => {
            if (ev.id === eventId) {
                if (ev.emails_registered.includes(email)) {
                    res.status(200).json({ message: `You have already registered for this event.` })
                    return ev;
                }
                return { ...ev, emails_registered: [...ev.emails_registered, email] }
            }
            return ev;
        })
        fs.writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: newAllEvents }));


        res.status(201).json({
            message: `You have registered successfully for the event : ${eventId} with the email: ${email}`
        })
    }

}