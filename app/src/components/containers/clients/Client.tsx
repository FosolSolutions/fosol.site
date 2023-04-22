export interface IClientProps {
  name: string
  organizationType: string
  logoUrl?: string
}

export const Client = ({ name, organizationType, logoUrl }: IClientProps) => {
  return (
    <article>
      <h2>{name}</h2>
      <p>{organizationType}</p>
      <div>
        <img className="logo small" src={logoUrl} />
      </div>
    </article>
  )
}
