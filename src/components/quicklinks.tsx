import React from 'react'
import cn from 'classnames'
import * as styles from './quicklinks.module.css'
import { Link } from 'gatsby'

import Docs from '../images/icon/docs.svg'
import Blog from '../images/icon/blog.svg'
import Jobs from '../images/icon/jobs.svg'

interface PropTypes {
  content: Content[]
  quick: Quick[]
  cta: CallToAction[]
}

interface Content {
  title: string
  description: string
}

interface Quick {
  description: string
  learn: string
  href: string
  icon: 'docs' | 'blog' | 'jobs'
  openInNewWindow?: boolean
}

interface CallToAction {
  title: string
  href: string
  style?: 'primary' | 'secondary'
  openInNewWindow?: boolean
}

const CallToActionButton = ({
                              title,
                              href,
                              style = 'secondary',
                              openInNewWindow = false,
                            }: CallToAction) => (
  <a
    key={title}
    href={href}
    className={cn(style, 'cta')}
    rel={openInNewWindow ? 'noopener noreferrer' : ''}
    target={openInNewWindow ? '_blank' : ''}
  >
    {title}
  </a>
)

const Quicklinks = ({ content, quick, cta}: PropTypes) => (
  <div className={cn(styles.quicklinks)}>
        <div className="container-fluid">
          <div className="row middle-lg">
            {content.map(
              ({ title, description}, key) => (
            <div key={key}  className={cn(styles.quicklinksContent, "col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10")}>
              <h3>{title}</h3>
              <p>{description}</p>
              <>{cta.map(CallToActionButton)}</>
            </div>
              ))}
            <div className="col-lg-offset-2 col-lg-4 col-md-offset-1 col-md-10 col-sm-offset-1 col-sm-10">
              {quick.map(
                ({ description, learn, href, openInNewWindow, icon }, key) => (
                     <div key={key} className={cn(styles.quicklinksBox)}>
                        <div>
                              <img
                                key={key}
                                loading="lazy"
                                src={icon === 'docs' ? Docs : (icon === 'blog' ? Blog : (icon === 'jobs' ? Jobs : ''))}
                                alt={`${icon}`}
                              />
                        </div>
                      <div className={cn(styles.quicklinksInner)}>
                        <p>{description}</p>
                        <Link
                          to={href}
                          rel={openInNewWindow ? 'noopener noreferrer' : ''}
                          target={openInNewWindow ? '_blank' : ''}>
                          {learn}
                        </Link>
                      </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
  </div>
)

export default Quicklinks
