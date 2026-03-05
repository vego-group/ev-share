import { UseFormRegister } from "react-hook-form";
import { type PartnerSchemaInput } from "@/schemas";
import {
  errorTextClassName,
  fieldClassName,
  fieldErrorClassName,
} from "./partner-field-styles";

type PartnerFullNameFieldProps = {
  errorMessage?: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<PartnerSchemaInput>;
};

export function PartnerFullNameField({
  errorMessage,
  label,
  placeholder,
  register,
}: PartnerFullNameFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-secondary">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className={`${fieldClassName} ${errorMessage ? fieldErrorClassName : ""}`}
        {...register("name")}
      />
      {errorMessage ? (
        <p className={errorTextClassName}>{errorMessage}</p>
      ) : null}
    </label>
  );
}

