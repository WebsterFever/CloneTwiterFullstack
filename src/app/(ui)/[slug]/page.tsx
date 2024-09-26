import { GeneralHeader } from "@/components/ui/generalHeader";
import { user } from "@/data/user";

export default function Page(){
    return(
        <div>

            <GeneralHeader backHref="/">
            <div className="font-bold text-lg">{user.name} pots</div>
            <div className="text-xs text-gray-500">{user.postCount} pots</div>
            </GeneralHeader>
        </div>
    )
}