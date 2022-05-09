export type ProjectType = 'kanban' | 'scrum'

export interface IPublicInfo {
  likes: number,
  watching: number,
  members: number
}

export interface IUserStory {
  name: string
}

export interface IProject {
  id: number,
  name: string,
  // userStory: Pick<IUserStory, 'name'>
  userStory: string
  description: string,
  isReadyForTest: boolean,
  public?: IPublicInfo,
  isFavorite: boolean,
  ticket: number,
  isOwner: boolean,
  projectType: ProjectType
}

export interface IProjectList {
  id: number,
  name: string,
  projects: Array<IProject>
}
