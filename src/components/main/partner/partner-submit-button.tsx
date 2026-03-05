import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";

type PartnerSubmitButtonProps = {
  isSubmitting: boolean;
  label: string;
};

export function PartnerSubmitButton({
  isSubmitting,
  label,
}: PartnerSubmitButtonProps) {
  return (
    <Button
      aria-busy={isSubmitting}
      disabled={isSubmitting}
      type="submit"
      variant="secondary"
      className="h-14 w-full rounded-2xl bg-secondary px-6 text-lg font-semibold text-primary hover:bg-secondary/95"
    >
      {isSubmitting ? <Loader /> : label}
    </Button>
  );
}
