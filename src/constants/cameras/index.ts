/* eslint-disable max-len */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable quote-props */
export type Camera = {
  camera_name: string;
  image: string;
};

export interface UnitToRenderBuilding {
  [key: number]: number;
}

export interface DataObject {
  [key: string]: { camera_name: string; image: string };
}

export interface CameraObject {
  [key: string]: THREE.Vector3Tuple;
}

export const building1Config = {
  '1': {
    camera_name: 'Cam_1_001',
    image: './renders/spin1/spin1_0119.jpg',
  },
  '2': {
    camera_name: 'Cam_1_002',
    image: './renders/spin1/spin1_0000.jpg',
  },
  '3': {
    camera_name: 'Cam_1_003',
    image: './renders/spin1/spin1_0001.jpg',
  },
  '4': {
    camera_name: 'Cam_1_004',
    image: './renders/spin1/spin1_0002.jpg',
  },
  '5': {
    camera_name: 'Cam_1_005',
    image: './renders/spin1/spin1_0003.jpg',
  },
  '6': {
    camera_name: 'Cam_1_006',
    image: './renders/spin1/spin1_0004.jpg',
  },
  '7': {
    camera_name: 'Cam_1_007',
    image: './renders/spin1/spin1_0005.jpg',
  },
  '8': {
    camera_name: 'Cam_1_008',
    image: './renders/spin1/spin1_0006.jpg',
  },
  '9': {
    camera_name: 'Cam_1_009',
    image: './renders/spin1/spin1_0007.jpg',
  },
  '10': {
    camera_name: 'Cam_1_010',
    image: './renders/spin1/spin1_0008.jpg',
  },
  '11': {
    camera_name: 'Cam_1_011',
    image: './renders/spin1/spin1_0009.jpg',
  },
  '12': {
    camera_name: 'Cam_1_012',
    image: './renders/spin1/spin1_0010.jpg',
  },
  '13': {
    camera_name: 'Cam_1_013',
    image: './renders/spin1/spin1_0011.jpg',
  },
  '14': {
    camera_name: 'Cam_1_014',
    image: './renders/spin1/spin1_0012.jpg',
  },
  '15': {
    camera_name: 'Cam_1_015',
    image: './renders/spin1/spin1_0013.jpg',
  },
  '16': {
    camera_name: 'Cam_1_016',
    image: './renders/spin1/spin1_0014.jpg',
  },
  '17': {
    camera_name: 'Cam_1_017',
    image: './renders/spin1/spin1_0015.jpg',
  },
  '18': {
    camera_name: 'Cam_1_018',
    image: './renders/spin1/spin1_0016.jpg',
  },
  '19': {
    camera_name: 'Cam_1_019',
    image: './renders/spin1/spin1_0017.jpg',
  },
  '20': {
    camera_name: 'Cam_1_020',
    image: './renders/spin1/spin1_0018.jpg',
  },
  '21': {
    camera_name: 'Cam_1_021',
    image: './renders/spin1/spin1_0019.jpg',
  },
  '22': {
    camera_name: 'Cam_1_022',
    image: './renders/spin1/spin1_0020.jpg',
  },
  '23': {
    camera_name: 'Cam_1_023',
    image: './renders/spin1/spin1_0021.jpg',
  },
  '24': {
    camera_name: 'Cam_1_024',
    image: './renders/spin1/spin1_0022.jpg',
  },
  '25': {
    camera_name: 'Cam_1_025',
    image: './renders/spin1/spin1_0023.jpg',
  },
  '26': {
    camera_name: 'Cam_1_026',
    image: './renders/spin1/spin1_0024.jpg',
  },
  '27': {
    camera_name: 'Cam_1_027',
    image: './renders/spin1/spin1_0025.jpg',
  },
  '28': {
    camera_name: 'Cam_1_028',
    image: './renders/spin1/spin1_0026.jpg',
  },
  '29': {
    camera_name: 'Cam_1_029',
    image: './renders/spin1/spin1_0027.jpg',
  },
  '30': {
    camera_name: 'Cam_1_030',
    image: './renders/spin1/spin1_0028.jpg',
  },
  '31': {
    camera_name: 'Cam_1_031',
    image: './renders/spin1/spin1_0029.jpg',
  },
  '32': {
    camera_name: 'Cam_1_032',
    image: './renders/spin1/spin1_0030.jpg',
  },
  '33': {
    camera_name: 'Cam_1_033',
    image: './renders/spin1/spin1_0031.jpg',
  },
  '34': {
    camera_name: 'Cam_1_034',
    image: './renders/spin1/spin1_0032.jpg',
  },
  '35': {
    camera_name: 'Cam_1_035',
    image: './renders/spin1/spin1_0033.jpg',
  },
  '36': {
    camera_name: 'Cam_1_036',
    image: './renders/spin1/spin1_0034.jpg',
  },
  '37': {
    camera_name: 'Cam_1_037',
    image: './renders/spin1/spin1_0035.jpg',
  },
  '38': {
    camera_name: 'Cam_1_038',
    image: './renders/spin1/spin1_0036.jpg',
  },
  '39': {
    camera_name: 'Cam_1_039',
    image: './renders/spin1/spin1_0037.jpg',
  },
  '40': {
    camera_name: 'Cam_1_040',
    image: './renders/spin1/spin1_0038.jpg',
  },
  '41': {
    camera_name: 'Cam_1_041',
    image: './renders/spin1/spin1_0039.jpg',
  },
  '42': {
    camera_name: 'Cam_1_042',
    image: './renders/spin1/spin1_0040.jpg',
  },
  '43': {
    camera_name: 'Cam_1_043',
    image: './renders/spin1/spin1_0041.jpg',
  },
  '44': {
    camera_name: 'Cam_1_044',
    image: './renders/spin1/spin1_0042.jpg',
  },
  '45': {
    camera_name: 'Cam_1_045',
    image: './renders/spin1/spin1_0043.jpg',
  },
  '46': {
    camera_name: 'Cam_1_046',
    image: './renders/spin1/spin1_0044.jpg',
  },
  '47': {
    camera_name: 'Cam_1_047',
    image: './renders/spin1/spin1_0045.jpg',
  },
  '48': {
    camera_name: 'Cam_1_048',
    image: './renders/spin1/spin1_0046.jpg',
  },
  '49': {
    camera_name: 'Cam_1_049',
    image: './renders/spin1/spin1_0047.jpg',
  },
  '50': {
    camera_name: 'Cam_1_050',
    image: './renders/spin1/spin1_0048.jpg',
  },
  '51': {
    camera_name: 'Cam_1_051',
    image: './renders/spin1/spin1_0049.jpg',
  },
  '52': {
    camera_name: 'Cam_1_052',
    image: './renders/spin1/spin1_0050.jpg',
  },
  '53': {
    camera_name: 'Cam_1_053',
    image: './renders/spin1/spin1_0051.jpg',
  },
  '54': {
    camera_name: 'Cam_1_054',
    image: './renders/spin1/spin1_0052.jpg',
  },
  '55': {
    camera_name: 'Cam_1_055',
    image: './renders/spin1/spin1_0053.jpg',
  },
  '56': {
    camera_name: 'Cam_1_056',
    image: './renders/spin1/spin1_0054.jpg',
  },
  '57': {
    camera_name: 'Cam_1_057',
    image: './renders/spin1/spin1_0055.jpg',
  },
  '58': {
    camera_name: 'Cam_1_058',
    image: './renders/spin1/spin1_0056.jpg',
  },
  '59': {
    camera_name: 'Cam_1_059',
    image: './renders/spin1/spin1_0057.jpg',
  },
  '60': {
    camera_name: 'Cam_1_060',
    image: './renders/spin1/spin1_0058.jpg',
  },
  '61': {
    camera_name: 'Cam_1_061',
    image: './renders/spin1/spin1_0059.jpg',
  },
  '62': {
    camera_name: 'Cam_1_062',
    image: './renders/spin1/spin1_0060.jpg',
  },
  '63': {
    camera_name: 'Cam_1_063',
    image: './renders/spin1/spin1_0061.jpg',
  },
  '64': {
    camera_name: 'Cam_1_064',
    image: './renders/spin1/spin1_0062.jpg',
  },
  '65': {
    camera_name: 'Cam_1_065',
    image: './renders/spin1/spin1_0063.jpg',
  },
  '66': {
    camera_name: 'Cam_1_066',
    image: './renders/spin1/spin1_0064.jpg',
  },
  '67': {
    camera_name: 'Cam_1_067',
    image: './renders/spin1/spin1_0065.jpg',
  },
  '68': {
    camera_name: 'Cam_1_068',
    image: './renders/spin1/spin1_0066.jpg',
  },
  '69': {
    camera_name: 'Cam_1_069',
    image: './renders/spin1/spin1_0067.jpg',
  },
  '70': {
    camera_name: 'Cam_1_070',
    image: './renders/spin1/spin1_0068.jpg',
  },
  '71': {
    camera_name: 'Cam_1_071',
    image: './renders/spin1/spin1_0069.jpg',
  },
  '72': {
    camera_name: 'Cam_1_072',
    image: './renders/spin1/spin1_0070.jpg',
  },
  '73': {
    camera_name: 'Cam_1_073',
    image: './renders/spin1/spin1_0071.jpg',
  },
  '74': {
    camera_name: 'Cam_1_074',
    image: './renders/spin1/spin1_0072.jpg',
  },
  '75': {
    camera_name: 'Cam_1_075',
    image: './renders/spin1/spin1_0073.jpg',
  },
  '76': {
    camera_name: 'Cam_1_076',
    image: './renders/spin1/spin1_0074.jpg',
  },
  '77': {
    camera_name: 'Cam_1_077',
    image: './renders/spin1/spin1_0075.jpg',
  },
  '78': {
    camera_name: 'Cam_1_078',
    image: './renders/spin1/spin1_0076.jpg',
  },
  '79': {
    camera_name: 'Cam_1_079',
    image: './renders/spin1/spin1_0077.jpg',
  },
  '80': {
    camera_name: 'Cam_1_080',
    image: './renders/spin1/spin1_0078.jpg',
  },
  '81': {
    camera_name: 'Cam_1_081',
    image: './renders/spin1/spin1_0079.jpg',
  },
  '82': {
    camera_name: 'Cam_1_082',
    image: './renders/spin1/spin1_0080.jpg',
  },
  '83': {
    camera_name: 'Cam_1_083',
    image: './renders/spin1/spin1_0081.jpg',
  },
  '84': {
    camera_name: 'Cam_1_084',
    image: './renders/spin1/spin1_0082.jpg',
  },
  '85': {
    camera_name: 'Cam_1_085',
    image: './renders/spin1/spin1_0083.jpg',
  },
  '86': {
    camera_name: 'Cam_1_086',
    image: './renders/spin1/spin1_0084.jpg',
  },
  '87': {
    camera_name: 'Cam_1_087',
    image: './renders/spin1/spin1_0085.jpg',
  },
  '88': {
    camera_name: 'Cam_1_088',
    image: './renders/spin1/spin1_0086.jpg',
  },
  '89': {
    camera_name: 'Cam_1_089',
    image: './renders/spin1/spin1_0087.jpg',
  },
  '90': {
    camera_name: 'Cam_1_090',
    image: './renders/spin1/spin1_0088.jpg',
  },
  '91': {
    camera_name: 'Cam_1_091',
    image: './renders/spin1/spin1_0089.jpg',
  },
  '92': {
    camera_name: 'Cam_1_092',
    image: './renders/spin1/spin1_0090.jpg',
  },
  '93': {
    camera_name: 'Cam_1_093',
    image: './renders/spin1/spin1_0091.jpg',
  },
  '94': {
    camera_name: 'Cam_1_094',
    image: './renders/spin1/spin1_0092.jpg',
  },
  '95': {
    camera_name: 'Cam_1_095',
    image: './renders/spin1/spin1_0093.jpg',
  },
  '96': {
    camera_name: 'Cam_1_096',
    image: './renders/spin1/spin1_0094.jpg',
  },
  '97': {
    camera_name: 'Cam_1_097',
    image: './renders/spin1/spin1_0095.jpg',
  },
  '98': {
    camera_name: 'Cam_1_098',
    image: './renders/spin1/spin1_0096.jpg',
  },
  '99': {
    camera_name: 'Cam_1_099',
    image: './renders/spin1/spin1_0097.jpg',
  },
  '100': {
    camera_name: 'Cam_1_100',
    image: './renders/spin1/spin1_0098.jpg',
  },
  '101': {
    camera_name: 'Cam_1_101',
    image: './renders/spin1/spin1_0099.jpg',
  },
  '102': {
    camera_name: 'Cam_1_102',
    image: './renders/spin1/spin1_0100.jpg',
  },
  '103': {
    camera_name: 'Cam_1_103',
    image: './renders/spin1/spin1_0101.jpg',
  },
  '104': {
    camera_name: 'Cam_1_104',
    image: './renders/spin1/spin1_0102.jpg',
  },
  '105': {
    camera_name: 'Cam_1_105',
    image: './renders/spin1/spin1_0103.jpg',
  },
  '106': {
    camera_name: 'Cam_1_106',
    image: './renders/spin1/spin1_0104.jpg',
  },
  '107': {
    camera_name: 'Cam_1_107',
    image: './renders/spin1/spin1_0105.jpg',
  },
  '108': {
    camera_name: 'Cam_1_108',
    image: './renders/spin1/spin1_0106.jpg',
  },
  '109': {
    camera_name: 'Cam_1_109',
    image: './renders/spin1/spin1_0107.jpg',
  },
  '110': {
    camera_name: 'Cam_1_110',
    image: './renders/spin1/spin1_0108.jpg',
  },
  '111': {
    camera_name: 'Cam_1_111',
    image: './renders/spin1/spin1_0109.jpg',
  },
  '112': {
    camera_name: 'Cam_1_112',
    image: './renders/spin1/spin1_0110.jpg',
  },
  '113': {
    camera_name: 'Cam_1_113',
    image: './renders/spin1/spin1_0111.jpg',
  },
  '114': {
    camera_name: 'Cam_1_114',
    image: './renders/spin1/spin1_0112.jpg',
  },
  '115': {
    camera_name: 'Cam_1_115',
    image: './renders/spin1/spin1_0113.jpg',
  },
  '116': {
    camera_name: 'Cam_1_116',
    image: './renders/spin1/spin1_0114.jpg',
  },
  '117': {
    camera_name: 'Cam_1_117',
    image: './renders/spin1/spin1_0115.jpg',
  },
  '118': {
    camera_name: 'Cam_1_118',
    image: './renders/spin1/spin1_0116.jpg',
  },
  '119': {
    camera_name: 'Cam_1_119',
    image: './renders/spin1/spin1_0117.jpg',
  },
  '120': {
    camera_name: 'Cam_1_120',
    image: './renders/spin1/spin1_0118.jpg',
  }
}

