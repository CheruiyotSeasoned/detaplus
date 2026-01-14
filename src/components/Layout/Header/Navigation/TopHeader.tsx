import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Phone {
  country: string;
  code: string;
  number: string;
  flagSrc: string;
}

const phones: Phone[] = [
  {
    country: "KE",
    code: "+254",
    number: "759441907",
    flagSrc: "/images/logo/kenya.png",
  }
];

const TopHeader = () => {
  const [phoneListOpen, setPhoneListOpen] = useState(false);

  return (
    <div className="bg-brand-blue py-3.5 text-brand-white text-sm font-semibold">
      <div className="container flex flex-row-reverse md:flex-row gap-6 justify-between items-center">
        {/* Social Links */}
        <ul className="flex gap-3">
          <li>
            <Link
              href="https://t.me/detaplus"
              target="_blank"
              rel="nofollow"
              className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/20 transition"
            >
              <Image
                src="/images/social/telegram.png"
                alt="Telegram"
                width={28}
                height={28}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.me/message/XEY4J3GUTZFED1"
              target="_blank"
              rel="nofollow"
              className="flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/20 transition"
            >
              <Image
                src="/images/social/whatsapp.png"
                alt="WhatsApp"
                width={28}
                height={28}
              />
            </Link>
          </li>
        </ul>

        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex">
            <li>
              <a
                href="mailto:hello@detaplus.com"
                className="flex items-center gap-2 text-sm group"
              >
                <span className="block w-4 h-4 text-white/70 transition-all group-hover:text-white">
                  <svg
                    className="w-full h-full fill-current"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.7376 9.0672L8.0016 10.6152L10.184 9.1096L15.076 13.936C14.9472 13.9776 14.8096 14 14.6664 14H1.3336C1.1576 14 0.989601 13.9656 0.835201 13.904L5.7376 9.0672ZM16 5.1008V12.6664C16 12.864 15.9568 13.0512 15.88 13.22L11.0848 8.4888L16 5.1008ZM7.54882e-07 5.1432L4.8336 8.4488L0.0848008 13.1352C0.0285574 12.9853 -0.000169787 12.8265 7.54882e-07 12.6664V5.1432ZM14.6664 2C15.4024 2 16 2.5968 16 3.3336V3.8024L7.9984 9.3184L7.54882e-07 3.848V3.3336C7.54882e-07 2.5976 0.596801 2 1.3336 2H14.6664Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>hello@detaplus.com</span>
              </a>
            </li>
          </ul>

          {/* Phone Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPhoneListOpen(!phoneListOpen)}
              className="flex items-center gap-3 text-xs md:text-sm py-1.5 px-3 rounded-t-xl transition-all hover:bg-white hover:text-brand-blue"
            >
              <span className="flex-none flex items-center justify-center w-6 h-6">
                <Image
                  src={phones[0].flagSrc}
                  width={32}
                  height={24}
                  alt={phones[0].country}
                />
              </span>
              <span>
                <span className="text-blue/70">{phones[0].code}</span>{" "}
                <span>{phones[0].number}</span>
              </span>
              <svg
                className="ml-1 w-4 h-4 hidden xl:block"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 5.46654L0 1.46654L0.933333 0.533203L4 3.59987L7.06667 0.533203L8 1.46654L4 5.46654Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            {phoneListOpen && (
              <div className="absolute top-full left-0 w-64 bg-white text-black rounded-lg shadow-lg z-50 p-4">
                <span className="block text-sm font-semibold mb-2">
                  You can call us by clicking on the phone number
                </span>
                <ul className="flex flex-col gap-2 max-h-64 overflow-auto">
                  {phones.map((phone, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="flex-none w-24">{phone.country}</span>
                      <Link
                        href={`tel:${phone.code} ${phone.number}`}
                        className="flex items-center gap-2 text-black hover:text-blue-600"
                      >
                        <Image
                          src={phone.flagSrc}
                          width={32}
                          height={24}
                          alt={phone.country}
                        />
                        <span>
                          <span className="text-gray-500">{phone.code}</span>{" "}
                          {phone.number}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
