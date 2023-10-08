import {useRouter} from "next/router";
import s from '../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer";

export default function ({user}) {
    const {query} = useRouter()


    return (
        <MainContainer keywords={user.name}>
            <div className={s.user}>
                <h1>User with id {user.id}</h1>
                <div>User name - {user.name}</div>
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}
    }
}