export const building2Config ={
  '1': {
    camera_name: 'Cam_2_000',
    image: './renders/spin2/spin2_0000.jpg',
  },
  '2': {
    camera_name: 'Cam_2_001',
    image: './renders/spin2/spin2_0001.jpg',
  },
  '3': {
    camera_name: 'Cam_2_002',
    image: './renders/spin2/spin2_0002.jpg',
  },
  '4': {
    camera_name: 'Cam_2_003',
    image: './renders/spin2/spin2_0003.jpg',
  },
  '5': {
    camera_name: 'Cam_2_004',
    image: './renders/spin2/spin2_0004.jpg',
  },
  '6': {
    camera_name: 'Cam_2_005',
    image: './renders/spin2/spin2_0005.jpg',
  },
  '7': {
    camera_name: 'Cam_2_006',
    image: './renders/spin2/spin2_0006.jpg',
  },
  '8': {
    camera_name: 'Cam_2_007',
    image: './renders/spin2/spin2_0007.jpg',
  },
  '9': {
    camera_name: 'Cam_2_008',
    image: './renders/spin2/spin2_0008.jpg',
  },
  '10': {
    camera_name: 'Cam_2_009',
    image: './renders/spin2/spin2_0009.jpg',
  },
  '11': {
    camera_name: 'Cam_2_010',
    image: './renders/spin2/spin2_0010.jpg',
  },
  '12': {
    camera_name: 'Cam_2_011',
    image: './renders/spin2/spin2_0011.jpg',
  },
  '13': {
    camera_name: 'Cam_2_012',
    image: './renders/spin2/spin2_0012.jpg',
  },
  '14': {
    camera_name: 'Cam_2_013',
    image: './renders/spin2/spin2_0013.jpg',
  },
  '15': {
    camera_name: 'Cam_2_014',
    image: './renders/spin2/spin2_0014.jpg',
  },
  '16': {
    camera_name: 'Cam_2_015',
    image: './renders/spin2/spin2_0015.jpg',
  },
  '17': {
    camera_name: 'Cam_2_016',
    image: './renders/spin2/spin2_0016.jpg',
  },
  '18': {
    camera_name: 'Cam_2_017',
    image: './renders/spin2/spin2_0017.jpg',
  },
  '19': {
    camera_name: 'Cam_2_018',
    image: './renders/spin2/spin2_0018.jpg',
  },
  '20': {
    camera_name: 'Cam_2_019',
    image: './renders/spin2/spin2_0019.jpg',
  },
  '21': {
    camera_name: 'Cam_2_020',
    image: './renders/spin2/spin2_0020.jpg',
  },
  '22': {
    camera_name: 'Cam_2_021',
    image: './renders/spin2/spin2_0021.jpg',
  },
  '23': {
    camera_name: 'Cam_2_022',
    image: './renders/spin2/spin2_0022.jpg',
  },
  '24': {
    camera_name: 'Cam_2_023',
    image: './renders/spin2/spin2_0023.jpg',
  },
  '25': {
    camera_name: 'Cam_2_024',
    image: './renders/spin2/spin2_0024.jpg',
  },
  '26': {
    camera_name: 'Cam_2_025',
    image: './renders/spin2/spin2_0025.jpg',
  },
  '27': {
    camera_name: 'Cam_2_026',
    image: './renders/spin2/spin2_0026.jpg',
  },
  '28': {
    camera_name: 'Cam_2_027',
    image: './renders/spin2/spin2_0027.jpg',
  },
  '29': {
    camera_name: 'Cam_2_028',
    image: './renders/spin2/spin2_0028.jpg',
  },
  '30': {
    camera_name: 'Cam_2_029',
    image: './renders/spin2/spin2_0029.jpg',
  },
  '31': {
    camera_name: 'Cam_2_030',
    image: './renders/spin2/spin2_0030.jpg',
  },
  '32': {
    camera_name: 'Cam_2_031',
    image: './renders/spin2/spin2_0031.jpg',
  },
  '33': {
    camera_name: 'Cam_2_032',
    image: './renders/spin2/spin2_0032.jpg',
  },
  '34': {
    camera_name: 'Cam_2_033',
    image: './renders/spin2/spin2_0033.jpg',
  },
  '35': {
    camera_name: 'Cam_2_034',
    image: './renders/spin2/spin2_0034.jpg',
  },
  '36': {
    camera_name: 'Cam_2_035',
    image: './renders/spin2/spin2_0035.jpg',
  },
  '37': {
    camera_name: 'Cam_2_036',
    image: './renders/spin2/spin2_0036.jpg',
  },
  '38': {
    camera_name: 'Cam_2_037',
    image: './renders/spin2/spin2_0037.jpg',
  },
  '39': {
    camera_name: 'Cam_2_038',
    image: './renders/spin2/spin2_0038.jpg',
  },
  '40': {
    camera_name: 'Cam_2_039',
    image: './renders/spin2/spin2_0039.jpg',
  },
  '41': {
    camera_name: 'Cam_2_040',
    image: './renders/spin2/spin2_0040.jpg',
  },
  '42': {
    camera_name: 'Cam_2_041',
    image: './renders/spin2/spin2_0041.jpg',
  },
  '43': {
    camera_name: 'Cam_2_042',
    image: './renders/spin2/spin2_0042.jpg',
  },
  '44': {
    camera_name: 'Cam_2_043',
    image: './renders/spin2/spin2_0043.jpg',
  },
  '45': {
    camera_name: 'Cam_2_044',
    image: './renders/spin2/spin2_0044.jpg',
  },
  '46': {
    camera_name: 'Cam_2_045',
    image: './renders/spin2/spin2_0045.jpg',
  },
  '47': {
    camera_name: 'Cam_2_046',
    image: './renders/spin2/spin2_0046.jpg',
  },
  '48': {
    camera_name: 'Cam_2_047',
    image: './renders/spin2/spin2_0047.jpg',
  },
  '49': {
    camera_name: 'Cam_2_048',
    image: './renders/spin2/spin2_0048.jpg',
  },
  '50': {
    camera_name: 'Cam_2_049',
    image: './renders/spin2/spin2_0049.jpg',
  },
  '51': {
    camera_name: 'Cam_2_050',
    image: './renders/spin2/spin2_0050.jpg',
  },
  '52': {
    camera_name: 'Cam_2_051',
    image: './renders/spin2/spin2_0051.jpg',
  },
  '53': {
    camera_name: 'Cam_2_052',
    image: './renders/spin2/spin2_0052.jpg',
  },
  '54': {
    camera_name: 'Cam_2_053',
    image: './renders/spin2/spin2_0053.jpg',
  },
  '55': {
    camera_name: 'Cam_2_054',
    image: './renders/spin2/spin2_0054.jpg',
  },
  '56': {
    camera_name: 'Cam_2_055',
    image: './renders/spin2/spin2_0055.jpg',
  },
  '57': {
    camera_name: 'Cam_2_056',
    image: './renders/spin2/spin2_0056.jpg',
  },
  '58': {
    camera_name: 'Cam_2_057',
    image: './renders/spin2/spin2_0057.jpg',
  },
  '59': {
    camera_name: 'Cam_2_058',
    image: './renders/spin2/spin2_0058.jpg',
  },
  '60': {
    camera_name: 'Cam_2_059',
    image: './renders/spin2/spin2_0059.jpg',
  },
  '61': {
    camera_name: 'Cam_2_060',
    image: './renders/spin2/spin2_0060.jpg',
  },
  '62': {
    camera_name: 'Cam_2_061',
    image: './renders/spin2/spin2_0061.jpg',
  },
  '63': {
    camera_name: 'Cam_2_062',
    image: './renders/spin2/spin2_0062.jpg',
  },
  '64': {
    camera_name: 'Cam_2_063',
    image: './renders/spin2/spin2_0063.jpg',
  },
  '65': {
    camera_name: 'Cam_2_064',
    image: './renders/spin2/spin2_0064.jpg',
  },
  '66': {
    camera_name: 'Cam_2_065',
    image: './renders/spin2/spin2_0065.jpg',
  },
  '67': {
    camera_name: 'Cam_2_066',
    image: './renders/spin2/spin2_0066.jpg',
  },
  '68': {
    camera_name: 'Cam_2_067',
    image: './renders/spin2/spin2_0067.jpg',
  },
  '69': {
    camera_name: 'Cam_2_068',
    image: './renders/spin2/spin2_0068.jpg',
  },
  '70': {
    camera_name: 'Cam_2_069',
    image: './renders/spin2/spin2_0069.jpg',
  },
  '71': {
    camera_name: 'Cam_2_070',
    image: './renders/spin2/spin2_0070.jpg',
  },
  '72': {
    camera_name: 'Cam_2_071',
    image: './renders/spin2/spin2_0071.jpg',
  },
  '73': {
    camera_name: 'Cam_2_072',
    image: './renders/spin2/spin2_0072.jpg',
  },
  '74': {
    camera_name: 'Cam_2_073',
    image: './renders/spin2/spin2_0073.jpg',
  },
  '75': {
    camera_name: 'Cam_2_074',
    image: './renders/spin2/spin2_0074.jpg',
  },
  '76': {
    camera_name: 'Cam_2_075',
    image: './renders/spin2/spin2_0075.jpg',
  },
  '77': {
    camera_name: 'Cam_2_076',
    image: './renders/spin2/spin2_0076.jpg',
  },
  '78': {
    camera_name: 'Cam_2_077',
    image: './renders/spin2/spin2_0077.jpg',
  },
  '79': {
    camera_name: 'Cam_2_078',
    image: './renders/spin2/spin2_0078.jpg',
  },
  '80': {
    camera_name: 'Cam_2_079',
    image: './renders/spin2/spin2_0079.jpg',
  },
  '81': {
    camera_name: 'Cam_2_080',
    image: './renders/spin2/spin2_0080.jpg',
  },
  '82': {
    camera_name: 'Cam_2_081',
    image: './renders/spin2/spin2_0081.jpg',
  },
  '83': {
    camera_name: 'Cam_2_082',
    image: './renders/spin2/spin2_0082.jpg',
  },
  '84': {
    camera_name: 'Cam_2_083',
    image: './renders/spin2/spin2_0083.jpg',
  },
  '85': {
    camera_name: 'Cam_2_084',
    image: './renders/spin2/spin2_0084.jpg',
  },
  '86': {
    camera_name: 'Cam_2_085',
    image: './renders/spin2/spin2_0085.jpg',
  },
  '87': {
    camera_name: 'Cam_2_086',
    image: './renders/spin2/spin2_0086.jpg',
  },
  '88': {
    camera_name: 'Cam_2_087',
    image: './renders/spin2/spin2_0087.jpg',
  },
  '89': {
    camera_name: 'Cam_2_088',
    image: './renders/spin2/spin2_0088.jpg',
  },
  '90': {
    camera_name: 'Cam_2_089',
    image: './renders/spin2/spin2_0089.jpg',
  },
  '91': {
    camera_name: 'Cam_2_090',
    image: './renders/spin2/spin2_0090.jpg',
  },
  '92': {
    camera_name: 'Cam_2_091',
    image: './renders/spin2/spin2_0091.jpg',
  },
  '93': {
    camera_name: 'Cam_2_092',
    image: './renders/spin2/spin2_0092.jpg',
  },
  '94': {
    camera_name: 'Cam_2_093',
    image: './renders/spin2/spin2_0093.jpg',
  },
  '95': {
    camera_name: 'Cam_2_094',
    image: './renders/spin2/spin2_0094.jpg',
  },
  '96': {
    camera_name: 'Cam_2_095',
    image: './renders/spin2/spin2_0095.jpg',
  },
  '97': {
    camera_name: 'Cam_2_096',
    image: './renders/spin2/spin2_0096.jpg',
  },
  '98': {
    camera_name: 'Cam_2_097',
    image: './renders/spin2/spin2_0097.jpg',
  },
  '99': {
    camera_name: 'Cam_2_098',
    image: './renders/spin2/spin2_0098.jpg',
  },
  '100': {
    camera_name: 'Cam_2_099',
    image: './renders/spin2/spin2_0099.jpg',
  },
  '101': {
    camera_name: 'Cam_2_100',
    image: './renders/spin2/spin2_0100.jpg',
  },
  '102': {
    camera_name: 'Cam_2_101',
    image: './renders/spin2/spin2_0101.jpg',
  },
  '103': {
    camera_name: 'Cam_2_102',
    image: './renders/spin2/spin2_0102.jpg',
  },
  '104': {
    camera_name: 'Cam_2_103',
    image: './renders/spin2/spin2_0103.jpg',
  },
  '105': {
    camera_name: 'Cam_2_104',
    image: './renders/spin2/spin2_0104.jpg',
  },
  '106': {
    camera_name: 'Cam_2_105',
    image: './renders/spin2/spin2_0105.jpg',
  },
  '107': {
    camera_name: 'Cam_2_106',
    image: './renders/spin2/spin2_0106.jpg',
  },
  '108': {
    camera_name: 'Cam_2_107',
    image: './renders/spin2/spin2_0107.jpg',
  },
  '109': {
    camera_name: 'Cam_2_108',
    image: './renders/spin2/spin2_0108.jpg',
  },
  '110': {
    camera_name: 'Cam_2_109',
    image: './renders/spin2/spin2_0109.jpg',
  },
  '111': {
    camera_name: 'Cam_2_110',
    image: './renders/spin2/spin2_0110.jpg',
  },
  '112': {
    camera_name: 'Cam_2_111',
    image: './renders/spin2/spin2_0111.jpg',
  },
  '113': {
    camera_name: 'Cam_2_112',
    image: './renders/spin2/spin2_0112.jpg',
  },
  '114': {
    camera_name: 'Cam_2_113',
    image: './renders/spin2/spin2_0113.jpg',
  },
  '115': {
    camera_name: 'Cam_2_114',
    image: './renders/spin2/spin2_0114.jpg',
  },
  '116': {
    camera_name: 'Cam_2_115',
    image: './renders/spin2/spin2_0115.jpg',
  },
  '117': {
    camera_name: 'Cam_2_116',
    image: './renders/spin2/spin2_0116.jpg',
  },
  '118': {
    camera_name: 'Cam_2_117',
    image: './renders/spin2/spin2_0117.jpg',
  },
  '119': {
    camera_name: 'Cam_2_118',
    image: './renders/spin2/spin2_0118.jpg',
  },
  '120': {
    camera_name: 'Cam_2_119',
    image: './renders/spin2/spin2_0119.jpg',
  }
}

export const building3Config = {
  '1': {
    camera_name: 'Cam3_120',
    image: './renders/spin3/spin3_0000.jpg',
  },
  '2': {
    camera_name: 'Cam3_001',
    image: './renders/spin3/spin3_0001.jpg',
  },
  '3': {
    camera_name: 'Cam3_002',
    image: './renders/spin3/spin3_0002.jpg',
  },
  '4': {
    camera_name: 'Cam3_003',
    image: './renders/spin3/spin3_0003.jpg',
  },
  '5': {
    camera_name: 'Cam3_004',
    image: './renders/spin3/spin3_0004.jpg',
  },
  '6': {
    camera_name: 'Cam3_005',
    image: './renders/spin3/spin3_0005.jpg',
  },
  '7': {
    camera_name: 'Cam3_006',
    image: './renders/spin3/spin3_0006.jpg',
  },
  '8': {
    camera_name: 'Cam3_007',
    image: './renders/spin3/spin3_0007.jpg',
  },
  '9': {
    camera_name: 'Cam3_008',
    image: './renders/spin3/spin3_0008.jpg',
  },
  '10': {
    camera_name: 'Cam3_009',
    image: './renders/spin3/spin3_0009.jpg',
  },
  '11': {
    camera_name: 'Cam3_010',
    image: './renders/spin3/spin3_0010.jpg',
  },
  '12': {
    camera_name: 'Cam3_011',
    image: './renders/spin3/spin3_0011.jpg',
  },
  '13': {
    camera_name: 'Cam3_012',
    image: './renders/spin3/spin3_0012.jpg',
  },
  '14': {
    camera_name: 'Cam3_013',
    image: './renders/spin3/spin3_0013.jpg',
  },
  '15': {
    camera_name: 'Cam3_014',
    image: './renders/spin3/spin3_0014.jpg',
  },
  '16': {
    camera_name: 'Cam3_015',
    image: './renders/spin3/spin3_0015.jpg',
  },
  '17': {
    camera_name: 'Cam3_016',
    image: './renders/spin3/spin3_0016.jpg',
  },
  '18': {
    camera_name: 'Cam3_017',
    image: './renders/spin3/spin3_0017.jpg',
  },
  '19': {
    camera_name: 'Cam3_018',
    image: './renders/spin3/spin3_0018.jpg',
  },
  '20': {
    camera_name: 'Cam3_019',
    image: './renders/spin3/spin3_0019.jpg',
  },
  '21': {
    camera_name: 'Cam3_020',
    image: './renders/spin3/spin3_0020.jpg',
  },
  '22': {
    camera_name: 'Cam3_021',
    image: './renders/spin3/spin3_0021.jpg',
  },
  '23': {
    camera_name: 'Cam3_022',
    image: './renders/spin3/spin3_0022.jpg',
  },
  '24': {
    camera_name: 'Cam3_023',
    image: './renders/spin3/spin3_0023.jpg',
  },
  '25': {
    camera_name: 'Cam3_024',
    image: './renders/spin3/spin3_0024.jpg',
  },
  '26': {
    camera_name: 'Cam3_025',
    image: './renders/spin3/spin3_0025.jpg',
  },
  '27': {
    camera_name: 'Cam3_026',
    image: './renders/spin3/spin3_0026.jpg',
  },
  '28': {
    camera_name: 'Cam3_027',
    image: './renders/spin3/spin3_0027.jpg',
  },
  '29': {
    camera_name: 'Cam3_028',
    image: './renders/spin3/spin3_0028.jpg',
  },
  '30': {
    camera_name: 'Cam3_029',
    image: './renders/spin3/spin3_0029.jpg',
  },
  '31': {
    camera_name: 'Cam3_030',
    image: './renders/spin3/spin3_0030.jpg',
  },
  '32': {
    camera_name: 'Cam3_031',
    image: './renders/spin3/spin3_0031.jpg',
  },
  '33': {
    camera_name: 'Cam3_032',
    image: './renders/spin3/spin3_0032.jpg',
  },
  '34': {
    camera_name: 'Cam3_033',
    image: './renders/spin3/spin3_0033.jpg',
  },
  '35': {
    camera_name: 'Cam3_034',
    image: './renders/spin3/spin3_0034.jpg',
  },
  '36': {
    camera_name: 'Cam3_035',
    image: './renders/spin3/spin3_0035.jpg',
  },
  '37': {
    camera_name: 'Cam3_036',
    image: './renders/spin3/spin3_0036.jpg',
  },
  '38': {
    camera_name: 'Cam3_037',
    image: './renders/spin3/spin3_0037.jpg',
  },
  '39': {
    camera_name: 'Cam3_038',
    image: './renders/spin3/spin3_0038.jpg',
  },
  '40': {
    camera_name: 'Cam3_039',
    image: './renders/spin3/spin3_0039.jpg',
  },
  '41': {
    camera_name: 'Cam3_040',
    image: './renders/spin3/spin3_0040.jpg',
  },
  '42': {
    camera_name: 'Cam3_041',
    image: './renders/spin3/spin3_0041.jpg',
  },
  '43': {
    camera_name: 'Cam3_042',
    image: './renders/spin3/spin3_0042.jpg',
  },
  '44': {
    camera_name: 'Cam3_043',
    image: './renders/spin3/spin3_0043.jpg',
  },
  '45': {
    camera_name: 'Cam3_044',
    image: './renders/spin3/spin3_0044.jpg',
  },
  '46': {
    camera_name: 'Cam3_045',
    image: './renders/spin3/spin3_0045.jpg',
  },
  '47': {
    camera_name: 'Cam3_046',
    image: './renders/spin3/spin3_0046.jpg',
  },
  '48': {
    camera_name: 'Cam3_047',
    image: './renders/spin3/spin3_0047.jpg',
  },
  '49': {
    camera_name: 'Cam3_048',
    image: './renders/spin3/spin3_0048.jpg',
  },
  '50': {
    camera_name: 'Cam3_049',
    image: './renders/spin3/spin3_0049.jpg',
  },
  '51': {
    camera_name: 'Cam3_050',
    image: './renders/spin3/spin3_0050.jpg',
  },
  '52': {
    camera_name: 'Cam3_051',
    image: './renders/spin3/spin3_0051.jpg',
  },
  '53': {
    camera_name: 'Cam3_052',
    image: './renders/spin3/spin3_0052.jpg',
  },
  '54': {
    camera_name: 'Cam3_053',
    image: './renders/spin3/spin3_0053.jpg',
  },
  '55': {
    camera_name: 'Cam3_054',
    image: './renders/spin3/spin3_0054.jpg',
  },
  '56': {
    camera_name: 'Cam3_055',
    image: './renders/spin3/spin3_0055.jpg',
  },
  '57': {
    camera_name: 'Cam3_056',
    image: './renders/spin3/spin3_0056.jpg',
  },
  '58': {
    camera_name: 'Cam3_057',
    image: './renders/spin3/spin3_0057.jpg',
  },
  '59': {
    camera_name: 'Cam3_058',
    image: './renders/spin3/spin3_0058.jpg',
  },
  '60': {
    camera_name: 'Cam3_059',
    image: './renders/spin3/spin3_0059.jpg',
  },
  '61': {
    camera_name: 'Cam3_060',
    image: './renders/spin3/spin3_0060.jpg',
  },
  '62': {
    camera_name: 'Cam3_061',
    image: './renders/spin3/spin3_0061.jpg',
  },
  '63': {
    camera_name: 'Cam3_062',
    image: './renders/spin3/spin3_0062.jpg',
  },
  '64': {
    camera_name: 'Cam3_063',
    image: './renders/spin3/spin3_0063.jpg',
  },
  '65': {
    camera_name: 'Cam3_064',
    image: './renders/spin3/spin3_0064.jpg',
  },
  '66': {
    camera_name: 'Cam3_065',
    image: './renders/spin3/spin3_0065.jpg',
  },
  '67': {
    camera_name: 'Cam3_066',
    image: './renders/spin3/spin3_0066.jpg',
  },
  '68': {
    camera_name: 'Cam3_067',
    image: './renders/spin3/spin3_0067.jpg',
  },
  '69': {
    camera_name: 'Cam3_068',
    image: './renders/spin3/spin3_0068.jpg',
  },
  '70': {
    camera_name: 'Cam3_069',
    image: './renders/spin3/spin3_0069.jpg',
  },
  '71': {
    camera_name: 'Cam3_070',
    image: './renders/spin3/spin3_0070.jpg',
  },
  '72': {
    camera_name: 'Cam3_071',
    image: './renders/spin3/spin3_0071.jpg',
  },
  '73': {
    camera_name: 'Cam3_072',
    image: './renders/spin3/spin3_0072.jpg',
  },
  '74': {
    camera_name: 'Cam3_073',
    image: './renders/spin3/spin3_0073.jpg',
  },
  '75': {
    camera_name: 'Cam3_074',
    image: './renders/spin3/spin3_0074.jpg',
  },
  '76': {
    camera_name: 'Cam3_075',
    image: './renders/spin3/spin3_0075.jpg',
  },
  '77': {
    camera_name: 'Cam3_076',
    image: './renders/spin3/spin3_0076.jpg',
  },
  '78': {
    camera_name: 'Cam3_077',
    image: './renders/spin3/spin3_0077.jpg',
  },
  '79': {
    camera_name: 'Cam3_078',
    image: './renders/spin3/spin3_0078.jpg',
  },
  '80': {
    camera_name: 'Cam3_079',
    image: './renders/spin3/spin3_0079.jpg',
  },
  '81': {
    camera_name: 'Cam3_080',
    image: './renders/spin3/spin3_0080.jpg',
  },
  '82': {
    camera_name: 'Cam3_081',
    image: './renders/spin3/spin3_0081.jpg',
  },
  '83': {
    camera_name: 'Cam3_082',
    image: './renders/spin3/spin3_0082.jpg',
  },
  '84': {
    camera_name: 'Cam3_083',
    image: './renders/spin3/spin3_0083.jpg',
  },
  '85': {
    camera_name: 'Cam3_084',
    image: './renders/spin3/spin3_0084.jpg',
  },
  '86': {
    camera_name: 'Cam3_085',
    image: './renders/spin3/spin3_0085.jpg',
  },
  '87': {
    camera_name: 'Cam3_086',
    image: './renders/spin3/spin3_0086.jpg',
  },
  '88': {
    camera_name: 'Cam3_087',
    image: './renders/spin3/spin3_0087.jpg',
  },
  '89': {
    camera_name: 'Cam3_088',
    image: './renders/spin3/spin3_0088.jpg',
  },
  '90': {
    camera_name: 'Cam3_089',
    image: './renders/spin3/spin3_0089.jpg',
  },
  '91': {
    camera_name: 'Cam3_090',
    image: './renders/spin3/spin3_0090.jpg',
  },
  '92': {
    camera_name: 'Cam3_091',
    image: './renders/spin3/spin3_0091.jpg',
  },
  '93': {
    camera_name: 'Cam3_092',
    image: './renders/spin3/spin3_0092.jpg',
  },
  '94': {
    camera_name: 'Cam3_093',
    image: './renders/spin3/spin3_0093.jpg',
  },
  '95': {
    camera_name: 'Cam3_094',
    image: './renders/spin3/spin3_0094.jpg',
  },
  '96': {
    camera_name: 'Cam3_095',
    image: './renders/spin3/spin3_0095.jpg',
  },
  '97': {
    camera_name: 'Cam3_096',
    image: './renders/spin3/spin3_0096.jpg',
  },
  '98': {
    camera_name: 'Cam3_097',
    image: './renders/spin3/spin3_0097.jpg',
  },
  '99': {
    camera_name: 'Cam3_098',
    image: './renders/spin3/spin3_0098.jpg',
  },
  '100': {
    camera_name: 'Cam3_099',
    image: './renders/spin3/spin3_0099.jpg',
  },
  '101': {
    camera_name: 'Cam3_100',
    image: './renders/spin3/spin3_0100.jpg',
  },
  '102': {
    camera_name: 'Cam3_101',
    image: './renders/spin3/spin3_0101.jpg',
  },
  '103': {
    camera_name: 'Cam3_102',
    image: './renders/spin3/spin3_0102.jpg',
  },
  '104': {
    camera_name: 'Cam3_103',
    image: './renders/spin3/spin3_0103.jpg',
  },
  '105': {
    camera_name: 'Cam3_104',
    image: './renders/spin3/spin3_0104.jpg',
  },
  '106': {
    camera_name: 'Cam3_105',
    image: './renders/spin3/spin3_0105.jpg',
  },
  '107': {
    camera_name: 'Cam3_106',
    image: './renders/spin3/spin3_0106.jpg',
  },
  '108': {
    camera_name: 'Cam3_107',
    image: './renders/spin3/spin3_0107.jpg',
  },
  '109': {
    camera_name: 'Cam3_108',
    image: './renders/spin3/spin3_0108.jpg',
  },
  '110': {
    camera_name: 'Cam3_109',
    image: './renders/spin3/spin3_0109.jpg',
  },
  '111': {
    camera_name: 'Cam3_110',
    image: './renders/spin3/spin3_0110.jpg',
  },
  '112': {
    camera_name: 'Cam3_111',
    image: './renders/spin3/spin3_0111.jpg',
  },
  '113': {
    camera_name: 'Cam3_112',
    image: './renders/spin3/spin3_0112.jpg',
  },
  '114': {
    camera_name: 'Cam3_113',
    image: './renders/spin3/spin3_0113.jpg',
  },
  '115': {
    camera_name: 'Cam3_114',
    image: './renders/spin3/spin3_0114.jpg',
  },
  '116': {
    camera_name: 'Cam3_115',
    image: './renders/spin3/spin3_0115.jpg',
  },
  '117': {
    camera_name: 'Cam3_116',
    image: './renders/spin3/spin3_0116.jpg',
  },
  '118': {
    camera_name: 'Cam3_117',
    image: './renders/spin3/spin3_0117.jpg',
  },
  '119': {
    camera_name: 'Cam3_118',
    image: './renders/spin3/spin3_0118.jpg',
  },
  '120': {
    camera_name: 'Cam3_119',
    image: './renders/spin3/spin3_0119.jpg',
  },
}

