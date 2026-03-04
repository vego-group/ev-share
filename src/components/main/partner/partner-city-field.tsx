import { UseFormRegister } from "react-hook-form";
import { type PartnerSchema } from "@/schemas";
import {
  errorTextClassName,
  fieldClassName,
  fieldErrorClassName,
} from "./partner-field-styles";

type CityOption = {
  label: string;
  value: string;
};

type PartnerCityFieldProps = {
  errorMessage?: string;
  label: string;
  options: CityOption[];
  placeholder: string;
  register: UseFormRegister<PartnerSchema>;
};

export function PartnerCityField({
  errorMessage,
  label,
  options,
  placeholder,
  register,
}: PartnerCityFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-secondary">{label}</span>
      <select
        defaultValue=""
        className={`${fieldClassName} ${errorMessage ? fieldErrorClassName : ""}`}
        {...register("city")}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage ? <p className={errorTextClassName}>{errorMessage}</p> : null}
    </label>
  );
}
