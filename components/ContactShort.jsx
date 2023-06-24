import Image from "next/image";
import React, {useState} from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Input from "./common/Input";
import Link from "next/link";
import PrevTitle from "./PrevTitle";
import {useRouter} from "next/router";
import MessageInput from "./common/MessageInput";
import {motion} from "framer-motion";
import PhonInput from "./common/PhonInput";
const ContactShort = () => {
  const [value, setValue] = useState();
  const router = useRouter();
  return (
    <div className="py-[80px]">
      <div className="wrapper">
        <div className="grid grid-cols-12 items-center gap-[20px]">
          {/* images */}
          <div className="hidden col-span-12 xl:inline xl:col-span-6">
            <div className="flex w-fit flex-col flex-wrap gap-[16px] h-[727px]">
              <div className="relative w-[286px] h-[361px] mt-[16px]">
                <Image
                  alt=""
                  src="/images/contact/plane.png"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[286px] h-[306px]">
                <Image
                  alt=""
                  src="/images/contact/mtn.png"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[285px] h-[265px]">
                <Image
                  alt=""
                  src="/images/contact/window.png"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[285px] h-[375px]">
                <Image
                  alt=""
                  src="/images/contact/baloons.png"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>
          {/* form */}
          <div className="col-span-12 xl:col-span-6 flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[4px]">
              <PrevTitle prevTitle={"أرسل رسالة"} />
              <h2 className="text-[28px] md:text-[36px] font-bold-600">
                تواصل معنا
              </h2>
            </div>
            {/* actual form */}
            <form action="" className="flex flex-col gap-[12px]">
              <Input
                label={"الإسم الكامل"}
                placeholder={"الإسم الكامل"}
                errorMessage={"رسالة خطاء"}
                type={"text"}
              />
              <Input
                label={"البريد الالكتروني"}
                placeholder={"البريد الالكتروني"}
                errorMessage={"رسالة خطاء"}
                type={"email"}
              />

              <PhonInput
                label={"رقم الهاتف"}
                placeholder={"رقم الهاتف"}
                errorMessage={"رسالة خطاء"}
              />

              <MessageInput />
              <div className="flex gap-[12px] items-center mt-[8px]">
                <motion.button
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className="text-white bg-orange py-[14px] px-[20px] rounded-[8px] text-[16px] font-bold-500 border border-orange hover:bg-[#B94700]"
                >
                  أرسل الآن
                </motion.button>
                <span>أو</span>
                <Link
                  href="/contact-us"
                  className="text-orange bg-white hover:bg-orange/10 hover:text-black py-[14px] px-[20px] rounded-[8px] text-[16px] font-bold-500 border border-orange transtion duration-200"
                >
                  أطلب خدمة
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactShort;
