import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section>
      <div
        className="
        flex
        flex-col
        lg:flex-row
        items-center
        lg:items-start
        gap-9
      "
      >
        <div className="relative h-50 w-50 shrink-0">
          <Image src="/images/logo/heijun-emblem.webp" alt="Heijun Hotel supplies and General Merchandise Emblem" fill className="" />
        </div>

        <div className="flex flex-col gap-4 items-center text-center lg:text-start flex-1">
          <h4>Discover</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact US</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 items-center text-center lg:text-start flex-1">
          <h4>Follow Us</h4>
          <ul className="flex gap-4">
            <li>
              <Link href="/" aria-label="Heijun Facebook Page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21 21 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104z"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/" aria-label="Heijun Instagram Page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/" aria-label="Heijun LinkedIn Page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M19.76 13.745c-3.197 1.64-6.776-1.417-5.661-4.833c1.12-3.417 5.813-3.767 7.423-.552a4 4 0 0 1-1.761 5.389zM15.469.76c3.291-1.197 7.057-1.135 9.875 1.313a4.8 4.8 0 0 1 1.364 1.828c.281.916-1-.095-1.172-.224a12.7 12.7 0 0 0-2.869-1.464C17.115.516 11.864 3.609 8.62 8.421a26 26 0 0 0-3 6.833a4.2 4.2 0 0 1-.281.86c-.145.271-.068-.735-.068-.765c.12-1.005.313-2.005.573-2.985C7.349 7.12 10.683 2.755 15.469.755zm.047 27.995V17.068c.333.036.645.052.979.052c1.516.005 3-.412 4.297-1.193V28.75c0 1.1-.204 1.907-.699 2.439a2.49 2.49 0 0 1-1.932.812a2.44 2.44 0 0 1-1.907-.812c-.489-.537-.744-1.349-.744-2.433z"
                  ></path>
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex w-full min-w-0 flex-3 flex-col gap-4 items-center text-center lg:items-start lg:text-left">
          <h4>Contact Information</h4>
          <h5>Angeles Branch</h5>
          <ul className="flex w-full min-w-0 flex-col gap-2">
            

            <li className="w-full min-w-0 wrap-break-words">
              Blk. 7 Lot 1 Malabanias Rd. Cor Josefa St. Josefa Subd.,
              Malabanias, Angeles City 2009
            </li>

            <li className="w-full min-w-0 wrap-break-words">
              <span className="font-semibold">Contact Number: </span>
              <Link href="tel:+639171390363">0917-139-0363</Link>
            </li>

            <li className="w-full min-w-0 wrap-break-words">
              <span className="font-semibold">Emails: </span>

              <Link
                href="mailto:marketing@heijunhotelsupply.com"
                className="wrap-break-words"
              >
                marketing@heijunhotelsupply.com
              </Link>

              <span> | </span>

              <Link
                href="mailto:socmed@heijunhotelsupply.com"
                className="wrap-break-words"
              >
                socmed@heijunhotelsupply.com
              </Link>
            </li>
          </ul>
          <h5>Boracay Branch</h5>
          <ul className="flex w-full min-w-0 flex-col gap-2">
            

            <li className="w-full min-w-0 wrap-break-words">
              Lovells Compound, Boracay, Main Road Balabag, Boracay Malay, Aklan
            </li>

            <li className="w-full min-w-0 wrap-break-words">
              <span className="font-semibold">Landline: </span>
              <Link href="tel:+6362889822">+(636) 288 9822</Link>
            </li>

            <li className="w-full min-w-0 wrap-break-words">
              <span className="font-semibold">Contact Number: </span>
              <Link href="tel:+639177171625">0917-717-1625</Link>
            </li>

            <li className="w-full min-w-0 wrap-break-words">
              <span className="font-semibold">Emails: </span>

              <Link
                href="mailto:sales@heijunhotelsupply.com"
                className="wrap-break-words"
              >
                sales@heijunhotelsupply.com
              </Link>

              <span> | </span>

              <Link
                href="mailto:sales@executiveheijunhotelsupply.com"
                className="wrap-break-words"
              >
                sales@executiveheijunhotelsupply.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </section>
  );
}
