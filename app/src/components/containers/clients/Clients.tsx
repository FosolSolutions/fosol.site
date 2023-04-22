import { clients } from '@/data'
import { FaBuilding } from 'react-icons/fa'
import { Client } from '.'
import * as styled from './styled'

export interface IClients {
  children?: React.ReactNode
}

export const Clients = () => {
  return (
    <styled.Clients className="box pad clients">
      <h1>
        <FaBuilding /> Clients
      </h1>
      <div className="client-list">
        {[...clients].reverse().map((client) => {
          return <Client key={client.id} {...client} />
        })}
      </div>
    </styled.Clients>
  )
}
