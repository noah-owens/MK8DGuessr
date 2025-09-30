export interface SceneMetadata {
  scene_id: string;                         // identifier -- enforce naming convention
  track: string;                            // trackname -- potentially enforce via enum 
  coordinates: [number, number];            // normalize coords to 1000x1000
  image: string;                            // image path
  slice_angle: number;                      // plan to default to 120deg
  difficulty: 'easy' | 'medium' | 'hard';   // potential insane/impossible difficulty
  tags: string[];                           // notable themes or points of interest
}