import MBooking from "../assets/mm-booking.gif";
import MAutoComplete from "../assets/mm-autocomplete.gif";
import MJobReceived from "../assets/mm-job-received.png";

import DefaultLayout from "@/layouts/default";
import { subtitle, title } from "@/components/primitives";

export default function MajesticMiles() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Majestic Miles</h1>
        </div>

        <div>
          A client approached me asking if I could create a website for their
          Chauffuer business. Here is the result:{" "}
          <a
            className="text-blue-400 underline"
            href="https://majesticmiles.co.uk"
          >
            Majestic Miles
          </a>
          <div>
            <div className={subtitle()}>PlaceKit Autocomplete</div>
            <img alt="" src={MAutoComplete} />
            Here is a demostration of Majestic Miles using PlaceKit Autocomplete
            API. Allowing customers to type their location and destination but
            also an option selecting suggested locations provided for them.
          </div>
          <div>
            <div className={subtitle()}>Booking form + Email routing</div>
            <img alt="" src={MBooking} />
            I implemented a simple booking form with important fields required
            for a Chauffuer business. From date / time to checking if customer
            has a flight number.
            <div className="text-3xl">Receiving job example</div>
            <img alt="" src={MJobReceived} />
            Majestic Miles uses SendGrid for email routing. And all handled by Cloudflare's serverless Workers to handle requests.
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
