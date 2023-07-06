import { Color } from "three"

import Demon from "./Demon"
import Tribal from "./Tribal"
import Dragon from "./Dragon"
import Squidle from "./Squidle"
import Alpaking from "./Alpaking"
import Gogeling from "./Goleling"

const monstersList = [
    {
        'id': 0,
        'component': Dragon,
        'headDetailColor': new Color('#574672'),
        'skinColor': new Color('#d15f00')
    },
    {
        'id': 1,
        'component': Tribal,
        'headDetailColor': new Color('#20513a'),
        'skinColor': new Color('#7b1616')
    },
    {
        'id': 2,
        'component': Gogeling,
        'headDetailColor': new Color('#57386b'),
        'skinColor': new Color('#52914d')
    },
    {
        'id': 3,
        'component': Squidle,
        'headDetailColor': new Color('#0dcaf0'),
        'skinColor': new Color('#890e4b')
    },
    {
        'id': 4,
        'component': Alpaking,
        'headDetailColor': new Color('#5c6268'),
        'skinColor': new Color('#b68904')
    },
    {
        'id': 5,
        'component': Demon,
        'headDetailColor': new Color('#000000'),
        'skinColor': new Color('#6c000a')
    }
]

export default monstersList