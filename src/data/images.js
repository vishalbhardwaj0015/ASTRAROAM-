const picModules = import.meta.glob('/src/pics/*.jpeg', { eager: true, import: 'default' })

const allPics = Object.entries(picModules).map(([path, src]) => {
  const filename = path.split('/').pop()
  return { src, filename }
})

export const pics = allPics

export const heroPic = allPics[0]?.src
export const aboutPic = allPics[1]?.src
export const galleryPics = allPics
export const bannerPic = allPics[2]?.src
export const ctaPic = allPics[3]?.src
