import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const medicine = [
    {
        name: "Paracitamol",
        description: "A practical talk on component APIs, accessibility, and shipping faster.",
        isAvailable: "Available"
    },
    {
        name: "Paracitamol",
        description: "A practical talk on component APIs, accessibility, and shipping faster.",
        isAvailable: "Available"
    },
    {
        name: "Paracitamol",
        description: "A practical talk on component APIs, accessibility, and shipping faster.",
        isAvailable: "Available"
    }
]

export function Medicines() {
    return (
        <div className="mx-auto px-4 sm:px-10 max-w-5xl flex gap-4">
            {medicine.map((item, key) => (
                <Card key={key} className="relative mx-auto w-full max-w-sm pt-0">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                    <img
                        src="https://avatar.vercel.sh/shadcn1"
                        alt="Event cover"
                        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader>
                        <CardAction>
                            <Badge variant="secondary">{item.isAvailable}</Badge>
                        </CardAction>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.description}
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full">Add To Cart</Button>
                    </CardFooter>
                </Card>
            ))}

        </div>
    )
}
