import { IArticleModel } from '.'
import * as styled from './styled'

export interface IArticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  articles: IArticleModel[]
}

export const Articles = ({ articles, children, className, ...rest }: IArticlesProps) => {
  return (
    <styled.Articles className={`articles${className ? ` ${className}` : ''}`} {...rest}>
      {articles.map((article, index) => (
        <article key={index}>
          {article.icon && <div className="icon">{article.icon}</div>}
          <h1>{article.title}</h1>
          {article.summary}
        </article>
      ))}
      {children}
    </styled.Articles>
  )
}
