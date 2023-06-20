import Image from "next/image";
import Link from "next/link";
import Input from "../../components/common/Input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {useState} from "react";
import Select from "../../components/common/Select";
import MessageInput from "../../components/common/MessageInput";
//import CalenderInput from "../../components/common/CalenderInput";

const fbLink = "";
const igLink = "";
const twitterLink = "";

const ContctUs = () => {
  const [value, setValue] = useState();

  return (
    <div className="wrapper">
      <div className="grid grid-cols-12 items-start justify-start gap-[20px]">
        <div className="col-span-12 md:col-span-6 lg:col-span-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[4px]">
              <p className="text-orange font-bold-500 text-[16px]">
                أرسل رسالتك الآن
              </p>
              <h2 className="text-[32px] md:text-[48px] xl:text-[56px] font-bold-600">
                تواصل مع السلام للسياحة و السفر
              </h2>
            </div>
          </div>
          <form>
            <Input
              label={"الاسم الأول"}
              placeholder={"الاسم الأول"}
              errorMessage={"رسالة خطاء"}
              type={"text"}
            />
            <Input
              label={"البريد الالكتروني"}
              placeholder={"البريد الالكتروني"}
              errorMessage={"رسالة خطاء"}
              type={"email"}
            />

            <div className="flex flex-col gap-[8px] ">
              <label
                htmlFor=""
                className="font-bold-500 text-[12px] text-[#3E444D]"
              >
                رقم الهاتف
              </label>
              <PhoneInput
                dir="ltr"
                international
                defaultCountry="TR"
                className="outline-none focus:border-none w-full border border-[#C8CBD0] rounded-[8px] py-[16px] px-[12px] text-[14px] placeholder:text-[14px] focus-within:bg-orange/10 duration-300"
                // value={value}
                onChange={setValue}
                placeholder="رقم الهاتف"
              />
            </div>
            <Input
              label={"عدد الكبار - ( أكبر من 06 سنوات )"}
              placeholder={"عدد الكبار"}
              errorMessage={"رسالة خطاء"}
              type={"number"}
            />
            <Input
              label={"عدد الصغار - ( أصغر من 06 سنوات )"}
              placeholder={"عدد الصغار"}
              errorMessage={"رسالة خطاء"}
              type={"number"}
            />
            <Select
              label={"إختر الوجهات"}
              placeholder={"إختر الوجهات"}
              errorMessage={"رسالة خطاء"}
              options={["اسطنبول", "طرابزون", "ريزا", "الأناضول", "دينيز"]}
            />
            <Select
              label={"إختر الخدمة"}
              placeholder={"البرامج السايحية"}
              errorMessage={"رسالة خطاء"}
              options={[
                "البرامج السايحية",
                "رحلات يومية",
                "اجار سيارات",
                "اجار اقامة",
              ]}
            />
            <div className="flex flex-col md:flex-row items-center justify-between gap-[16px]">
              <Input
                label={"إختر تاريخ الوصول"}
                placeholder={"تاريخ الوصول"}
                errorMessage={"رسالة خطاء"}
                type={"date"}
              />
              <Input
                label={"إختر تاريخ الوصول"}
                placeholder={"تاريخ الوصول"}
                errorMessage={"رسالة خطاء"}
                type={"date"}
              />
            </div>
            <MessageInput
              label={"نص الرسالة"}
              placeholder={"نص الرسالة ...."}
              errorMessage={"رسالة خطاء"}
            />
            <button className="text-white bg-orange py-[14px] px-[20px] rounded-[8px] text-[16px] font-bold-500 border border-orange">
              أرسل الرسالة
            </button>
          </form>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-6">
          <div className="">
            <div className="flex flex-col gap-[48px]">
              <h1 className="font-bold-600 text-[24px] sm:text-[28px] text-start">
                استمتع بتجربة سياحية لا تُنسى تتضمن:
              </h1>
              <div className="grid grid-cols-12 gap-x-[25px] sm:gap-x-[20px] gap-y-[32px]">
                {/* one item */}
                <div className=" col-span-12 sm:col-span-6 lg:col-span-6 flex flex-col xl:flex-row  gap-[12px] p-1 md:p-2  duration-500 rounded-md items-start">
                  <Image
                    alt=""
                    src="/icons/enjoy/support.svg"
                    height={44}
                    width={44}
                  />
                  <div className=" lg:w-auto flex flex-col items-start">
                    <h4 className="font-bold-600 text-[18px]">دعم 24/7</h4>
                    <p className="text-[14px] text-grey text-start">
                      نحن بجانبك دائمًا! استمتع بمساعدتنا الودودة والمستمرة على
                      مدار الساعة لتجربة سفر لا مشاكل فيها.
                    </p>
                  </div>
                </div>
                {/* one item */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-6 flex flex-col xl:flex-row  gap-[12px] p-1 md:p-2  duration-500 rounded-md items-start">
                  <Image
                    alt=""
                    src="/icons/enjoy/cashy.svg"
                    height={44}
                    width={44}
                  />
                  <div className=" lg:w-auto flex flex-col items-start">
                    <h4 className="font-bold-600 text-[18px]">إلغاء مرن</h4>
                    <p className="text-[14px] text-grey text-start">
                      لا تقلق بشأن تغيير الخطط. سياسات الإلغاء المرنة لدينا
                      تمنحك حرية التعديل بكل يسر.
                    </p>
                  </div>
                </div>
                {/* one item */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-6 flex flex-col xl:flex-row  gap-[12px] p-1 md:p-2  duration-500 rounded-md items-start">
                  <Image
                    alt=""
                    src="/icons/enjoy/stars.svg"
                    height={44}
                    width={44}
                  />
                  <div className=" lg:w-auto flex flex-col items-start">
                    <h4 className="font-bold-600 text-[18px]">خبرة طويلة</h4>
                    <p className="text-[14px] text-grey text-start">
                      اترك الأمور علينا! استفد من خبرتنا الواسعة في مجال السياحة
                      لتنظيم رحلة ساحرة ومليئة بالمرح.
                    </p>
                  </div>
                </div>
                {/* one item */}
                <div className="col-span-12 sm:col-span-6 lg:col-span-6 flex flex-col xl:flex-row  gap-[12px] p-1 md:p-2  duration-500 rounded-md items-start">
                  <Image
                    alt=""
                    src="/icons/enjoy/check.svg"
                    height={44}
                    width={44}
                  />
                  <div className="lg:w-auto flex flex-col items-start">
                    <h4 className="font-bold-600 text-[18px]">أمان و ضمان</h4>
                    <p className="text-[14px] text-grey text-start">
                      اطمئن واستمتع برحلتك ! نحرص على توفير تجربة سفر آمنة
                      وموثوقة مع ضمان جودة الخدمات المقدمة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] mt-[74px]">
            <h1 className="font-bold-600 text-[24px] sm:text-[28px]">
              معلومات الإتصال
            </h1>
            <div className="py-[4px] text-grey hover:text-orange duration-300 ease-in flex items-center gap-x-[4px] text-[12px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10.5001C15 11.2957 14.6839 12.0588 14.1213 12.6214C13.5587 13.184 12.7956 13.5001 12 13.5001C11.2044 13.5001 10.4413 13.184 9.87868 12.6214C9.31607 12.0588 9 11.2957 9 10.5001C9 9.70444 9.31607 8.94138 9.87868 8.37877C10.4413 7.81616 11.2044 7.50009 12 7.50009C12.7956 7.50009 13.5587 7.81616 14.1213 8.37877C14.6839 8.94138 15 9.70444 15 10.5001Z"
                  stroke="#F08631"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5 10.5001C19.5 17.6421 12 21.7501 12 21.7501C12 21.7501 4.5 17.6421 4.5 10.5001C4.5 8.51097 5.29018 6.60331 6.6967 5.19679C8.10322 3.79027 10.0109 3.00009 12 3.00009C13.9891 3.00009 15.8968 3.79027 17.3033 5.19679C18.7098 6.60331 19.5 8.51097 19.5 10.5001Z"
                  stroke="#F08631"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              المدينة, الشارع, الحي
            </div>
            <div className="py-[4px] text-grey hover:text-orange duration-300 ease-in flex items-center gap-x-[4px] text-[12px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 6.75009C2.25 15.0341 8.966 21.7501 17.25 21.7501H19.5C20.0967 21.7501 20.669 21.513 21.091 21.0911C21.5129 20.6691 21.75 20.0968 21.75 19.5001V18.1281C21.75 17.6121 21.399 17.1621 20.898 17.0371L16.475 15.9311C16.035 15.8211 15.573 15.9861 15.302 16.3481L14.332 17.6411C14.05 18.0171 13.563 18.1831 13.122 18.0211C11.4849 17.4192 9.99815 16.4687 8.76478 15.2353C7.53141 14.0019 6.58087 12.5152 5.979 10.8781C5.817 10.4371 5.983 9.95009 6.359 9.66809L7.652 8.69809C8.015 8.42709 8.179 7.96409 8.069 7.52509L6.963 3.10209C6.90214 2.85879 6.76172 2.64279 6.56405 2.48843C6.36638 2.33406 6.1228 2.25017 5.872 2.25009H4.5C3.90326 2.25009 3.33097 2.48714 2.90901 2.9091C2.48705 3.33106 2.25 3.90335 2.25 4.50009V6.75009Z"
                  stroke="#F08631"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span dir="ltr">+90 222 333 4444</span>
            </div>
            <div className="py-[4px] text-grey hover:text-orange duration-300 ease-in flex items-center gap-x-[4px] text-[12px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.75 6.75009V17.2501C21.75 17.8468 21.5129 18.4191 21.091 18.8411C20.669 19.263 20.0967 19.5001 19.5 19.5001H4.5C3.90326 19.5001 3.33097 19.263 2.90901 18.8411C2.48705 18.4191 2.25 17.8468 2.25 17.2501V6.75009M21.75 6.75009C21.75 6.15335 21.5129 5.58106 21.091 5.1591C20.669 4.73714 20.0967 4.50009 19.5 4.50009H4.5C3.90326 4.50009 3.33097 4.73714 2.90901 5.1591C2.48705 5.58106 2.25 6.15335 2.25 6.75009M21.75 6.75009V6.99309C21.75 7.37724 21.6517 7.755 21.4644 8.09039C21.2771 8.42578 21.0071 8.70763 20.68 8.90909L13.18 13.5241C12.8252 13.7426 12.4167 13.8583 12 13.8583C11.5833 13.8583 11.1748 13.7426 10.82 13.5241L3.32 8.91009C2.99292 8.70863 2.72287 8.42678 2.53557 8.09139C2.34827 7.756 2.24996 7.37824 2.25 6.99409V6.75009"
                  stroke="#F08631"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              mailto:abdullah@salaamtravell.com
            </div>
            <div className="py-[4px] text-grey hover:text-orange duration-300 ease-in flex items-center gap-x-[4px] text-[12px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                  stroke="#F08631"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              من الساعة 9:00am وحتى الساعة 12:00am كل أيام الأسبوع عدا الأحد.
            </div>
            <div className="flex gap-[12px] items-center">
              <p className="text-[#3E444D] text-[12px]">تواصل معنا</p>
              <Link href={igLink}>
                <div className="rounded-full border-[1px] border-solid border-[#F08631] p-[6px] hover:bg-orange ease-out duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3.46679C12.1333 3.46679 12.4 3.46679 13.2667 3.53346C15.4667 3.60012 16.4667 4.66679 16.5333 6.80012C16.6 7.66679 16.6 7.86679 16.6 10.0001C16.6 12.1335 16.6 12.4001 16.5333 13.2001C16.4667 15.3335 15.4 16.4001 13.2667 16.4668C12.4 16.5335 12.2 16.5335 10 16.5335C7.86667 16.5335 7.6 16.5335 6.8 16.4668C4.6 16.4001 3.6 15.3335 3.53333 13.2001C3.46667 12.3335 3.46667 12.1335 3.46667 10.0001C3.46667 7.86679 3.46667 7.60012 3.53333 6.80012C3.6 4.66679 4.66667 3.60012 6.8 3.53346C7.6 3.46679 7.86667 3.46679 10 3.46679ZM10 2.00012C7.8 2.00012 7.53333 2.00012 6.73333 2.06679C3.8 2.20012 2.2 3.80012 2.06667 6.73346C2 7.53346 2 7.80012 2 10.0001C2 12.2001 2 12.4668 2.06667 13.2668C2.2 16.2001 3.8 17.8001 6.73333 17.9335C7.53333 18.0001 7.8 18.0001 10 18.0001C12.2 18.0001 12.4667 18.0001 13.2667 17.9335C16.2 17.8001 17.8 16.2001 17.9333 13.2668C18 12.4668 18 12.2001 18 10.0001C18 7.80012 18 7.53346 17.9333 6.73346C17.8 3.80012 16.2 2.20012 13.2667 2.06679C12.4667 2.00012 12.2 2.00012 10 2.00012ZM10 5.86679C7.73333 5.86679 5.86667 7.73346 5.86667 10.0001C5.86667 12.2668 7.73333 14.1335 10 14.1335C12.2667 14.1335 14.1333 12.2668 14.1333 10.0001C14.1333 7.73346 12.2667 5.86679 10 5.86679ZM10 12.6668C8.53333 12.6668 7.33333 11.4668 7.33333 10.0001C7.33333 8.53346 8.53333 7.33346 10 7.33346C11.4667 7.33346 12.6667 8.53346 12.6667 10.0001C12.6667 11.4668 11.4667 12.6668 10 12.6668ZM14.2667 4.80012C13.7333 4.80012 13.3333 5.20012 13.3333 5.73346C13.3333 6.26679 13.7333 6.66679 14.2667 6.66679C14.8 6.66679 15.2 6.26679 15.2 5.73346C15.2 5.20012 14.8 4.80012 14.2667 4.80012Z"
                      fill="#F08631"
                    />
                  </svg>
                </div>
              </Link>
              <Link href={twitterLink}>
                <div className="rounded-full border-[1px] border-solid border-[#F08631] p-[6px] hover:bg-orange ease-out duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.21737 16.2501C12.878 16.2501 15.9736 11.9223 15.9736 8.16965C15.9736 8.04669 15.9709 7.92436 15.9647 7.80251C16.5656 7.40167 17.088 6.90134 17.5 6.33204C16.9486 6.55812 16.3552 6.71036 15.7327 6.77901C16.368 6.42745 16.856 5.87107 17.0861 5.20794C16.4914 5.53336 15.8329 5.76983 15.132 5.89736C14.5702 5.34538 13.7704 5.00012 12.8855 5.00012C11.1858 5.00012 9.80747 6.27206 9.80747 7.83982C9.80747 8.06275 9.8346 8.27938 9.88715 8.48736C7.32962 8.36881 5.06162 7.23857 3.54392 5.5203C3.27932 5.93987 3.12697 6.42761 3.12697 6.94762C3.12697 7.93286 3.67034 8.80271 4.49658 9.3117C3.99176 9.29737 3.51748 9.16922 3.10274 8.95636C3.10206 8.96817 3.10206 8.98014 3.10206 8.99258C3.10206 10.3681 4.16305 11.5165 5.57104 11.7767C5.31257 11.8417 5.04063 11.8767 4.75982 11.8767C4.56158 11.8767 4.36879 11.8584 4.1813 11.8255C4.57301 12.9537 5.70923 13.7749 7.05632 13.798C6.00284 14.5599 4.67588 15.0138 3.23411 15.0138C2.98588 15.0138 2.74089 15.0007 2.5 14.9744C3.86193 15.7799 5.47908 16.2501 7.21737 16.2501Z"
                      fill="#F08631"
                    />
                  </svg>
                </div>
              </Link>
              <Link href={fbLink}>
                <div className="rounded-full border-[1px] border-solid border-[#F08631] p-[6px] hover:bg-orange ease-out duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.125 7.50012H6.25V10.0001H8.125V17.5001H11.25V10.0001H13.5L13.75 7.50012H11.25V6.43762C11.25 5.87512 11.375 5.62512 11.9375 5.62512H13.75V2.50012H11.375C9.125 2.50012 8.125 3.50012 8.125 5.37512V7.50012Z"
                      fill="#F08631"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <Image
              width={590}
              height={332}
              src={"/images/contact/Map.jpg"}
              alt=""
              className="mt-[29px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContctUs;
