export interface SocialEntry {
  type: 'github' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 's0cl',
    avatar: '',
    username: 'yuxiangll',
    title: '啥都不会',
    desc: '专注于Java，Kotlin的开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/yuxiangll' },
      //{ type: 'twitter', icon: 'twitter', link: 'https://twitter.com/ayakaneko' },
    ],
    nameAliases: ['yuxiangll', 's0cl', 'into you'],
    emailAliases: ['yuxiangll@foxmail.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
