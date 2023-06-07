const ServiceDetail = ({title, paragraph}) => {
  return (
    <div className="flex items-start gap-2">
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9997 2.8335C6.93692 2.8335 2.83301 6.93741 2.83301 12.0002C2.83301 17.0629 6.93692 21.1668 11.9997 21.1668C17.0624 21.1668 21.1663 17.0629 21.1663 12.0002C21.1663 6.93741 17.0624 2.8335 11.9997 2.8335ZM10.1663 16.963L5.85159 12.6482L7.14776 11.3521L10.1663 14.3707L16.8516 7.68541L18.1478 8.98158L10.1663 16.963Z"
            fill="#F08631"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <h6 className="text-[18px] font-bold">{title}</h6>
        <p className="text-[#475467]">{paragraph}</p>
      </div>
    </div>
  );
};
export default ServiceDetail;
