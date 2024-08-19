export function randomTaskPlaceholder() {
  const tasks = [
    "Water the plants",
    "Organize your bookshelf",
    "Plan meals for the week",
    "Call a family member or friend",
    "Clean out the refrigerator",
    "Backup your computer files",
    "Exercise for 30 minutes",
    "Update your resume",
    "Declutter your closet",
    "Schedule a dentist appointment",
  ];
  const randInt = Math.floor(Math.random() * 10)
  return tasks[randInt]
}
