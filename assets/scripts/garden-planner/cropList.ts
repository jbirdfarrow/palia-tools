import Crop from './classes/crop'
import CropType from './enums/crops'
import Bonus from './enums/bonus'
import CropCode from './enums/cropCode'
import CropSize from './enums/crop-size'

const TOMATO = new Crop(
  CropType.Tomato,
  Bonus.WaterRetain,
  CropSize.Single,
  '/crops/tomato.webp',
  // Base Values
  {
    base: 2,
    growthTime: 4,
    isReharvestable: true,
    reharvestCooldown: 2,
    reharvestLimit: 3,
  },

  // Gold Values
  {
    crop: 23,
    cropStar: 34,
    seed: 40,
    seedStar: 60,
    hasPreserve: true,
    preserve: 34,
    preserveStar: 51,
  },

  // Conversion Info
  {
    cropsPerSeed: 3,
    seedsPerConversion: 2,
    cropsPerPreserve: 1,
    seedProcessMinutes: 30,
    preserveProcessMinutes: 27,
  },
  {
    preserve: '/jars/tomato.png',
    seed: '/seeds/tomato.png',
  },
  {
    cropCode: CropCode.Tomato,
    cropTooltip: 'Tomato: Water Retention',
    cropBackgroundColor: 'bg-water-retain',
  },
)

const POTATO = new Crop(
  CropType.Potato,
  Bonus.WaterRetain,
  CropSize.Single,
  '/crops/potato.webp',
  {
    base: 2,
    growthTime: 5,
  },
  {
    crop: 45,
    cropStar: 67,
    seed: 20,
    seedStar: 30,
    hasPreserve: true,
    preserve: 68,
    preserveStar: 102,
  },
  {
    cropsPerSeed: 1,
    seedsPerConversion: 4,
    cropsPerPreserve: 1,
    seedProcessMinutes: 84,
    preserveProcessMinutes: 54,
  },
  {
    preserve: '/jars/potato.png',
    seed: '/seeds/potato.png',
  },
  {
    cropCode: CropCode.Potato,
    cropTooltip: 'Potato: Water Retention',
    cropBackgroundColor: 'bg-water-retain',
  },
)

const RICE = new Crop(
  CropType.Rice,
  Bonus.HarvestIncrease,
  CropSize.Single,
  '/crops/rice.webp',
  {
    base: 2,
    growthTime: 3,
    isReharvestable: true,
  },
  {
    crop: 27,
    cropStar: 40,
    seed: 11,
    seedStar: 16,
    hasPreserve: false,
    preserve: 0,
    preserveStar: 0,
  },
  {
    cropsPerSeed: 1,
    seedsPerConversion: 4,
    cropsPerPreserve: 0,
    seedProcessMinutes: 42,
    preserveProcessMinutes: 0,
  },
  {
    preserve: '',
    seed: '/seeds/rice.png',
  },
  {
    cropCode: CropCode.Rice,
    cropTooltip: 'Rice: Harvest Increase',
    cropBackgroundColor: 'bg-harvest-boost',
  },
)

const WHEAT = new Crop(
  CropType.Wheat,
  Bonus.HarvestIncrease,
  CropSize.Single,
  '/crops/wheat.webp',
  {
    base: 2,
    growthTime: 4,
  },
  {
    crop: 33,
    cropStar: 49,
    seed: 12,
    seedStar: 18,
    hasPreserve: false,
    preserve: 0,
    preserveStar: 0,
  },
  {
    cropsPerSeed: 1,
    seedsPerConversion: 4,
    cropsPerPreserve: 0,
    seedProcessMinutes: 42,
    preserveProcessMinutes: 0,
  },
  {
    preserve: '',
    seed: '/seeds/wheat.png',
  },
  {
    cropCode: CropCode.Wheat,
    cropTooltip: 'Wheat: Harvest Increase',
    cropBackgroundColor: 'bg-harvest-boost',
  },
)

const CARROT = new Crop(
  CropType.Carrot,
  Bonus.WeedPrevention,
  CropSize.Single,
  '/crops/carrot.webp',
  {
    base: 2,
    growthTime: 3,
  },
  {
    crop: 23,
    cropStar: 34,
    seed: 7,
    seedStar: 10,
    hasPreserve: true,
    preserve: 34,
    preserveStar: 51,
  },
  {
    cropsPerSeed: 1,
    seedsPerConversion: 4,
    cropsPerPreserve: 1,
    seedProcessMinutes: 18,
    preserveProcessMinutes: 27,
  },
  {
    preserve: '/jars/carrot.png',
    seed: '/seeds/carrot.png',
  },
  {
    cropCode: CropCode.Carrot,
    cropTooltip: 'Carrot: Weed Prevention',
    cropBackgroundColor: 'bg-weed-prevention',
  },
)

