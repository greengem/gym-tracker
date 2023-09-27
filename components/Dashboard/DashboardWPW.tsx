import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  
export default function DashboardWPW() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-md">Workouts Per Week</CardTitle>
                <CardDescription>Activity</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Chart goes here</p>
            </CardContent>
        </Card>
    )
}
