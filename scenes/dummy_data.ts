import { DifficultyLevel, TrackName, SceneMetadata } from "./SceneMetadata";

export const dummyData: SceneMetadata[] = [
  {
    scene_id: "wii_moo_01",
    track: TrackName.moo_meadows,
    coordinates: [100, 200],
    image: "scenes/images/wii_moo_01",
    slice_angle: 120,
    difficulty: DifficultyLevel.cakewalk,
    tags: ["grass", "daylight", "cow"],
  },
  {
    scene_id: "wiiu_thwomp_01",
    track: TrackName.thwomp_ruins,
    coordinates: [300, 400],
    image: "scenes/images/wiiu_thwomp_01",
    slice_angle: 120,
    difficulty: DifficultyLevel.easy,
    tags: ["interior", "brick"],
  },
];