const ONION = new Crop(
  CropType.Onion,
  Bonus.WeedPrevention,
  CropSize.Single,
  '/crops/onion.webp',
  {
    base: 2,
    growthTime: 4,
  },
  {
    crop: 30,
    cropStar: 45,
    seed: 10,
    seedStar: 15,
    hasPreserve: true,
    preserve: 45,
    preserveStar: 67,
  },
  {
    cropsPerSeed: 1,
    seedsPerConversion: 4,
    cropsPerPreserve: 1,
    seedProcessMinutes: 24,
    preserveProcessMinutes: 36,
  },
  {
    preserve: '/jars/onion.png',
    seed: '/seeds/onion.png',
  },
  {
    cropCode: CropCode.Onion,
    cropTooltip: 'Onion: Weed Prevention',
    cropBackgroundColor: 'bg-weed-prevention',
  },
)

const COTTON = new Crop(
  CropType.Cotton,
  Bonus.QualityIncrease,
  CropSize.Single,
  '/crops/cotton.webp',
  {
    base: 2,
    growthTime: 5,
  },
  {
    crop: 45,
    cropStar: 67,
    seed: 20,
    seedStar: 30,
    hasPreserve: false,
    preserve: 0,
    preserveStar: 0,
  },
  {
    cropsPerSeed: 1,
    seedsPerConversion: 3,
    cropsPerPreserve: 0,
    seedProcessMinutes: 36,
    preserveProcessMinutes: 0,
  },
  {
    preserve: '',
    seed: '/seeds/cotton.png',
  },
  {
    cropCode: CropCode.Cotton,
    cropTooltip: 'Cotton: Quality Increase',
    cropBackgroundColor: 'bg-quality-increase',
  },
)

const BLUEBERRY = new Crop(
  CropType.Blueberry,
  Bonus.SpeedIncrease,
  CropSize.Bush,
  '/crops/blueberry.webp',
  {
    base: 6,
    growthTime: 9,
    isReharvestable: true,
    reharvestCooldown: 3,
    reharvestLimit: 3,
  },
  {
    crop: 39,
    cropStar: 58,
    seed: 112,
    seedStar: 168,
    hasPreserve: true,
    preserve: 59,
    preserveStar: 88,
  },
  {
    cropsPerSeed: 4,
    seedsPerConversion: 2,
    cropsPerPreserve: 1,
    seedProcessMinutes: 81,
    preserveProcessMinutes: 47.25,
  },
  {
    preserve: '/jars/blueberry.png',
    seed: '/seeds/blueberry.png',
  },
  {
    cropCode: CropCode.Blueberry,
    cropTooltip: 'Berry Bush: Speed Increase. 2x2, needs 2 of a bonus for the buff to activate',
    cropBackgroundColor: 'bg-growth-boost',
  },
)

const APPLE = new Crop(
  CropType.Apple,
  Bonus.SpeedIncrease,
  CropSize.Tree,
  '/crops/apple.webp',
  {
    base: 16,
    growthTime: 12,
    isReharvestable: true,
    reharvestCooldown: 6,
    reharvestLimit: 3,
  },
  {
    crop: 64,
    cropStar: 96,
    seed: 700,
    seedStar: 1050,
    hasPreserve: true,
    preserve: 96,
    preserveStar: 144,
  },
  {
    cropsPerSeed: 10,
    seedsPerConversion: 1,
    cropsPerPreserve: 1,
    seedProcessMinutes: 142,
    preserveProcessMinutes: 76,
  },
  {
    preserve: '/jars/apple.png',
    seed: '/seeds/apple.png',
  },
  {
    cropCode: CropCode.Apple,
    cropTooltip: 'Apple Tree: Speed Increase. 3x3, needs 3 of a bonus for the buff to activate',
    cropBackgroundColor: 'bg-growth-boost',
  },
)

const CORN = new Crop(
  CropType.Corn,
  Bonus.HarvestIncrease,
  CropSize.Single,
  '/crops/corn.webp',
  {
    base: 2,
    growthTime: 5,
  },
  {
    crop: 40,
    cropStar: 60,
    seed: 15,
    seedStar: 22,
    hasPreserve: true,
    preserve: 60,
    preserveStar: 90,
  },
  {
    cropsPerSeed: 1,
    seedsPerConversion: 4,
    cropsPerPreserve: 1,
    seedProcessMinutes: 48,
    preserveProcessMinutes: 48,
  },
  {
    preserve: '/jars/corn.webp',
    seed: '/seeds/corn.webp',
  },
  {
    cropCode: CropCode.Corn,
    cropTooltip: 'Corn: Harvest Increase',
    cropBackgroundColor: 'bg-harvest-boost',
  },
)

