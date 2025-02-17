import {
  IconType,
  SiFacebook,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
  SiTwitter,
  SiX,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:fjulian22.work@icloud.com',
    },
    {
      icon: SiFacebook,
      href: 'https://www.facebook.com/codenando/',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/nandocoeg2',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/fernando-julian/',
    },
    {
      icon: SiX,
      href: 'https://x.com/nandocoeg',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
