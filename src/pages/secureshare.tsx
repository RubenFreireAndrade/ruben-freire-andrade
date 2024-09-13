import SApp from "../assets/ss-app.gif";
import SRedis from "../assets/ss-redis-edited.png";
import SGoogleStorage from "../assets/ss-storage.png";

import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function SecureShare() {
  return (
    <DefaultLayout>
      <section className="flex justify-center py-10">
        <div className="max-w-3xl w-full px-4">
          <div className="text-center mb-14">
            <h1 className={title()}>SecureShare</h1>
          </div>

          <section className="mb-14">
            <p className="text-medium">
              Developed a secure file-sharing app with End-To-End encryption,
              enabling users to upload, download and view data within the
              application. Utilising Flutter for cross platform support, NodeJS
              for handling REST API, storing encrypted data in Google Cloud
              Storage, and enhancing performance through Redis.
            </p>
            <img alt="" className="w-full rounded shadow-lg mt-4" src={SApp} />
          </section>

          <section>
            <div className={`${subtitle()} underline`}>Google Storage</div>
            <div className="mb-14">
              <img
                alt=""
                className="w-full rounded shadow-lg mt-4"
                src={SGoogleStorage}
              />
              <p className="text-medium mt-4">
                Google storage is SecureShare's primary database. The data is
                saved in 32-character hex string to prevent any intruder
                cracking and then reading the files. In order to open these
                files it requires validation of client's private / public key
                combination.
              </p>
            </div>

            <div className="mb-14">
              <div className={`${subtitle()} underline`}>Redis</div>
              <p className="text-medium mt-4">
                Redis is being used to improve the overall performance of
                SecureShare application. By caching frequently accessed data,
                this reduces the load on the primary database and overall faster
                file uploads and downloads, especially when handling large
                files, contributing to a smoother and more responsive user
                experience.
              </p>
              <img
                alt=""
                className="w-full rounded shadow-lg mt-4"
                src={SRedis}
              />
              {/* TODO: MIGHT NOT BE USED. */}
              {/* <p>
                The screenshot shown is both creation of a user and files saved
                pointed towards the user uploaded. SecureShare has a different
                way of validating user by checking for an example:
                <h4 className="font-medium">device:Rubs:Windows</h4>
              </p> */}
            </div>
          </section>
        </div>
      </section>
    </DefaultLayout>
  );
}
