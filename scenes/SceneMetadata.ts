export interface SceneMetadata {
  scene_id: string; // identifier -- enforce naming convention based on track
  track: TrackName; // trackname
  coordinates: [number, number]; // normalize coords to 1000x1000
  image: string; // image path (will be database query at some point)
  slice_angle: number; // default to 120 deg
  difficulty: DifficultyLevel; // expected difficulty of scene
  tags: string[]; // notable themes or points of interest
}

export const enum DifficultyLevel {
  "cakewalk",
  "easy",
  "medium",
  "hard",
  "impossible",
}

export const enum TrackName {
  // Mushroom Cup
  mario_kart_stadium = "wiiu_mario_kart_stadium",
  water_park = "wiiu_water_park",
  sweet_canyon = "wiiu_sweet_sweet_canyon",
  thwomp_ruins = "wiiu_thwomp_ruins",
  // Flower Cup
  mario_circuit = "wiiu_mario_circuit",
  toad_harbor = "wiiu_toad_harbor",
  twisted_mansion = "wiiu_twisted_mansion",
  shy_guy_falls = "wiiu_shy_guy_falls",
  // Star Cup
  sunshine_airport = "wiiu_sunshine_airport",
  dolphin_shoals = "wiiu_dolphin_shoals",
  electrodrome = "wiiu_electrodrome",
  mount_wario = "wiiu_mount_wario",
  // Special Cup
  cloudtop_cruise = "wiiu_cloudtop_cruise",
  bone_dry_dunes = "wiiu_bone_dry_dunes",
  bowser_castle = "wiiu_bowsers_castle",
  rainbow_road = "wiiu_rainbow_road",
  // Shell Cup
  moo_meadows = "wii_moo_moo_meadows",
  gba_mario_circuit = "gba_mario_circuit",
  cheep_beach = "nds_cheep_cheep_beach",
  toads_turnpike = "n64_toads_turnpike",
  // Banana Cup
  dry_desert = "gcn_dry_dry_desert",
  donut_plains = "snes_donut_plains_3",
  royal_raceway = "n64_royal_raceway",
  dk_jungle = "3ds_dk_jungle",
  // Leaf Cup
  wario_stadium = "nds_wario_stadium",
  sherbet_land = "gcn_sherbet_land",
  music_park = "3ds_music_park",
  yoshi_valley = "n64_yoshi_valley",
  // Lightning Cup
  tick_tock_clock = "nds_tick_tock_clock",
  piranha_plant_slide = "3ds_piranha_plant_slide",
  grumble_volcano = "wii_grumble_volcano",
  n64_rainbow_road = "n64_rainbow_road",
  // Egg Cup
  yoshi_circuit = "gcn_yoshi_circuit",
  excitebike = "wiiu_excitebike_arena",
  dragon_driftway = "wiiu_dragon_driftway",
  mute_city = "wiiu_mute_city",
  // Triforce Cup
  wario_gold_mine = "wii_warios_gold_mine",
  snes_rainbow_road = "snes_rainbow_road",
  ice_outpost = "wiiu_ice_ice_outpost",
  hyrule_circuit = "wiiu_hyrule_circuit",
  // Crossing Cup
  baby_park = "gcn_baby_park",
  cheese_land = "gba_cheese_land",
  wild_woods = "wiiu_wild_woods",
  animal_crossing = "wiiu_animal_crossing",
  // Bell Cup
  neo_bowser_city = "3ds_neo_bowser_city",
  ribbon_road = "gba_ribbon_road",
  super_bell_subway = "wiiu_super_bell_subway",
  big_blue = "wiiu_big_blue",
}