export const building4Config = {
  '1': {
    camera_name: 'Cam4_120',
    image: './renders/spin4/spin4_0000.jpg',
  },
  '2': {
    camera_name: 'Cam4_001',
    image: './renders/spin4/spin4_0001.jpg',
  },
  '3': {
    camera_name: 'Cam4_002',
    image: './renders/spin4/spin4_0002.jpg',
  },
  '4': {
    camera_name: 'Cam4_003',
    image: './renders/spin4/spin4_0003.jpg',
  },
  '5': {
    camera_name: 'Cam4_004',
    image: './renders/spin4/spin4_0004.jpg',
  },
  '6': {
    camera_name: 'Cam4_005',
    image: './renders/spin4/spin4_0005.jpg',
  },
  '7': {
    camera_name: 'Cam4_006',
    image: './renders/spin4/spin4_0006.jpg',
  },
  '8': {
    camera_name: 'Cam4_007',
    image: './renders/spin4/spin4_0007.jpg',
  },
  '9': {
    camera_name: 'Cam4_008',
    image: './renders/spin4/spin4_0008.jpg',
  },
  '10': {
    camera_name: 'Cam4_009',
    image: './renders/spin4/spin4_0009.jpg',
  },
  '11': {
    camera_name: 'Cam4_010',
    image: './renders/spin4/spin4_0010.jpg',
  },
  '12': {
    camera_name: 'Cam4_011',
    image: './renders/spin4/spin4_0011.jpg',
  },
  '13': {
    camera_name: 'Cam4_012',
    image: './renders/spin4/spin4_0012.jpg',
  },
  '14': {
    camera_name: 'Cam4_013',
    image: './renders/spin4/spin4_0013.jpg',
  },
  '15': {
    camera_name: 'Cam4_014',
    image: './renders/spin4/spin4_0014.jpg',
  },
  '16': {
    camera_name: 'Cam4_015',
    image: './renders/spin4/spin4_0015.jpg',
  },
  '17': {
    camera_name: 'Cam4_016',
    image: './renders/spin4/spin4_0016.jpg',
  },
  '18': {
    camera_name: 'Cam4_017',
    image: './renders/spin4/spin4_0017.jpg',
  },
  '19': {
    camera_name: 'Cam4_018',
    image: './renders/spin4/spin4_0018.jpg',
  },
  '20': {
    camera_name: 'Cam4_019',
    image: './renders/spin4/spin4_0019.jpg',
  },
  '21': {
    camera_name: 'Cam4_020',
    image: './renders/spin4/spin4_0020.jpg',
  },
  '22': {
    camera_name: 'Cam4_021',
    image: './renders/spin4/spin4_0021.jpg',
  },
  '23': {
    camera_name: 'Cam4_022',
    image: './renders/spin4/spin4_0022.jpg',
  },
  '24': {
    camera_name: 'Cam4_023',
    image: './renders/spin4/spin4_0023.jpg',
  },
  '25': {
    camera_name: 'Cam4_024',
    image: './renders/spin4/spin4_0024.jpg',
  },
  '26': {
    camera_name: 'Cam4_025',
    image: './renders/spin4/spin4_0025.jpg',
  },
  '27': {
    camera_name: 'Cam4_026',
    image: './renders/spin4/spin4_0026.jpg',
  },
  '28': {
    camera_name: 'Cam4_027',
    image: './renders/spin4/spin4_0027.jpg',
  },
  '29': {
    camera_name: 'Cam4_028',
    image: './renders/spin4/spin4_0028.jpg',
  },
  '30': {
    camera_name: 'Cam4_029',
    image: './renders/spin4/spin4_0029.jpg',
  },
  '31': {
    camera_name: 'Cam4_030',
    image: './renders/spin4/spin4_0030.jpg',
  },
  '32': {
    camera_name: 'Cam4_031',
    image: './renders/spin4/spin4_0031.jpg',
  },
  '33': {
    camera_name: 'Cam4_032',
    image: './renders/spin4/spin4_0032.jpg',
  },
  '34': {
    camera_name: 'Cam4_033',
    image: './renders/spin4/spin4_0033.jpg',
  },
  '35': {
    camera_name: 'Cam4_034',
    image: './renders/spin4/spin4_0034.jpg',
  },
  '36': {
    camera_name: 'Cam4_035',
    image: './renders/spin4/spin4_0035.jpg',
  },
  '37': {
    camera_name: 'Cam4_036',
    image: './renders/spin4/spin4_0036.jpg',
  },
  '38': {
    camera_name: 'Cam4_037',
    image: './renders/spin4/spin4_0037.jpg',
  },
  '39': {
    camera_name: 'Cam4_038',
    image: './renders/spin4/spin4_0038.jpg',
  },
  '40': {
    camera_name: 'Cam4_039',
    image: './renders/spin4/spin4_0039.jpg',
  },
  '41': {
    camera_name: 'Cam4_040',
    image: './renders/spin4/spin4_0040.jpg',
  },
  '42': {
    camera_name: 'Cam4_041',
    image: './renders/spin4/spin4_0041.jpg',
  },
  '43': {
    camera_name: 'Cam4_042',
    image: './renders/spin4/spin4_0042.jpg',
  },
  '44': {
    camera_name: 'Cam4_043',
    image: './renders/spin4/spin4_0043.jpg',
  },
  '45': {
    camera_name: 'Cam4_044',
    image: './renders/spin4/spin4_0044.jpg',
  },
  '46': {
    camera_name: 'Cam4_045',
    image: './renders/spin4/spin4_0045.jpg',
  },
  '47': {
    camera_name: 'Cam4_046',
    image: './renders/spin4/spin4_0046.jpg',
  },
  '48': {
    camera_name: 'Cam4_047',
    image: './renders/spin4/spin4_0047.jpg',
  },
  '49': {
    camera_name: 'Cam4_048',
    image: './renders/spin4/spin4_0048.jpg',
  },
  '50': {
    camera_name: 'Cam4_049',
    image: './renders/spin4/spin4_0049.jpg',
  },
  '51': {
    camera_name: 'Cam4_050',
    image: './renders/spin4/spin4_0050.jpg',
  },
  '52': {
    camera_name: 'Cam4_051',
    image: './renders/spin4/spin4_0051.jpg',
  },
  '53': {
    camera_name: 'Cam4_052',
    image: './renders/spin4/spin4_0052.jpg',
  },
  '54': {
    camera_name: 'Cam4_053',
    image: './renders/spin4/spin4_0053.jpg',
  },
  '55': {
    camera_name: 'Cam4_054',
    image: './renders/spin4/spin4_0054.jpg',
  },
  '56': {
    camera_name: 'Cam4_055',
    image: './renders/spin4/spin4_0055.jpg',
  },
  '57': {
    camera_name: 'Cam4_056',
    image: './renders/spin4/spin4_0056.jpg',
  },
  '58': {
    camera_name: 'Cam4_057',
    image: './renders/spin4/spin4_0057.jpg',
  },
  '59': {
    camera_name: 'Cam4_058',
    image: './renders/spin4/spin4_0058.jpg',
  },
  '60': {
    camera_name: 'Cam4_059',
    image: './renders/spin4/spin4_0059.jpg',
  },
  '61': {
    camera_name: 'Cam4_060',
    image: './renders/spin4/spin4_0060.jpg',
  },
  '62': {
    camera_name: 'Cam4_061',
    image: './renders/spin4/spin4_0061.jpg',
  },
  '63': {
    camera_name: 'Cam4_062',
    image: './renders/spin4/spin4_0062.jpg',
  },
  '64': {
    camera_name: 'Cam4_063',
    image: './renders/spin4/spin4_0063.jpg',
  },
  '65': {
    camera_name: 'Cam4_064',
    image: './renders/spin4/spin4_0064.jpg',
  },
  '66': {
    camera_name: 'Cam4_065',
    image: './renders/spin4/spin4_0065.jpg',
  },
  '67': {
    camera_name: 'Cam4_066',
    image: './renders/spin4/spin4_0066.jpg',
  },
  '68': {
    camera_name: 'Cam4_067',
    image: './renders/spin4/spin4_0067.jpg',
  },
  '69': {
    camera_name: 'Cam4_068',
    image: './renders/spin4/spin4_0068.jpg',
  },
  '70': {
    camera_name: 'Cam4_069',
    image: './renders/spin4/spin4_0069.jpg',
  },
  '71': {
    camera_name: 'Cam4_070',
    image: './renders/spin4/spin4_0070.jpg',
  },
  '72': {
    camera_name: 'Cam4_071',
    image: './renders/spin4/spin4_0071.jpg',
  },
  '73': {
    camera_name: 'Cam4_072',
    image: './renders/spin4/spin4_0072.jpg',
  },
  '74': {
    camera_name: 'Cam4_073',
    image: './renders/spin4/spin4_0073.jpg',
  },
  '75': {
    camera_name: 'Cam4_074',
    image: './renders/spin4/spin4_0074.jpg',
  },
  '76': {
    camera_name: 'Cam4_075',
    image: './renders/spin4/spin4_0075.jpg',
  },
  '77': {
    camera_name: 'Cam4_076',
    image: './renders/spin4/spin4_0076.jpg',
  },
  '78': {
    camera_name: 'Cam4_077',
    image: './renders/spin4/spin4_0077.jpg',
  },
  '79': {
    camera_name: 'Cam4_078',
    image: './renders/spin4/spin4_0078.jpg',
  },
  '80': {
    camera_name: 'Cam4_079',
    image: './renders/spin4/spin4_0079.jpg',
  },
  '81': {
    camera_name: 'Cam4_080',
    image: './renders/spin4/spin4_0080.jpg',
  },
  '82': {
    camera_name: 'Cam4_081',
    image: './renders/spin4/spin4_0081.jpg',
  },
  '83': {
    camera_name: 'Cam4_082',
    image: './renders/spin4/spin4_0082.jpg',
  },
  '84': {
    camera_name: 'Cam4_083',
    image: './renders/spin4/spin4_0083.jpg',
  },
  '85': {
    camera_name: 'Cam4_084',
    image: './renders/spin4/spin4_0084.jpg',
  },
  '86': {
    camera_name: 'Cam4_085',
    image: './renders/spin4/spin4_0085.jpg',
  },
  '87': {
    camera_name: 'Cam4_086',
    image: './renders/spin4/spin4_0086.jpg',
  },
  '88': {
    camera_name: 'Cam4_087',
    image: './renders/spin4/spin4_0087.jpg',
  },
  '89': {
    camera_name: 'Cam4_088',
    image: './renders/spin4/spin4_0088.jpg',
  },
  '90': {
    camera_name: 'Cam4_089',
    image: './renders/spin4/spin4_0089.jpg',
  },
  '91': {
    camera_name: 'Cam4_090',
    image: './renders/spin4/spin4_0090.jpg',
  },
  '92': {
    camera_name: 'Cam4_091',
    image: './renders/spin4/spin4_0091.jpg',
  },
  '93': {
    camera_name: 'Cam4_092',
    image: './renders/spin4/spin4_0092.jpg',
  },
  '94': {
    camera_name: 'Cam4_093',
    image: './renders/spin4/spin4_0093.jpg',
  },
  '95': {
    camera_name: 'Cam4_094',
    image: './renders/spin4/spin4_0094.jpg',
  },
  '96': {
    camera_name: 'Cam4_095',
    image: './renders/spin4/spin4_0095.jpg',
  },
  '97': {
    camera_name: 'Cam4_096',
    image: './renders/spin4/spin4_0096.jpg',
  },
  '98': {
    camera_name: 'Cam4_097',
    image: './renders/spin4/spin4_0097.jpg',
  },
  '99': {
    camera_name: 'Cam4_098',
    image: './renders/spin4/spin4_0098.jpg',
  },
  '100': {
    camera_name: 'Cam4_099',
    image: './renders/spin4/spin4_0099.jpg',
  },
  '101': {
    camera_name: 'Cam4_100',
    image: './renders/spin4/spin4_0100.jpg',
  },
  '102': {
    camera_name: 'Cam4_101',
    image: './renders/spin4/spin4_0101.jpg',
  },
  '103': {
    camera_name: 'Cam4_102',
    image: './renders/spin4/spin4_0102.jpg',
  },
  '104': {
    camera_name: 'Cam4_103',
    image: './renders/spin4/spin4_0103.jpg',
  },
  '105': {
    camera_name: 'Cam4_104',
    image: './renders/spin4/spin4_0104.jpg',
  },
  '106': {
    camera_name: 'Cam4_105',
    image: './renders/spin4/spin4_0105.jpg',
  },
  '107': {
    camera_name: 'Cam4_106',
    image: './renders/spin4/spin4_0106.jpg',
  },
  '108': {
    camera_name: 'Cam4_107',
    image: './renders/spin4/spin4_0107.jpg',
  },
  '109': {
    camera_name: 'Cam4_108',
    image: './renders/spin4/spin4_0108.jpg',
  },
  '110': {
    camera_name: 'Cam4_109',
    image: './renders/spin4/spin4_0109.jpg',
  },
  '111': {
    camera_name: 'Cam4_110',
    image: './renders/spin4/spin4_0110.jpg',
  },
  '112': {
    camera_name: 'Cam4_111',
    image: './renders/spin4/spin4_0111.jpg',
  },
  '113': {
    camera_name: 'Cam4_112',
    image: './renders/spin4/spin4_0112.jpg',
  },
  '114': {
    camera_name: 'Cam4_113',
    image: './renders/spin4/spin4_0113.jpg',
  },
  '115': {
    camera_name: 'Cam4_114',
    image: './renders/spin4/spin4_0114.jpg',
  },
  '116': {
    camera_name: 'Cam4_115',
    image: './renders/spin4/spin4_0115.jpg',
  },
  '117': {
    camera_name: 'Cam4_116',
    image: './renders/spin4/spin4_0116.jpg',
  },
  '118': {
    camera_name: 'Cam4_117',
    image: './renders/spin4/spin4_0117.jpg',
  },
  '119': {
    camera_name: 'Cam4_118',
    image: './renders/spin4/spin4_0118.jpg',
  },
  '120': {
    camera_name: 'Cam4_119',
    image: './renders/spin4/spin4_0119.jpg',
  },
}

