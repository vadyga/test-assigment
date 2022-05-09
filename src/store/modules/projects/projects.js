import getters from './projectsGetters.js'
import actions from './projectsActions.js'
import mutations from './projectsMutations.js'

const state = {
  projectLists: [
    {
      id: 1,
      name: 'WORKING ON',
      projects: [
        {
          id: 1,
          ticket: 1,
          name: 'scrum-test',
          userStory: 'USER STORY',
          description: 'test',
          isReadyForTest: true,
          public: {
            likes: 0,
            watching: 0,
            members: 0
          },
          isFavorite: true,
          isOwner: false,
          projectType: 'scrum'
        },
        {
          id: 2,
          ticket: 1,
          name: 'kanban-test',
          userStory: 'USER STORY',
          description: 'test',
          isReadyForTest: true,
          public: {
            likes: 0,
            watching: 0,
            members: 0
          },
          isFavorite: true,
          isOwner: false,
          projectType: 'kanban'
        }
      ]
    },
    {
      id: 2,
      name: 'WATCHING',
      projects: [
        {
          id: 1,
          ticket: 1,
          name: 'scrum-test',
          userStory: 'USER STORY',
          description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
          isReadyForTest: true,
          public: {
            likes: 0,
            watching: 0,
            members: 0
          },
          isFavorite: true,
          isOwner: true,
          projectType: 'scrum'
        }
      ]
    }
  ]
}

export default {
  state,
  getters,
  actions,
  mutations
}
