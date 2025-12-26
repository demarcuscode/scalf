import { z } from "zod";

export const hostelDetailsSchema = z.object({
  label: z.string().min(1),
  description: z.string(),
  establishment_year: z.string(),
  number_of_buildings: z.string(),
  owner_name: z.string(),
  owner_contact: z.string(),
  images: z.array(z.string().url()).optional(),
});

export type HostelDetailsValues = z.infer<typeof hostelDetailsSchema>;

export const roomSchema = z.object({
  room_type: z.string().min(1),
  price: z.string().min(1),
  images: z.string().optional(),
});

export type RoomValues = z.infer<typeof roomSchema>;

export const bookingSchema = z.object({
  hostel_name: z.string().min(1, "Hostel name is required"),
  applicant_name: z.string().min(1, "Your name is required"),
  course: z.string().optional(),
  year_in_campus: z.coerce.number().int().min(1).max(10).optional(),
  gender: z.enum(["male", "female", "other"]),
  contact: z.string().min(7, "Contact is required"),
  price: z.string(),
  report_date_start: z.string(),
  report_date_end: z.string().optional(),
  payment_type: z.enum(["semester", "monthly"]),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

export const notificationSchema = z.object({
  message: z
    .string()
    .min(3, "Message is too short")
    .max(500, "Message is too long"),
  type: z.enum(["info", "success", "warning", "error"]),
});

export type NotificationValues = z.infer<typeof notificationSchema>;
