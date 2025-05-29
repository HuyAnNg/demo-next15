import
  {
    BookText,
    CameraIcon,
    ChartColumn,
    ClipboardListIcon,
    DatabaseIcon,
    FileCodeIcon,
    FileIcon,
    FileTextIcon,
    FolderIcon,
    HelpCircleIcon,
    Map,
    SearchIcon,
    SettingsIcon,
    UsersIcon,
  } from 'lucide-react'

export const mockUser = {
  name: 'Admin',
  email: 'admin@gmail.com',
  // avatar: '/flag.png',
}

export const navMain = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: ChartColumn,
  },
  {
    title: 'Map',
    url: '/map',
    icon: Map,
  },
  {
    title: 'Chart',
    url: '/chart',
    icon: ChartColumn,
  },
  {
    title: 'Form',
    url: '/form',
    icon: BookText,
  },
  {
    title: 'Projects',
    url: '#',
    icon: FolderIcon,
  },
  {
    title: 'Team',
    url: '#',
    icon: UsersIcon,
  },
]

export const navClouds = [
  {
    title: 'Capture',
    icon: CameraIcon,
    isActive: true,
    url: '#',
    items: [
      {
        title: 'Active Proposals',
        url: '#',
      },
      {
        title: 'Archived',
        url: '#',
      },
    ],
  },
  {
    title: 'Proposal',
    icon: FileTextIcon,
    url: '#',
    items: [
      {
        title: 'Active Proposals',
        url: '#',
      },
      {
        title: 'Archived',
        url: '#',
      },
    ],
  },
  {
    title: 'Prompts',
    icon: FileCodeIcon,
    url: '#',
    items: [
      {
        title: 'Active Proposals',
        url: '#',
      },
      {
        title: 'Archived',
        url: '#',
      },
    ],
  },
]

export const navSecondary = [
  {
    title: 'Settings',
    url: '#',
    icon: SettingsIcon,
  },
  {
    title: 'Get Help',
    url: '#',
    icon: HelpCircleIcon,
  },
  {
    title: 'Search',
    url: '#',
    icon: SearchIcon,
  },
]

export const documents = [
  {
    name: 'Data Library',
    url: '#',
    icon: DatabaseIcon,
  },
  {
    name: 'Reports',
    url: '#',
    icon: ClipboardListIcon,
  },
  {
    name: 'Word Assistant',
    url: '#',
    icon: FileIcon,
  },
]
