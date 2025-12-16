"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AnalyticsCard({
  title,
  description,
  total,
  buttonText = "View Details",
  buttonLink = "/",
  chartData = [],
  dataKey = "revenue",
}: any) {
  return (
    <Card className="w-full rounded-lg shadow-lg hover:shadow-md transition">
      <CardHeader>
        <CardTitle className="font-bold text-xl text-center">{title}</CardTitle>
        <p className="text-lg text-center  mb-4">{total}</p>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>

      <CardContent className="">
        {/* Total Revenue */}

        {/* Histogram Chart */}
        <div className="h-40 w-full">
          <ResponsiveContainer className="" width="100%" height="100%">
            <BarChart className="bg-gray-300 text-blue-500" data={chartData}>
              <XAxis dataKey="month" hide />
              <YAxis hide className="bg-gray-300" />
              <Tooltip labelClassName="rounded-lg" />
              <Bar
                dataKey={dataKey}
                className="text-blue-400"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>

      <CardFooter>
        <Link href={buttonLink} className="w-full">
          <Button className="w-full bg-blue-400 text-white ">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
