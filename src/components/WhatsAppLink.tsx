import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

type Props = { message?: string; children: React.ReactNode; className?: string };
export default function WhatsAppLink({ message = "Hi, I want to enquire about rooms at LP Savani PG.", children, className = "" }: Props) {
  return <a className={className} href={whatsappLink(message)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />{children}</a>;
}
