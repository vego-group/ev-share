type ChooseAssetContentProps = {
  title: string;
  descriptionStart: string;
  brand: string;
  descriptionEnd: string;
  descriptionLine2: string;
};

export function ChooseAssetContent({
  title,
  descriptionStart,
  brand,
  descriptionEnd,
  descriptionLine2,
}: ChooseAssetContentProps) {
  return (
    <div className="mx-auto w-full max-w-205 text-center text-secondary">
      <h2 className="text-3xl font-bold leading-tight md:text-[48px]">
        {title}
      </h2>

      <p className="mt-8 text-base font-medium leading-8 md:text-[28px] md:leading-[1.55]">
        {descriptionStart}{" "}
        <span className="rounded-sm bg-white px-2 py-0.5 align-middle">
          {brand}
        </span>{" "}
        {descriptionEnd}
        {descriptionLine2 ? (
          <>
            <br />
            {descriptionLine2}
          </>
        ) : null}
      </p>
    </div>
  );
}
