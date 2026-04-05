import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class TwoB extends BasePetType {
    label = '2B';
    static possibleColors = [PetColor.white];
    sequence = {
        startingState: States.standLeft,
        sequenceStates: [
            {
                state: States.standLeft,
                possibleNextStates: [States.standLeft],
            },
        ],
    };

    setAnimation(face: string) {
        // 常にEWiM5V0U4AAK6zp.pngを参照
        (this as any).el.src = `${this.petRoot}/EWiM5V0U4AAK6zp.png`;
    }

    get emoji(): string {
        return '🦾';
    }
    get hello(): string {
        return `2B says hello`;
    }
}

export const TWOB_NAMES: ReadonlyArray<string> = [
    '2B',
    'YoRHa',
    'Nier',
    'Automata',
    'A2',
    '9S',
    'Commander',
    'Pascal',
    'Pod042',
    'Pod153',
    'Operator',
    'Devola',
    'Popola',
    'Emil',
    'Adam',
    'Eve',
    'Jackass',
    'Anemone',
    'Operator21O',
    'Operator6O',
    'Lily',
];
