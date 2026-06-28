import Link from "next/link";
import { Badge } from "@/components/ui/badge/Badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export const DeveloperCard = () => {
  return (
    <Link href={`resume/1`}>
      <Card className="pt-0 ring-0 shadow-[0_1px_2px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-40 bg-linear-to-br from-indigo-50 to-blue-50"></div>
        <CardHeader>
          <CardTitle>Vasylyna</CardTitle>
          <CardDescription className="mb-2">Frontend developer</CardDescription>
          <Badge>Everything</Badge>
        </CardHeader>
      </Card>
    </Link>
  );
};