export const building5Config = {
  '1': {
    camera_name: 'Cam5_120',
    image: './renders/spin5/spin5_0000.jpg',
  },
  '2': {
    camera_name: 'Cam5_001',
    image: './renders/spin5/spin5_0001.jpg',
  },
  '3': {
    camera_name: 'Cam5_002',
    image: './renders/spin5/spin5_0002.jpg',
  },
  '4': {
    camera_name: 'Cam5_003',
    image: './renders/spin5/spin5_0003.jpg',
  },
  '5': {
    camera_name: 'Cam5_004',
    image: './renders/spin5/spin5_0004.jpg',
  },
  '6': {
    camera_name: 'Cam5_005',
    image: './renders/spin5/spin5_0005.jpg',
  },
  '7': {
    camera_name: 'Cam5_006',
    image: './renders/spin5/spin5_0006.jpg',
  },
  '8': {
    camera_name: 'Cam5_007',
    image: './renders/spin5/spin5_0007.jpg',
  },
  '9': {
    camera_name: 'Cam5_008',
    image: './renders/spin5/spin5_0008.jpg',
  },
  '10': {
    camera_name: 'Cam5_009',
    image: './renders/spin5/spin5_0009.jpg',
  },
  '11': {
    camera_name: 'Cam5_010',
    image: './renders/spin5/spin5_0010.jpg',
  },
  '12': {
    camera_name: 'Cam5_011',
    image: './renders/spin5/spin5_0011.jpg',
  },
  '13': {
    camera_name: 'Cam5_012',
    image: './renders/spin5/spin5_0012.jpg',
  },
  '14': {
    camera_name: 'Cam5_013',
    image: './renders/spin5/spin5_0013.jpg',
  },
  '15': {
    camera_name: 'Cam5_014',
    image: './renders/spin5/spin5_0014.jpg',
  },
  '16': {
    camera_name: 'Cam5_015',
    image: './renders/spin5/spin5_0015.jpg',
  },
  '17': {
    camera_name: 'Cam5_016',
    image: './renders/spin5/spin5_0016.jpg',
  },
  '18': {
    camera_name: 'Cam5_017',
    image: './renders/spin5/spin5_0017.jpg',
  },
  '19': {
    camera_name: 'Cam5_018',
    image: './renders/spin5/spin5_0018.jpg',
  },
  '20': {
    camera_name: 'Cam5_019',
    image: './renders/spin5/spin5_0019.jpg',
  },
  '21': {
    camera_name: 'Cam5_020',
    image: './renders/spin5/spin5_0020.jpg',
  },
  '22': {
    camera_name: 'Cam5_021',
    image: './renders/spin5/spin5_0021.jpg',
  },
  '23': {
    camera_name: 'Cam5_022',
    image: './renders/spin5/spin5_0022.jpg',
  },
  '24': {
    camera_name: 'Cam5_023',
    image: './renders/spin5/spin5_0023.jpg',
  },
  '25': {
    camera_name: 'Cam5_024',
    image: './renders/spin5/spin5_0024.jpg',
  },
  '26': {
    camera_name: 'Cam5_025',
    image: './renders/spin5/spin5_0025.jpg',
  },
  '27': {
    camera_name: 'Cam5_026',
    image: './renders/spin5/spin5_0026.jpg',
  },
  '28': {
    camera_name: 'Cam5_027',
    image: './renders/spin5/spin5_0027.jpg',
  },
  '29': {
    camera_name: 'Cam5_028',
    image: './renders/spin5/spin5_0028.jpg',
  },
  '30': {
    camera_name: 'Cam5_029',
    image: './renders/spin5/spin5_0029.jpg',
  },
  '31': {
    camera_name: 'Cam5_030',
    image: './renders/spin5/spin5_0030.jpg',
  },
  '32': {
    camera_name: 'Cam5_031',
    image: './renders/spin5/spin5_0031.jpg',
  },
  '33': {
    camera_name: 'Cam5_032',
    image: './renders/spin5/spin5_0032.jpg',
  },
  '34': {
    camera_name: 'Cam5_033',
    image: './renders/spin5/spin5_0033.jpg',
  },
  '35': {
    camera_name: 'Cam5_034',
    image: './renders/spin5/spin5_0034.jpg',
  },
  '36': {
    camera_name: 'Cam5_035',
    image: './renders/spin5/spin5_0035.jpg',
  },
  '37': {
    camera_name: 'Cam5_036',
    image: './renders/spin5/spin5_0036.jpg',
  },
  '38': {
    camera_name: 'Cam5_037',
    image: './renders/spin5/spin5_0037.jpg',
  },
  '39': {
    camera_name: 'Cam5_038',
    image: './renders/spin5/spin5_0038.jpg',
  },
  '40': {
    camera_name: 'Cam5_039',
    image: './renders/spin5/spin5_0039.jpg',
  },
  '41': {
    camera_name: 'Cam5_040',
    image: './renders/spin5/spin5_0040.jpg',
  },
  '42': {
    camera_name: 'Cam5_041',
    image: './renders/spin5/spin5_0041.jpg',
  },
  '43': {
    camera_name: 'Cam5_042',
    image: './renders/spin5/spin5_0042.jpg',
  },
  '44': {
    camera_name: 'Cam5_043',
    image: './renders/spin5/spin5_0043.jpg',
  },
  '45': {
    camera_name: 'Cam5_044',
    image: './renders/spin5/spin5_0044.jpg',
  },
  '46': {
    camera_name: 'Cam5_045',
    image: './renders/spin5/spin5_0045.jpg',
  },
  '47': {
    camera_name: 'Cam5_046',
    image: './renders/spin5/spin5_0046.jpg',
  },
  '48': {
    camera_name: 'Cam5_047',
    image: './renders/spin5/spin5_0047.jpg',
  },
  '49': {
    camera_name: 'Cam5_048',
    image: './renders/spin5/spin5_0048.jpg',
  },
  '50': {
    camera_name: 'Cam5_049',
    image: './renders/spin5/spin5_0049.jpg',
  },
  '51': {
    camera_name: 'Cam5_050',
    image: './renders/spin5/spin5_0050.jpg',
  },
  '52': {
    camera_name: 'Cam5_051',
    image: './renders/spin5/spin5_0051.jpg',
  },
  '53': {
    camera_name: 'Cam5_052',
    image: './renders/spin5/spin5_0052.jpg',
  },
  '54': {
    camera_name: 'Cam5_053',
    image: './renders/spin5/spin5_0053.jpg',
  },
  '55': {
    camera_name: 'Cam5_054',
    image: './renders/spin5/spin5_0054.jpg',
  },
  '56': {
    camera_name: 'Cam5_055',
    image: './renders/spin5/spin5_0055.jpg',
  },
  '57': {
    camera_name: 'Cam5_056',
    image: './renders/spin5/spin5_0056.jpg',
  },
  '58': {
    camera_name: 'Cam5_057',
    image: './renders/spin5/spin5_0057.jpg',
  },
  '59': {
    camera_name: 'Cam5_058',
    image: './renders/spin5/spin5_0058.jpg',
  },
  '60': {
    camera_name: 'Cam5_059',
    image: './renders/spin5/spin5_0059.jpg',
  },
  '61': {
    camera_name: 'Cam5_060',
    image: './renders/spin5/spin5_0060.jpg',
  },
  '62': {
    camera_name: 'Cam5_061',
    image: './renders/spin5/spin5_0061.jpg',
  },
  '63': {
    camera_name: 'Cam5_062',
    image: './renders/spin5/spin5_0062.jpg',
  },
  '64': {
    camera_name: 'Cam5_063',
    image: './renders/spin5/spin5_0063.jpg',
  },
  '65': {
    camera_name: 'Cam5_064',
    image: './renders/spin5/spin5_0064.jpg',
  },
  '66': {
    camera_name: 'Cam5_065',
    image: './renders/spin5/spin5_0065.jpg',
  },
  '67': {
    camera_name: 'Cam5_066',
    image: './renders/spin5/spin5_0066.jpg',
  },
  '68': {
    camera_name: 'Cam5_067',
    image: './renders/spin5/spin5_0067.jpg',
  },
  '69': {
    camera_name: 'Cam5_068',
    image: './renders/spin5/spin5_0068.jpg',
  },
  '70': {
    camera_name: 'Cam5_069',
    image: './renders/spin5/spin5_0069.jpg',
  },
  '71': {
    camera_name: 'Cam5_070',
    image: './renders/spin5/spin5_0070.jpg',
  },
  '72': {
    camera_name: 'Cam5_071',
    image: './renders/spin5/spin5_0071.jpg',
  },
  '73': {
    camera_name: 'Cam5_072',
    image: './renders/spin5/spin5_0072.jpg',
  },
  '74': {
    camera_name: 'Cam5_073',
    image: './renders/spin5/spin5_0073.jpg',
  },
  '75': {
    camera_name: 'Cam5_074',
    image: './renders/spin5/spin5_0074.jpg',
  },
  '76': {
    camera_name: 'Cam5_075',
    image: './renders/spin5/spin5_0075.jpg',
  },
  '77': {
    camera_name: 'Cam5_076',
    image: './renders/spin5/spin5_0076.jpg',
  },
  '78': {
    camera_name: 'Cam5_077',
    image: './renders/spin5/spin5_0077.jpg',
  },
  '79': {
    camera_name: 'Cam5_078',
    image: './renders/spin5/spin5_0078.jpg',
  },
  '80': {
    camera_name: 'Cam5_079',
    image: './renders/spin5/spin5_0079.jpg',
  },
  '81': {
    camera_name: 'Cam5_080',
    image: './renders/spin5/spin5_0080.jpg',
  },
  '82': {
    camera_name: 'Cam5_081',
    image: './renders/spin5/spin5_0081.jpg',
  },
  '83': {
    camera_name: 'Cam5_082',
    image: './renders/spin5/spin5_0082.jpg',
  },
  '84': {
    camera_name: 'Cam5_083',
    image: './renders/spin5/spin5_0083.jpg',
  },
  '85': {
    camera_name: 'Cam5_084',
    image: './renders/spin5/spin5_0084.jpg',
  },
  '86': {
    camera_name: 'Cam5_085',
    image: './renders/spin5/spin5_0085.jpg',
  },
  '87': {
    camera_name: 'Cam5_086',
    image: './renders/spin5/spin5_0086.jpg',
  },
  '88': {
    camera_name: 'Cam5_087',
    image: './renders/spin5/spin5_0087.jpg',
  },
  '89': {
    camera_name: 'Cam5_088',
    image: './renders/spin5/spin5_0088.jpg',
  },
  '90': {
    camera_name: 'Cam5_089',
    image: './renders/spin5/spin5_0089.jpg',
  },
  '91': {
    camera_name: 'Cam5_090',
    image: './renders/spin5/spin5_0090.jpg',
  },
  '92': {
    camera_name: 'Cam5_091',
    image: './renders/spin5/spin5_0091.jpg',
  },
  '93': {
    camera_name: 'Cam5_092',
    image: './renders/spin5/spin5_0092.jpg',
  },
  '94': {
    camera_name: 'Cam5_093',
    image: './renders/spin5/spin5_0093.jpg',
  },
  '95': {
    camera_name: 'Cam5_094',
    image: './renders/spin5/spin5_0094.jpg',
  },
  '96': {
    camera_name: 'Cam5_095',
    image: './renders/spin5/spin5_0095.jpg',
  },
  '97': {
    camera_name: 'Cam5_096',
    image: './renders/spin5/spin5_0096.jpg',
  },
  '98': {
    camera_name: 'Cam5_097',
    image: './renders/spin5/spin5_0097.jpg',
  },
  '99': {
    camera_name: 'Cam5_098',
    image: './renders/spin5/spin5_0098.jpg',
  },
  '100': {
    camera_name: 'Cam5_99',
    image: './renders/spin5/spin5_0099.jpg',
  },
  '101': {
    camera_name: 'Cam5_100',
    image: './renders/spin5/spin5_0100.jpg',
  },
  '102': {
    camera_name: 'Cam5_101',
    image: './renders/spin5/spin5_0101.jpg',
  },
  '103': {
    camera_name: 'Cam5_102',
    image: './renders/spin5/spin5_0102.jpg',
  },
  '104': {
    camera_name: 'Cam5_103',
    image: './renders/spin5/spin5_0103.jpg',
  },
  '105': {
    camera_name: 'Cam5_104',
    image: './renders/spin5/spin5_0104.jpg',
  },
  '106': {
    camera_name: 'Cam5_105',
    image: './renders/spin5/spin5_0105.jpg',
  },
  '107': {
    camera_name: 'Cam5_106',
    image: './renders/spin5/spin5_0106.jpg',
  },
  '108': {
    camera_name: 'Cam5_107',
    image: './renders/spin5/spin5_0107.jpg',
  },
  '109': {
    camera_name: 'Cam5_108',
    image: './renders/spin5/spin5_0108.jpg',
  },
  '110': {
    camera_name: 'Cam5_109',
    image: './renders/spin5/spin5_0109.jpg',
  },
  '111': {
    camera_name: 'Cam5_110',
    image: './renders/spin5/spin5_0110.jpg',
  },
  '112': {
    camera_name: 'Cam5_111',
    image: './renders/spin5/spin5_0111.jpg',
  },
  '113': {
    camera_name: 'Cam5_112',
    image: './renders/spin5/spin5_0112.jpg',
  },
  '114': {
    camera_name: 'Cam5_113',
    image: './renders/spin5/spin5_0113.jpg',
  },
  '115': {
    camera_name: 'Cam5_114',
    image: './renders/spin5/spin5_0114.jpg',
  },
  '116': {
    camera_name: 'Cam5_115',
    image: './renders/spin5/spin5_0115.jpg',
  },
  '117': {
    camera_name: 'Cam5_116',
    image: './renders/spin5/spin5_0116.jpg',
  },
  '118': {
    camera_name: 'Cam5_117',
    image: './renders/spin5/spin5_0117.jpg',
  },
  '119': {
    camera_name: 'Cam5_118',
    image: './renders/spin5/spin5_0118.jpg',
  },
  '120': {
    camera_name: 'Cam5_119',
    image: './renders/spin5/spin5_0119.jpg',
  },
}

export const building6Config = {
  '1': {
    camera_name: 'Cam6_120',
    image: './renders/spin6/spin6_0000.jpg',
  },
  '2': {
    camera_name: 'Cam6_001',
    image: './renders/spin6/spin6_0001.jpg',
  },
  '3': {
    camera_name: 'Cam6_002',
    image: './renders/spin6/spin6_0002.jpg',
  },
  '4': {
    camera_name: 'Cam6_003',
    image: './renders/spin6/spin6_0003.jpg',
  },
  '5': {
    camera_name: 'Cam6_004',
    image: './renders/spin6/spin6_0004.jpg',
  },
  '6': {
    camera_name: 'Cam6_005',
    image: './renders/spin6/spin6_0005.jpg',
  },
  '7': {
    camera_name: 'Cam6_006',
    image: './renders/spin6/spin6_0006.jpg',
  },
  '8': {
    camera_name: 'Cam6_007',
    image: './renders/spin6/spin6_0007.jpg',
  },
  '9': {
    camera_name: 'Cam6_008',
    image: './renders/spin6/spin6_0008.jpg',
  },
  '10': {
    camera_name: 'Cam6_009',
    image: './renders/spin6/spin6_0009.jpg',
  },
  '11': {
    camera_name: 'Cam6_010',
    image: './renders/spin6/spin6_0010.jpg',
  },
  '12': {
    camera_name: 'Cam6_011',
    image: './renders/spin6/spin6_0011.jpg',
  },
  '13': {
    camera_name: 'Cam6_012',
    image: './renders/spin6/spin6_0012.jpg',
  },
  '14': {
    camera_name: 'Cam6_013',
    image: './renders/spin6/spin6_0013.jpg',
  },
  '15': {
    camera_name: 'Cam6_014',
    image: './renders/spin6/spin6_0014.jpg',
  },
  '16': {
    camera_name: 'Cam6_015',
    image: './renders/spin6/spin6_0015.jpg',
  },
  '17': {
    camera_name: 'Cam6_016',
    image: './renders/spin6/spin6_0016.jpg',
  },
  '18': {
    camera_name: 'Cam6_017',
    image: './renders/spin6/spin6_0017.jpg',
  },
  '19': {
    camera_name: 'Cam6_018',
    image: './renders/spin6/spin6_0018.jpg',
  },
  '20': {
    camera_name: 'Cam6_019',
    image: './renders/spin6/spin6_0019.jpg',
  },
  '21': {
    camera_name: 'Cam6_020',
    image: './renders/spin6/spin6_0020.jpg',
  },
  '22': {
    camera_name: 'Cam6_021',
    image: './renders/spin6/spin6_0021.jpg',
  },
  '23': {
    camera_name: 'Cam6_022',
    image: './renders/spin6/spin6_0022.jpg',
  },
  '24': {
    camera_name: 'Cam6_023',
    image: './renders/spin6/spin6_0023.jpg',
  },
  '25': {
    camera_name: 'Cam6_024',
    image: './renders/spin6/spin6_0024.jpg',
  },
  '26': {
    camera_name: 'Cam6_025',
    image: './renders/spin6/spin6_0025.jpg',
  },
  '27': {
    camera_name: 'Cam6_026',
    image: './renders/spin6/spin6_0026.jpg',
  },
  '28': {
    camera_name: 'Cam6_027',
    image: './renders/spin6/spin6_0027.jpg',
  },
  '29': {
    camera_name: 'Cam6_028',
    image: './renders/spin6/spin6_0028.jpg',
  },
  '30': {
    camera_name: 'Cam6_029',
    image: './renders/spin6/spin6_0029.jpg',
  },
  '31': {
    camera_name: 'Cam6_030',
    image: './renders/spin6/spin6_0030.jpg',
  },
  '32': {
    camera_name: 'Cam6_031',
    image: './renders/spin6/spin6_0031.jpg',
  },
  '33': {
    camera_name: 'Cam6_032',
    image: './renders/spin6/spin6_0032.jpg',
  },
  '34': {
    camera_name: 'Cam6_033',
    image: './renders/spin6/spin6_0033.jpg',
  },
  '35': {
    camera_name: 'Cam6_034',
    image: './renders/spin6/spin6_0034.jpg',
  },
  '36': {
    camera_name: 'Cam6_035',
    image: './renders/spin6/spin6_0035.jpg',
  },
  '37': {
    camera_name: 'Cam6_036',
    image: './renders/spin6/spin6_0036.jpg',
  },
  '38': {
    camera_name: 'Cam6_037',
    image: './renders/spin6/spin6_0037.jpg',
  },
  '39': {
    camera_name: 'Cam6_038',
    image: './renders/spin6/spin6_0038.jpg',
  },
  '40': {
    camera_name: 'Cam6_039',
    image: './renders/spin6/spin6_0039.jpg',
  },
  '41': {
    camera_name: 'Cam6_040',
    image: './renders/spin6/spin6_0040.jpg',
  },
  '42': {
    camera_name: 'Cam6_041',
    image: './renders/spin6/spin6_0041.jpg',
  },
  '43': {
    camera_name: 'Cam6_042',
    image: './renders/spin6/spin6_0042.jpg',
  },
  '44': {
    camera_name: 'Cam6_043',
    image: './renders/spin6/spin6_0043.jpg',
  },
  '45': {
    camera_name: 'Cam6_044',
    image: './renders/spin6/spin6_0044.jpg',
  },
  '46': {
    camera_name: 'Cam6_045',
    image: './renders/spin6/spin6_0045.jpg',
  },
  '47': {
    camera_name: 'Cam6_046',
    image: './renders/spin6/spin6_0046.jpg',
  },
  '48': {
    camera_name: 'Cam6_047',
    image: './renders/spin6/spin6_0047.jpg',
  },
  '49': {
    camera_name: 'Cam6_048',
    image: './renders/spin6/spin6_0048.jpg',
  },
  '50': {
    camera_name: 'Cam6_049',
    image: './renders/spin6/spin6_0049.jpg',
  },
  '51': {
    camera_name: 'Cam6_050',
    image: './renders/spin6/spin6_0050.jpg',
  },
  '52': {
    camera_name: 'Cam6_051',
    image: './renders/spin6/spin6_0051.jpg',
  },
  '53': {
    camera_name: 'Cam6_052',
    image: './renders/spin6/spin6_0052.jpg',
  },
  '54': {
    camera_name: 'Cam6_053',
    image: './renders/spin6/spin6_0053.jpg',
  },
  '55': {
    camera_name: 'Cam6_054',
    image: './renders/spin6/spin6_0054.jpg',
  },
  '56': {
    camera_name: 'Cam6_055',
    image: './renders/spin6/spin6_0055.jpg',
  },
  '57': {
    camera_name: 'Cam6_056',
    image: './renders/spin6/spin6_0056.jpg',
  },
  '58': {
    camera_name: 'Cam6_057',
    image: './renders/spin6/spin6_0057.jpg',
  },
  '59': {
    camera_name: 'Cam6_058',
    image: './renders/spin6/spin6_0058.jpg',
  },
  '60': {
    camera_name: 'Cam6_059',
    image: './renders/spin6/spin6_0059.jpg',
  },
  '61': {
    camera_name: 'Cam6_060',
    image: './renders/spin6/spin6_0060.jpg',
  },
  '62': {
    camera_name: 'Cam6_061',
    image: './renders/spin6/spin6_0061.jpg',
  },
  '63': {
    camera_name: 'Cam6_062',
    image: './renders/spin6/spin6_0062.jpg',
  },
  '64': {
    camera_name: 'Cam6_063',
    image: './renders/spin6/spin6_0063.jpg',
  },
  '65': {
    camera_name: 'Cam6_064',
    image: './renders/spin6/spin6_0064.jpg',
  },
  '66': {
    camera_name: 'Cam6_065',
    image: './renders/spin6/spin6_0065.jpg',
  },
  '67': {
    camera_name: 'Cam6_066',
    image: './renders/spin6/spin6_0066.jpg',
  },
  '68': {
    camera_name: 'Cam6_067',
    image: './renders/spin6/spin6_0067.jpg',
  },
  '69': {
    camera_name: 'Cam6_068',
    image: './renders/spin6/spin6_0068.jpg',
  },
  '70': {
    camera_name: 'Cam6_069',
    image: './renders/spin6/spin6_0069.jpg',
  },
  '71': {
    camera_name: 'Cam6_070',
    image: './renders/spin6/spin6_0070.jpg',
  },
  '72': {
    camera_name: 'Cam6_071',
    image: './renders/spin6/spin6_0071.jpg',
  },
  '73': {
    camera_name: 'Cam6_072',
    image: './renders/spin6/spin6_0072.jpg',
  },
  '74': {
    camera_name: 'Cam6_073',
    image: './renders/spin6/spin6_0073.jpg',
  },
  '75': {
    camera_name: 'Cam6_074',
    image: './renders/spin6/spin6_0074.jpg',
  },
  '76': {
    camera_name: 'Cam6_075',
    image: './renders/spin6/spin6_0075.jpg',
  },
  '77': {
    camera_name: 'Cam6_076',
    image: './renders/spin6/spin6_0076.jpg',
  },
  '78': {
    camera_name: 'Cam6_077',
    image: './renders/spin6/spin6_0077.jpg',
  },
  '79': {
    camera_name: 'Cam6_078',
    image: './renders/spin6/spin6_0078.jpg',
  },
  '80': {
    camera_name: 'Cam6_079',
    image: './renders/spin6/spin6_0079.jpg',
  },
  '81': {
    camera_name: 'Cam6_080',
    image: './renders/spin6/spin6_0080.jpg',
  },
  '82': {
    camera_name: 'Cam6_081',
    image: './renders/spin6/spin6_0081.jpg',
  },
  '83': {
    camera_name: 'Cam6_082',
    image: './renders/spin6/spin6_0082.jpg',
  },
  '84': {
    camera_name: 'Cam6_083',
    image: './renders/spin6/spin6_0083.jpg',
  },
  '85': {
    camera_name: 'Cam6_084',
    image: './renders/spin6/spin6_0084.jpg',
  },
  '86': {
    camera_name: 'Cam6_085',
    image: './renders/spin6/spin6_0085.jpg',
  },
  '87': {
    camera_name: 'Cam6_086',
    image: './renders/spin6/spin6_0086.jpg',
  },
  '88': {
    camera_name: 'Cam6_087',
    image: './renders/spin6/spin6_0087.jpg',
  },
  '89': {
    camera_name: 'Cam6_088',
    image: './renders/spin6/spin6_0088.jpg',
  },
  '90': {
    camera_name: 'Cam6_089',
    image: './renders/spin6/spin6_0089.jpg',
  },
  '91': {
    camera_name: 'Cam6_090',
    image: './renders/spin6/spin6_0090.jpg',
  },
  '92': {
    camera_name: 'Cam6_091',
    image: './renders/spin6/spin6_0091.jpg',
  },
  '93': {
    camera_name: 'Cam6_092',
    image: './renders/spin6/spin6_0092.jpg',
  },
  '94': {
    camera_name: 'Cam6_093',
    image: './renders/spin6/spin6_0093.jpg',
  },
  '95': {
    camera_name: 'Cam6_094',
    image: './renders/spin6/spin6_0094.jpg',
  },
  '96': {
    camera_name: 'Cam6_095',
    image: './renders/spin6/spin6_0095.jpg',
  },
  '97': {
    camera_name: 'Cam6_096',
    image: './renders/spin6/spin6_0096.jpg',
  },
  '98': {
    camera_name: 'Cam6_097',
    image: './renders/spin6/spin6_0097.jpg',
  },
  '99': {
    camera_name: 'Cam6_098',
    image: './renders/spin6/spin6_0098.jpg',
  },
  '100': {
    camera_name: 'Cam6_099',
    image: './renders/spin6/spin6_0099.jpg',
  },
  '101': {
    camera_name: 'Cam6_100',
    image: './renders/spin6/spin6_0100.jpg',
  },
  '102': {
    camera_name: 'Cam6_101',
    image: './renders/spin6/spin6_0101.jpg',
  },
  '103': {
    camera_name: 'Cam6_102',
    image: './renders/spin6/spin6_0102.jpg',
  },
  '104': {
    camera_name: 'Cam6_103',
    image: './renders/spin6/spin6_0103.jpg',
  },
  '105': {
    camera_name: 'Cam6_104',
    image: './renders/spin6/spin6_0104.jpg',
  },
  '106': {
    camera_name: 'Cam6_105',
    image: './renders/spin6/spin6_0105.jpg',
  },
  '107': {
    camera_name: 'Cam6_106',
    image: './renders/spin6/spin6_0106.jpg',
  },
  '108': {
    camera_name: 'Cam6_107',
    image: './renders/spin6/spin6_0107.jpg',
  },
  '109': {
    camera_name: 'Cam6_108',
    image: './renders/spin6/spin6_0108.jpg',
  },
  '110': {
    camera_name: 'Cam6_109',
    image: './renders/spin6/spin6_0109.jpg',
  },
  '111': {
    camera_name: 'Cam6_110',
    image: './renders/spin6/spin6_0110.jpg',
  },
  '112': {
    camera_name: 'Cam6_111',
    image: './renders/spin6/spin6_0111.jpg',
  },
  '113': {
    camera_name: 'Cam6_112',
    image: './renders/spin6/spin6_0112.jpg',
  },
  '114': {
    camera_name: 'Cam6_113',
    image: './renders/spin6/spin6_0113.jpg',
  },
  '115': {
    camera_name: 'Cam6_114',
    image: './renders/spin6/spin6_0114.jpg',
  },
  '116': {
    camera_name: 'Cam6_115',
    image: './renders/spin6/spin6_0115.jpg',
  },
  '117': {
    camera_name: 'Cam6_116',
    image: './renders/spin6/spin6_0116.jpg',
  },
  '118': {
    camera_name: 'Cam6_117',
    image: './renders/spin6/spin6_0117.jpg',
  },
  '119': {
    camera_name: 'Cam6_118',
    image: './renders/spin6/spin6_0118.jpg',
  },
  '120': {
    camera_name: 'Cam6_119',
    image: './renders/spin6/spin6_0119.jpg',
  },
}

