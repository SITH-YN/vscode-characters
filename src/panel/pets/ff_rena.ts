import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class FF_rena extends BasePetType {
    label = 'FF_rena';
    static possibleColors = [PetColor.white];
    sequence = {
        startingState: States.standRight,
        sequenceStates: [
            {
                state: States.standRight,
                possibleNextStates: [States.standLeft],
            },
            {
                state: States.standLeft,
                possibleNextStates: [States.standRight],
            },
        ],
    };

    setAnimation(face: string) {
        // standRight/standLeftのみ専用画像を参照
        if (face === 'standRight') {
            (this as any).el.src = `${this.petRoot}_right.png`;
        } else if (face === 'standLeft') {
            (this as any).el.src = `${this.petRoot}_left.png`;
        } else {
            // 他は何もしない（またはデフォルト動作）
        }
    }

    get emoji(): string {
        return '👧';
    }
    get hello(): string {
        return `ff_rena says hello`;
    }
}

export const FF_RENA_NAMES: ReadonlyArray<string> = [
    'Arizona',
    'Frankie',
    'Rosy',
    'Cinnamon',
    'Ginger',
    'Todd',
    'Rocky',
    'Felix',
    'Sandy',
    'Archie',
    'Flynn',
    'Foxy',
    'Elmo',
    'Ember',
    'Hunter',
    'Otto',
    'Sonic',
    'Amber',
    'Maroon',
    'Spark',
    'Sparky',
    'Sly',
    'Scout',
    'Penny',
    'Ash',
    'Rose',
    'Apollo',
    'Chili',
    'Blaze',
    'Radish',
    'Scarlett',
    'Juliet',
    'Goldie',
    'Rooney',
    'Paprika',
    'Alpine',
    'Rusty',
    'Maple',
    'Vixen',
    'David',
    'Apricot',
    'Claire',
    'Wilma',
    'Copper',
    'Pepper',
    'Crimson',
    'Ariel',
    'Arvi',
    'George',
    'Eva',
    'Fuzzy',
    'Russell',
    'Rufus',
    'Mystic',
    'Leopold',
    'Scully',
    'Ferris',
    'Robin',
    'Zorro',
    'Scarlet',
    'Comet',
    'Rowan',
    'Jake',
    'Hope',
    'Molly',
    'Mars',
    'Apple',
    'Geneva',
    'Redford',
    'Chestnut',
    'Evelyn',
    'Red',
    'Aurora',
    'Agniya',
    'Fitz',
    'Crispin',
    'Sunny',
    'Autumn',
    'Bridget',
    'Ruby',
    'Iris',
    'Pumpkin',
    'Rose',
    'Rosie',
    'Vesta',
    'Adolf',
    'Lava',
    'Conan',
    'Flame',
    'Oswald',
    'Tails',
    'Chester',
    'Jasper',
    'Finch',
    'Scarlet',
    'Chewy',
    'Finnick',
    'Biscuit',
    'Prince Harry',
    'Loki',
    'Pip',
    'Pippin',
];
