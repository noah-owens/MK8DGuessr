import { TrackName } from "./SceneMetadata";

interface Track {
  track_name: string;
  origin: string;
  cup: string;
}

export function getTrackDetails(t: TrackName): Track {
  return trackDetails[t];
}

export const trackDetails: Record<TrackName, Track> = {
  [TrackName.mario_kart_stadium]: {
    track_name: "Mario Kart Stadium",
    origin: "Wii U",
    cup: "Mushroom Cup",
  },
  [TrackName.water_park]: {
    track_name: "Water Park",
    origin: "Wii U",
    cup: "Mushroom Cup",
  },
  [TrackName.sweet_canyon]: {
    track_name: "Sweet Sweet Canyon",
    origin: "Wii U",
    cup: "Mushroom Cup",
  },
  [TrackName.thwomp_ruins]: {
    track_name: "Thwomp Ruins",
    origin: "Wii U",
    cup: "Mushroom Cup",
  },
  [TrackName.mario_circuit]: {
    track_name: "Mario Circuit",
    origin: "Wii U",
    cup: "Flower Cup",
  },
  [TrackName.toad_harbor]: {
    track_name: "Toad Harbor",
    origin: "Wii U",
    cup: "Flower Cup",
  },
  [TrackName.twisted_mansion]: {
    track_name: "Twisted Mansion",
    origin: "Wii U",
    cup: "Flower Cup",
  },
  [TrackName.shy_guy_falls]: {
    track_name: "Shy Guy Falls",
    origin: "Wii U",
    cup: "Flower Cup",
  },
  [TrackName.sunshine_airport]: {
    track_name: "Sunshine Airport",
    origin: "Wii U",
    cup: "Star Cup",
  },
  [TrackName.dolphin_shoals]: {
    track_name: "Dolphin Shoals",
    origin: "Wii U",
    cup: "Star Cup",
  },
  [TrackName.electrodrome]: {
    track_name: "Electrodrome",
    origin: "Wii U",
    cup: "Star Cup",
  },
  [TrackName.mount_wario]: {
    track_name: "Mount Wario",
    origin: "Wii U",
    cup: "Star Cup",
  },
  [TrackName.cloudtop_cruise]: {
    track_name: "Cloudtop Cruise",
    origin: "Wii U",
    cup: "Special Cup",
  },
  [TrackName.bone_dry_dunes]: {
    track_name: "Bone-Dry Dunes",
    origin: "Wii U",
    cup: "Special Cup",
  },
  [TrackName.bowser_castle]: {
    track_name: "Bowser's Castle",
    origin: "Wii U",
    cup: "Special Cup",
  },
  [TrackName.rainbow_road]: {
    track_name: "Rainbow Road",
    origin: "Wii U",
    cup: "Special Cup",
  },
  [TrackName.moo_meadows]: {
    track_name: "Moo Moo Meadows",
    origin: "Wii",
    cup: "Shell Cup",
  },
  [TrackName.gba_mario_circuit]: {
    track_name: "Mario Circuit",
    origin: "GBA",
    cup: "Shell Cup",
  },
  [TrackName.cheep_beach]: {
    track_name: "Cheep Cheep Beach",
    origin: "DS",
    cup: "Shell Cup",
  },
  [TrackName.toads_turnpike]: {
    track_name: "Toad's Turnpike",
    origin: "N64",
    cup: "Shell Cup",
  },
  [TrackName.dry_desert]: {
    track_name: "Dry Dry Desert",
    origin: "GCN",
    cup: "Banana Cup",
  },
  [TrackName.donut_plains]: {
    track_name: "Donut Plains 3",
    origin: "SNES",
    cup: "Banana Cup",
  },
  [TrackName.royal_raceway]: {
    track_name: "Royal Raceway",
    origin: "N64",
    cup: "Banana Cup",
  },
  [TrackName.dk_jungle]: {
    track_name: "DK Jungle",
    origin: "3DS",
    cup: "Banana Cup",
  },
  [TrackName.wario_stadium]: {
    track_name: "Wario Stadium",
    origin: "DS",
    cup: "Leaf Cup",
  },
  [TrackName.sherbet_land]: {
    track_name: "Sherbet Land",
    origin: "GCN",
    cup: "Leaf Cup",
  },
  [TrackName.music_park]: {
    track_name: "Music Park",
    origin: "3DS",
    cup: "Leaf Cup",
  },
  [TrackName.yoshi_valley]: {
    track_name: "Yoshi Valley",
    origin: "N64",
    cup: "Leaf Cup",
  },
  [TrackName.tick_tock_clock]: {
    track_name: "Tick-Tock Clock",
    origin: "DS",
    cup: "Lightning Cup",
  },
  [TrackName.piranha_plant_slide]: {
    track_name: "Piranha Plant Slide",
    origin: "3DS",
    cup: "Lightning Cup",
  },
  [TrackName.grumble_volcano]: {
    track_name: "Grumble Volcano",
    origin: "Wii",
    cup: "Lightning Cup",
  },
  [TrackName.n64_rainbow_road]: {
    track_name: "Rainbow Road",
    origin: "N64",
    cup: "Lightning Cup",
  },
  [TrackName.yoshi_circuit]: {
    track_name: "Yoshi Circuit",
    origin: "GCN",
    cup: "Egg Cup",
  },
  [TrackName.excitebike]: {
    track_name: "Excitebike Arena",
    origin: "Wii U",
    cup: "Egg Cup",
  },
  [TrackName.dragon_driftway]: {
    track_name: "Dragon Driftway",
    origin: "Wii U",
    cup: "Egg Cup",
  },
  [TrackName.mute_city]: {
    track_name: "Mute City",
    origin: "Wii U",
    cup: "Egg Cup",
  },
  [TrackName.wario_gold_mine]: {
    track_name: "Wario's Gold Mine",
    origin: "Wii",
    cup: "Triforce Cup",
  },
  [TrackName.snes_rainbow_road]: {
    track_name: "Rainbow Road",
    origin: "SNES",
    cup: "Triforce Cup",
  },
  [TrackName.ice_outpost]: {
    track_name: "Ice Ice Outpost",
    origin: "Wii U",
    cup: "Triforce Cup",
  },
  [TrackName.hyrule_circuit]: {
    track_name: "Hyrule Circuit",
    origin: "Wii U",
    cup: "Triforce Cup",
  },
  [TrackName.baby_park]: {
    track_name: "Baby Park",
    origin: "GCN",
    cup: "Crossing Cup",
  },
  [TrackName.cheese_land]: {
    track_name: "Cheese Land",
    origin: "GBA",
    cup: "Crossing Cup",
  },
  [TrackName.wild_woods]: {
    track_name: "Wild Woods",
    origin: "Wii U",
    cup: "Crossing Cup",
  },
  [TrackName.animal_crossing]: {
    track_name: "Animal Crossing",
    origin: "Wii U",
    cup: "Crossing Cup",
  },
  [TrackName.neo_bowser_city]: {
    track_name: "Neo Bowser City",
    origin: "3DS",
    cup: "Bell Cup",
  },
  [TrackName.ribbon_road]: {
    track_name: "Ribbon Road",
    origin: "GBA",
    cup: "Bell Cup",
  },
  [TrackName.super_bell_subway]: {
    track_name: "Super Bell Subway",
    origin: "Wii U",
    cup: "Bell Cup",
  },
  [TrackName.big_blue]: {
    track_name: "Big Blue",
    origin: "Wii U",
    cup: "Bell Cup",
  },
};
