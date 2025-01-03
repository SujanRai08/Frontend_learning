import useFetch from "./useFetch"

const CustomHooks = () => {
    const [data] = useFetch('')
  return (
    <div>
        {data && data.map(item=>{
            return <p key={item.id}>{item.title}</p>
        })}
    </div>
  )
}

export default CustomHooks