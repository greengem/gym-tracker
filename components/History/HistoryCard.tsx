import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"  

export default function HistoryCard() {
    return (
        <>
            <p className="mb-3 uppercase text-xs text-gray-500">September 2023</p>
            <Card className="mb-10">
                <CardHeader>
                    <CardTitle className="text-md">Workout group name</CardTitle>
                    <CardDescription>Monday, 4 Sep</CardDescription>
                    <div className="grid grid-cols-3">
                        <div>1h 2m</div>
                        <div>5000 kg</div>
                        <div>8 PRs</div>
                    </div>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Exercise</TableHead>
                        <TableHead>Best Set</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Bench Press</TableCell>
                            <TableCell>65kg x 4</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Deadlift</TableCell>
                            <TableCell>65kg x 4</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}