const { assetPath } = window.swellData;

if (assetPath) {
  Object.keys(building1Config).forEach((key) => {
    building1Config[key].image = `${assetPath}${building1Config[key].image.slice(1)}`;
  });
  Object.keys(building2Config).forEach((key) => {
    building2Config[key].image = `${assetPath}${building2Config[key].image.slice(1)}`;
  });
  Object.keys(building3Config).forEach((key) => {
    building3Config[key].image = `${assetPath}${building3Config[key].image.slice(1)}`;
  });
  Object.keys(building4Config).forEach((key) => {
    building4Config[key].image = `${assetPath}${building4Config[key].image.slice(1)}`;
  });
  Object.keys(building5Config).forEach((key) => {
    building5Config[key].image = `${assetPath}${building5Config[key].image.slice(1)}`;
  });
  Object.keys(building6Config).forEach((key) => {
    building6Config[key].image = `${assetPath}${building6Config[key].image.slice(1)}`;
  });
}


export const BUILDING1_CAMERAS = JSON.parse('{"Cam_1_001": [479.81890869140625, 14.529308319091797, -142.76687622070312], "Cam_1_001.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_002": [476.8592529296875, 14.529308319091797, -145.13876342773438], "Cam_1_002.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_003": [473.75830078125, 14.529308319091797, -147.378173828125], "Cam_1_003.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_004": [470.52374267578125, 14.529308319091797, -149.47836303710938], "Cam_1_004.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_005": [467.1637268066406, 14.529308319091797, -151.4331817626953], "Cam_1_005.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_006": [463.6851501464844, 14.529308319091797, -153.23394775390625], "Cam_1_006.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_007": [460.0989685058594, 14.529308319091797, -154.8773193359375], "Cam_1_007.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_008": [456.41595458984375, 14.529308319091797, -156.36024475097656], "Cam_1_008.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_009": [452.64471435546875, 14.529308319091797, -157.67550659179688], "Cam_1_009.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_010": [448.796875, 14.529308319091797, -158.82156372070312], "Cam_1_010.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_011": [444.8838195800781, 14.529308319091797, -159.79769897460938], "Cam_1_011.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_012": [440.9146728515625, 14.529308319091797, -160.5959930419922], "Cam_1_012.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_013": [436.9020080566406, 14.529308319091797, -161.22048950195312], "Cam_1_013.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_014": [432.8563232421875, 14.529308319091797, -161.667236328125], "Cam_1_014.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_015": [428.7884216308594, 14.529308319091797, -161.9348602294922], "Cam_1_015.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_016": [424.7096252441406, 14.529308319091797, -162.02621459960938], "Cam_1_016.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_017": [420.630859375, 14.529308319091797, -161.9348602294922], "Cam_1_017.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_018": [416.5629577636719, 14.529308319091797, -161.667236328125], "Cam_1_018.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_019": [412.5172119140625, 14.529308319091797, -161.22048950195312], "Cam_1_019.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_020": [408.5046081542969, 14.529308319091797, -160.5959930419922], "Cam_1_020.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_021": [404.5354309082031, 14.529308319091797, -159.79766845703125], "Cam_1_021.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_022": [400.62237548828125, 14.529308319091797, -158.821533203125], "Cam_1_022.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_023": [396.7745361328125, 14.529308319091797, -157.6754913330078], "Cam_1_023.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_024": [393.0033264160156, 14.529308319091797, -156.3602294921875], "Cam_1_024.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_025": [389.3203430175781, 14.529308319091797, -154.8773193359375], "Cam_1_025.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_026": [385.734130859375, 14.529308319091797, -153.23394775390625], "Cam_1_026.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_027": [382.2555236816406, 14.529308319091797, -151.4331512451172], "Cam_1_027.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_028": [378.8955383300781, 14.529308319091797, -149.47836303710938], "Cam_1_028.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_029": [375.6609191894531, 14.529308319091797, -147.37815856933594], "Cam_1_029.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_030": [372.56005859375, 14.529308319091797, -145.1387481689453], "Cam_1_030.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_031": [369.6004333496094, 14.529308319091797, -142.76687622070312], "Cam_1_031.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_032": [366.7916564941406, 14.529308319091797, -140.2675323486328], "Cam_1_032.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_033": [364.13983154296875, 14.529308319091797, -137.64891052246094], "Cam_1_033.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_034": [361.65283203125, 14.529308319091797, -134.91738891601562], "Cam_1_034.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_035": [359.3380126953125, 14.529308319091797, -132.07997131347656], "Cam_1_035.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_036": [357.20556640625, 14.529308319091797, -129.14239501953125], "Cam_1_036.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_037": [355.259521484375, 14.529308319091797, -126.11395263671875], "Cam_1_037.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_038": [353.5035095214844, 14.529308319091797, -123.0038070678711], "Cam_1_038.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_039": [351.9460144042969, 14.529308319091797, -119.8191146850586], "Cam_1_039.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_040": [350.5888977050781, 14.529308319091797, -116.5697021484375], "Cam_1_040.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_041": [349.4329528808594, 14.529308319091797, -113.26524353027344], "Cam_1_041.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_042": [348.4876403808594, 14.529308319091797, -109.91338348388672], "Cam_1_042.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_043": [347.74810791015625, 14.529308319091797, -106.52484130859375], "Cam_1_043.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_044": [347.2190856933594, 14.529308319091797, -103.10833740234375], "Cam_1_044.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_045": [346.9021911621094, 14.529308319091797, -99.67312622070312], "Cam_1_045.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_046": [346.79400634765625, 14.529308319091797, -96.22870635986328], "Cam_1_046.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_047": [346.9021911621094, 14.529308319091797, -92.78428649902344], "Cam_1_047.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_048": [347.2190856933594, 14.529308319091797, -89.34908294677734], "Cam_1_048.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_049": [347.74810791015625, 14.529308319091797, -85.93256378173828], "Cam_1_049.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_050": [348.4876403808594, 14.529308319091797, -82.54402923583984], "Cam_1_050.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_051": [349.4329528808594, 14.529308319091797, -79.19216918945312], "Cam_1_051.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_052": [350.5888977050781, 14.529308319091797, -75.8876953125], "Cam_1_052.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_053": [351.9460144042969, 14.529308319091797, -72.63829803466797], "Cam_1_053.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_054": [353.5035095214844, 14.529308319091797, -69.45360565185547], "Cam_1_054.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_055": [355.259521484375, 14.529308319091797, -66.34344482421875], "Cam_1_055.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_056": [357.20556640625, 14.529308319091797, -63.31502151489258], "Cam_1_056.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_057": [359.3380126953125, 14.529308319091797, -60.37742233276367], "Cam_1_057.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_058": [361.65283203125, 14.529308319091797, -57.54001998901367], "Cam_1_058.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_059": [364.13983154296875, 14.529308319091797, -54.808509826660156], "Cam_1_059.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_060": [366.7917175292969, 14.529308319091797, -52.18989181518555], "Cam_1_060.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_061": [369.6003723144531, 14.529308319091797, -49.6905517578125], "Cam_1_061.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_062": [372.5600280761719, 14.529308319091797, -47.31867218017578], "Cam_1_062.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_063": [375.6609191894531, 14.529308319091797, -45.07926559448242], "Cam_1_063.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_064": [378.8955383300781, 14.529308319091797, -42.97908020019531], "Cam_1_064.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_065": [382.2555236816406, 14.529308319091797, -41.02425765991211], "Cam_1_065.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_066": [385.734130859375, 14.529308319091797, -39.22348403930664], "Cam_1_066.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_067": [389.32025146484375, 14.529308319091797, -37.580116271972656], "Cam_1_067.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_068": [393.0032653808594, 14.529308319091797, -36.09719467163086], "Cam_1_068.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_069": [396.7745361328125, 14.529308319091797, -34.781944274902344], "Cam_1_069.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_070": [400.62237548828125, 14.529308319091797, -33.63587951660156], "Cam_1_070.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_071": [404.5354309082031, 14.529308319091797, -32.65975570678711], "Cam_1_071.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_072": [408.5046081542969, 14.529308319091797, -31.8614444732666], "Cam_1_072.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_073": [412.5172119140625, 14.529308319091797, -31.236942291259766], "Cam_1_073.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_074": [416.5629577636719, 14.529308319091797, -30.79019546508789], "Cam_1_074.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_075": [420.630859375, 14.529308319091797, -30.522567749023438], "Cam_1_075.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_076": [424.7096252441406, 14.529308319091797, -30.43121910095215], "Cam_1_076.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_077": [428.7884216308594, 14.529308319091797, -30.5225772857666], "Cam_1_077.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_078": [432.8562927246094, 14.529308319091797, -30.79019546508789], "Cam_1_078.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_079": [436.9020080566406, 14.529308319091797, -31.23695182800293], "Cam_1_079.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_080": [440.9146728515625, 14.529308319091797, -31.8614444732666], "Cam_1_080.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_081": [444.8838195800781, 14.529308319091797, -32.65976333618164], "Cam_1_081.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_082": [448.796875, 14.529308319091797, -33.635887145996094], "Cam_1_082.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_083": [452.64471435546875, 14.529308319091797, -34.781951904296875], "Cam_1_083.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_084": [456.41595458984375, 14.529308319091797, -36.097206115722656], "Cam_1_084.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_085": [460.09893798828125, 14.529308319091797, -37.580116271972656], "Cam_1_085.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_086": [463.6851501464844, 14.529308319091797, -39.22349548339844], "Cam_1_086.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_087": [467.1637268066406, 14.529308319091797, -41.02426528930664], "Cam_1_087.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_088": [470.52374267578125, 14.529308319091797, -42.97909927368164], "Cam_1_088.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_089": [473.75830078125, 14.529308319091797, -45.07927703857422], "Cam_1_089.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_090": [476.8591613769531, 14.529308319091797, -47.31869125366211], "Cam_1_090.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_091": [479.8188171386719, 14.529308319091797, -49.69055938720703], "Cam_1_091.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_092": [482.6275634765625, 14.529308319091797, -52.18989562988281], "Cam_1_092.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_093": [485.2794494628906, 14.529308319091797, -54.808509826660156], "Cam_1_093.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_094": [487.7664489746094, 14.529308319091797, -57.5400276184082], "Cam_1_094.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_095": [490.0812683105469, 14.529308319091797, -60.37746047973633], "Cam_1_095.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_096": [492.2136535644531, 14.529308319091797, -63.31504821777344], "Cam_1_096.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_097": [494.15972900390625, 14.529308319091797, -66.34346771240234], "Cam_1_097.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_098": [495.915771484375, 14.529308319091797, -69.45362091064453], "Cam_1_098.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_099": [497.4732666015625, 14.529308319091797, -72.63831329345703], "Cam_1_099.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_100": [498.83038330078125, 14.529308319091797, -75.88772583007812], "Cam_1_100.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_101": [499.986328125, 14.529308319091797, -79.19216918945312], "Cam_1_101.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_102": [500.931640625, 14.529308319091797, -82.5440444946289], "Cam_1_102.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_103": [501.6711730957031, 14.529308319091797, -85.9325942993164], "Cam_1_103.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_104": [502.2002258300781, 14.529308319091797, -89.34910583496094], "Cam_1_104.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_105": [502.51708984375, 14.529308319091797, -92.78431701660156], "Cam_1_105.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_106": [502.6252136230469, 14.529308319091797, -96.22872924804688], "Cam_1_106.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_107": [502.51708984375, 14.529308319091797, -99.67314147949219], "Cam_1_107.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_108": [502.2002258300781, 14.529308319091797, -103.10833740234375], "Cam_1_108.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_109": [501.6711730957031, 14.529308319091797, -106.52484130859375], "Cam_1_109.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_110": [500.931640625, 14.529308319091797, -109.91339874267578], "Cam_1_110.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_111": [499.986328125, 14.529308319091797, -113.2652587890625], "Cam_1_111.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_112": [498.83038330078125, 14.529308319091797, -116.5697250366211], "Cam_1_112.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_113": [497.4732666015625, 14.529308319091797, -119.8191146850586], "Cam_1_113.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_114": [495.915771484375, 14.529308319091797, -123.00381469726562], "Cam_1_114.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_115": [494.15972900390625, 14.529308319091797, -126.11397552490234], "Cam_1_115.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_116": [492.2136535644531, 14.529308319091797, -129.1423797607422], "Cam_1_116.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_117": [490.0812683105469, 14.529308319091797, -132.07997131347656], "Cam_1_117.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_118": [487.7664489746094, 14.529308319091797, -134.9174041748047], "Cam_1_118.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_119": [485.2794494628906, 14.529308319091797, -137.64892578125], "Cam_1_119.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Cam_1_120": [482.6275634765625, 14.529308319091797, -140.2675323486328], "Cam_1_120.Target": [423.63104248046875, 8.12780475616455, -92.89895629882812], "Circle004": [424.7096252441406, 14.529308319091797, -96.22872161865234]}');

