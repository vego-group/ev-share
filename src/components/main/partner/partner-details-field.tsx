import { UseFormRegister } from "react-hook-form";
import { type PartnerSchemaInput } from "@/schemas";
import {
  errorTextClassName,
  fieldErrorClassName,
} from "./partner-field-styles";

type PartnerDetailsFieldProps = {
  errorMessage?: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<PartnerSchemaInput>;
};

export function PartnerDetailsField({
  errorMessage,
  label,
  placeholder,
  register,
}: PartnerDetailsFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-secondary">
        {label}
      </span>
      <textarea
        rows={5}
        placeholder={placeholder}
        className={`w-full rounded-2xl border bg-white px-4 py-4 text-start text-base text-secondary outline-none transition duration-200 placeholder:text-start placeholder:text-secondary/45 ${
          errorMessage
            ? fieldErrorClassName
            : "border-secondary/15 focus:border-primary focus:ring-3 focus:ring-primary/35"
        }`}
        {...register("details")}
      />
      {errorMessage ? (
        <p className={errorTextClassName}>{errorMessage}</p>
      ) : null}
    </label>
  );
}
