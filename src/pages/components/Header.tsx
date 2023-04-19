

export default function Header({title}) {
  return (
    <div className="text-white text-3xl font-medium flexx items-center gap-4 py-16">
        {title}
        <div className="bg-gradient-to-r from-white h-1 w-60 "></div>
    </div>
  )
}

