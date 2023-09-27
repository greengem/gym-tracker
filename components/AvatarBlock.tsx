import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type AvatarBlockProps = {
    name: string;
    avatar: string;
    workouts: number;
};

const AvatarBlock: React.FC<AvatarBlockProps> = ({ name, avatar, workouts }) => {
    return (
        <div className="flex items-center space-x-4 mb-10">
            <Avatar>
                <AvatarImage src={avatar} />
                <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <span className="font-semibold">{name}</span>
                <span className="text-gray-500 text-sm">{workouts} workouts</span>
            </div>
        </div>
    )
}
export default AvatarBlock;
