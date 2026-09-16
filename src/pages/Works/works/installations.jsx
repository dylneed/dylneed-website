import loungeSimulacrumLeftWavesMp3 from "../../../assets/works/lounge-simulacrum-left-waves.mp3"
import loungeSimulacrumRightWavesMp3 from "../../../assets/works/lounge-simulacrum-right-waves.mp3"
import loungeSimulacrumEngineMp3 from "../../../assets/works/lounge-simulacrum-engine.mp3"
import loungeSimulacrumSteamMp3 from "../../../assets/works/lounge-simulacrum-steam.mp3"
import fifthPlaneFrontMp3 from "../../../assets/works/fifth-plane-front.mp3"
import fifthPlaneBackMp3 from "../../../assets/works/fifth-plane-back.mp3"

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
      ensemble: "a 4 channel sound installation for the USS Salem",
      page:true,
      performances: [{
        ensemble:"Right Waves",
        performedOveride: "\b",
        mp3:loungeSimulacrumRightWavesMp3,
      },
      {
        ensemble:"Left Waves",
        performedOveride: "\b",
        mp3:loungeSimulacrumLeftWavesMp3,
      },
      {
        ensemble:"Engine",
        performedOveride: "\b",
        mp3:loungeSimulacrumEngineMp3,
      },
      {
        ensemble:"Steam",
        performedOveride: "\b",
        mp3:loungeSimulacrumSteamMp3,
      },],
    },
    {
      title: "Finding the Fifth Plane",
      year: 2026,
      selected: true,
      ensemble: "a 4 channel sound installation for any square room",
      page:true,
      performances: [{
        ensemble:"Front Stereo",
        performedOveride: "\b",
        mp3:fifthPlaneFrontMp3,
      },
      {
        ensemble:"Back Stereo",
        performedOveride: "\b",
        mp3:fifthPlaneBackMp3,
      },],
    },
 ]
}

installations.works.forEach((work) => {
  work.ensemblePrefix=" ";
})

export default installations
