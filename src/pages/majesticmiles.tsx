import MBooking from "../assets/mm-booking.gif";
import MAutoComplete from "../assets/mm-autocomplete.gif";
import MJobReceived from "../assets/mm-job-received.png";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

export default function MajesticMiles() {
  return (
    <DefaultLayout>
      <section className="flex justify-center py-10">
        <div className="max-w-3xl w-full px-4">
          <div className="text-center mb-8">
            <h1 className={title()}>Majestic Miles</h1>
          </div>

          <div className="mb-14">
            <p className="text-medium">
              I designed and deployed a website for Majestic Miles, a chauffeur
              service startup, using React and Tailwind CSS to create a sleek,
              responsive user interface. The site is hosted on Cloudflare,
              leveraging serverless Workers to streamline API functionalities,
              ensuring fast and efficient handling of customer bookings and
              inquiries. Here is the result:{" "}
              <a
                className="text-blue-500 underline"
                href="https://majesticmiles.co.uk"
                rel="noopener noreferrer"
                target="_blank"
              >
                Majestic Miles
              </a>
            </p>
          </div>

          <div className="mb-14">
            <div className="text-2xl font-semibold">PlaceKit Autocomplete</div>
            <p className="mt-4 text-medium">
              The PlaceKit Autocomplete API allows users to quickly input their
              pickup and destination addresses, with suggestions for common
              locations to speed up the process and minimize errors.
            </p>
            <img
              alt="PlaceKit Autocomplete"
              className="w-full rounded shadow-lg mt-4"
              src={MAutoComplete}
            />
          </div>

          <div className="mb-14">
            <div className="text-2xl font-semibold">Booking form</div>
            <p className="mt-4 text-medium">
              The custom booking form was designed with key fields tailored to a
              chauffeur service, including date, time, and optional flight
              number entry. This ensures all critical details are captured,
              streamlining the booking process for both customers and the
              business.
            </p>
            <img
              alt="Booking Form"
              className="w-full rounded shadow-lg mt-4"
              src={MBooking}
            />
          </div>

          <div className="mb-14">
            <div className="text-2xl font-semibold mt-6">Email routing</div>
            <p className="mt-4 text-medium">
              For seamless communication, the site leverages SendGrid for email
              routing, ensuring timely and reliable email notifications. All
              server-side logic, including job management, is efficiently
              handled using Cloudflare’s serverless Workers, enabling fast,
              scalable request handling.
            </p>
            <img
              alt="Job Received"
              className="w-full rounded shadow-lg mt-4"
              src={MJobReceived}
            />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