export const BUILDING2_CAMERAS = JSON.parse('{"Cam_2_001": [479.1739807128906, 14.501874923706055, -115.64652252197266], "Cam_2_001.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_002": [476.2877197265625, 14.501874923706055, -118.01839447021484], "Cam_2_002.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_003": [473.26361083984375, 14.501874923706055, -120.2577896118164], "Cam_2_003.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_004": [470.1092529296875, 14.501874923706055, -122.35799407958984], "Cam_2_004.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_005": [466.83258056640625, 14.501874923706055, -124.31281280517578], "Cam_2_005.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_006": [463.4401550292969, 14.501874923706055, -126.11357879638672], "Cam_2_006.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_007": [459.94287109375, 14.501874923706055, -127.75694274902344], "Cam_2_007.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_008": [456.3511657714844, 14.501874923706055, -129.2398681640625], "Cam_2_008.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_009": [452.6734313964844, 14.501874923706055, -130.5551300048828], "Cam_2_009.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_010": [448.92095947265625, 14.501874923706055, -131.701171875], "Cam_2_010.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_011": [445.1048583984375, 14.501874923706055, -132.6773223876953], "Cam_2_011.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_012": [441.2341003417969, 14.501874923706055, -133.47564697265625], "Cam_2_012.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_013": [437.3209228515625, 14.501874923706055, -134.10011291503906], "Cam_2_013.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_014": [433.37548828125, 14.501874923706055, -134.546875], "Cam_2_014.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_015": [429.4084167480469, 14.501874923706055, -134.81448364257812], "Cam_2_015.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_016": [425.4307861328125, 14.501874923706055, -134.90585327148438], "Cam_2_016.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_017": [421.45306396484375, 14.501874923706055, -134.81448364257812], "Cam_2_017.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_018": [417.4860534667969, 14.501874923706055, -134.546875], "Cam_2_018.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_019": [413.54052734375, 14.501874923706055, -134.10009765625], "Cam_2_019.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_020": [409.6274108886719, 14.501874923706055, -133.4756317138672], "Cam_2_020.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_021": [405.7566223144531, 14.501874923706055, -132.67730712890625], "Cam_2_021.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_022": [401.9405517578125, 14.501874923706055, -131.701171875], "Cam_2_022.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_023": [398.18804931640625, 14.501874923706055, -130.5550994873047], "Cam_2_023.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_024": [394.5103454589844, 14.501874923706055, -129.23985290527344], "Cam_2_024.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_025": [390.9186706542969, 14.501874923706055, -127.75694274902344], "Cam_2_025.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_026": [387.4213562011719, 14.501874923706055, -126.11357116699219], "Cam_2_026.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_027": [384.0289611816406, 14.501874923706055, -124.31278228759766], "Cam_2_027.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_028": [380.75225830078125, 14.501874923706055, -122.35798645019531], "Cam_2_028.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_029": [377.59783935546875, 14.501874923706055, -120.25778198242188], "Cam_2_029.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_030": [374.5738220214844, 14.501874923706055, -118.01836395263672], "Cam_2_030.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_031": [371.6875305175781, 14.501874923706055, -115.64649200439453], "Cam_2_031.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_032": [368.94842529296875, 14.501874923706055, -113.14715576171875], "Cam_2_032.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_033": [366.3623352050781, 14.501874923706055, -110.5285415649414], "Cam_2_033.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_034": [363.9369812011719, 14.501874923706055, -107.7970199584961], "Cam_2_034.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_035": [361.6795349121094, 14.501874923706055, -104.9596176147461], "Cam_2_035.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_036": [359.5999450683594, 14.501874923706055, -102.02202606201172], "Cam_2_036.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_037": [357.7021789550781, 14.501874923706055, -98.99359130859375], "Cam_2_037.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_038": [355.9896545410156, 14.501874923706055, -95.88343811035156], "Cam_2_038.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_039": [354.47076416015625, 14.501874923706055, -92.69874572753906], "Cam_2_039.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_040": [353.1472473144531, 14.501874923706055, -89.4493408203125], "Cam_2_040.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_041": [352.0199890136719, 14.501874923706055, -86.1448745727539], "Cam_2_041.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_042": [351.0981140136719, 14.501874923706055, -82.79300689697266], "Cam_2_042.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_043": [350.376953125, 14.501874923706055, -79.40447235107422], "Cam_2_043.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_044": [349.86102294921875, 14.501874923706055, -75.98796844482422], "Cam_2_044.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_045": [349.55194091796875, 14.501874923706055, -72.55274963378906], "Cam_2_045.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_046": [349.44647216796875, 14.501874923706055, -69.10832977294922], "Cam_2_046.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_047": [349.5519714355469, 14.501874923706055, -65.6639175415039], "Cam_2_047.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_048": [349.86102294921875, 14.501874923706055, -62.22871017456055], "Cam_2_048.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_049": [350.376953125, 14.501874923706055, -58.81219482421875], "Cam_2_049.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_050": [351.0981140136719, 14.501874923706055, -55.42366027832031], "Cam_2_050.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_051": [352.02001953125, 14.501874923706055, -52.07179641723633], "Cam_2_051.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_052": [353.1473083496094, 14.501874923706055, -48.7673225402832], "Cam_2_052.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_053": [354.47076416015625, 14.501874923706055, -45.51792907714844], "Cam_2_053.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_054": [355.98968505859375, 14.501874923706055, -42.33323287963867], "Cam_2_054.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_055": [357.7021789550781, 14.501874923706055, -39.22307586669922], "Cam_2_055.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_056": [359.6000061035156, 14.501874923706055, -36.19464874267578], "Cam_2_056.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_057": [361.6795654296875, 14.501874923706055, -33.257049560546875], "Cam_2_057.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_058": [363.93701171875, 14.501874923706055, -30.41963768005371], "Cam_2_058.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_059": [366.3623352050781, 14.501874923706055, -27.688133239746094], "Cam_2_059.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_060": [368.9484558105469, 14.501874923706055, -25.06951141357422], "Cam_2_060.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_061": [371.68756103515625, 14.501874923706055, -22.570175170898438], "Cam_2_061.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_062": [374.5738220214844, 14.501874923706055, -20.198299407958984], "Cam_2_062.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_063": [377.5978698730469, 14.501874923706055, -17.95889663696289], "Cam_2_063.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_064": [380.7522888183594, 14.501874923706055, -15.858710289001465], "Cam_2_064.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_065": [384.0290222167969, 14.501874923706055, -13.903876304626465], "Cam_2_065.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_066": [387.42138671875, 14.501874923706055, -12.103105545043945], "Cam_2_066.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_067": [390.9186706542969, 14.501874923706055, -10.459745407104492], "Cam_2_067.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_068": [394.5103454589844, 14.501874923706055, -8.976816177368164], "Cam_2_068.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_069": [398.18804931640625, 14.501874923706055, -7.661562442779541], "Cam_2_069.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_070": [401.9405517578125, 14.501874923706055, -6.515507698059082], "Cam_2_070.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_071": [405.7566223144531, 14.501874923706055, -5.539374828338623], "Cam_2_071.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_072": [409.6274108886719, 14.501874923706055, -4.741064548492432], "Cam_2_072.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_073": [413.5406188964844, 14.501874923706055, -4.116572380065918], "Cam_2_073.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_074": [417.4860534667969, 14.501874923706055, -3.669814348220825], "Cam_2_074.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_075": [421.45306396484375, 14.501874923706055, -3.4021971225738525], "Cam_2_075.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_076": [425.4307861328125, 14.501874923706055, -3.31084942817688], "Cam_2_076.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_077": [429.4084777832031, 14.501874923706055, -3.4022068977355957], "Cam_2_077.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_078": [433.37548828125, 14.501874923706055, -3.6698241233825684], "Cam_2_078.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_079": [437.3209533691406, 14.501874923706055, -4.116581916809082], "Cam_2_079.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_080": [441.234130859375, 14.501874923706055, -4.741074085235596], "Cam_2_080.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_081": [445.10491943359375, 14.501874923706055, -5.539394378662109], "Cam_2_081.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_082": [448.92095947265625, 14.501874923706055, -6.515517234802246], "Cam_2_082.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_083": [452.6734619140625, 14.501874923706055, -7.661581993103027], "Cam_2_083.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_084": [456.3511657714844, 14.501874923706055, -8.976825714111328], "Cam_2_084.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_085": [459.94287109375, 14.501874923706055, -10.459745407104492], "Cam_2_085.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_086": [463.440185546875, 14.501874923706055, -12.103124618530273], "Cam_2_086.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_087": [466.83258056640625, 14.501874923706055, -13.90389633178711], "Cam_2_087.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_088": [470.1092834472656, 14.501874923706055, -15.858720779418945], "Cam_2_088.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_089": [473.263671875, 14.501874923706055, -17.958906173706055], "Cam_2_089.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_090": [476.2877197265625, 14.501874923706055, -20.198320388793945], "Cam_2_090.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_091": [479.1739807128906, 14.501874923706055, -22.570194244384766], "Cam_2_091.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_092": [481.9130859375, 14.501874923706055, -25.069530487060547], "Cam_2_092.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_093": [484.4991760253906, 14.501874923706055, -27.68814468383789], "Cam_2_093.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_094": [486.9245300292969, 14.501874923706055, -30.41965675354004], "Cam_2_094.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_095": [489.1820068359375, 14.501874923706055, -33.25708770751953], "Cam_2_095.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_096": [491.2615966796875, 14.501874923706055, -36.19467544555664], "Cam_2_096.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_097": [493.15936279296875, 14.501874923706055, -39.223106384277344], "Cam_2_097.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_098": [494.8718566894531, 14.501874923706055, -42.33325958251953], "Cam_2_098.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_099": [496.3907775878906, 14.501874923706055, -45.517948150634766], "Cam_2_099.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_100": [497.71429443359375, 14.501874923706055, -48.76735305786133], "Cam_2_100.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_101": [498.8414611816406, 14.501874923706055, -52.07180404663086], "Cam_2_101.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_102": [499.763427734375, 14.501874923706055, -55.42367172241211], "Cam_2_102.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_103": [500.4845886230469, 14.501874923706055, -58.81222152709961], "Cam_2_103.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_104": [501.00054931640625, 14.501874923706055, -62.22874069213867], "Cam_2_104.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_105": [501.3096008300781, 14.501874923706055, -65.6639404296875], "Cam_2_105.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_106": [501.4150695800781, 14.501874923706055, -69.10836029052734], "Cam_2_106.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_107": [501.30950927734375, 14.501874923706055, -72.55277252197266], "Cam_2_107.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_108": [501.00054931640625, 14.501874923706055, -75.98796844482422], "Cam_2_108.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_109": [500.4845886230469, 14.501874923706055, -79.40447235107422], "Cam_2_109.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_110": [499.763427734375, 14.501874923706055, -82.79303741455078], "Cam_2_110.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_111": [498.8414611816406, 14.501874923706055, -86.14488983154297], "Cam_2_111.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_112": [497.71429443359375, 14.501874923706055, -89.44935607910156], "Cam_2_112.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_113": [496.3907775878906, 14.501874923706055, -92.69876098632812], "Cam_2_113.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_114": [494.8718566894531, 14.501874923706055, -95.88345336914062], "Cam_2_114.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_115": [493.15936279296875, 14.501874923706055, -98.99361419677734], "Cam_2_115.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_116": [491.2615051269531, 14.501874923706055, -102.02201080322266], "Cam_2_116.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_117": [489.1820068359375, 14.501874923706055, -104.9596176147461], "Cam_2_117.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_118": [486.9245300292969, 14.501874923706055, -107.79705047607422], "Cam_2_118.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_119": [484.4991760253906, 14.501874923706055, -110.5285415649414], "Cam_2_119.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Cam_2_120": [481.9130859375, 14.501874923706055, -113.14715576171875], "Cam_2_120.Target": [423.63104248046875, 8.846633911132812, -70.36370849609375], "Circle005": [425.4307861328125, 14.501874923706055, -69.10834503173828]}');

export const BUILDING3_CAMERAS = JSON.parse('{"Cam3_001": [518.498291015625, 14.501874923706055, -131.78598022460938], "Cam3_001.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_002": [515.9518432617188, 14.501874923706055, -134.26394653320312], "Cam3_002.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_003": [513.2885131835938, 14.501874923706055, -136.5977020263672], "Cam3_003.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_004": [510.5149230957031, 14.501874923706055, -138.7802734375], "Cam3_004.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_005": [507.636474609375, 14.501874923706055, -140.80215454101562], "Cam3_005.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_006": [504.6622619628906, 14.501874923706055, -142.65927124023438], "Cam3_006.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_007": [501.60107421875, 14.501874923706055, -144.34780883789062], "Cam3_007.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_008": [498.4602355957031, 14.501874923706055, -145.86038208007812], "Cam3_008.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_009": [495.24896240234375, 14.501874923706055, -147.1938018798828], "Cam3_009.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_010": [491.9772033691406, 14.501874923706055, -148.347412109375], "Cam3_010.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_011": [488.6525573730469, 14.501874923706055, -149.31346130371094], "Cam3_011.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_012": [485.2854309082031, 14.501874923706055, -150.09402465820312], "Cam3_012.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_013": [481.88482666015625, 14.501874923706055, -150.6867218017578], "Cam3_013.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_014": [478.459716796875, 14.501874923706055, -151.08761596679688], "Cam3_014.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_015": [475.0198669433594, 14.501874923706055, -151.30059814453125], "Cam3_015.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_016": [471.5743713378906, 14.501874923706055, -151.3197479248047], "Cam3_016.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_017": [468.1324157714844, 14.501874923706055, -151.1494140625], "Cam3_017.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_018": [464.70343017578125, 14.501874923706055, -150.78854370117188], "Cam3_018.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_019": [461.296875, 14.501874923706055, -150.2362518310547], "Cam3_019.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_020": [457.9214782714844, 14.501874923706055, -149.49765014648438], "Cam3_020.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_021": [454.5875244140625, 14.501874923706055, -148.56869506835938], "Cam3_021.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_022": [451.30328369140625, 14.501874923706055, -147.45611572265625], "Cam3_022.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_023": [448.07806396484375, 14.501874923706055, -146.16171264648438], "Cam3_023.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_024": [444.9220886230469, 14.501874923706055, -144.68548583984375], "Cam3_024.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_025": [441.8426513671875, 14.501874923706055, -143.03546142578125], "Cam3_025.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_026": [438.84881591796875, 14.501874923706055, -141.21449279785156], "Cam3_026.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_027": [435.9503479003906, 14.501874923706055, -139.22547912597656], "Cam3_027.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_028": [433.1532287597656, 14.501874923706055, -137.0775146484375], "Cam3_028.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_029": [430.46478271484375, 14.501874923706055, -134.7767333984375], "Cam3_029.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_030": [427.8927307128906, 14.501874923706055, -132.3289794921875], "Cam3_030.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_031": [425.4436340332031, 14.501874923706055, -129.74147033691406], "Cam3_031.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_032": [423.12255859375, 14.501874923706055, -127.0228500366211], "Cam3_032.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_033": [420.93646240234375, 14.501874923706055, -124.17951965332031], "Cam3_033.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_034": [418.89215087890625, 14.501874923706055, -121.21849060058594], "Cam3_034.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_035": [416.9982604980469, 14.501874923706055, -118.14546966552734], "Cam3_035.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_036": [415.25872802734375, 14.501874923706055, -114.97022247314453], "Cam3_036.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_037": [413.6770935058594, 14.501874923706055, -111.70220184326172], "Cam3_037.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_038": [412.26025390625, 14.501874923706055, -108.34908294677734], "Cam3_038.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_039": [411.01129150390625, 14.501874923706055, -104.9207763671875], "Cam3_039.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_040": [409.9306945800781, 14.501874923706055, -101.42787170410156], "Cam3_040.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_041": [409.02581787109375, 14.501874923706055, -97.87849426269531], "Cam3_041.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_042": [408.2946472167969, 14.501874923706055, -94.2837905883789], "Cam3_042.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_043": [407.7394714355469, 14.501874923706055, -90.65335083007812], "Cam3_043.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_044": [407.3639831542969, 14.501874923706055, -86.99676513671875], "Cam3_044.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_045": [407.16448974609375, 14.501874923706055, -83.32443237304688], "Cam3_045.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_046": [407.1465148925781, 14.501874923706055, -79.64598083496094], "Cam3_046.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_047": [407.30609130859375, 14.501874923706055, -75.97142028808594], "Cam3_047.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_048": [407.64410400390625, 14.501874923706055, -72.3106689453125], "Cam3_048.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_049": [408.16143798828125, 14.501874923706055, -68.67388916015625], "Cam3_049.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_050": [408.853271484375, 14.501874923706055, -65.07029724121094], "Cam3_050.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_051": [409.7234191894531, 14.501874923706055, -61.511024475097656], "Cam3_051.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_052": [410.7655334472656, 14.501874923706055, -58.00484848022461], "Cam3_052.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_053": [411.97802734375, 14.501874923706055, -54.56161117553711], "Cam3_053.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_054": [413.36077880859375, 14.501874923706055, -51.19234085083008], "Cam3_054.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_055": [414.9063720703125, 14.501874923706055, -47.90470504760742], "Cam3_055.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_056": [416.6120300292969, 14.501874923706055, -44.70854568481445], "Cam3_056.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_057": [418.47515869140625, 14.501874923706055, -41.61417770385742], "Cam3_057.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_058": [420.4870910644531, 14.501874923706055, -38.627986907958984], "Cam3_058.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_059": [422.6422119140625, 14.501874923706055, -35.757869720458984], "Cam3_059.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_060": [424.9350280761719, 14.501874923706055, -33.01198196411133], "Cam3_060.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_061": [427.3586730957031, 14.501874923706055, -30.397342681884766], "Cam3_061.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_062": [429.9051818847656, 14.501874923706055, -27.919374465942383], "Cam3_062.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_063": [432.5684814453125, 14.501874923706055, -25.585615158081055], "Cam3_063.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_064": [435.34210205078125, 14.501874923706055, -23.403026580810547], "Cam3_064.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_065": [438.2205810546875, 14.501874923706055, -21.381160736083984], "Cam3_065.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_066": [441.1947937011719, 14.501874923706055, -19.5240421295166], "Cam3_066.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_067": [444.25592041015625, 14.501874923706055, -17.835508346557617], "Cam3_067.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_068": [447.3967590332031, 14.501874923706055, -16.32292938232422], "Cam3_068.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_069": [450.60791015625, 14.501874923706055, -14.989521026611328], "Cam3_069.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_070": [453.8797302246094, 14.501874923706055, -13.835917472839355], "Cam3_070.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_071": [457.2044372558594, 14.501874923706055, -12.86986255645752], "Cam3_071.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_072": [460.5715026855469, 14.501874923706055, -12.089277267456055], "Cam3_072.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_073": [463.97216796875, 14.501874923706055, -11.49658203125], "Cam3_073.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_074": [467.397216796875, 14.501874923706055, -11.095703125], "Cam3_074.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_075": [470.8370666503906, 14.501874923706055, -10.882695198059082], "Cam3_075.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_076": [474.28265380859375, 14.501874923706055, -10.863574028015137], "Cam3_076.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_077": [477.7245178222656, 14.501874923706055, -11.033896446228027], "Cam3_077.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_078": [481.1535339355469, 14.501874923706055, -11.394755363464355], "Cam3_078.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_079": [484.56005859375, 14.501874923706055, -11.947060585021973], "Cam3_079.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_080": [487.9355773925781, 14.501874923706055, -12.685653686523438], "Cam3_080.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_081": [491.26947021484375, 14.501874923706055, -13.614619255065918], "Cam3_081.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_082": [494.5536193847656, 14.501874923706055, -14.727206230163574], "Cam3_082.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_083": [497.7789611816406, 14.501874923706055, -16.021591186523438], "Cam3_083.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_084": [500.9349060058594, 14.501874923706055, -17.497821807861328], "Cam3_084.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_085": [504.0143737792969, 14.501874923706055, -19.147851943969727], "Cam3_085.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_086": [507.0081787109375, 14.501874923706055, -20.968807220458984], "Cam3_086.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_087": [509.9067077636719, 14.501874923706055, -22.95783233642578], "Cam3_087.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_088": [512.7037963867188, 14.501874923706055, -25.105810165405273], "Cam3_088.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_089": [515.3922729492188, 14.501874923706055, -27.40658187866211], "Cam3_089.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_090": [517.9642944335938, 14.501874923706055, -29.85433578491211], "Cam3_090.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_091": [520.413330078125, 14.501874923706055, -32.44184494018555], "Cam3_091.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_092": [522.7344360351562, 14.501874923706055, -35.16044998168945], "Cam3_092.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_093": [524.9204711914062, 14.501874923706055, -38.003787994384766], "Cam3_093.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_094": [526.9649047851562, 14.501874923706055, -40.964813232421875], "Cam3_094.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_095": [528.8587646484375, 14.501874923706055, -44.037841796875], "Cam3_095.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_096": [530.5982666015625, 14.501874923706055, -47.21309280395508], "Cam3_096.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_097": [532.179931640625, 14.501874923706055, -50.48111343383789], "Cam3_097.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_098": [533.5966796875, 14.501874923706055, -53.834228515625], "Cam3_098.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_099": [534.8457641601562, 14.501874923706055, -57.26251983642578], "Cam3_099.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_100": [535.9263305664062, 14.501874923706055, -60.75543212890625], "Cam3_100.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_101": [536.8311767578125, 14.501874923706055, -64.3048095703125], "Cam3_101.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_102": [537.5624389648438, 14.501874923706055, -67.8995361328125], "Cam3_102.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_103": [538.1175537109375, 14.501874923706055, -71.52996063232422], "Cam3_103.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_104": [538.4930419921875, 14.501874923706055, -75.1865463256836], "Cam3_104.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_105": [538.6925659179688, 14.501874923706055, -78.85887908935547], "Cam3_105.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_106": [538.71044921875, 14.501874923706055, -82.53732299804688], "Cam3_106.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_107": [538.5509033203125, 14.501874923706055, -86.21187591552734], "Cam3_107.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_108": [538.2129516601562, 14.501874923706055, -89.87261199951172], "Cam3_108.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_109": [537.6956176757812, 14.501874923706055, -93.5093994140625], "Cam3_109.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_110": [537.0037231445312, 14.501874923706055, -97.1130142211914], "Cam3_110.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_111": [536.1336059570312, 14.501874923706055, -100.67227172851562], "Cam3_111.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_112": [535.0914916992188, 14.501874923706055, -104.1784439086914], "Cam3_112.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_113": [533.8789672851562, 14.501874923706055, -107.62166595458984], "Cam3_113.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_114": [532.4962158203125, 14.501874923706055, -110.99095153808594], "Cam3_114.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_115": [530.9506225585938, 14.501874923706055, -114.27859497070312], "Cam3_115.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_116": [529.2449951171875, 14.501874923706055, -117.4747314453125], "Cam3_116.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_117": [527.3818359375, 14.501874923706055, -120.56910705566406], "Cam3_117.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_118": [525.3699340820312, 14.501874923706055, -123.55531311035156], "Cam3_118.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_119": [523.21484375, 14.501874923706055, -126.4254379272461], "Cam3_119.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Cam3_120": [520.9219970703125, 14.501874923706055, -129.1713104248047], "Cam3_120.Target": [471.1287841796875, 8.527578353881836, -82.3470230102539], "Circle006": [472.9284973144531, 14.501874923706055, -81.09165954589844]}');

