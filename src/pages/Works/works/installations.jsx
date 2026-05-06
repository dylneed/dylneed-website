const installations = {
  title: "Sound Installations",
  url: 'installations',
  works: [
    {
      title: "Finding the Fifth Plane",
      year: 2026,
      selected: true,
      ensemble: "a 4 channel sound installation for any square room"
    },
//       {
//       title: "Free Time Simulacrum",
//       year: 2026,
//       selected:true,
//       ensemble: "a 4 channel sound installation for the USS Salem"
//     },
//     {
//       title: "All//One",
//       year: 2026,
//       selected: true,
//       ensemble: "a virtual sound installation"
//     },
 ]
}

installations.works.forEach((work) => {
  work.ensemblePrefix=" ";
})

export default installations
