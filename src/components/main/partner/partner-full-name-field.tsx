import { UseFormRegister } from "react-hook-form";
import InputErrorMessage from "@/components/ui/InputErrorMessage";
import { type PartnerSchemaInput } from "@/schemas";
import { getFieldClassName } from "./partner-field-styles";

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
        className={getFieldClassName(Boolean(errorMessage))}
        {...register("name")}
      />
      <InputErrorMessage msg={errorMessage} />
    </label>
  );
}

