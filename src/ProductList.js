
export default function  ProductList(props)
{

    const names = ["Product-1","Product-2","Product-3"]

    return (

        <div>
            {/* <h3>{names[0]}</h3>
            <h3>{names[1]}</h3>
            <h3>{names[2]}</h3> */}
            {names.map(name=><h2>{name}</h2>)}
        </div>
    )
}