const SPICY_PEPPER = new Crop(
  CropType.SpicyPepper,
  Bonus.QualityIncrease,
  CropSize.Bush,
  '/crops/spicy-pepper.webp',
  {
    base: 6,
    growthTime: 6,
    isReharvestable: true,
    reharvestCooldown: 3,
    reharvestLimit: 3,
  },
  {
    crop: 32,
    cropStar: 48,
    seed: 85,
    seedStar: 127,
    hasPreserve: true,
    preserve: 48,
    preserveStar: 72,
  },
  {
    cropsPerSeed: 4,
    seedsPerConversion: 2,
    cropsPerPreserve: 1,
    seedProcessMinutes: 100,
    preserveProcessMinutes: 38.5,
  },
  {
    preserve: '/jars/spicy-pepper.webp',
    seed: '/seeds/spicy-pepper.webp',
  },
  {
    cropCode: CropCode.SpicyPepper,
    cropTooltip: 'Spicy Pepper: Quality Increase. 2x2, needs 2 of a bonus for the buff to activate',
    cropBackgroundColor: 'bg-quality-increase',
  },
)

const CABBAGE = new Crop(
  CropType.Cabbage,
  Bonus.WaterRetain,
  CropSize.Single,
  '/crops/cabbage.webp',
  {
    base: 2,
    growthTime: 4,
  },
  {
    crop: 30,
    cropStar: 45,
    seed: 10,
    seedStar: 15,
    hasPreserve: true,
    preserve: 45,
    preserveStar: 67,
  },
  {
    cropsPerSeed: 1,
    seedsPerConversion: 4,
    cropsPerPreserve: 1,
    seedProcessMinutes: 24,
    preserveProcessMinutes: 36,
  },
  {
    preserve: '/jars/cabbage.webp',
    seed: '/seeds/cabbage.webp',
  },
  {
    cropCode: CropCode.Cabbage,
    cropTooltip: 'Cabbage: Water Retention',
    cropBackgroundColor: 'bg-water-retain',
  },
)

const BOK_CHOY = new Crop(
  CropType.BokChoy,
  Bonus.WeedPrevention,
  CropSize.Single,
  '/crops/bok-choy.webp',
  {
    base: 2,
    growthTime: 4,
  },
  {
    crop: 30,
    cropStar: 45,
    seed: 10,
    seedStar: 15,
    hasPreserve: true,
    preserve: 45,
    preserveStar: 67,
  },
  {
    cropsPerSeed: 1,
    seedsPerConversion: 4,
    cropsPerPreserve: 1,
    seedProcessMinutes: 24,
    preserveProcessMinutes: 36,
  },
  {
    preserve: '/jars/bok-choy.webp',
    seed: '/seeds/bok-choy.webp',
  },
  {
    cropCode: CropCode.BokChoy,
    cropTooltip: 'Bok Choy: Weed Prevention',
    cropBackgroundColor: 'bg-weed-prevention',
  },
)

const NULLCROP = new Crop(
  CropType.None,
  Bonus.None,
  CropSize.Single,
  '',
  {
    base: 0,
    growthTime: 0,
  },
  {
    crop: 0,
    cropStar: 0,
    seed: 0,
    seedStar: 0,
    hasPreserve: false,
    preserve: 0,
    preserveStar: 0,
  },
  {
    cropsPerSeed: 0,
    seedsPerConversion: 0,
    cropsPerPreserve: 0,
    seedProcessMinutes: 0,
    preserveProcessMinutes: 0,
  },
  {
    preserve: '',
    seed: '',
  },
  {
    cropCode: CropCode.None,
    cropTooltip: '',
    cropBackgroundColor: '',
  },
)

// Helper functions to get crop data from the crop code
const crops = {
  [CropType.Tomato]: TOMATO,
  [CropType.Potato]: POTATO,
  [CropType.Rice]: RICE,
  [CropType.Wheat]: WHEAT,
  [CropType.Carrot]: CARROT,
  [CropType.Onion]: ONION,
  [CropType.Cotton]: COTTON,
  [CropType.Blueberry]: BLUEBERRY,
  [CropType.Apple]: APPLE,
  [CropType.Corn]: CORN,
  [CropType.SpicyPepper]: SPICY_PEPPER,

  [CropType.None]: NULLCROP,
} as const

function getCropFromCode(code: CropCode): Crop {
  switch (code) {
    case CropCode.Tomato:
      return crops[CropType.Tomato]
    case CropCode.Potato:
      return crops[CropType.Potato]
    case CropCode.Rice:
      return crops[CropType.Rice]
    case CropCode.Wheat:
      return crops[CropType.Wheat]
    case CropCode.Carrot:
      return crops[CropType.Carrot]
    case CropCode.Onion:
      return crops[CropType.Onion]
    case CropCode.Cotton:
      return crops[CropType.Cotton]
    case CropCode.Blueberry:
      return crops[CropType.Blueberry]
    case CropCode.Apple:
      return crops[CropType.Apple]
    case CropCode.Corn:
      return crops[CropType.Corn]
    case CropCode.SpicyPepper:
      return crops[CropType.SpicyPepper]
    default:
      return crops[CropType.None]
  }
}

function getCodeFromCrop(crop: Crop): CropCode {
  return crop.cropCode
}

function getCropFromType(type: CropType): Crop | null {
  return crops[type]
}

export { getCropFromCode, getCodeFromCrop, getCropFromType }
export default crops
