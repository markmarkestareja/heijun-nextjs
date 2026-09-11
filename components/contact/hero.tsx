import React from "react";
import "./hero.css";

export default function hero() {
  return (
    <section className="bg-(image:--gradient)">
      <div className="flex flex-col gap-6 pt-20">
        <div className="flex flex-col gap-4">
          <h1>What Can We Help You With?</h1>
          <p>
            If you have any inquiries about Heijun Hotel Supplies & General
            Merchandise, please feel free to fill out the form or call or email
            us at the information provided below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
          <form action="/" method="POST" className="flex flex-col gap-2 flex-1">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="input"
            />

            <input
              id="email"
              name="email"
              type="text"
              placeholder="Your Email"
              required
              className="input"
            />

            <input
              id="address"
              name="address"
              type="text"
              placeholder="Your Address"
              required
              className="input"
            />

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company Name"
              className="input"
            />

            <input
              id="number"
              name="number"
              type="text"
              placeholder="Contact Number"
              className="input"
            />

            <select
              id="category"
              name="category"
              required
              defaultValue=""
              className="input"
            >
              <option value="" disabled>
                Product Category
              </option>
              <option value="hotel_amenities">Hotel Amenities</option>
              <option value="lobby_products">Lobby Products</option>

              <option value="housekeeping_products">
                Housekeeping Products
              </option>

              <option value="pillow_linens">Pillow and Linens</option>
            </select>

            <select
              id="branch"
              name="branch"
              required
              defaultValue=""
              className="input"
            >
              <option value="hotel_amenities">Angeles Branch</option>
              <option value="lobby_products">Boracay Branch</option>
            </select>

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="
                w-full
                min-h-50
                rounded-lg
                border
                border-gray-300
                bg-white
                p-4
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-[#af821d]
                focus:ring-1
                focus:ring-[#af821d]
              "
            />

            <button
              type="submit"
              className="
              w-fit
                inline-block
                rounded-[5px]
                px-6.5
                py-3
                text-light
                bg-linear-to-r
                from-[#ee0000]
                via-[#b50202]
                to-[#ee0000]
                bg-[length:200%_auto]
                bg-left
                transition-all
                duration-500
                hover:bg-right
                active:bg-[hsla(0,100%,47%,0.6)]
              "
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-1">
            <iframe
              aria-label="Google Maps location of Heijun Hotel Supply General Merchandise in Angeles City, Philippines"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.927534510325!2d120.57791697496054!3d15.162323885393294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3000fcf5f8d%3A0x8eb939621e1bd4fd!2sHeiJun%20Hotel%20Supply%20General%20Merchandise!5e0!3m2!1sen!2sph!4v1787560051170!5m2!1sen!2sph"
              width="600"
              height="450"
              className="border-0 w-full h-full rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
