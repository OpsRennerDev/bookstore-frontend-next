import { BookOpen } from "lucide-react";

type HeaderProps = {
  title: string;
  description?: string;
}

export default function HeaderLogin (props: Readonly<HeaderProps>) {
  return(
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
        <BookOpen className="text-white w-8 h-8"/>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{props.title}</h1>
      <p className="text-gray-600">{props.description}</p>
    </div>
  )
}