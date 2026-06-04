import { UseFormRegister } from "react-hook-form";
import { type PartnerSchemaInput } from "@/schemas";
import {
  errorTextClassName,
  fieldClassName,
  fieldErrorClassName,
} from "./partner-field-styles";

type PartnerEmailFieldProps = {
  errorMessage?: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<PartnerSchemaInput>;
};

export function PartnerEmailField({
  errorMessage,
  label,
  placeholder,
  register,
}: PartnerEmailFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-secondary">
        {label}
      </span>
      <input
        type="email"
        placeholder={placeholder}
        className={`${fieldClassName} ${errorMessage ? fieldErrorClassName : ""}`}
        {...register("email")}
      />
      {errorMessage ? (
        <p className={errorTextClassName}>{errorMessage}</p>
      ) : null}
    </label>
  );
}
