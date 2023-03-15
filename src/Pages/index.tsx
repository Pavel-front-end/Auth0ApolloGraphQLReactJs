import { FC } from "react"
import { useQuery } from '@apollo/client'
import {GET_LOCATIONS} from '../GraphQLOperation/queries'
import { ILocations } from '../types/ILocations'

const Home: FC = () => {
  const { loading, error, data } = useQuery<ILocations>(GET_LOCATIONS);

    return (
        <div>
            <h1>Home</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error :(</p>}
            {data?.locations.map(({ id, name }) => (
              <div key={id}>
                <h3>{name}</h3>
                <br />
              </div>
            ))}
        </div>
    )
}

export default Home