export const BUILDING4_CAMERAS = JSON.parse('{"Cam4_001": [554.4974365234375, 14.501872062683105, -127.45943450927734], "Cam4_001.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_002": [551.998046875, 14.501872062683105, -129.831298828125], "Cam4_002.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_003": [549.3793334960938, 14.501872062683105, -132.0707244873047], "Cam4_003.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_004": [546.64794921875, 14.501872062683105, -134.1708984375], "Cam4_004.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_005": [543.8104858398438, 14.501872062683105, -136.12571716308594], "Cam4_005.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_006": [540.8728637695312, 14.501872062683105, -137.92649841308594], "Cam4_006.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_007": [537.8445434570312, 14.501872062683105, -139.56985473632812], "Cam4_007.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_008": [534.734375, 14.501872062683105, -141.0527801513672], "Cam4_008.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_009": [531.5496215820312, 14.501872062683105, -142.3680419921875], "Cam4_009.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_010": [528.3002319335938, 14.501872062683105, -143.5141143798828], "Cam4_010.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_011": [524.9957885742188, 14.501872062683105, -144.490234375], "Cam4_011.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_012": [521.6439208984375, 14.501872062683105, -145.28854370117188], "Cam4_012.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_013": [518.25537109375, 14.501872062683105, -145.9130401611328], "Cam4_013.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_014": [514.8388061523438, 14.501872062683105, -146.3597869873047], "Cam4_014.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_015": [511.4036560058594, 14.501872062683105, -146.62742614746094], "Cam4_015.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_016": [507.9591979980469, 14.501872062683105, -146.71876525878906], "Cam4_016.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_017": [504.51483154296875, 14.501872062683105, -146.62741088867188], "Cam4_017.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_018": [501.07958984375, 14.501872062683105, -146.3597869873047], "Cam4_018.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_019": [497.6631164550781, 14.501872062683105, -145.9130401611328], "Cam4_019.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_020": [494.2745056152344, 14.501872062683105, -145.28854370117188], "Cam4_020.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_021": [490.9226379394531, 14.501872062683105, -144.490234375], "Cam4_021.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_022": [487.6181945800781, 14.501872062683105, -143.51409912109375], "Cam4_022.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_023": [484.3687744140625, 14.501872062683105, -142.3680419921875], "Cam4_023.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_024": [481.18414306640625, 14.501872062683105, -141.0527801513672], "Cam4_024.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_025": [478.0739440917969, 14.501872062683105, -139.5698699951172], "Cam4_025.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_026": [475.0455322265625, 14.501872062683105, -137.92649841308594], "Cam4_026.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_027": [472.10791015625, 14.501872062683105, -136.12571716308594], "Cam4_027.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_028": [469.2705078125, 14.501872062683105, -134.1708984375], "Cam4_028.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_029": [466.5389709472656, 14.501872062683105, -132.0707244873047], "Cam4_029.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_030": [463.9203796386719, 14.501872062683105, -129.831298828125], "Cam4_030.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_031": [461.4210510253906, 14.501872062683105, -127.45943450927734], "Cam4_031.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_032": [459.0491638183594, 14.501872062683105, -124.96009826660156], "Cam4_032.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_033": [456.8097229003906, 14.501872062683105, -122.3414535522461], "Cam4_033.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_034": [454.70953369140625, 14.501872062683105, -119.60994720458984], "Cam4_034.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_035": [452.7547302246094, 14.501872062683105, -116.77253723144531], "Cam4_035.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_036": [450.9539794921875, 14.501872062683105, -113.83494567871094], "Cam4_036.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_037": [449.3105773925781, 14.501872062683105, -110.80651092529297], "Cam4_037.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_038": [447.82769775390625, 14.501872062683105, -107.69635772705078], "Cam4_038.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_039": [446.5123596191406, 14.501872062683105, -104.51166534423828], "Cam4_039.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_040": [445.3663330078125, 14.501872062683105, -101.26225280761719], "Cam4_040.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_041": [444.3902282714844, 14.501872062683105, -97.95779418945312], "Cam4_041.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_042": [443.59185791015625, 14.501872062683105, -94.60592651367188], "Cam4_042.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_043": [442.9673767089844, 14.501872062683105, -91.21739196777344], "Cam4_043.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_044": [442.5206298828125, 14.501872062683105, -87.80088806152344], "Cam4_044.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_045": [442.2530517578125, 14.501872062683105, -84.36566925048828], "Cam4_045.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_046": [442.16168212890625, 14.501872062683105, -80.92124938964844], "Cam4_046.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_047": [442.2530517578125, 14.501872062683105, -77.47682189941406], "Cam4_047.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_048": [442.5206298828125, 14.501872062683105, -74.04161834716797], "Cam4_048.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_049": [442.9673767089844, 14.501872062683105, -70.6250991821289], "Cam4_049.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_050": [443.59185791015625, 14.501872062683105, -67.236572265625], "Cam4_050.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_051": [444.3902282714844, 14.501872062683105, -63.88470458984375], "Cam4_051.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_052": [445.3663330078125, 14.501872062683105, -60.58023452758789], "Cam4_052.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_053": [446.5123596191406, 14.501872062683105, -57.330833435058594], "Cam4_053.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_054": [447.82769775390625, 14.501872062683105, -54.146141052246094], "Cam4_054.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_055": [449.3105773925781, 14.501872062683105, -51.03598403930664], "Cam4_055.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_056": [450.9539794921875, 14.501872062683105, -48.0075569152832], "Cam4_056.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_057": [452.7547302246094, 14.501872062683105, -45.069950103759766], "Cam4_057.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_058": [454.70953369140625, 14.501872062683105, -42.232547760009766], "Cam4_058.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_059": [456.8097229003906, 14.501872062683105, -39.501033782958984], "Cam4_059.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_060": [459.0491638183594, 14.501872062683105, -36.88241958618164], "Cam4_060.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_061": [461.4210510253906, 14.501872062683105, -34.38308334350586], "Cam4_061.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_062": [463.9203796386719, 14.501872062683105, -32.01121139526367], "Cam4_062.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_063": [466.5389709472656, 14.501872062683105, -29.77179527282715], "Cam4_063.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_064": [469.2705078125, 14.501872062683105, -27.671600341796875], "Cam4_064.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_065": [472.10791015625, 14.501872062683105, -25.716787338256836], "Cam4_065.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_066": [475.0455322265625, 14.501872062683105, -23.916015625], "Cam4_066.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_067": [478.073974609375, 14.501872062683105, -22.272645950317383], "Cam4_067.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_068": [481.18408203125, 14.501872062683105, -20.78972625732422], "Cam4_068.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_069": [484.3687744140625, 14.501872062683105, -19.474462509155273], "Cam4_069.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_070": [487.6181945800781, 14.501872062683105, -18.328407287597656], "Cam4_070.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_071": [490.9226379394531, 14.501872062683105, -17.352275848388672], "Cam4_071.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_072": [494.2745056152344, 14.501872062683105, -16.553964614868164], "Cam4_072.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_073": [497.6631164550781, 14.501872062683105, -15.929471969604492], "Cam4_073.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_074": [501.07958984375, 14.501872062683105, -15.482714653015137], "Cam4_074.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_075": [504.51483154296875, 14.501872062683105, -15.215097427368164], "Cam4_075.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_076": [507.9591979980469, 14.501872062683105, -15.123749732971191], "Cam4_076.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_077": [511.4036560058594, 14.501872062683105, -15.215097427368164], "Cam4_077.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_078": [514.8388061523438, 14.501872062683105, -15.482714653015137], "Cam4_078.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_079": [518.25537109375, 14.501872062683105, -15.929471969604492], "Cam4_079.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_080": [521.6439208984375, 14.501872062683105, -16.553964614868164], "Cam4_080.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_081": [524.9957885742188, 14.501872062683105, -17.352285385131836], "Cam4_081.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_082": [528.3002319335938, 14.501872062683105, -18.32841682434082], "Cam4_082.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_083": [531.5496215820312, 14.501872062683105, -19.474472045898438], "Cam4_083.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_084": [534.734375, 14.501872062683105, -20.78972625732422], "Cam4_084.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_085": [537.8445434570312, 14.501872062683105, -22.272645950317383], "Cam4_085.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_086": [540.8728637695312, 14.501872062683105, -23.916025161743164], "Cam4_086.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_087": [543.8104858398438, 14.501872062683105, -25.716796875], "Cam4_087.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_088": [546.64794921875, 14.501872062683105, -27.671621322631836], "Cam4_088.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_089": [549.3794555664062, 14.501872062683105, -29.77179527282715], "Cam4_089.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_090": [551.998046875, 14.501872062683105, -32.01121139526367], "Cam4_090.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_091": [554.4974365234375, 14.501872062683105, -34.38308334350586], "Cam4_091.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_092": [556.8692016601562, 14.501872062683105, -36.88241958618164], "Cam4_092.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_093": [559.108642578125, 14.501872062683105, -39.50104522705078], "Cam4_093.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_094": [561.2088012695312, 14.501872062683105, -42.23255920410156], "Cam4_094.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_095": [563.1636352539062, 14.501872062683105, -45.06998825073242], "Cam4_095.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_096": [564.9644165039062, 14.501872062683105, -48.00757598876953], "Cam4_096.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_097": [566.6077880859375, 14.501872062683105, -51.03600311279297], "Cam4_097.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_098": [568.0907592773438, 14.501872062683105, -54.14616012573242], "Cam4_098.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_099": [569.406005859375, 14.501872062683105, -57.330848693847656], "Cam4_099.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_100": [570.552001953125, 14.501872062683105, -60.58024597167969], "Cam4_100.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_101": [571.5281982421875, 14.501872062683105, -63.88471221923828], "Cam4_101.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_102": [572.3264770507812, 14.501872062683105, -67.236572265625], "Cam4_102.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_103": [572.9509887695312, 14.501872062683105, -70.62512969970703], "Cam4_103.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_104": [573.397705078125, 14.501872062683105, -74.0416488647461], "Cam4_104.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_105": [573.6654052734375, 14.501872062683105, -77.47683715820312], "Cam4_105.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_106": [573.7567138671875, 14.501872062683105, -80.92125701904297], "Cam4_106.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_107": [573.6654052734375, 14.501872062683105, -84.36566925048828], "Cam4_107.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_108": [573.397705078125, 14.501872062683105, -87.8008804321289], "Cam4_108.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_109": [572.9509887695312, 14.501872062683105, -91.21739196777344], "Cam4_109.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_110": [572.3264770507812, 14.501872062683105, -94.6059341430664], "Cam4_110.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_111": [571.5281982421875, 14.501872062683105, -97.95779418945312], "Cam4_111.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_112": [570.552001953125, 14.501872062683105, -101.26225280761719], "Cam4_112.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_113": [569.406005859375, 14.501872062683105, -104.51165771484375], "Cam4_113.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_114": [568.0907592773438, 14.501872062683105, -107.69635772705078], "Cam4_114.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_115": [566.6078491210938, 14.501872062683105, -110.8065185546875], "Cam4_115.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_116": [564.9644165039062, 14.501872062683105, -113.83493041992188], "Cam4_116.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_117": [563.1636352539062, 14.501872062683105, -116.77253723144531], "Cam4_117.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_118": [561.2088012695312, 14.501872062683105, -119.60995483398438], "Cam4_118.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_119": [559.108642578125, 14.501872062683105, -122.34146881103516], "Cam4_119.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Cam4_120": [556.8692016601562, 14.501872062683105, -124.9600830078125], "Cam4_120.Target": [506.1595153808594, 7.62618350982666, -82.1766128540039], "Circle007": [507.9591979980469, 14.501873016357422, -80.92125701904297]}');

