import Image from "next/image";

type WhyEvShareItemProps = {
  icon: string;
  text: string;
};

export function WhyEvShareItem({ icon, text }: WhyEvShareItemProps) {
  return (
    <div className="flex w-full max-w-[220px] flex-col items-center text-center">
      <div className="flex h-[116px] w-[116px] items-center justify-center rounded-full bg-primary">
        <Image
          src={icon}
          alt=""
          width={72}
          height={72}
          className="h-[72px] w-[72px] object-contain"
        />
      </div>

      <p className="mt-5 min-h-[52px] max-w-[210px] text-xs font-medium leading-5 text-[#ededed] md:min-h-[68px] md:text-[17px] md:leading-[1.4]">
        <span className="me-2 inline-block h-1.5 w-1.5 rounded-full bg-white/95 align-middle" />
        {text}
      </p>
    </div>
  );
}
