type PassiveIncomeContentProps = {
  title: string;
  description: string;
};

export function PassiveIncomeContent({
  title,
  description,
}: PassiveIncomeContentProps) {
  return (
    <div>
      <div>
        <div className="w-full max-w-lg border-s-4 border-primary ps-4">
          <h2 className="text-start text-2xl font-bold leading-tight text-secondary md:text-[40px] md:leading-[1.08]">
            {title}
          </h2>
        </div>
      </div>

      <div className="mt-8 xl:mt-14 w-full flex justify-end max-w-6xl text-base leading-8 text-secondary md:text-[29px] md:leading-[1.6]">
        <p className="max-w-2xl"> {description}</p>
      </div>
    </div>
  );
}
