import { Button } from "@/components/ui/button";

type PartnerSubmitButtonProps = {
  label: string;
};

export function PartnerSubmitButton({ label }: PartnerSubmitButtonProps) {
  return (
    <Button
      type="submit"
      variant="secondary"
      className="h-14 w-full rounded-2xl bg-secondary px-6 text-lg font-semibold text-primary hover:bg-secondary/95"
    >
      {label}
    </Button>
  );
}
