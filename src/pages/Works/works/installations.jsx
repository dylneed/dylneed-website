const installations = {
  title: "Sound Installations",
  url: 'installations',
  works: [
    {
      title: "All//One (beta)",
      year: 2026,
      selected: true,
      ensemble: "a virtual sound installation",
      externalUrl: "https://dylneed.github.io/All-One/"
    },
    {
      title: "Lounge Simulacrum",
      year: 2026,
      selected:true,
      ensemble: "a 4 channel sound installation for the USS Salem"
    },
    {
      title: "Finding the Fifth Plane",
      year: 2026,
      selected: true,
      ensemble: "a 4 channel sound installation for any square room"
    },
 ]
}

installations.works.forEach((work) => {
  work.ensemblePrefix=" ";
})

export default installations
