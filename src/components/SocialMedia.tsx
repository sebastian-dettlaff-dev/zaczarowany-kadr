import { SOCIAL_MEDIA } from "@/lib/constants";
import Link from "next/link";
import { FacebookIcon} from "./icons/FacebookIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { Tiktok } from "./icons/TiktokIcon";





export default function SocialMedia() {
    return (
        <div className="flex flex-row justify-start items-center  space-x-6 p-2">
            <Link aria-label='Odwiedz moj profil na Facebooku' href={SOCIAL_MEDIA.facebook} className="text-retro-orange hover:text-retro-orange" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="w-6 h-6 mt-1.5 text-gray-500 hover:text-blue-600 transition-colors md:mt-2.5 md:w-9 md:h-9" />
                
            </Link>
            <Link href={SOCIAL_MEDIA.instagram} className="text-retro-orange hover:text-retro-orange" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="w-6 h-6 mt-1.5 text-gray-500 hover:text-fuchsia-600 transition-colors md:mt-2.5 md:w-9 md:h-9" />
                
            </Link>
            <Link aria-label='Odwiedz moj profil na Tiktoku' href={SOCIAL_MEDIA.tiktok} className="text-retro-orange hover:text-retro-orange" target="_blank" rel="noopener noreferrer">
            <Tiktok className="w-6 h-6 mt-1.5 text-gray-500 hover:text-black transition-colors md:mt-2.5 md:w-9 md:h-9 " />
                
            </Link>
        </div>
    );

}