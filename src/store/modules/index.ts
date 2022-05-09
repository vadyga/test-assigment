// Register all Vuex module by a camelCase version of their filename.
const camelCase = (str: string):string => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
}

// Get all the files
const requireModule = require.context(
  // Search for files in the current directory
  '.',
  // Search for files in subdirectories
  true,
  // Exclude index.js file as well as any file that has
  // 'Actions', 'Mutations', 'Getters', 'Types', or 'helpers' in their name.
  // Also, include only files that end with .js
  /^(?!.*(Actions|Mutations|Getters|Types|helpers|index)).*\.js$/
)

const modules = {} as {[key: string]: Record<string, unknown>}

requireModule.keys().forEach((fileName) => {
  // Ignore unit test files
  if (/\.unit\.js$/.test(fileName)) return
  const key = camelCase(fileName.split('/')[1].replace(/(\.\/|\.js)/g, ''))
  // Remove the file extension and convert to camelcase
  modules[key] = {
    // All modules are namespaced
    namespaced: true,
    ...requireModule(fileName).default
  }
})

export default modules
