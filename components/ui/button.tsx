import Link from "next/link";

interface ButtonProps {
  link: string;
  label: string;
  addClass?: string;
}

export function ButtonPrimary({ link, label, addClass }: ButtonProps) {
  return (
    <Link
      href={link}
      className={`
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
              ${addClass}
            `}
    >
      {label}
    </Link>
  );
}

export function ButtonSecondary({ link, label }: ButtonProps) {
  return (
    <Link
      href={link}
      className="
              inline-block
              rounded-[5px]
              px-6.5
              py-3
              text-primary
              bg-light
              transition-all
              duration-300
              ease-in-out
              hover:bg-light-hover
              active:bg-light-active
            "
    >
      {label}
    </Link>
  );
}
