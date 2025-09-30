import { SceneMetadata } from "./SceneMetadata";

export const dummyData: SceneMetadata[] = [
    {
        scene_id: 'wii_moo_01',
        track: 'Moo Moo Meadows',
        coordinates: [100, 200],
        image: 'scenes/images/wii_moo_01',
        slice_angle: 120,
        difficulty: 'easy',
        tags: ['grass', 'daylight', 'cow'],
    },
    {
        scene_id: 'wiiu_thwomp_01',
        track: 'Thwomp Ruins',
        coordinates: [300, 400],
        image: 'scenes/images/wiiu_thwomp_01',
        slice_angle: 120,
        difficulty: 'medium',
        tags: ['interior', 'brick']
    }
]