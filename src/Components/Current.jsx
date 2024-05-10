import { getCurrentUser } from "../lib/actions";

async function CurretUser(){
    const User = await getCurrentUser()
    console.log(User);
    return(
        <div>
            <p>{User._id}</p>
            <p>{User.full_name}</p>
            <p>{User.email}</p>
            <p>{User.age}</p>
            <p>{User.rol}</p>
            <p>{User.cart}</p>
        </div>
    )
}

export default CurretUser