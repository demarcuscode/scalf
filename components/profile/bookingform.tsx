// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   Form,
//   FormItem,
//   FormControl,
//   FormLabel,
//   FormField,
//   FormMessage,
// } from "@/components/ui/form";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";

// import { PlusCircle } from "lucide-react";
// import { bookingSchema, BookingFormValues } from "../hostel/schema";

// export default function BookingForm() {
//   const form = useForm<BookingFormValues>({
//     resolver: zodResolver(bookingSchema),
//     defaultValues: {
//       hostel_name: "",
//       applicant_name: "",
//       course: "",
//       year_in_campus: undefined,
//       gender: "male",      // contact: "",
//       price: "",
//       report_date_start: "",
//       report_date_end: "",
//       payment_type: "semester",
//     },
//   });

//   async function onSubmit(values: BookingFormValues) {
//     console.log("Booking payload:", values);
//   }

//   return (
//     <div className="mt-10 max-w-[900px] mx-auto p-6 bg-white border rounded-lg shadow-lg">
//       <h2 className="text-xl text-miprimary text-center font-semibold mb-6">
//         Make Hostel Booking
//       </h2>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
//           <FormField
//             name="hostel_name"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Hostel Name</FormLabel>
//                 <FormControl>
//                   <Input className="py-6" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="applicant_name"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Applicant Name</FormLabel>
//                 <FormControl>
//                   <Input className="py-6" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="course"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Course</FormLabel>
//                 <FormControl>
//                   <Input className="py-6" {...field} />
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <div className="grid md:grid-cols-2 gap-4">
//             <FormField
//               name="year_in_campus"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Year in Campus</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       value={field.value ?? ""}
//                       onChange={(e) =>
//                         field.onChange(
//                           e.target.value === ""
//                             ? undefined
//                             : e.target.valueAsNumber
//                         )
//                       }
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />

//             <FormField
//               name="gender"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Gender</FormLabel>
//                   <Select value={field.value} onValueChange={field.onChange}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select gender" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="male">Male</SelectItem>
//                       <SelectItem value="female">Female</SelectItem>
//                       <SelectItem value="other">Other</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </FormItem>
//               )}
//             />
//           </div>

//           <div className="grid md:grid-cols-2 gap-4">
//             <FormField
//               name="report_date_start"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Report Start Date</FormLabel>
//                   <FormControl>
//                     <Input type="date" className="py-6" {...field} />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />

//             <FormField
//               name="report_date_end"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Report End Date</FormLabel>
//                   <FormControl>
//                     <Input type="date" className="py-6" {...field} />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//           </div>

//           <FormField
//             name="payment_type"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Payment Type</FormLabel>
//                 <Select value={field.value} onValueChange={field.onChange}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select payment type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="semester">Semester</SelectItem>
//                     <SelectItem value="monthly">Monthly</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="price"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Price (GHS)</FormLabel>
//                 <FormControl>
//                   <Input {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button className="w-full py-6 bg-miaccent hover:bg-miaccent/90">
//             Submit Booking
//             <PlusCircle size={20} />
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// }
