import { UseFormRegister } from "react-hook-form";
import InputErrorMessage from "@/components/ui/InputErrorMessage";
import { type PartnerSchemaInput } from "@/schemas";
import { getFieldClassName } from "./partner-field-styles";

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
        className={getFieldClassName(Boolean(errorMessage))}
        {...register("email")}
      />
      <InputErrorMessage msg={errorMessage} />
    </label>
  );
}
