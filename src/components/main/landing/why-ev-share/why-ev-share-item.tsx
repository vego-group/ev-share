import Image from "next/image";

type WhyEvShareItemProps = {
  icon: string;
  text: string;
};

export function WhyEvShareItem({ icon, text }: WhyEvShareItemProps) {
  return (
    <div className="flex w-full max-w-55 flex-col items-center text-center">
      <div className="flex h-29 w-29 items-center justify-center rounded-full bg-primary">
        <Image
          src={icon}
          alt={text}
          width={72}
          height={72}
          className="h-18 w-18 object-contain"
        />
      </div>

      <p className="mt-5 min-h-13 max-w-52.5 text-xs font-medium leading-5 text-[#ededed] md:min-h-17 md:text-[17px] md:leading-[1.4]">
        <span className="me-2 inline-block h-1.5 w-1.5 rounded-full bg-white/95 align-middle" />
        {text}
      </p>
    </div>
  );
}
