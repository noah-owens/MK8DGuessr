import { trackName } from "./SceneMetadata";

interface Track {
  track_name: string;
  origin: string;
  cup: string;
}

export const trackDetails: Record<trackName, Track> = {
  [trackName.mario_kart_stadium]: {
    track_name: "Mario Kart Stadium",
    origin: "Wii U",
    cup: "Mushroom Cup",
  },
  [trackName.water_park]: {
    track_name: "Water Park",
    origin: "Wii U",
    cup: "Mushroom Cup",
  },
  [trackName.sweet_canyon]: {
    track_name: "Sweet Sweet Canyon",
    origin: "Wii U",
    cup: "Mushroom Cup",
  },
  [trackName.thwomp_ruins]: {
    track_name: "Thwomp Ruins",
    origin: "Wii U",
    cup: "Mushroom Cup",
  },
  [trackName.mario_circuit]: {
    track_name: "Mario Circuit",
    origin: "Wii U",
    cup: "Flower Cup",
  },
  [trackName.toad_harbor]: {
    track_name: "Toad Harbor",
    origin: "Wii U",
    cup: "Flower Cup",
  },
  [trackName.twisted_mansion]: {
    track_name: "Twisted Mansion",
    origin: "Wii U",
    cup: "Flower Cup",
  },
  [trackName.shy_guy_falls]: {
    track_name: "Shy Guy Falls",
    origin: "Wii U",
    cup: "Flower Cup",
  },
  [trackName.sunshine_airport]: {
    track_name: "Sunshine Airport",
    origin: "Wii U",
    cup: "Star Cup",
  },
  [trackName.dolphin_shoals]: {
    track_name: "Dolphin Shoals",
    origin: "Wii U",
    cup: "Star Cup",
  },
  [trackName.electrodrome]: {
    track_name: "Electrodrome",
    origin: "Wii U",
    cup: "Star Cup",
  },
  [trackName.mount_wario]: {
    track_name: "Mount Wario",
    origin: "Wii U",
    cup: "Star Cup",
  },
  [trackName.cloudtop_cruise]: {
    track_name: "Cloudtop Cruise",
    origin: "Wii U",
    cup: "Special Cup",
  },
  [trackName.bone_dry_dunes]: {
    track_name: "Bone-Dry Dunes",
    origin: "Wii U",
    cup: "Special Cup",
  },
  [trackName.bowser_castle]: {
    track_name: "Bowser's Castle",
    origin: "Wii U",
    cup: "Special Cup",
  },
  [trackName.rainbow_road]: {
    track_name: "Rainbow Road",
    origin: "Wii U",
    cup: "Special Cup",
  },
  [trackName.moo_meadows]: {
    track_name: "Moo Moo Meadows",
    origin: "Wii",
    cup: "Shell Cup",
  },
  [trackName.gba_mario_circuit]: {
    track_name: "Mario Circuit",
    origin: "GBA",
    cup: "Shell Cup",
  },
  [trackName.cheep_beach]: {
    track_name: "Cheep Cheep Beach",
    origin: "DS",
    cup: "Shell Cup",
  },
  [trackName.toads_turnpike]: {
    track_name: "Toad's Turnpike",
    origin: "N64",
    cup: "Shell Cup",
  },
  [trackName.dry_desert]: {
    track_name: "Dry Dry Desert",
    origin: "GCN",
    cup: "Banana Cup",
  },
  [trackName.donut_plains]: {
    track_name: "Donut Plains 3",
    origin: "SNES",
    cup: "Banana Cup",
  },
  [trackName.royal_raceway]: {
    track_name: "Royal Raceway",
    origin: "N64",
    cup: "Banana Cup",
  },
  [trackName.dk_jungle]: {
    track_name: "DK Jungle",
    origin: "3DS",
    cup: "Banana Cup",
  },
  [trackName.wario_stadium]: {
    track_name: "Wario Stadium",
    origin: "DS",
    cup: "Leaf Cup",
  },
  [trackName.sherbet_land]: {
    track_name: "Sherbet Land",
    origin: "GCN",
    cup: "Leaf Cup",
  },
  [trackName.music_park]: {
    track_name: "Music Park",
    origin: "3DS",
    cup: "Leaf Cup",
  },
  [trackName.yoshi_valley]: {
    track_name: "Yoshi Valley",
    origin: "N64",
    cup: "Leaf Cup",
  },
  [trackName.tick_tock_clock]: {
    track_name: "Tick-Tock Clock",
    origin: "DS",
    cup: "Lightning Cup",
  },
  [trackName.piranha_plant_slide]: {
    track_name: "Piranha Plant Slide",
    origin: "3DS",
    cup: "Lightning Cup",
  },
  [trackName.grumble_volcano]: {
    track_name: "Grumble Volcano",
    origin: "Wii",
    cup: "Lightning Cup",
  },
  [trackName.n64_rainbow_road]: {
    track_name: "Rainbow Road",
    origin: "N64",
    cup: "Lightning Cup",
  },
  [trackName.yoshi_circuit]: {
    track_name: "Yoshi Circuit",
    origin: "GCN",
    cup: "Egg Cup",
  },
  [trackName.excitebike]: {
    track_name: "Excitebike Arena",
    origin: "Wii U",
    cup: "Egg Cup",
  },
  [trackName.dragon_driftway]: {
    track_name: "Dragon Driftway",
    origin: "Wii U",
    cup: "Egg Cup",
  },
  [trackName.mute_city]: {
    track_name: "Mute City",
    origin: "Wii U",
    cup: "Egg Cup",
  },
  [trackName.wario_gold_mine]: {
    track_name: "Wario's Gold Mine",
    origin: "Wii",
    cup: "Triforce Cup",
  },
  [trackName.snes_rainbow_road]: {
    track_name: "Rainbow Road",
    origin: "SNES",
    cup: "Triforce Cup",
  },
  [trackName.ice_outpost]: {
    track_name: "Ice Ice Outpost",
    origin: "Wii U",
    cup: "Triforce Cup",
  },
  [trackName.hyrule_circuit]: {
    track_name: "Hyrule Circuit",
    origin: "Wii U",
    cup: "Triforce Cup",
  },
  [trackName.baby_park]: {
    track_name: "Baby Park",
    origin: "GCN",
    cup: "Crossing Cup",
  },
  [trackName.cheese_land]: {
    track_name: "Cheese Land",
    origin: "GBA",
    cup: "Crossing Cup",
  },
  [trackName.wild_woods]: {
    track_name: "Wild Woods",
    origin: "Wii U",
    cup: "Crossing Cup",
  },
  [trackName.animal_crossing]: {
    track_name: "Animal Crossing",
    origin: "Wii U",
    cup: "Crossing Cup",
  },
  [trackName.neo_bowser_city]: {
    track_name: "Neo Bowser City",
    origin: "3DS",
    cup: "Bell Cup",
  },
  [trackName.ribbon_road]: {
    track_name: "Ribbon Road",
    origin: "GBA",
    cup: "Bell Cup",
  },
  [trackName.super_bell_subway]: {
    track_name: "Super Bell Subway",
    origin: "Wii U",
    cup: "Bell Cup",
  },
  [trackName.big_blue]: {
    track_name: "Big Blue",
    origin: "Wii U",
    cup: "Bell Cup",
  },
};
