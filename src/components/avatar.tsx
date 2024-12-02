import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarImg(image?:any) {


  return (
    <Avatar>
      <AvatarImage src={image? image?.image?.src : "https://github.com/shadcn.png"} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}


