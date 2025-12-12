type ChipProps = {
  title: string
  description: string
}

export default function Chip (props: Readonly<ChipProps>){
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-blue-600">{props.title}</h2>
      <p className="text-gray-600">{props.description}</p>
    </div>
  )
}