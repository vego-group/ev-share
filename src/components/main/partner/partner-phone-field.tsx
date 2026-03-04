import Image from "next/image";
import { UseFormRegister } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { type PartnerSchema } from "@/schemas";
import { errorTextClassName } from "./partner-field-styles";

type PartnerPhoneFieldProps = {
  countryCodeLabel: string;
  errorMessage?: string;
  flagAlt: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<PartnerSchema>;
};

export function PartnerPhoneField({
  countryCodeLabel,
  errorMessage,
  flagAlt,
  label,
  placeholder,
  register,
}: PartnerPhoneFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-secondary">{label}</span>
      <div
        dir="ltr"
        className={`flex h-13 w-full overflow-hidden rounded-2xl border bg-white ${
          errorMessage
            ? "border-red-500 focus-within:border-red-500 focus-within:ring-3 focus-within:ring-red-200"
            : "border-secondary/15 focus-within:border-primary focus-within:ring-3 focus-within:ring-primary/35"
        }`}
      >
        <Button
          type="button"
          disabled
          aria-label={countryCodeLabel}
          variant="outline"
          className="h-full shrink-0 cursor-not-allowed items-center gap-1.5 rounded-none border-0 border-e border-secondary/15 bg-secondary/5 px-3 text-secondary/80 shadow-none"
        >
          <Image
            src="/images/flag.png"
            alt={flagAlt}
            width={18}
            height={12}
            aria-hidden="true"
            className="rounded-[2px] object-cover"
          />
          <span className="text-sm font-medium" dir="ltr">
            +966
          </span>
        </Button>
        <input
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder={placeholder}
          className="h-full w-full bg-transparent px-3 text-base text-secondary outline-none placeholder:text-secondary/45"
          maxLength={12}
          {...register("phone")}
          onInput={(event) => {
            event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "");
          }}
        />
      </div>
      {errorMessage ? <p className={errorTextClassName}>{errorMessage}</p> : null}
    </label>
  );
}
