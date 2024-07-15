export const scrollToSection = (sectionName: string) => {
  const section = document.getElementById(sectionName)
  section ? section.scrollIntoView({ behavior: 'smooth' }) : null
}
