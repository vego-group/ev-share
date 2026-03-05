"use server";

import { PartnerFormValues } from "@/schemas";
import { safeApi } from "..";

export const partnerAPI = async (payload: PartnerFormValues) =>
  await safeApi("POST", "/partners", payload);