export const BUILDING5_CAMERAS = JSON.parse('{"Cam5_001": [598.529296875, 14.501872062683105, -138.800537109375], "Cam5_001.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_002": [595.894775390625, 14.501872062683105, -141.05068969726562], "Cam5_002.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_003": [593.1344604492188, 14.501872062683105, -143.1751708984375], "Cam5_003.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_004": [590.255126953125, 14.501872062683105, -145.16758728027344], "Cam5_004.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_005": [587.2642211914062, 14.501872062683105, -147.02206420898438], "Cam5_005.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_006": [584.167724609375, 14.501872062683105, -148.7304229736328], "Cam5_006.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_007": [580.9754638671875, 14.501872062683105, -150.2894744873047], "Cam5_007.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_008": [577.6970825195312, 14.501872062683105, -151.69627380371094], "Cam5_008.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_009": [574.340087890625, 14.501872062683105, -152.94403076171875], "Cam5_009.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_010": [570.9149169921875, 14.501872062683105, -154.03128051757812], "Cam5_010.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_011": [567.4317016601562, 14.501872062683105, -154.9573211669922], "Cam5_011.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_012": [563.8984985351562, 14.501872062683105, -155.71466064453125], "Cam5_012.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_013": [560.3267211914062, 14.501872062683105, -156.30709838867188], "Cam5_013.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_014": [556.7254028320312, 14.501872062683105, -156.73092651367188], "Cam5_014.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_015": [553.1043090820312, 14.501872062683105, -156.9848175048828], "Cam5_015.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_016": [549.4735717773438, 14.501872062683105, -157.0714874267578], "Cam5_016.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_017": [545.8427734375, 14.501872062683105, -156.98480224609375], "Cam5_017.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_018": [542.2216796875, 14.501872062683105, -156.7309112548828], "Cam5_018.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_019": [538.6204833984375, 14.501872062683105, -156.30709838867188], "Cam5_019.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_020": [535.048583984375, 14.501872062683105, -155.71466064453125], "Cam5_020.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_021": [531.515380859375, 14.501872062683105, -154.95730590820312], "Cam5_021.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_022": [528.0321655273438, 14.501872062683105, -154.03126525878906], "Cam5_022.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_023": [524.6069946289062, 14.501872062683105, -152.94403076171875], "Cam5_023.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_024": [521.2500610351562, 14.501872062683105, -151.69625854492188], "Cam5_024.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_025": [517.9716186523438, 14.501872062683105, -150.2894744873047], "Cam5_025.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_026": [514.7793579101562, 14.501872062683105, -148.7304229736328], "Cam5_026.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_027": [511.6828918457031, 14.501872062683105, -147.02206420898438], "Cam5_027.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_028": [508.69195556640625, 14.501872062683105, -145.16757202148438], "Cam5_028.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_029": [505.8126525878906, 14.501872062683105, -143.1751708984375], "Cam5_029.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_030": [503.0523986816406, 14.501872062683105, -141.05067443847656], "Cam5_030.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_031": [500.4178771972656, 14.501872062683105, -138.800537109375], "Cam5_031.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_032": [497.9176330566406, 14.501872062683105, -136.42947387695312], "Cam5_032.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_033": [495.5570068359375, 14.501872062683105, -133.9452362060547], "Cam5_033.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_034": [493.34326171875, 14.501872062683105, -131.35389709472656], "Cam5_034.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_035": [491.28271484375, 14.501872062683105, -128.662109375], "Cam5_035.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_036": [489.384521484375, 14.501872062683105, -125.8752670288086], "Cam5_036.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_037": [487.6522216796875, 14.501872062683105, -123.00224304199219], "Cam5_037.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_038": [486.0890808105469, 14.501872062683105, -120.05171966552734], "Cam5_038.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_039": [484.7027282714844, 14.501872062683105, -117.03046417236328], "Cam5_039.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_040": [483.49462890625, 14.501872062683105, -113.94783020019531], "Cam5_040.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_041": [482.4656982421875, 14.501872062683105, -110.81293487548828], "Cam5_041.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_042": [481.6241760253906, 14.501872062683105, -107.63309478759766], "Cam5_042.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_043": [480.9659118652344, 14.501872062683105, -104.41845703125], "Cam5_043.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_044": [480.4949951171875, 14.501872062683105, -101.17728424072266], "Cam5_044.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_045": [480.2129211425781, 14.501872062683105, -97.91837310791016], "Cam5_045.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_046": [480.11663818359375, 14.501872062683105, -94.65071868896484], "Cam5_046.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_047": [480.2129211425781, 14.501872062683105, -91.38306427001953], "Cam5_047.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_048": [480.4949951171875, 14.501872062683105, -88.12416076660156], "Cam5_048.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_049": [480.9659118652344, 14.501872062683105, -84.88298797607422], "Cam5_049.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_050": [481.6241760253906, 14.501872062683105, -81.66835021972656], "Cam5_050.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_051": [482.4656982421875, 14.501872062683105, -78.4885025024414], "Cam5_051.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_052": [483.49462890625, 14.501872062683105, -75.3536148071289], "Cam5_052.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_053": [484.7027282714844, 14.501872062683105, -72.27098083496094], "Cam5_053.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_054": [486.0891418457031, 14.501872062683105, -69.24971771240234], "Cam5_054.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_055": [487.6522216796875, 14.501872062683105, -66.29918670654297], "Cam5_055.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_056": [489.384521484375, 14.501872062683105, -63.426170349121094], "Cam5_056.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_057": [491.28271484375, 14.501872062683105, -60.639320373535156], "Cam5_057.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_058": [493.34326171875, 14.501872062683105, -57.94754409790039], "Cam5_058.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_059": [495.5570068359375, 14.501872062683105, -55.35621643066406], "Cam5_059.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_060": [497.9176330566406, 14.501872062683105, -52.871986389160156], "Cam5_060.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_061": [500.4178161621094, 14.501872062683105, -50.500911712646484], "Cam5_061.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_062": [503.0523986816406, 14.501872062683105, -48.25076675415039], "Cam5_062.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_063": [505.8126525878906, 14.501872062683105, -46.12628936767578], "Cam5_063.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_064": [508.6918640136719, 14.501872062683105, -44.13387680053711], "Cam5_064.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_065": [511.6828918457031, 14.501872062683105, -42.27937316894531], "Cam5_065.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_066": [514.7793579101562, 14.501872062683105, -40.571014404296875], "Cam5_066.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_067": [517.9716186523438, 14.501872062683105, -39.01198959350586], "Cam5_067.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_068": [521.25, 14.501872062683105, -37.60517501831055], "Cam5_068.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_069": [524.6069946289062, 14.501872062683105, -36.3574104309082], "Cam5_069.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_070": [528.0321655273438, 14.501872062683105, -35.27017593383789], "Cam5_070.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_071": [531.515380859375, 14.501872062683105, -34.344139099121094], "Cam5_071.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_072": [535.048583984375, 14.501872062683105, -33.586795806884766], "Cam5_072.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_073": [538.6204833984375, 14.501872062683105, -32.994346618652344], "Cam5_073.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_074": [542.2216796875, 14.501872062683105, -32.570526123046875], "Cam5_074.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_075": [545.8427734375, 14.501872062683105, -32.3166389465332], "Cam5_075.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_076": [549.4735717773438, 14.501872062683105, -32.22998046875], "Cam5_076.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_077": [553.1043090820312, 14.501872062683105, -32.3166389465332], "Cam5_077.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_078": [556.7252807617188, 14.501872062683105, -32.570526123046875], "Cam5_078.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_079": [560.3267211914062, 14.501872062683105, -32.994354248046875], "Cam5_079.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_080": [563.8985595703125, 14.501872062683105, -33.586795806884766], "Cam5_080.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_081": [567.4317016601562, 14.501872062683105, -34.34415054321289], "Cam5_081.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_082": [570.9149169921875, 14.501872062683105, -35.27018356323242], "Cam5_082.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_083": [574.340087890625, 14.501872062683105, -36.357421875], "Cam5_083.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_084": [577.6970825195312, 14.501872062683105, -37.60517501831055], "Cam5_084.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_085": [580.9754638671875, 14.501872062683105, -39.01198959350586], "Cam5_085.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_086": [584.167724609375, 14.501872062683105, -40.5710334777832], "Cam5_086.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_087": [587.2642211914062, 14.501872062683105, -42.27938461303711], "Cam5_087.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_088": [590.2552490234375, 14.501872062683105, -44.13389587402344], "Cam5_088.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_089": [593.1344604492188, 14.501872062683105, -46.12628936767578], "Cam5_089.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_090": [595.894775390625, 14.501872062683105, -48.250770568847656], "Cam5_090.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_091": [598.5292358398438, 14.501872062683105, -50.50092315673828], "Cam5_091.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_092": [601.0294189453125, 14.501872062683105, -52.87199020385742], "Cam5_092.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_093": [603.3900146484375, 14.501872062683105, -55.35621643066406], "Cam5_093.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_094": [605.6038208007812, 14.501872062683105, -57.94755172729492], "Cam5_094.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_095": [607.6643676757812, 14.501872062683105, -60.63936233520508], "Cam5_095.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_096": [609.5625610351562, 14.501872062683105, -63.42619323730469], "Cam5_096.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_097": [611.2947998046875, 14.501872062683105, -66.29920196533203], "Cam5_097.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_098": [612.8579711914062, 14.501872062683105, -69.24974060058594], "Cam5_098.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_100": [615.452392578125, 14.501872062683105, -75.3536376953125], "Cam5_100.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_101": [616.4813842773438, 14.501872062683105, -78.48851013183594], "Cam5_101.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_102": [617.3228759765625, 14.501872062683105, -81.6683578491211], "Cam5_102.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_103": [617.9811401367188, 14.501872062683105, -84.88300323486328], "Cam5_103.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_104": [618.4520874023438, 14.501872062683105, -88.12419128417969], "Cam5_104.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_105": [618.7341918945312, 14.501872062683105, -91.38308715820312], "Cam5_105.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_106": [618.8304443359375, 14.501872062683105, -94.65074157714844], "Cam5_106.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_107": [618.7341918945312, 14.501872062683105, -97.91837310791016], "Cam5_107.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_108": [618.4520874023438, 14.501872062683105, -101.17728424072266], "Cam5_108.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_109": [617.9811401367188, 14.501872062683105, -104.41846466064453], "Cam5_109.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_110": [617.3228759765625, 14.501872062683105, -107.63310241699219], "Cam5_110.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_111": [616.4813842773438, 14.501872062683105, -110.81295013427734], "Cam5_111.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_112": [615.452392578125, 14.501872062683105, -113.94783020019531], "Cam5_112.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_113": [614.244384765625, 14.501872062683105, -117.03046417236328], "Cam5_113.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_114": [612.8579711914062, 14.501872062683105, -120.05171966552734], "Cam5_114.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_115": [611.2947998046875, 14.501872062683105, -123.00225067138672], "Cam5_115.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_116": [609.5625610351562, 14.501872062683105, -125.87525939941406], "Cam5_116.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_117": [607.6643676757812, 14.501872062683105, -128.662109375], "Cam5_117.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_118": [605.6038208007812, 14.501872062683105, -131.35389709472656], "Cam5_118.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_119": [603.3900756835938, 14.501872062683105, -133.9452362060547], "Cam5_119.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_120": [601.0294189453125, 14.501872062683105, -136.42947387695312], "Cam5_120.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Cam5_99": [614.244384765625, 14.501872062683105, -72.27098846435547], "Cam5_99.Target": [547.673828125, 7.599558353424072, -95.90608978271484], "Circle008": [549.4735717773438, 14.501873016357422, -94.6507339477539]}');

export const BUILDING6_CAMERAS = JSON.parse('{"Cam6_001": [607.589599609375, 14.501874923706055, -109.91140747070312], "Cam6_001.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_002": [604.7894897460938, 14.501874923706055, -112.0285415649414], "Cam6_002.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_003": [601.8557739257812, 14.501874923706055, -114.02742004394531], "Cam6_003.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_004": [598.7955932617188, 14.501874923706055, -115.90204620361328], "Cam6_004.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_005": [595.61669921875, 14.501874923706055, -117.64688873291016], "Cam6_005.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_006": [592.32568359375, 14.501874923706055, -119.25425720214844], "Cam6_006.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_007": [588.932861328125, 14.501874923706055, -120.72113037109375], "Cam6_007.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_008": [585.448486328125, 14.501874923706055, -122.04475402832031], "Cam6_008.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_009": [581.8805541992188, 14.501874923706055, -123.21876525878906], "Cam6_009.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_010": [578.2401733398438, 14.501874923706055, -124.24173736572266], "Cam6_010.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_011": [574.5380249023438, 14.501874923706055, -125.1130142211914], "Cam6_011.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_012": [570.7828979492188, 14.501874923706055, -125.82559204101562], "Cam6_012.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_013": [566.9866333007812, 14.501874923706055, -126.38300323486328], "Cam6_013.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_014": [563.1589965820312, 14.501874923706055, -126.7817611694336], "Cam6_014.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_015": [559.3103637695312, 14.501874923706055, -127.02064514160156], "Cam6_015.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_016": [555.4514770507812, 14.501874923706055, -127.1021957397461], "Cam6_016.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_017": [551.5925903320312, 14.501874923706055, -127.02064514160156], "Cam6_017.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_018": [547.7440795898438, 14.501874923706055, -126.7817611694336], "Cam6_018.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_019": [543.9164428710938, 14.501874923706055, -126.38300323486328], "Cam6_019.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_020": [540.1201171875, 14.501874923706055, -125.82559204101562], "Cam6_020.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_021": [536.3649291992188, 14.501874923706055, -125.11300659179688], "Cam6_021.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_022": [532.6629028320312, 14.501874923706055, -124.24171447753906], "Cam6_022.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_023": [529.0224609375, 14.501874923706055, -123.21875762939453], "Cam6_023.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_024": [525.45458984375, 14.501874923706055, -122.04475402832031], "Cam6_024.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_025": [521.97021484375, 14.501874923706055, -120.72113037109375], "Cam6_025.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_026": [518.5773315429688, 14.501874923706055, -119.25425720214844], "Cam6_026.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_027": [515.2862548828125, 14.501874923706055, -117.64688873291016], "Cam6_027.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_028": [512.107421875, 14.501874923706055, -115.90203094482422], "Cam6_028.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_029": [509.0472412109375, 14.501874923706055, -114.02742004394531], "Cam6_029.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_030": [506.1134948730469, 14.501874923706055, -112.02853393554688], "Cam6_030.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_031": [503.31341552734375, 14.501874923706055, -109.91140747070312], "Cam6_031.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_032": [500.6561584472656, 14.501874923706055, -107.68050384521484], "Cam6_032.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_033": [498.1472473144531, 14.501874923706055, -105.3431396484375], "Cam6_033.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_034": [495.79437255859375, 14.501874923706055, -102.9050064086914], "Cam6_034.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_035": [493.6043395996094, 14.501874923706055, -100.37236022949219], "Cam6_035.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_036": [491.58685302734375, 14.501874923706055, -97.75028228759766], "Cam6_036.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_037": [489.7457275390625, 14.501874923706055, -95.04710388183594], "Cam6_037.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_038": [488.0843505859375, 14.501874923706055, -92.27100372314453], "Cam6_038.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_039": [486.6108093261719, 14.501874923706055, -89.4283676147461], "Cam6_039.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_040": [485.3268737792969, 14.501874923706055, -86.52796936035156], "Cam6_040.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_041": [484.2332763671875, 14.501874923706055, -83.57841491699219], "Cam6_041.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_042": [483.3388977050781, 14.501874923706055, -80.58656311035156], "Cam6_042.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_043": [482.6392822265625, 14.501874923706055, -77.56197357177734], "Cam6_043.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_044": [482.1387634277344, 14.501874923706055, -74.51242065429688], "Cam6_044.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_045": [481.8389587402344, 14.501874923706055, -71.4461669921875], "Cam6_045.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_046": [481.7366027832031, 14.501874923706055, -68.37169647216797], "Cam6_046.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_047": [481.8389587402344, 14.501874923706055, -65.2972183227539], "Cam6_047.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_048": [482.1387634277344, 14.501874923706055, -62.230979919433594], "Cam6_048.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_049": [482.6392822265625, 14.501874923706055, -59.18141555786133], "Cam6_049.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_050": [483.33892822265625, 14.501874923706055, -56.156829833984375], "Cam6_050.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_051": [484.2332763671875, 14.501874923706055, -53.16496276855469], "Cam6_051.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_052": [485.3268737792969, 14.501874923706055, -50.21541976928711], "Cam6_052.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_053": [486.6108093261719, 14.501874923706055, -47.31501770019531], "Cam6_053.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_054": [488.0843505859375, 14.501874923706055, -44.472381591796875], "Cam6_054.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_055": [489.7457275390625, 14.501874923706055, -41.6962776184082], "Cam6_055.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_056": [491.58685302734375, 14.501874923706055, -38.99311447143555], "Cam6_056.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_057": [493.6043395996094, 14.501874923706055, -36.37103271484375], "Cam6_057.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_058": [495.79437255859375, 14.501874923706055, -33.83837890625], "Cam6_058.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_059": [498.1472473144531, 14.501874923706055, -31.400253295898438], "Cam6_059.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_060": [500.6561584472656, 14.501874923706055, -29.06287956237793], "Cam6_060.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_061": [503.31341552734375, 14.501874923706055, -26.83199119567871], "Cam6_061.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_062": [506.1134948730469, 14.501874923706055, -24.714862823486328], "Cam6_062.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_063": [509.0472412109375, 14.501874923706055, -22.715986251831055], "Cam6_063.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_064": [512.107421875, 14.501874923706055, -20.841365814208984], "Cam6_064.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_065": [515.2863159179688, 14.501874923706055, -19.096492767333984], "Cam6_065.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_066": [518.5773315429688, 14.501874923706055, -17.489139556884766], "Cam6_066.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_067": [521.97021484375, 14.501874923706055, -16.022275924682617], "Cam6_067.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_068": [525.4545288085938, 14.501874923706055, -14.69863224029541], "Cam6_068.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_069": [529.0224609375, 14.501874923706055, -13.524638175964355], "Cam6_069.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_070": [532.6629028320312, 14.501874923706055, -12.501679420471191], "Cam6_070.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_071": [536.3649291992188, 14.501874923706055, -11.630390167236328], "Cam6_071.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_072": [540.1201171875, 14.501874923706055, -10.91781234741211], "Cam6_072.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_073": [543.9164428710938, 14.501874923706055, -10.360390663146973], "Cam6_073.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_074": [547.744140625, 14.501874923706055, -9.961621284484863], "Cam6_074.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_075": [551.5926513671875, 14.501874923706055, -9.722753524780273], "Cam6_075.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_076": [555.4514770507812, 14.501874923706055, -9.641210556030273], "Cam6_076.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_077": [559.3103637695312, 14.501874923706055, -9.722753524780273], "Cam6_077.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_078": [563.1589965820312, 14.501874923706055, -9.961621284484863], "Cam6_078.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_079": [566.9866333007812, 14.501874923706055, -10.3604097366333], "Cam6_079.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_080": [570.7828979492188, 14.501874923706055, -10.91781234741211], "Cam6_080.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_081": [574.5380859375, 14.501874923706055, -11.630390167236328], "Cam6_081.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_082": [578.2401733398438, 14.501874923706055, -12.501679420471191], "Cam6_082.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_083": [581.8805541992188, 14.501874923706055, -13.52464771270752], "Cam6_083.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_084": [585.448486328125, 14.501874923706055, -14.69863224029541], "Cam6_084.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_085": [588.932861328125, 14.501874923706055, -16.022275924682617], "Cam6_085.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_086": [592.32568359375, 14.501874923706055, -17.48914909362793], "Cam6_086.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_087": [595.6167602539062, 14.501874923706055, -19.09650421142578], "Cam6_087.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_088": [598.7955932617188, 14.501874923706055, -20.84137725830078], "Cam6_088.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_089": [601.8557739257812, 14.501874923706055, -22.715986251831055], "Cam6_089.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_090": [604.7894897460938, 14.501874923706055, -24.714872360229492], "Cam6_090.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_091": [607.589599609375, 14.501874923706055, -26.83199119567871], "Cam6_091.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_092": [610.2468872070312, 14.501874923706055, -29.062889099121094], "Cam6_092.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_093": [612.7557373046875, 14.501874923706055, -31.400253295898438], "Cam6_093.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_094": [615.108642578125, 14.501874923706055, -33.83838653564453], "Cam6_094.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_095": [617.2987060546875, 14.501874923706055, -36.371063232421875], "Cam6_095.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_096": [619.316162109375, 14.501874923706055, -38.993133544921875], "Cam6_096.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_097": [621.1573486328125, 14.501874923706055, -41.6962890625], "Cam6_097.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_098": [622.8186645507812, 14.501874923706055, -44.4724006652832], "Cam6_098.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_099": [624.2921752929688, 14.501874923706055, -47.31503677368164], "Cam6_099.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_100": [625.576171875, 14.501874923706055, -50.21543502807617], "Cam6_100.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_101": [626.6697387695312, 14.501874923706055, -53.16497802734375], "Cam6_101.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_102": [627.5641479492188, 14.501874923706055, -56.15683364868164], "Cam6_102.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_103": [628.2637329101562, 14.501874923706055, -59.181434631347656], "Cam6_103.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_104": [628.7642211914062, 14.501874923706055, -62.23099899291992], "Cam6_104.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_105": [629.0640258789062, 14.501874923706055, -65.2972412109375], "Cam6_105.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_106": [629.1663818359375, 14.501874923706055, -68.3717041015625], "Cam6_106.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_107": [629.0640258789062, 14.501874923706055, -71.4461669921875], "Cam6_107.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_108": [628.7642211914062, 14.501874923706055, -74.51241302490234], "Cam6_108.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_109": [628.2637329101562, 14.501874923706055, -77.56197357177734], "Cam6_109.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_110": [627.5641479492188, 14.501874923706055, -80.5865707397461], "Cam6_110.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_111": [626.6697387695312, 14.501874923706055, -83.57842254638672], "Cam6_111.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_112": [625.576171875, 14.501874923706055, -86.52796936035156], "Cam6_112.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_113": [624.2921752929688, 14.501874923706055, -89.4283676147461], "Cam6_113.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_114": [622.8186645507812, 14.501874923706055, -92.27100372314453], "Cam6_114.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_115": [621.1573486328125, 14.501874923706055, -95.047119140625], "Cam6_115.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_116": [619.316162109375, 14.501874923706055, -97.75027465820312], "Cam6_116.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_117": [617.2986450195312, 14.501874923706055, -100.37235260009766], "Cam6_117.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_118": [615.108642578125, 14.501874923706055, -102.90501403808594], "Cam6_118.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_119": [612.7557373046875, 14.501874923706055, -105.3431396484375], "Cam6_119.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Cam6_120": [610.2468872070312, 14.501874923706055, -107.68050384521484], "Cam6_120.Target": [553.6517944335938, 7.672617435455322, -69.6270751953125], "Circle009": [555.4515380859375, 14.501874923706055, -68.3717041015625]}');

export const RENDER_BUILDING_1: UnitToRenderBuilding = {
};
export const RENDER_BUILDING_2: UnitToRenderBuilding = {
};
export const RENDER_BUILDING_3: UnitToRenderBuilding = {
};
export const RENDER_BUILDING_4: UnitToRenderBuilding = {
};
export const RENDER_BUILDING_5: UnitToRenderBuilding = {
};
export const RENDER_BUILDING_6: UnitToRenderBuilding = {
};
