/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable quote-props */
import * as THREE from 'three';

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

export const camerasConfig: DataObject = {
  '1': {
    camera_name: 'Corona_Camera001_0-480',
    image: './renders/models/1spin_0000.jpg',

  },
  '2': {
    camera_name: 'Corona_Camera001_0-361',
    image: './renders/models/1spin_0001.jpg',

  },
  '3': {
    camera_name: 'Corona_Camera001_0-362',
    image: './renders/models/1spin_0002.jpg',

  },
  '4': {
    camera_name: 'Corona_Camera001_0-363',
    image: './renders/models/1spin_0003.jpg',

  },
  '5': {
    camera_name: 'Corona_Camera001_0-364',
    image: './renders/models/1spin_0004.jpg',

  },
  '6': {
    camera_name: 'Corona_Camera001_0-365',
    image: './renders/models/1spin_0005.jpg',

  },
  '7': {
    camera_name: 'Corona_Camera001_0-366',
    image: './renders/models/1spin_0006.jpg',

  },
  '8': {
    camera_name: 'Corona_Camera001_0-367',
    image: './renders/models/1spin_0007.jpg',

  },
  '9': {
    camera_name: 'Corona_Camera001_0-368',
    image: './renders/models/1spin_0008.jpg',

  },
  '10': {
    camera_name: 'Corona_Camera001_0-369',
    image: './renders/models/1spin_0009.jpg',

  },
  '11': {
    camera_name: 'Corona_Camera001_0-370',
    image: './renders/models/1spin_0010.jpg',

  },
  '12': {
    camera_name: 'Corona_Camera001_0-371',
    image: './renders/models/1spin_0011.jpg',

  },
  '13': {
    camera_name: 'Corona_Camera001_0-372',
    image: './renders/models/1spin_0012.jpg',

  },
  '14': {
    camera_name: 'Corona_Camera001_0-373',
    image: './renders/models/1spin_0013.jpg',

  },
  '15': {
    camera_name: 'Corona_Camera001_0-374',
    image: './renders/models/1spin_0014.jpg',

  },
  '16': {
    camera_name: 'Corona_Camera001_0-375',
    image: './renders/models/1spin_0015.jpg',

  },
  '17': {
    camera_name: 'Corona_Camera001_0-376',
    image: './renders/models/1spin_0016.jpg',

  },
  '18': {
    camera_name: 'Corona_Camera001_0-377',
    image: './renders/models/1spin_0017.jpg',

  },
  '19': {
    camera_name: 'Corona_Camera001_0-378',
    image: './renders/models/1spin_0018.jpg',

  },
  '20': {
    camera_name: 'Corona_Camera001_0-379',
    image: './renders/models/1spin_0019.jpg',

  },
  '21': {
    camera_name: 'Corona_Camera001_0-380',
    image: './renders/models/1spin_0020.jpg',

  },
  '22': {
    camera_name: 'Corona_Camera001_0-381',
    image: './renders/models/1spin_0021.jpg',

  },
  '23': {
    camera_name: 'Corona_Camera001_0-382',
    image: './renders/models/1spin_0022.jpg',

  },
  '24': {
    camera_name: 'Corona_Camera001_0-383',
    image: './renders/models/1spin_0023.jpg',

  },
  '25': {
    camera_name: 'Corona_Camera001_0-384',
    image: './renders/models/1spin_0024.jpg',

  },
  '26': {
    camera_name: 'Corona_Camera001_0-385',
    image: './renders/models/1spin_0025.jpg',

  },
  '27': {
    camera_name: 'Corona_Camera001_0-386',
    image: './renders/models/1spin_0026.jpg',

  },
  '28': {
    camera_name: 'Corona_Camera001_0-387',
    image: './renders/models/1spin_0027.jpg',

  },
  '29': {
    camera_name: 'Corona_Camera001_0-388',
    image: './renders/models/1spin_0028.jpg',

  },
  '30': {
    camera_name: 'Corona_Camera001_0-389',
    image: './renders/models/1spin_0029.jpg',

  },
  '31': {
    camera_name: 'Corona_Camera001_0-390',
    image: './renders/models/1spin_0030.jpg',

  },
  '32': {
    camera_name: 'Corona_Camera001_0-391',
    image: './renders/models/1spin_0031.jpg',

  },
  '33': {
    camera_name: 'Corona_Camera001_0-392',
    image: './renders/models/1spin_0032.jpg',

  },
  '34': {
    camera_name: 'Corona_Camera001_0-393',
    image: './renders/models/1spin_0033.jpg',

  },
  '35': {
    camera_name: 'Corona_Camera001_0-394',
    image: './renders/models/1spin_0034.jpg',

  },
  '36': {
    camera_name: 'Corona_Camera001_0-395',
    image: './renders/models/1spin_0035.jpg',

  },
  '37': {
    camera_name: 'Corona_Camera001_0-396',
    image: './renders/models/1spin_0036.jpg',

  },
  '38': {
    camera_name: 'Corona_Camera001_0-397',
    image: './renders/models/1spin_0037.jpg',

  },
  '39': {
    camera_name: 'Corona_Camera001_0-398',
    image: './renders/models/1spin_0038.jpg',

  },
  '40': {
    camera_name: 'Corona_Camera001_0-399',
    image: './renders/models/1spin_0039.jpg',

  },
  '41': {
    camera_name: 'Corona_Camera001_0-400',
    image: './renders/models/1spin_0040.jpg',

  },
  '42': {
    camera_name: 'Corona_Camera001_0-401',
    image: './renders/models/1spin_0041.jpg',

  },
  '43': {
    camera_name: 'Corona_Camera001_0-402',
    image: './renders/models/1spin_0042.jpg',

  },
  '44': {
    camera_name: 'Corona_Camera001_0-403',
    image: './renders/models/1spin_0043.jpg',

  },
  '45': {
    camera_name: 'Corona_Camera001_0-404',
    image: './renders/models/1spin_0044.jpg',

  },
  '46': {
    camera_name: 'Corona_Camera001_0-405',
    image: './renders/models/1spin_0045.jpg',

  },
  '47': {
    camera_name: 'Corona_Camera001_0-406',
    image: './renders/models/1spin_0046.jpg',

  },
  '48': {
    camera_name: 'Corona_Camera001_0-407',
    image: './renders/models/1spin_0047.jpg',

  },
  '49': {
    camera_name: 'Corona_Camera001_0-408',
    image: './renders/models/1spin_0048.jpg',

  },
  '50': {
    camera_name: 'Corona_Camera001_0-409',
    image: './renders/models/1spin_0049.jpg',

  },
  '51': {
    camera_name: 'Corona_Camera001_0-410',
    image: './renders/models/1spin_0050.jpg',

  },
  '52': {
    camera_name: 'Corona_Camera001_0-411',
    image: './renders/models/1spin_0051.jpg',

  },
  '53': {
    camera_name: 'Corona_Camera001_0-412',
    image: './renders/models/1spin_0052.jpg',

  },
  '54': {
    camera_name: 'Corona_Camera001_0-413',
    image: './renders/models/1spin_0053.jpg',

  },
  '55': {
    camera_name: 'Corona_Camera001_0-414',
    image: './renders/models/1spin_0054.jpg',

  },
  '56': {
    camera_name: 'Corona_Camera001_0-415',
    image: './renders/models/1spin_0055.jpg',

  },
  '57': {
    camera_name: 'Corona_Camera001_0-416',
    image: './renders/models/1spin_0056.jpg',

  },
  '58': {
    camera_name: 'Corona_Camera001_0-417',
    image: './renders/models/1spin_0057.jpg',

  },
  '59': {
    camera_name: 'Corona_Camera001_0-418',
    image: './renders/models/1spin_0058.jpg',

  },
  '60': {
    camera_name: 'Corona_Camera001_0-419',
    image: './renders/models/1spin_0059.jpg',

  },
  '61': {
    camera_name: 'Corona_Camera001_0-420',
    image: './renders/models/1spin_0060.jpg',

  },
  '62': {
    camera_name: 'Corona_Camera001_0-421',
    image: './renders/models/1spin_0061.jpg',

  },
  '63': {
    camera_name: 'Corona_Camera001_0-422',
    image: './renders/models/1spin_0062.jpg',

  },
  '64': {
    camera_name: 'Corona_Camera001_0-423',
    image: './renders/models/1spin_0063.jpg',

  },
  '65': {
    camera_name: 'Corona_Camera001_0-424',
    image: './renders/models/1spin_0064.jpg',

  },
  '66': {
    camera_name: 'Corona_Camera001_0-425',
    image: './renders/models/1spin_0065.jpg',

  },
  '67': {
    camera_name: 'Corona_Camera001_0-426',
    image: './renders/models/1spin_0066.jpg',

  },
  '68': {
    camera_name: 'Corona_Camera001_0-427',
    image: './renders/models/1spin_0067.jpg',

  },
  '69': {
    camera_name: 'Corona_Camera001_0-428',
    image: './renders/models/1spin_0068.jpg',

  },
  '70': {
    camera_name: 'Corona_Camera001_0-429',
    image: './renders/models/1spin_0069.jpg',

  },
  '71': {
    camera_name: 'Corona_Camera001_0-430',
    image: './renders/models/1spin_0070.jpg',

  },
  '72': {
    camera_name: 'Corona_Camera001_0-431',
    image: './renders/models/1spin_0071.jpg',

  },
  '73': {
    camera_name: 'Corona_Camera001_0-432',
    image: './renders/models/1spin_0072.jpg',

  },
  '74': {
    camera_name: 'Corona_Camera001_0-433',
    image: './renders/models/1spin_0073.jpg',

  },
  '75': {
    camera_name: 'Corona_Camera001_0-434',
    image: './renders/models/1spin_0074.jpg',

  },
  '76': {
    camera_name: 'Corona_Camera001_0-435',
    image: './renders/models/1spin_0075.jpg',

  },
  '77': {
    camera_name: 'Corona_Camera001_0-436',
    image: './renders/models/1spin_0076.jpg',

  },
  '78': {
    camera_name: 'Corona_Camera001_0-437',
    image: './renders/models/1spin_0077.jpg',

  },
  '79': {
    camera_name: 'Corona_Camera001_0-438',
    image: './renders/models/1spin_0078.jpg',

  },
  '80': {
    camera_name: 'Corona_Camera001_0-439',
    image: './renders/models/1spin_0079.jpg',

  },
  '81': {
    camera_name: 'Corona_Camera001_0-440',
    image: './renders/models/1spin_0080.jpg',

  },
  '82': {
    camera_name: 'Corona_Camera001_0-441',
    image: './renders/models/1spin_0081.jpg',

  },
  '83': {
    camera_name: 'Corona_Camera001_0-442',
    image: './renders/models/1spin_0082.jpg',

  },
  '84': {
    camera_name: 'Corona_Camera001_0-443',
    image: './renders/models/1spin_0083.jpg',

  },
  '85': {
    camera_name: 'Corona_Camera001_0-444',
    image: './renders/models/1spin_0084.jpg',

  },
  '86': {
    camera_name: 'Corona_Camera001_0-445',
    image: './renders/models/1spin_0085.jpg',

  },
  '87': {
    camera_name: 'Corona_Camera001_0-446',
    image: './renders/models/1spin_0086.jpg',

  },
  '88': {
    camera_name: 'Corona_Camera001_0-447',
    image: './renders/models/1spin_0087.jpg',
  },
  '89': {
    camera_name: 'Corona_Camera001_0-448',
    image: './renders/models/1spin_0088.jpg',

  },
  '90': {
    camera_name: 'Corona_Camera001_0-449',
    image: './renders/models/1spin_0089.jpg',

  },
  '91': {
    camera_name: 'Corona_Camera001_0-450',
    image: './renders/models/1spin_0090.jpg',

  },
  '92': {
    camera_name: 'Corona_Camera001_0-451',
    image: './renders/models/1spin_0091.jpg',

  },
  '93': {
    camera_name: 'Corona_Camera001_0-452',
    image: './renders/models/1spin_0092.jpg',

  },
  '94': {
    camera_name: 'Corona_Camera001_0-453',
    image: './renders/models/1spin_0093.jpg',

  },
  '95': {
    camera_name: 'Corona_Camera001_0-454',
    image: './renders/models/1spin_0094.jpg',

  },
  '96': {
    camera_name: 'Corona_Camera001_0-455',
    image: './renders/models/1spin_0095.jpg',

  },
  '97': {
    camera_name: 'Corona_Camera001_0-456',
    image: './renders/models/1spin_0096.jpg',

  },
  '98': {
    camera_name: 'Corona_Camera001_0-457',
    image: './renders/models/1spin_0097.jpg',

  },
  '99': {
    camera_name: 'Corona_Camera001_0-458',
    image: './renders/models/1spin_0098.jpg',

  },
  '100': {
    camera_name: 'Corona_Camera001_0-459',
    image: './renders/models/1spin_0099.jpg',

  },
  '101': {
    camera_name: 'Corona_Camera001_0-460',
    image: './renders/models/1spin_0100.jpg',

  },
  '102': {
    camera_name: 'Corona_Camera001_0-461',
    image: './renders/models/1spin_0101.jpg',

  },
  '103': {
    camera_name: 'Corona_Camera001_0-462',
    image: './renders/models/1spin_0102.jpg',

  },
  '104': {
    camera_name: 'Corona_Camera001_0-463',
    image: './renders/models/1spin_0103.jpg',

  },
  '105': {
    camera_name: 'Corona_Camera001_0-464',
    image: './renders/models/1spin_0104.jpg',

  },
  '106': {
    camera_name: 'Corona_Camera001_0-465',
    image: './renders/models/1spin_0105.jpg',

  },
  '107': {
    camera_name: 'Corona_Camera001_0-466',
    image: './renders/models/1spin_0106.jpg',

  },
  '108': {
    camera_name: 'Corona_Camera001_0-467',
    image: './renders/models/1spin_0107.jpg',

  },
  '109': {
    camera_name: 'Corona_Camera001_0-468',
    image: './renders/models/1spin_0108.jpg',

  },
  '110': {
    camera_name: 'Corona_Camera001_0-469',
    image: './renders/models/1spin_0109.jpg',
  },
  '111': {
    camera_name: 'Corona_Camera001_0-470',
    image: './renders/models/1spin_0110.jpg',

  },
  '112': {
    camera_name: 'Corona_Camera001_0-471',
    image: './renders/models/1spin_0111.jpg',

  },
  '113': {
    camera_name: 'Corona_Camera001_0-472',
    image: './renders/models/1spin_0112.jpg',

  },
  '114': {
    camera_name: 'Corona_Camera001_0-473',
    image: './renders/models/1spin_0113.jpg',

  },
  '115': {
    camera_name: 'Corona_Camera001_0-474',
    image: './renders/models/1spin_0114.jpg',

  },
  '116': {
    camera_name: 'Corona_Camera001_0-475',
    image: './renders/models/1spin_0115.jpg',

  },
  '117': {
    camera_name: 'Corona_Camera001_0-476',
    image: './renders/models/1spin_0117.jpg',

  },
  '118': {
    camera_name: 'Corona_Camera001_0-477',
    image: './renders/models/1spin_0118.jpg',

  },
  '119': {
    camera_name: 'Corona_Camera001_0-478',
    image: './renders/models/1spin_0119.jpg',

  },
  '120': {
    camera_name: 'Corona_Camera001_0-479',
    image: './renders/models/1spin_0120.jpg',

  },
};
export const building1Config: DataObject = {
  '1': {
    camera_name: 'Corona_Camera004',
    image: './renders/2spin/models/2spin2_00000.jpg',
  },
  '2': {
    camera_name: 'Corona_Camera005',
    image: './renders/2spin/models/2spin2_00001.jpg',
  },
  '3': {
    camera_name: 'Corona_Camera006',
    image: './renders/2spin/models/2spin2_00002.jpg',
  },
  '4': {
    camera_name: 'Corona_Camera007',
    image: './renders/2spin/models/2spin2_00003.jpg',
  },
  '5': {
    camera_name: 'Corona_Camera008',
    image: './renders/2spin/models/2spin2_00004.jpg',
  },
  '6': {
    camera_name: 'Corona_Camera009',
    image: './renders/2spin/models/2spin2_00005.jpg',
  },
  '7': {
    camera_name: 'Corona_Camera010',
    image: './renders/2spin/models/2spin2_00006.jpg',
  },
  '8': {
    camera_name: 'Corona_Camera011',
    image: './renders/2spin/models/2spin2_00007.jpg',
  },
  '9': {
    camera_name: 'Corona_Camera012',
    image: './renders/2spin/models/2spin2_00008.jpg',
  },
  '10': {
    camera_name: 'Corona_Camera013',
    image: './renders/2spin/models/2spin2_00009.jpg',
  },
  '11': {
    camera_name: 'Corona_Camera014',
    image: './renders/2spin/models/2spin2_00010.jpg',
  },
  '12': {
    camera_name: 'Corona_Camera014',
    image: './renders/2spin/models/2spin2_00011.jpg',
  },
  '13': {
    camera_name: 'Corona_Camera015',
    image: './renders/2spin/models/2spin2_00012.jpg',
  },
  '14': {
    camera_name: 'Corona_Camera016',
    image: './renders/2spin/models/2spin2_00013.jpg',
  },
  '15': {
    camera_name: 'Corona_Camera017',
    image: './renders/2spin/models/2spin2_00014.jpg',
  },
  '16': {
    camera_name: 'Corona_Camera018',
    image: './renders/2spin/models/2spin2_00015.jpg',
  },
  '17': {
    camera_name: 'Corona_Camera019',
    image: './renders/2spin/models/2spin2_00016.jpg',
  },
  '18': {
    camera_name: 'Corona_Camera020',
    image: './renders/2spin/models/2spin2_00017.jpg',
  },
  '19': {
    camera_name: 'Corona_Camera021',
    image: './renders/2spin/models/2spin2_00018.jpg',
  },
  '20': {
    camera_name: 'Corona_Camera022',
    image: './renders/2spin/models/2spin2_00019.jpg',
  },
  '21': {
    camera_name: 'Corona_Camera023',
    image: './renders/2spin/models/2spin2_00020.jpg',
  },
  '22': {
    camera_name: 'Corona_Camera024',
    image: './renders/2spin/models/2spin2_00021.jpg',
  },
  '23': {
    camera_name: 'Corona_Camera025',
    image: './renders/2spin/models/2spin2_00022.jpg',
  },
  '24': {
    camera_name: 'Corona_Camera026',
    image: './renders/2spin/models/2spin2_00023.jpg',
  },
  '25': {
    camera_name: 'Corona_Camera027',
    image: './renders/2spin/models/2spin2_00024.jpg',
  },
  '26': {
    camera_name: 'Corona_Camera028',
    image: './renders/2spin/models/2spin2_00025.jpg',
  },
  '27': {
    camera_name: 'Corona_Camera029',
    image: './renders/2spin/models/2spin2_00026.jpg',
  },
  '28': {
    camera_name: 'Corona_Camera030',
    image: './renders/2spin/models/2spin2_00027.jpg',
  },
  '29': {
    camera_name: 'Corona_Camera031',
    image: './renders/2spin/models/2spin2_00028.jpg',
  },
  '30': {
    camera_name: 'Corona_Camera032',
    image: './renders/2spin/models/2spin2_00029.jpg',
  },
  '31': {
    camera_name: 'Corona_Camera033',
    image: './renders/2spin/models/2spin2_00030.jpg',
  },
  '32': {
    camera_name: 'Corona_Camera034',
    image: './renders/2spin/models/2spin2_00031.jpg',
  },
  '33': {
    camera_name: 'Corona_Camera035',
    image: './renders/2spin/models/2spin2_00032.jpg',
  },
  '34': {
    camera_name: 'Corona_Camera036',
    image: './renders/2spin/models/2spin2_00033.jpg',
  },
  '35': {
    camera_name: 'Corona_Camera037',
    image: './renders/2spin/models/2spin2_00034.jpg',
  },
  '36': {
    camera_name: 'Corona_Camera039',
    image: './renders/2spin/models/2spin2_00035.jpg',
  },
  '37': {
    camera_name: 'Corona_Camera040',
    image: './renders/2spin/models/2spin2_00036.jpg',
  },
  '38': {
    camera_name: 'Corona_Camera041',
    image: './renders/2spin/models/2spin2_00037.jpg',
  },
  '39': {
    camera_name: 'Corona_Camera042',
    image: './renders/2spin/models/2spin2_00038.jpg',
  },
  '40': {
    camera_name: 'Corona_Camera043',
    image: './renders/2spin/models/2spin2_00039.jpg',
  },
  '41': {
    camera_name: 'Corona_Camera044',
    image: './renders/2spin/models/2spin2_00040.jpg',
  },
  '42': {
    camera_name: 'Corona_Camera045',
    image: './renders/2spin/models/2spin2_00041.jpg',
  },
  '43': {
    camera_name: 'Corona_Camera046',
    image: './renders/2spin/models/2spin2_00042.jpg',
  },
  '44': {
    camera_name: 'Corona_Camera047',
    image: './renders/2spin/models/2spin2_00043.jpg',
  },
  '45': {
    camera_name: 'Corona_Camera048',
    image: './renders/2spin/models/2spin2_00044.jpg',
  },
  '46': {
    camera_name: 'Corona_Camera049',
    image: './renders/2spin/models/2spin2_00045.jpg',
  },
  '47': {
    camera_name: 'Corona_Camera050',
    image: './renders/2spin/models/2spin2_00046.jpg',
  },
  '48': {
    camera_name: 'Corona_Camera051',
    image: './renders/2spin/models/2spin2_00047.jpg',
  },
  '49': {
    camera_name: 'Corona_Camera052',
    image: './renders/2spin/models/2spin2_00048.jpg',
  },
  '50': {
    camera_name: 'Corona_Camera053',
    image: './renders/2spin/models/2spin2_00049.jpg',
  },
  '51': {
    camera_name: 'Corona_Camera054',
    image: './renders/2spin/models/2spin2_00050.jpg',
  },
  '52': {
    camera_name: 'Corona_Camera055',
    image: './renders/2spin/models/2spin2_00051.jpg',
  },
  '53': {
    camera_name: 'Corona_Camera056',
    image: './renders/2spin/models/2spin2_00052.jpg',
  },
  '54': {
    camera_name: 'Corona_Camera057',
    image: './renders/2spin/models/2spin2_00053.jpg',
  },
  '55': {
    camera_name: 'Corona_Camera058',
    image: './renders/2spin/models/2spin2_00054.jpg',
  },
  '56': {
    camera_name: 'Corona_Camera059',
    image: './renders/2spin/models/2spin2_00055.jpg',
  },
  '57': {
    camera_name: 'Corona_Camera060',
    image: './renders/2spin/models/2spin2_00056.jpg',
  },
  '58': {
    camera_name: 'Corona_Camera061',
    image: './renders/2spin/models/2spin2_00057.jpg',
  },
  '59': {
    camera_name: 'Corona_Camera062',
    image: './renders/2spin/models/2spin2_00058.jpg',
  },
  '60': {
    camera_name: 'Corona_Camera063',
    image: './renders/2spin/models/2spin2_00059.jpg',
  },
  '61': {
    camera_name: 'Corona_Camera064',
    image: './renders/2spin/models/2spin2_00060.jpg',
  },
  '62': {
    camera_name: 'Corona_Camera065',
    image: './renders/2spin/models/2spin2_00061.jpg',
  },
  '63': {
    camera_name: 'Corona_Camera066',
    image: './renders/2spin/models/2spin2_00062.jpg',
  },
  '64': {
    camera_name: 'Corona_Camera067',
    image: './renders/2spin/models/2spin2_00063.jpg',
  },
  '65': {
    camera_name: 'Corona_Camera068',
    image: './renders/2spin/models/2spin2_00064.jpg',
  },
  '66': {
    camera_name: 'Corona_Camera069',
    image: './renders/2spin/models/2spin2_00065.jpg',
  },
  '67': {
    camera_name: 'Corona_Camera070',
    image: './renders/2spin/models/2spin2_00066.jpg',
  },
  '68': {
    camera_name: 'Corona_Camera071',
    image: './renders/2spin/models/2spin2_00067.jpg',
  },
  '69': {
    camera_name: 'Corona_Camera072',
    image: './renders/2spin/models/2spin2_00068.jpg',
  },
  '70': {
    camera_name: 'Corona_Camera073',
    image: './renders/2spin/models/2spin2_00069.jpg',
  },
  '71': {
    camera_name: 'Corona_Camera074',
    image: './renders/2spin/models/2spin2_00070.jpg',
  },
  '72': {
    camera_name: 'Corona_Camera075',
    image: './renders/2spin/models/2spin2_00071.jpg',
  },
  '73': {
    camera_name: 'Corona_Camera076',
    image: './renders/2spin/models/2spin2_00072.jpg',
  },
  '74': {
    camera_name: 'Corona_Camera077',
    image: './renders/2spin/models/2spin2_00073.jpg',
  },
  '75': {
    camera_name: 'Corona_Camera078',
    image: './renders/2spin/models/2spin2_00074.jpg',
  },
  '76': {
    camera_name: 'Corona_Camera079',
    image: './renders/2spin/models/2spin2_00075.jpg',
  },
  '77': {
    camera_name: 'Corona_Camera080',
    image: './renders/2spin/models/2spin2_00076.jpg',
  },
  '78': {
    camera_name: 'Corona_Camera081',
    image: './renders/2spin/models/2spin2_00077.jpg',
  },
  '79': {
    camera_name: 'Corona_Camera082',
    image: './renders/2spin/models/2spin2_00078.jpg',
  },
  '80': {
    camera_name: 'Corona_Camera083',
    image: './renders/2spin/models/2spin2_00079.jpg',
  },
  '81': {
    camera_name: 'Corona_Camera084',
    image: './renders/2spin/models/2spin2_00080.jpg',
  },
  '82': {
    camera_name: 'Corona_Camera085',
    image: './renders/2spin/models/2spin2_00081.jpg',
  },
  '83': {
    camera_name: 'Corona_Camera086',
    image: './renders/2spin/models/2spin2_00082.jpg',
  },
  '84': {
    camera_name: 'Corona_Camera087',
    image: './renders/2spin/models/2spin2_00083.jpg',
  },
  '85': {
    camera_name: 'Corona_Camera088',
    image: './renders/2spin/models/2spin2_00084.jpg',
  },
  '86': {
    camera_name: 'Corona_Camera089',
    image: './renders/2spin/models/2spin2_00085.jpg',
  },
  '87': {
    camera_name: 'Corona_Camera090',
    image: './renders/2spin/models/2spin2_00086.jpg',
  },
  '88': {
    camera_name: 'Corona_Camera091',
    image: './renders/2spin/models/2spin2_00087.jpg',
  },
  '89': {
    camera_name: 'Corona_Camera092',
    image: './renders/2spin/models/2spin2_00088.jpg',
  },
  '90': {
    camera_name: 'Corona_Camera093',
    image: './renders/2spin/models/2spin2_00089.jpg',
  },
  '91': {
    camera_name: 'Corona_Camera094',
    image: './renders/2spin/models/2spin2_00090.jpg',
  },
  '92': {
    camera_name: 'Corona_Camera095',
    image: './renders/2spin/models/2spin2_00091.jpg',
  },
  '93': {
    camera_name: 'Corona_Camera096',
    image: './renders/2spin/models/2spin2_00092.jpg',
  },
  '94': {
    camera_name: 'Corona_Camera097',
    image: './renders/2spin/models/2spin2_00093.jpg',
  },
  '95': {
    camera_name: 'Corona_Camera098',
    image: './renders/2spin/models/2spin2_00094.jpg',
  },
  '96': {
    camera_name: 'Corona_Camera099',
    image: './renders/2spin/models/2spin2_00095.jpg',
  },
  '97': {
    camera_name: 'Corona_Camera100',
    image: './renders/2spin/models/2spin2_00096.jpg',
  },
  '98': {
    camera_name: 'Corona_Camera101',
    image: './renders/2spin/models/2spin2_00097.jpg',
  },
  '99': {
    camera_name: 'Corona_Camera102',
    image: './renders/2spin/models/2spin2_00098.jpg',
  },
  '100': {
    camera_name: 'Corona_Camera103',
    image: './renders/2spin/models/2spin2_00099.jpg',
  },
  '101': {
    camera_name: 'Corona_Camera104',
    image: './renders/2spin/models/2spin2_00100.jpg',
  },
  '102': {
    camera_name: 'Corona_Camera105',
    image: './renders/2spin/models/2spin2_00101.jpg',
  },
  '103': {
    camera_name: 'Corona_Camera106',
    image: './renders/2spin/models/2spin2_00102.jpg',
  },
  '104': {
    camera_name: 'Corona_Camera107',
    image: './renders/2spin/models/2spin2_00103.jpg',
  },
  '105': {
    camera_name: 'Corona_Camera108',
    image: './renders/2spin/models/2spin2_00104.jpg',
  },
  '106': {
    camera_name: 'Corona_Camera109',
    image: './renders/2spin/models/2spin2_00105.jpg',
  },
  '107': {
    camera_name: 'Corona_Camera110',
    image: './renders/2spin/models/2spin2_00106.jpg',
  },
  '108': {
    camera_name: 'Corona_Camera111',
    image: './renders/2spin/models/2spin2_00107.jpg',
  },
  '109': {
    camera_name: 'Corona_Camera112',
    image: './renders/2spin/models/2spin2_00108.jpg',
  },
  '110': {
    camera_name: 'Corona_Camera113',
    image: './renders/2spin/models/2spin2_00109.jpg',
  },
  '111': {
    camera_name: 'Corona_Camera114',
    image: './renders/2spin/models/2spin2_00110.jpg',
  },
  '112': {
    camera_name: 'Corona_Camera115',
    image: './renders/2spin/models/2spin2_00111.jpg',
  },
  '113': {
    camera_name: 'Corona_Camera116',
    image: './renders/2spin/models/2spin2_00112.jpg',
  },
  '114': {
    camera_name: 'Corona_Camera117',
    image: './renders/2spin/models/2spin2_00113.jpg',
  },
  '115': {
    camera_name: 'Corona_Camera118',
    image: './renders/2spin/models/2spin2_00114.jpg',
  },
  '116': {
    camera_name: 'Corona_Camera119',
    image: './renders/2spin/models/2spin2_00115.jpg',
  },
  '117': {
    camera_name: 'Corona_Camera120',
    image: './renders/2spin/models/2spin2_00116.jpg',
  },
  '118': {
    camera_name: 'Corona_Camera121',
    image: './renders/2spin/models/2spin2_00117.jpg',
  },
  '119': {
    camera_name: 'Corona_Camera122',
    image: './renders/2spin/models/2spin2_00118.jpg',
  },
  '120': {
    camera_name: 'Corona_Camera003',
    image: './renders/2spin/models/2spin2_00119.jpg',
  },
};

export const building2Config: DataObject = {
  '1': {
    camera_name: 'Corona_Camera003_720-1081',
    image: './renders/3spin/models/3spin_0000.jpg',

  },
  '2': {
    camera_name: 'Corona_Camera003_720-1082',
    image: './renders/3spin/models/3spin_0001.jpg',

  },
  '3': {
    camera_name: 'Corona_Camera003_720-1083',
    image: './renders/3spin/models/3spin_0002.jpg',

  },
  '4': {
    camera_name: 'Corona_Camera003_720-1084',
    image: './renders/3spin/models/3spin_0003.jpg',

  },
  '5': {
    camera_name: 'Corona_Camera003_720-1085',
    image: './renders/3spin/models/3spin_0004.jpg',
  },
  '6': {
    camera_name: 'Corona_Camera003_720-1086',
    image: './renders/3spin/models/3spin_0005.jpg',
  },
  '7': {
    camera_name: 'Corona_Camera003_720-1087',
    image: './renders/3spin/models/3spin_0006.jpg',
  },
  '8': {
    camera_name: 'Corona_Camera003_720-1088',
    image: './renders/3spin/models/3spin_0007.jpg',
  },
  '9': {
    camera_name: 'Corona_Camera003_720-1089',
    image: './renders/3spin/models/3spin_0008.jpg',
  },
  '10': {
    camera_name: 'Corona_Camera003_720-1090',
    image: './renders/3spin/models/3spin_0009.jpg',
  },
  '11': {
    camera_name: 'Corona_Camera003_720-1091',
    image: './renders/3spin/models/3spin_0010.jpg',
  },
  '12': {
    camera_name: 'Corona_Camera003_720-1092',
    image: './renders/3spin/models/3spin_0011.jpg',
  },
  '13': {
    camera_name: 'Corona_Camera003_720-1093',
    image: './renders/3spin/models/3spin_0012.jpg',
  },
  '14': {
    camera_name: 'Corona_Camera003_720-1094',
    image: './renders/3spin/models/3spin_0013.jpg',
  },
  '15': {
    camera_name: 'Corona_Camera003_720-1095',
    image: './renders/3spin/models/3spin_0014.jpg',
  },
  '16': {
    camera_name: 'Corona_Camera003_720-1096',
    image: './renders/3spin/models/3spin_0015.jpg',
  },
  '17': {
    camera_name: 'Corona_Camera003_720-1097',
    image: './renders/3spin/models/3spin_0016.jpg',
  },
  '18': {
    camera_name: 'Corona_Camera003_720-1098',
    image: './renders/3spin/models/3spin_0017.jpg',
  },
  '19': {
    camera_name: 'Corona_Camera003_720-1099',
    image: './renders/3spin/models/3spin_0018.jpg',
  },
  '20': {
    camera_name: 'Corona_Camera003_720-1100',
    image: './renders/3spin/models/3spin_0019.jpg',
  },
  '21': {
    camera_name: 'Corona_Camera003_720-1101',
    image: './renders/3spin/models/3spin_0020.jpg',
  },
  '22': {
    camera_name: 'Corona_Camera003_720-1102',
    image: './renders/3spin/models/3spin_0021.jpg',
  },
  '23': {
    camera_name: 'Corona_Camera003_720-1103',
    image: './renders/3spin/models/3spin_0022.jpg',
  },
  '24': {
    camera_name: 'Corona_Camera003_720-1104',
    image: './renders/3spin/models/3spin_0023.jpg',
  },
  '25': {
    camera_name: 'Corona_Camera003_720-1105',
    image: './renders/3spin/models/3spin_0024.jpg',
  },
  '26': {
    camera_name: 'Corona_Camera003_720-1106',
    image: './renders/3spin/models/3spin_0025.jpg',
  },
  '27': {
    camera_name: 'Corona_Camera003_720-1107',
    image: './renders/3spin/models/3spin_0026.jpg',
  },
  '28': {
    camera_name: 'Corona_Camera003_720-1108',
    image: './renders/3spin/models/3spin_0027.jpg',
  },
  '29': {
    camera_name: 'Corona_Camera003_720-1109',
    image: './renders/3spin/models/3spin_0028.jpg',
  },
  '30': {
    camera_name: 'Corona_Camera003_720-1110',
    image: './renders/3spin/models/3spin_0029.jpg',
  },
  '31': {
    camera_name: 'Corona_Camera003_720-1111',
    image: './renders/3spin/models/3spin_0030.jpg',
  },
  '32': {
    camera_name: 'Corona_Camera003_720-1112',
    image: './renders/3spin/models/3spin_0031.jpg',
  },
  '33': {
    camera_name: 'Corona_Camera003_720-1113',
    image: './renders/3spin/models/3spin_0032.jpg',
  },
  '34': {
    camera_name: 'Corona_Camera003_720-1114',
    image: './renders/3spin/models/3spin_0033.jpg',
  },
  '35': {
    camera_name: 'Corona_Camera003_720-1115',
    image: './renders/3spin/models/3spin_0034.jpg',
  },
  '36': {
    camera_name: 'Corona_Camera003_720-1116',
    image: './renders/3spin/models/3spin_0035.jpg',
  },
  '37': {
    camera_name: 'Corona_Camera003_720-1117',
    image: './renders/3spin/models/3spin_0036.jpg',
  },
  '38': {
    camera_name: 'Corona_Camera003_720-1118',
    image: './renders/3spin/models/3spin_0037.jpg',
  },
  '39': {
    camera_name: 'Corona_Camera003_720-1119',
    image: './renders/3spin/models/3spin_0038.jpg',
  },
  '40': {
    camera_name: 'Corona_Camera003_720-1120',
    image: './renders/3spin/models/3spin_0039.jpg',
  },
  '41': {
    camera_name: 'Corona_Camera003_720-1121',
    image: './renders/3spin/models/3spin_0040.jpg',
  },
  '42': {
    camera_name: 'Corona_Camera003_720-1122',
    image: './renders/3spin/models/3spin_0041.jpg',
  },
  '43': {
    camera_name: 'Corona_Camera003_720-1123',
    image: './renders/3spin/models/3spin_0042.jpg',
  },
  '44': {
    camera_name: 'Corona_Camera003_720-1124',
    image: './renders/3spin/models/3spin_0043.jpg',
  },
  '45': {
    camera_name: 'Corona_Camera003_720-1125',
    image: './renders/3spin/models/3spin_0044.jpg',
  },
  '46': {
    camera_name: 'Corona_Camera003_720-1126',
    image: './renders/3spin/models/3spin_0045.jpg',
  },
  '47': {
    camera_name: 'Corona_Camera003_720-1127',
    image: './renders/3spin/models/3spin_0046.jpg',
  },
  '48': {
    camera_name: 'Corona_Camera003_720-1128',
    image: './renders/3spin/models/3spin_0047.jpg',
  },
  '49': {
    camera_name: 'Corona_Camera003_720-1129',
    image: './renders/3spin/models/3spin_0048.jpg',
  },
  '50': {
    camera_name: 'Corona_Camera003_720-1130',
    image: './renders/3spin/models/3spin_0049.jpg',
  },
  '51': {
    camera_name: 'Corona_Camera003_720-1131',
    image: './renders/3spin/models/3spin_0050.jpg',
  },
  '52': {
    camera_name: 'Corona_Camera003_720-1132',
    image: './renders/3spin/models/3spin_0051.jpg',
  },
  '53': {
    camera_name: 'Corona_Camera003_720-1133',
    image: './renders/3spin/models/3spin_0052.jpg',
  },
  '54': {
    camera_name: 'Corona_Camera003_720-1134',
    image: './renders/3spin/models/3spin_0053.jpg',
  },
  '55': {
    camera_name: 'Corona_Camera003_720-1135',
    image: './renders/3spin/models/3spin_0054.jpg',
  },
  '56': {
    camera_name: 'Corona_Camera003_720-1136',
    image: './renders/3spin/models/3spin_0055.jpg',
  },
  '57': {
    camera_name: 'Corona_Camera003_720-1137',
    image: './renders/3spin/models/3spin_0056.jpg',
  },
  '58': {
    camera_name: 'Corona_Camera003_720-1138',
    image: './renders/3spin/models/3spin_0057.jpg',
  },
  '59': {
    camera_name: 'Corona_Camera003_720-1139',
    image: './renders/3spin/models/3spin_0058.jpg',
  },
  '60': {
    camera_name: 'Corona_Camera003_720-1140',
    image: './renders/3spin/models/3spin_0059.jpg',
  },
  '61': {
    camera_name: 'Corona_Camera003_720-1141',
    image: './renders/3spin/models/3spin_0060.jpg',
  },
  '62': {
    camera_name: 'Corona_Camera003_720-1142',
    image: './renders/3spin/models/3spin_0061.jpg',
  },
  '63': {
    camera_name: 'Corona_Camera003_720-1143',
    image: './renders/3spin/models/3spin_0062.jpg',
  },
  '64': {
    camera_name: 'Corona_Camera003_720-1144',
    image: './renders/3spin/models/3spin_0063.jpg',
  },
  '65': {
    camera_name: 'Corona_Camera003_720-1145',
    image: './renders/3spin/models/3spin_0064.jpg',
  },
  '66': {
    camera_name: 'Corona_Camera003_720-1146',
    image: './renders/3spin/models/3spin_0065.jpg',
  },
  '67': {
    camera_name: 'Corona_Camera003_720-1147',
    image: './renders/3spin/models/3spin_0066.jpg',
  },
  '68': {
    camera_name: 'Corona_Camera003_720-1148',
    image: './renders/3spin/models/3spin_0067.jpg',
  },
  '69': {
    camera_name: 'Corona_Camera003_720-1149',
    image: './renders/3spin/models/3spin_0068.jpg',
  },
  '70': {
    camera_name: 'Corona_Camera003_720-1150',
    image: './renders/3spin/models/3spin_0069.jpg',
  },
  '71': {
    camera_name: 'Corona_Camera003_720-1151',
    image: './renders/3spin/models/3spin_0070.jpg',
  },
  '72': {
    camera_name: 'Corona_Camera003_720-1152',
    image: './renders/3spin/models/3spin_0071.jpg',
  },
  '73': {
    camera_name: 'Corona_Camera003_720-1153',
    image: './renders/3spin/models/3spin_0072.jpg',
  },
  '74': {
    camera_name: 'Corona_Camera003_720-1154',
    image: './renders/3spin/models/3spin_0073.jpg',
  },
  '75': {
    camera_name: 'Corona_Camera003_720-1155',
    image: './renders/3spin/models/3spin_0074.jpg',
  },
  '76': {
    camera_name: 'Corona_Camera003_720-1156',
    image: './renders/3spin/models/3spin_0075.jpg',
  },
  '77': {
    camera_name: 'Corona_Camera003_720-1157',
    image: './renders/3spin/models/3spin_0076.jpg',
  },
  '78': {
    camera_name: 'Corona_Camera003_720-1158',
    image: './renders/3spin/models/3spin_0077.jpg',
  },
  '79': {
    camera_name: 'Corona_Camera003_720-1159',
    image: './renders/3spin/models/3spin_0078.jpg',
  },
  '80': {
    camera_name: 'Corona_Camera003_720-1160',
    image: './renders/3spin/models/3spin_0079.jpg',
  },
  '81': {
    camera_name: 'Corona_Camera003_720-1161',
    image: './renders/3spin/models/3spin_0080.jpg',
  },
  '82': {
    camera_name: 'Corona_Camera003_720-1162',
    image: './renders/3spin/models/3spin_0081.jpg',
  },
  '83': {
    camera_name: 'Corona_Camera003_720-1163',
    image: './renders/3spin/models/3spin_0082.jpg',
  },
  '84': {
    camera_name: 'Corona_Camera003_720-1164',
    image: './renders/3spin/models/3spin_0083.jpg',
  },
  '85': {
    camera_name: 'Corona_Camera003_720-1165',
    image: './renders/3spin/models/3spin_0084.jpg',
  },
  '86': {
    camera_name: 'Corona_Camera003_720-1166',
    image: './renders/3spin/models/3spin_0085.jpg',
  },
  '87': {
    camera_name: 'Corona_Camera003_720-1167',
    image: './renders/3spin/models/3spin_0086.jpg',
  },
  '88': {
    camera_name: 'Corona_Camera003_720-1168',
    image: './renders/3spin/models/3spin_0087.jpg',
  },
  '89': {
    camera_name: 'Corona_Camera003_720-1169',
    image: './renders/3spin/models/3spin_0088.jpg',
  },
  '90': {
    camera_name: 'Corona_Camera003_720-1170',
    image: './renders/3spin/models/3spin_0089.jpg',
  },
  '91': {
    camera_name: 'Corona_Camera003_720-1171',
    image: './renders/3spin/models/3spin_0090.jpg',
  },
  '92': {
    camera_name: 'Corona_Camera003_720-1172',
    image: './renders/3spin/models/3spin_0091.jpg',
  },
  '93': {
    camera_name: 'Corona_Camera003_720-1173',
    image: './renders/3spin/models/3spin_0092.jpg',
  },
  '94': {
    camera_name: 'Corona_Camera003_720-1174',
    image: './renders/3spin/models/3spin_0093.jpg',
  },
  '95': {
    camera_name: 'Corona_Camera003_720-1175',
    image: './renders/3spin/models/3spin_0094.jpg',
  },
  '96': {
    camera_name: 'Corona_Camera003_720-1176',
    image: './renders/3spin/models/3spin_0095.jpg',
  },
  '97': {
    camera_name: 'Corona_Camera003_720-1177',
    image: './renders/3spin/models/3spin_0096.jpg',
  },
  '98': {
    camera_name: 'Corona_Camera003_720-1178',
    image: './renders/3spin/models/3spin_0097.jpg',
  },
  '99': {
    camera_name: 'Corona_Camera003_720-1179',
    image: './renders/3spin/models/3spin_0098.jpg',
  },
  '100': {
    camera_name: 'Corona_Camera003_720-1180',
    image: './renders/3spin/models/3spin_0099.jpg',
  },
  '101': {
    camera_name: 'Corona_Camera003_720-1181',
    image: './renders/3spin/models/3spin_0100.jpg',
  },
  '102': {
    camera_name: 'Corona_Camera003_720-1182',
    image: './renders/3spin/models/3spin_0101.jpg',
  },
  '103': {
    camera_name: 'Corona_Camera003_720-1183',
    image: './renders/3spin/models/3spin_0102.jpg',
  },
  '104': {
    camera_name: 'Corona_Camera003_720-1184',
    image: './renders/3spin/models/3spin_0103.jpg',
  },
  '105': {
    camera_name: 'Corona_Camera003_720-1185',
    image: './renders/3spin/models/3spin_0104.jpg',
  },
  '106': {
    camera_name: 'Corona_Camera003_720-1186',
    image: './renders/3spin/models/3spin_0105.jpg',
  },
  '107': {
    camera_name: 'Corona_Camera003_720-1187',
    image: './renders/3spin/models/3spin_0106.jpg',
  },
  '108': {
    camera_name: 'Corona_Camera003_720-1188',
    image: './renders/3spin/models/3spin_0107.jpg',
  },
  '109': {
    camera_name: 'Corona_Camera003_720-1189',
    image: './renders/3spin/models/3spin_0108.jpg',
  },
  '110': {
    camera_name: 'Corona_Camera003_720-1190',
    image: './renders/3spin/models/3spin_0109.jpg',
  },
  '111': {
    camera_name: 'Corona_Camera003_720-1191',
    image: './renders/3spin/models/3spin_0110.jpg',
  },
  '112': {
    camera_name: 'Corona_Camera003_720-1192',
    image: './renders/3spin/models/3spin_0111.jpg',
  },
  '113': {
    camera_name: 'Corona_Camera003_720-1193',
    image: './renders/3spin/models/3spin_0112.jpg',
  },
  '114': {
    camera_name: 'Corona_Camera003_720-1194',
    image: './renders/3spin/models/3spin_0113.jpg',
  },
  '115': {
    camera_name: 'Corona_Camera003_720-1195',
    image: './renders/3spin/models/3spin_0114.jpg',
  },
  '116': {
    camera_name: 'Corona_Camera003_720-1196',
    image: './renders/3spin/models/3spin_0115.jpg',
  },
  '117': {
    camera_name: 'Corona_Camera003_720-1197',
    image: './renders/3spin/models/3spin_0116.jpg',
  },
  '118': {
    camera_name: 'Corona_Camera003_720-1198',
    image: './renders/3spin/models/3spin_0117.jpg',
  },
  '119': {
    camera_name: 'Corona_Camera003_720-1199',
    image: './renders/3spin/models/3spin_0118.jpg',
  },
  '120': {
    camera_name: 'Corona_Camera003_720-1200',
    image: './renders/3spin/models/3spin_0119.jpg',
  },
};
const { assetPath } = window.swellData;

if (assetPath) {
  Object.keys(building1Config).forEach((key) => {
    building1Config[key].image = `${assetPath}${building1Config[key].image.slice(1)}`;
  });
  Object.keys(camerasConfig).forEach((key) => {
    camerasConfig[key].image = `${assetPath}${camerasConfig[key].image.slice(1)}`;
  });
  Object.keys(building2Config).forEach((key) => {
    building2Config[key].image = `${assetPath}${building2Config[key].image.slice(1)}`;
  });
}

export const OBJECTS_POSITIONS = JSON.parse('{"Circle067":[25.89919921875,25.998728027343752,-26.78576171875],"Corona_Camera001_0-480":[153.552509765625,25.998728027343752,-29.99544677734375],"Corona_Camera001_0-480Target":[29.72493896484375,20.2487744140625,-33.0382861328125],"Corona_Camera001_0-361":[153.21495117187501,25.998728027343752,-36.6722265625],"Corona_Camera001_0-361Target":[29.4036328125,20.2487744140625,-32.814638671875],"Corona_Camera001_0-362":[152.53193359375,25.998728027343752,-43.322607421875],"Corona_Camera001_0-362Target":[28.8393408203125,20.2487744140625,-32.75397705078125],"Corona_Camera001_0-363":[151.496787109375,25.998728027343752,-49.927333984375004],"Corona_Camera001_0-363Target":[28.28777587890625,20.2487744140625,-32.6977001953125],"Corona_Camera001_0-364":[150.116220703125,25.998728027343752,-56.468515625],"Corona_Camera001_0-364Target":[27.748945312500002,20.2487744140625,-32.64581298828125],"Corona_Camera001_0-365":[148.39533203125,25.998728027343752,-62.9285302734375],"Corona_Camera001_0-365Target":[27.2228369140625,20.2487744140625,-32.5983056640625],"Corona_Camera001_0-366":[146.33484375,25.998728027343752,-69.28838378906251],"Corona_Camera001_0-366Target":[26.70946044921875,20.2487744140625,-32.5551904296875],"Corona_Camera001_0-367":[143.939482421875,25.998728027343752,-75.52982421875001],"Corona_Camera001_0-367Target":[26.208811035156252,20.2487744140625,-32.51645263671875],"Corona_Camera001_0-368":[141.222333984375,25.998728027343752,-81.6380615234375],"Corona_Camera001_0-368Target":[25.720888671875002,20.2487744140625,-32.48210205078125],"Corona_Camera001_0-369":[138.185419921875,25.998728027343752,-87.59380859375],"Corona_Camera001_0-369Target":[25.24569580078125,20.2487744140625,-32.45213623046875],"Corona_Camera001_0-370":[134.840556640625,25.998728027343752,-93.38216796875],"Corona_Camera001_0-370Target":[24.7832275390625,20.2487744140625,-32.426552734375],"Corona_Camera001_0-371":[131.2011328125,25.998728027343752,-98.990068359375],"Corona_Camera001_0-371Target":[24.33349609375,20.2487744140625,-32.405361328125004],"Corona_Camera001_0-372":[127.2687109375,25.998728027343752,-104.396572265625],"Corona_Camera001_0-372Target":[23.896486816406252,20.2487744140625,-32.38855224609375],"Corona_Camera001_0-373":[123.0640234375,25.998728027343752,-109.59408203125],"Corona_Camera001_0-373Target":[23.47220947265625,20.2487744140625,-32.37613037109375],"Corona_Camera001_0-374":[118.5934765625,25.998728027343752,-114.564794921875],"Corona_Camera001_0-374Target":[23.0606591796875,20.2487744140625,-32.3680908203125],"Corona_Camera001_0-375":[113.870546875,25.998728027343752,-119.29631835937501],"Corona_Camera001_0-375Target":[22.66183349609375,20.2487744140625,-32.36443359375],"Corona_Camera001_0-376":[108.91064453125,25.998728027343752,-123.77890625],"Corona_Camera001_0-376Target":[22.275739746093752,20.2487744140625,-32.36516357421875],"Corona_Camera001_0-377":[103.72080078125,25.998728027343752,-127.99310546875],"Corona_Camera001_0-377Target":[21.902373046875,20.2487744140625,-32.37028076171875],"Corona_Camera001_0-378":[98.32154296875001,25.998728027343752,-131.935400390625],"Corona_Camera001_0-378Target":[21.54173583984375,20.2487744140625,-32.379780273437504],"Corona_Camera001_0-379":[92.722568359375,25.998728027343752,-135.58849609375],"Corona_Camera001_0-379Target":[21.193828125,20.2487744140625,-32.3936669921875],"Corona_Camera001_0-380":[86.94041015625,25.998728027343752,-138.9440625],"Corona_Camera001_0-380Target":[20.8586474609375,20.2487744140625,-32.4119384765625],"Corona_Camera001_0-381":[80.9921533203125,25.998728027343752,-141.99568359375002],"Corona_Camera001_0-381Target":[20.53619384765625,20.2487744140625,-32.4345947265625],"Corona_Camera001_0-382":[74.8889794921875,25.998728027343752,-144.7242578125],"Corona_Camera001_0-382Target":[20.226470947265625,20.2487744140625,-32.46163818359375],"Corona_Camera001_0-383":[68.652060546875,25.998728027343752,-147.131357421875],"Corona_Camera001_0-383Target":[19.92947509765625,20.2487744140625,-32.49306396484375],"Corona_Camera001_0-384":[62.297421875000005,25.998728027343752,-149.207880859375],"Corona_Camera001_0-384Target":[19.64520751953125,20.2487744140625,-32.52887451171875],"Corona_Camera001_0-385":[55.840654296875,25.998728027343752,-150.941044921875],"Corona_Camera001_0-385Target":[19.37366943359375,20.2487744140625,-32.569072265625],"Corona_Camera001_0-386":[49.302128906250005,25.998728027343752,-152.33416015625],"Corona_Camera001_0-386Target":[19.114859619140624,20.2487744140625,-32.6136572265625],"Corona_Camera001_0-387":[42.699677734375,25.998728027343752,-153.38357421875],"Corona_Camera001_0-387Target":[18.868778076171875,20.2487744140625,-32.6626220703125],"Corona_Camera001_0-388":[36.050915527343754,25.998728027343752,-154.08210937500002],"Corona_Camera001_0-388Target":[18.635423583984377,20.2487744140625,-32.7159716796875],"Corona_Camera001_0-389":[29.37478271484375,25.998728027343752,-154.432587890625],"Corona_Camera001_0-389Target":[18.414798583984375,20.2487744140625,-32.7737109375],"Corona_Camera001_0-390":[22.68950927734375,25.998728027343752,-154.43907226562501],"Corona_Camera001_0-390Target":[18.20668212890625,20.2487744140625,-32.83630126953125],"Corona_Camera001_0-391":[16.012725830078125,25.998728027343752,-154.101513671875],"Corona_Camera001_0-391Target":[18.0083203125,20.2487744140625,-32.909619140625],"Corona_Camera001_0-392":[9.362352905273438,25.998728027343752,-153.41849609375],"Corona_Camera001_0-392Target":[17.8191796875,20.2487744140625,-32.99480712890625],"Corona_Camera001_0-393":[2.757607421875,25.998728027343752,-152.383330078125],"Corona_Camera001_0-393Target":[17.639630126953126,20.2487744140625,-33.09107177734375],"Corona_Camera001_0-394":[-3.78357177734375,25.998728027343752,-151.002783203125],"Corona_Camera001_0-394Target":[17.4700439453125,20.2487744140625,-33.1976171875],"Corona_Camera001_0-395":[-10.24357421875,25.998728027343752,-149.28189453125],"Corona_Camera001_0-395Target":[17.310792236328126,20.2487744140625,-33.31365966796875],"Corona_Camera001_0-396":[-16.603406982421877,25.998728027343752,-147.22140625],"Corona_Camera001_0-396Target":[17.16224609375,20.2487744140625,-33.43840087890625],"Corona_Camera001_0-397":[-22.84486083984375,25.998728027343752,-144.826044921875],"Corona_Camera001_0-397Target":[17.024776611328125,20.2487744140625,-33.57104736328125],"Corona_Camera001_0-398":[-28.9530908203125,25.998728027343752,-142.108896484375],"Corona_Camera001_0-398Target":[16.898759765625,20.2487744140625,-33.7108154296875],"Corona_Camera001_0-399":[-34.908828125,25.998728027343752,-139.07201171875],"Corona_Camera001_0-399Target":[16.784556884765625,20.2487744140625,-33.85689453125],"Corona_Camera001_0-400":[-40.69720458984375,25.998728027343752,-135.727119140625],"Corona_Camera001_0-400Target":[16.68255126953125,20.2487744140625,-34.008515625],"Corona_Camera001_0-401":[-46.30513671875,25.998728027343752,-132.0876953125],"Corona_Camera001_0-401Target":[16.593104248046874,20.2487744140625,-34.16486083984375],"Corona_Camera001_0-402":[-51.711611328125,25.998728027343752,-128.1552734375],"Corona_Camera001_0-402Target":[16.5165966796875,20.2487744140625,-34.32516357421875],"Corona_Camera001_0-403":[-56.909130859375004,25.998728027343752,-123.95058593750001],"Corona_Camera001_0-403Target":[16.453389892578127,20.2487744140625,-34.4886083984375],"Corona_Camera001_0-404":[-61.8798291015625,25.998728027343752,-119.480048828125],"Corona_Camera001_0-404Target":[16.4038671875,20.2487744140625,-34.65442138671875],"Corona_Camera001_0-405":[-66.6113720703125,25.998728027343752,-114.757080078125],"Corona_Camera001_0-405Target":[16.368388671875,20.2487744140625,-34.82179443359375],"Corona_Camera001_0-406":[-71.093955078125,25.998728027343752,-109.797236328125],"Corona_Camera001_0-406Target":[16.347333984375002,20.2487744140625,-34.989948730468754],"Corona_Camera001_0-407":[-75.308134765625,25.998728027343752,-104.607373046875],"Corona_Camera001_0-407Target":[16.3410693359375,20.2487744140625,-35.15808349609375],"Corona_Camera001_0-408":[-79.2504345703125,25.998728027343752,-99.20810546875],"Corona_Camera001_0-408Target":[16.349969482421876,20.2487744140625,-35.325405273437504],"Corona_Camera001_0-409":[-82.90353515625,25.998728027343752,-93.609130859375],"Corona_Camera001_0-409Target":[16.374404296875,20.2487744140625,-35.4911279296875],"Corona_Camera001_0-410":[-86.259111328125,25.998728027343752,-87.82694335937501],"Corona_Camera001_0-410Target":[16.41474609375,20.2487744140625,-35.654453125],"Corona_Camera001_0-411":[-89.310732421875,25.998728027343752,-81.87869140625],"Corona_Camera001_0-411Target":[16.471365966796874,20.2487744140625,-35.814594726562504],"Corona_Camera001_0-412":[-92.039326171875,25.998728027343752,-75.775498046875],"Corona_Camera001_0-412Target":[16.54463623046875,20.2487744140625,-35.970751953125],"Corona_Camera001_0-413":[-94.44642578125,25.998728027343752,-69.53859375],"Corona_Camera001_0-413Target":[16.634925537109375,20.2487744140625,-36.122138671875],"Corona_Camera001_0-414":[-96.522939453125,25.998728027343752,-63.183935546875],"Corona_Camera001_0-414Target":[16.742608642578126,20.2487744140625,-36.267958984375],"Corona_Camera001_0-415":[-98.256103515625,25.998728027343752,-56.7271875],"Corona_Camera001_0-415Target":[16.868056640625,20.2487744140625,-36.40742431640625],"Corona_Camera001_0-416":[-99.64919921875,25.998728027343752,-50.188662109375],"Corona_Camera001_0-416Target":[17.01163818359375,20.2487744140625,-36.539736328125],"Corona_Camera001_0-417":[-100.69861328125,25.998728027343752,-43.586240234375],"Corona_Camera001_0-417Target":[17.17373046875,20.2487744140625,-36.664111328125],"Corona_Camera001_0-418":[-101.39714843750001,25.998728027343752,-36.937470703125],"Corona_Camera001_0-418Target":[17.354698486328125,20.2487744140625,-36.77974853515625],"Corona_Camera001_0-419":[-101.747626953125,25.998728027343752,-30.26134521484375],"Corona_Camera001_0-419Target":[17.554915771484374,20.2487744140625,-36.88585693359375],"Corona_Camera001_0-420":[-101.754111328125,25.998728027343752,-23.576064453125],"Corona_Camera001_0-420Target":[17.774757080078125,20.2487744140625,-36.981647949218754],"Corona_Camera001_0-421":[-101.41654296875001,25.998728027343752,-16.899305419921877],"Corona_Camera001_0-421Target":[18.01458984375,20.2487744140625,-37.06632568359375],"Corona_Camera001_0-422":[-100.73354492187501,25.998728027343752,-10.248935546875],"Corona_Camera001_0-422Target":[18.274786376953127,20.2487744140625,-37.1390966796875],"Corona_Camera001_0-423":[-99.69838867187501,25.998728027343752,-3.644211120605469],"Corona_Camera001_0-423Target":[18.553656005859377,20.2487744140625,-37.203571777343754],"Corona_Camera001_0-424":[-98.31783203125,25.998728027343752,2.8969677734375],"Corona_Camera001_0-424Target":[18.849256591796877,20.2487744140625,-37.26389404296875],"Corona_Camera001_0-425":[-96.59693359375001,25.998728027343752,9.357013549804687],"Corona_Camera001_0-425Target":[19.161591796875,20.2487744140625,-37.3200634765625],"Corona_Camera001_0-426":[-94.5364453125,25.998728027343752,15.716875],"Corona_Camera001_0-426Target":[19.490657958984375,20.2487744140625,-37.37207275390625],"Corona_Camera001_0-427":[-92.1410546875,25.998728027343752,21.9583447265625],"Corona_Camera001_0-427Target":[19.836456298828125,20.2487744140625,-37.41992431640625],"Corona_Camera001_0-428":[-89.42392578125,25.998728027343752,28.0665234375],"Corona_Camera001_0-428Target":[20.198988037109377,20.2487744140625,-37.46362548828125],"Corona_Camera001_0-429":[-86.38703125,25.998728027343752,34.022304687500004],"Corona_Camera001_0-429Target":[20.5782470703125,20.2487744140625,-37.50316162109375],"Corona_Camera001_0-430":[-83.04216796875001,25.998728027343752,39.81061767578125],"Corona_Camera001_0-430Target":[20.9742431640625,20.2487744140625,-37.5385498046875],"Corona_Camera001_0-431":[-79.4027587890625,25.998728027343752,45.41853515625],"Corona_Camera001_0-431Target":[21.38697021484375,20.2487744140625,-37.56977783203125],"Corona_Camera001_0-432":[-75.4703271484375,25.998728027343752,50.825024414062504],"Corona_Camera001_0-432Target":[21.8164306640625,20.2487744140625,-37.59685302734375],"Corona_Camera001_0-433":[-71.2656103515625,25.998728027343752,56.0225732421875],"Corona_Camera001_0-433Target":[22.2626220703125,20.2487744140625,-37.619770507812504],"Corona_Camera001_0-434":[-66.795087890625,25.998728027343752,60.99328125],"Corona_Camera001_0-434Target":[22.72554443359375,20.2487744140625,-37.6385302734375],"Corona_Camera001_0-435":[-62.072148437500005,25.998728027343752,65.7248095703125],"Corona_Camera001_0-435Target":[23.2052001953125,20.2487744140625,-37.653134765625],"Corona_Camera001_0-436":[-57.112255859375004,25.998728027343752,70.2073974609375],"Corona_Camera001_0-436Target":[23.7015869140625,20.2487744140625,-37.663583984375],"Corona_Camera001_0-437":[-51.92240234375,25.998728027343752,74.4215771484375],"Corona_Camera001_0-437Target":[24.21470703125,20.2487744140625,-37.6698779296875],"Corona_Camera001_0-438":[-46.523125,25.998728027343752,78.3638916015625],"Corona_Camera001_0-438Target":[24.74455810546875,20.2487744140625,-37.67201416015625],"Corona_Camera001_0-439":[-40.92419189453125,25.998728027343752,82.016962890625],"Corona_Camera001_0-439Target":[25.29114501953125,20.2487744140625,-37.66999267578125],"Corona_Camera001_0-440":[-35.14194580078125,25.998728027343752,85.372568359375],"Corona_Camera001_0-440Target":[25.8544580078125,20.2487744140625,-37.663818359375],"Corona_Camera001_0-441":[-29.19374267578125,25.998728027343752,88.424169921875],"Corona_Camera001_0-441Target":[26.43450927734375,20.2487744140625,-37.653486328125],"Corona_Camera001_0-442":[-23.0905712890625,25.998728027343752,91.15275390625],"Corona_Camera001_0-442Target":[26.98345947265625,20.2487744140625,-37.63756591796875],"Corona_Camera001_0-443":[-16.8536669921875,25.998728027343752,93.55984375],"Corona_Camera001_0-443Target":[27.428876953125002,20.2487744140625,-37.6138818359375],"Corona_Camera001_0-444":[-10.49901611328125,25.998728027343752,95.6363671875],"Corona_Camera001_0-444Target":[27.85411865234375,20.2487744140625,-37.58494140625],"Corona_Camera001_0-445":[-4.04225341796875,25.998728027343752,97.36953125000001],"Corona_Camera001_0-445Target":[28.25918212890625,20.2487744140625,-37.55073486328125],"Corona_Camera001_0-446":[2.496240234375,25.998728027343752,98.76262695312501],"Corona_Camera001_0-446Target":[28.64406982421875,20.2487744140625,-37.5112646484375],"Corona_Camera001_0-447":[9.09868408203125,25.998728027343752,99.812041015625],"Corona_Camera001_0-447Target":[29.008779296875,20.2487744140625,-37.46653564453125],"Corona_Camera001_0-448":[15.747501220703125,25.998728027343752,100.510595703125],"Corona_Camera001_0-448Target":[29.35331298828125,20.2487744140625,-37.41654052734375],"Corona_Camera001_0-449":[22.42367431640625,25.998728027343752,100.861064453125],"Corona_Camera001_0-449Target":[29.6776708984375,20.2487744140625,-37.361286621093754],"Corona_Camera001_0-450":[29.10888671875,25.998728027343752,100.867548828125],"Corona_Camera001_0-450Target":[29.981848144531252,20.2487744140625,-37.30076904296875],"Corona_Camera001_0-451":[35.78564208984375,25.998728027343752,100.52998046875],"Corona_Camera001_0-451Target":[30.265852050781252,20.2487744140625,-37.23498779296875],"Corona_Camera001_0-452":[42.436015625,25.998728027343752,99.846982421875],"Corona_Camera001_0-452Target":[30.529677734375,20.2487744140625,-37.1639453125],"Corona_Camera001_0-453":[49.0407421875,25.998728027343752,98.811826171875],"Corona_Camera001_0-453Target":[30.773325195312502,20.2487744140625,-37.0876416015625],"Corona_Camera001_0-454":[55.581923828125,25.998728027343752,97.43126953125],"Corona_Camera001_0-454Target":[30.996794433593752,20.2487744140625,-37.00607421875],"Corona_Camera001_0-455":[62.04197265625,25.998728027343752,95.71038085937501],"Corona_Camera001_0-455Target":[31.2000927734375,20.2487744140625,-36.919248046875],"Corona_Camera001_0-456":[68.4018212890625,25.998728027343752,93.6498828125],"Corona_Camera001_0-456Target":[31.383208007812502,20.2487744140625,-36.82715576171875],"Corona_Camera001_0-457":[74.6432568359375,25.998728027343752,91.254521484375],"Corona_Camera001_0-457Target":[31.5461474609375,20.2487744140625,-36.7297998046875],"Corona_Camera001_0-458":[80.7514794921875,25.998728027343752,88.537373046875],"Corona_Camera001_0-458Target":[31.688916015625,20.2487744140625,-36.62718994140625],"Corona_Camera001_0-459":[86.7072265625,25.998728027343752,85.50048828125],"Corona_Camera001_0-459Target":[31.81150146484375,20.2487744140625,-36.51930908203125],"Corona_Camera001_0-460":[92.495625,25.998728027343752,82.1555859375],"Corona_Camera001_0-460Target":[31.913908691406252,20.2487744140625,-36.40616943359375],"Corona_Camera001_0-461":[98.10349609375,25.998728027343752,78.51619140625],"Corona_Camera001_0-461Target":[31.99614013671875,20.2487744140625,-36.287763671875],"Corona_Camera001_0-462":[103.50998046875,25.998728027343752,74.583759765625],"Corona_Camera001_0-462Target":[32.05819580078125,20.2487744140625,-36.1640966796875],"Corona_Camera001_0-463":[108.7075390625,25.998728027343752,70.3790478515625],"Corona_Camera001_0-463Target":[32.10007568359375,20.2487744140625,-36.03517333984375],"Corona_Camera001_0-464":[113.67823242187501,25.998728027343752,65.9085107421875],"Corona_Camera001_0-464Target":[32.12177978515625,20.2487744140625,-35.90098876953125],"Corona_Camera001_0-465":[118.409755859375,25.998728027343752,61.1855712890625],"Corona_Camera001_0-465Target":[32.1233056640625,20.2487744140625,-35.76153564453125],"Corona_Camera001_0-466":[122.89234375000001,25.998728027343752,56.2256982421875],"Corona_Camera001_0-466Target":[32.10465087890625,20.2487744140625,-35.61681884765625],"Corona_Camera001_0-467":[127.106533203125,25.998728027343752,51.035839843750004],"Corona_Camera001_0-467Target":[32.065822753906254,20.2487744140625,-35.46684326171875],"Corona_Camera001_0-468":[131.048818359375,25.998728027343752,45.6365966796875],"Corona_Camera001_0-468Target":[32.00681396484375,20.2487744140625,-35.311604003906254],"Corona_Camera001_0-469":[134.70193359375,25.998728027343752,40.03762939453125],"Corona_Camera001_0-469Target":[31.92763427734375,20.2487744140625,-35.151103515625],"Corona_Camera001_0-470":[138.0575,25.998728027343752,34.2554296875],"Corona_Camera001_0-470Target":[31.828271484375,20.2487744140625,-34.98533935546875],"Corona_Camera001_0-471":[141.10916015625,25.998728027343752,28.3071435546875],"Corona_Camera001_0-471Target":[31.7087353515625,20.2487744140625,-34.81431640625],"Corona_Camera001_0-472":[143.83769531250002,25.998728027343752,22.20400146484375],"Corona_Camera001_0-472Target":[31.56902099609375,20.2487744140625,-34.638027343750004],"Corona_Camera001_0-473":[146.244794921875,25.998728027343752,15.9671044921875],"Corona_Camera001_0-473Target":[31.40913330078125,20.2487744140625,-34.4564794921875],"Corona_Camera001_0-474":[148.321318359375,25.998728027343752,9.612448120117188],"Corona_Camera001_0-474Target":[31.2290625,20.2487744140625,-34.269665527343754],"Corona_Camera001_0-475":[150.054482421875,25.998728027343752,3.155695495605469],"Corona_Camera001_0-475Target":[31.028818359375002,20.2487744140625,-34.07759033203125],"Corona_Camera001_0-476":[151.44758789062502,25.998728027343752,-3.3828027343750002],"Corona_Camera001_0-476Target":[30.80839599609375,20.2487744140625,-33.88025634765625],"Corona_Camera001_0-477":[152.4969921875,25.998728027343752,-9.985245361328126],"Corona_Camera001_0-477Target":[30.5677978515625,20.2487744140625,-33.67765625],"Corona_Camera001_0-478":[153.195556640625,25.998728027343752,-16.63406005859375],"Corona_Camera001_0-478Target":[30.307021484375,20.2487744140625,-33.46979736328125],"Corona_Camera001_0-479":[153.546025390625,25.998728027343752,-23.31018798828125],"Corona_Camera001_0-479Target":[30.0260693359375,20.2487744140625,-33.2566748046875]}');

export const OBJECTS_POSITIONS_BUILDING1 = JSON.parse(
  '{"Circle071":[32.22171875,20.66015380859375,-0.494248046875],"Corona_Camera003":[26.89687744140625,20.66015380859375,-84.1753125],"Corona_Camera003Target":[34.26671142578125,6.15627197265625,-2.025158233642578],"Corona_Camera004":[22.232824707031252,20.66015380859375,-83.847333984375],"Corona_Camera004Target":[34.269326171875,6.15627197265625,-2.025158233642578],"Corona_Camera005":[17.593057861328127,20.66015380859375,-83.292841796875],"Corona_Camera005Target":[34.27703857421875,6.15627197265625,-2.025158233642578],"Corona_Camera006":[12.99018798828125,20.66015380859375,-82.51165039062501],"Corona_Camera006Target":[34.289685058593754,6.15627197265625,-2.025158233642578],"Corona_Camera007":[8.437294921875,20.66015380859375,-81.50326171875],"Corona_Camera007Target":[34.3070849609375,6.15627197265625,-2.025158233642578],"Corona_Camera008":[3.948449401855469,20.66015380859375,-80.2659130859375],"Corona_Camera008Target":[34.3290625,6.15627197265625,-2.025158233642578],"Corona_Camera009":[-0.46504882812500004,20.66015380859375,-78.807666015625],"Corona_Camera009Target":[34.35543701171875,6.15627197265625,-2.025158233642578],"Corona_Camera010":[-4.7897216796875,20.66015380859375,-77.1295751953125],"Corona_Camera010Target":[34.38604248046875,6.15627197265625,-2.025158233642578],"Corona_Camera011":[-9.0124169921875,20.66015380859375,-75.234873046875],"Corona_Camera011Target":[34.42069580078125,6.15627197265625,-2.025158233642578],"Corona_Camera012":[-13.123524169921875,20.66015380859375,-73.1334423828125],"Corona_Camera012Target":[34.4592236328125,6.15627197265625,-2.025158233642578],"Corona_Camera013":[-17.107586669921876,20.66015380859375,-70.8249365234375],"Corona_Camera013Target":[34.5014404296875,6.15627197265625,-2.025158233642578],"Corona_Camera014":[-20.9571728515625,20.66015380859375,-68.3220361328125],"Corona_Camera014Target":[34.5471826171875,6.15627197265625,-2.025158233642578],"Corona_Camera015":[-24.659248046875,20.66015380859375,-65.628759765625],"Corona_Camera015Target":[34.596271972656254,6.15627197265625,-2.025158233642578],"Corona_Camera016":[-28.204267578125002,20.66015380859375,-62.7539404296875],"Corona_Camera016Target":[34.648525390625004,6.15627197265625,-2.025158233642578],"Corona_Camera017":[-31.583315429687502,20.66015380859375,-59.7067724609375],"Corona_Camera017Target":[34.70377685546875,6.15627197265625,-2.025158233642578],"Corona_Camera018":[-34.784365234375,20.66015380859375,-56.493466796875],"Corona_Camera018Target":[34.76184326171875,6.15627197265625,-2.025158233642578],"Corona_Camera019":[-37.8031591796875,20.66015380859375,-53.127119140625],"Corona_Camera019Target":[34.8225537109375,6.15627197265625,-2.025158233642578],"Corona_Camera020":[-40.6245751953125,20.66015380859375,-49.61203125],"Corona_Camera020Target":[34.88572509765625,6.15627197265625,-2.025158233642578],"Corona_Camera021":[-43.2477197265625,20.66015380859375,-45.9631591796875],"Corona_Camera021Target":[34.951181640625,6.15627197265625,-2.025158233642578],"Corona_Camera022":[-45.6600732421875,20.66015380859375,-42.187329101562504],"Corona_Camera022Target":[35.0187548828125,6.15627197265625,-2.025158233642578],"Corona_Camera023":[-47.857792968750005,20.66015380859375,-38.29688232421875],"Corona_Camera023Target":[35.08826171875,6.15627197265625,-2.025158233642578],"Corona_Camera024":[-49.835380859375,20.66015380859375,-34.302880859375],"Corona_Camera024Target":[35.15953125,6.15627197265625,-2.025158233642578],"Corona_Camera025":[-51.58314453125,20.66015380859375,-30.21483642578125],"Corona_Camera025Target":[35.232387695312504,6.15627197265625,-2.025158233642578],"Corona_Camera026":[-53.1023291015625,20.66015380859375,-26.04646240234375],"Corona_Camera026Target":[35.306650390625,6.15627197265625,-2.025158233642578],"Corona_Camera027":[-54.3858984375,20.66015380859375,-21.808330078125],"Corona_Camera027Target":[35.3821484375,6.15627197265625,-2.025158233642578],"Corona_Camera028":[-55.430322265625,20.66015380859375,-17.512259521484374],"Corona_Camera028Target":[35.458698730468754,6.15627197265625,-2.025158233642578],"Corona_Camera029":[-56.237529296875,20.66015380859375,-13.171055908203126],"Corona_Camera029Target":[35.5361279296875,6.15627197265625,-2.025158233642578],"Corona_Camera030":[-56.80658203125,20.66015380859375,-8.796387939453124],"Corona_Camera030Target":[35.6142626953125,6.15627197265625,-2.025158233642578],"Corona_Camera031":[-57.133310546875,20.66015380859375,-4.399732055664063],"Corona_Camera031Target":[35.6929248046875,6.15627197265625,-2.025158233642578],"Corona_Camera032":[-57.22330078125,20.66015380859375,0.006847686767578125],"Corona_Camera032Target":[35.771938476562504,6.15627197265625,-2.025158233642578],"Corona_Camera033":[-57.0752587890625,20.66015380859375,4.412013854980469],"Corona_Camera033Target":[35.85113525390625,6.15627197265625,-2.025158233642578],"Corona_Camera034":[-56.685986328125004,20.66015380859375,8.804067993164063],"Corona_Camera034Target":[35.9303271484375,6.15627197265625,-2.025158233642578],"Corona_Camera035":[-56.055166015625,20.66015380859375,13.17119873046875],"Corona_Camera035Target":[36.00934326171875,6.15627197265625,-2.025158233642578],"Corona_Camera036":[-55.1776416015625,20.66015380859375,17.50031982421875],"Corona_Camera036Target":[36.08800537109375,6.15627197265625,-2.025158233642578],"Corona_Camera037":[-54.061259765625,20.66015380859375,21.78025146484375],"Corona_Camera037Target":[36.166142578125,6.15627197265625,-2.025158233642578],"Corona_Camera038":[-52.709111328125005,20.66015380859375,25.99940673828125],"Corona_Camera038Target":[36.24357421875,6.15627197265625,-2.025158233642578],"Corona_Camera039":[-51.120439453125,20.66015380859375,30.14474853515625],"Corona_Camera039Target":[36.32012451171875,6.15627197265625,-2.025158233642578],"Corona_Camera040":[-49.3026806640625,20.66015380859375,34.2055517578125],"Corona_Camera040Target":[36.3956201171875,6.15627197265625,-2.025158233642578],"Corona_Camera041":[-47.2636181640625,20.66015380859375,38.172001953125],"Corona_Camera041Target":[36.46988037109375,6.15627197265625,-2.025158233642578],"Corona_Camera042":[-45.0032080078125,20.66015380859375,42.03048828125],"Corona_Camera042Target":[36.542736816406254,6.15627197265625,-2.025158233642578],"Corona_Camera043":[-42.5337548828125,20.66015380859375,45.7733984375],"Corona_Camera043Target":[36.61400634765625,6.15627197265625,-2.025158233642578],"Corona_Camera044":[-39.8612646484375,20.66015380859375,49.3903564453125],"Corona_Camera044Target":[36.683515625,6.15627197265625,-2.025158233642578],"Corona_Camera045":[-36.99067626953125,20.66015380859375,52.869912109375],"Corona_Camera045Target":[36.7510888671875,6.15627197265625,-2.025158233642578],"Corona_Camera046":[-33.93475830078125,20.66015380859375,56.206372070312504],"Corona_Camera046Target":[36.816547851562504,6.15627197265625,-2.025158233642578],"Corona_Camera047":[-30.69685546875,20.66015380859375,59.3867724609375],"Corona_Camera047Target":[36.879719238281254,6.15627197265625,-2.025158233642578],"Corona_Camera048":[-27.289453125,20.66015380859375,62.405791015625],"Corona_Camera048Target":[36.94042724609375,6.15627197265625,-2.025158233642578],"Corona_Camera049":[-23.72087646484375,20.66015380859375,65.2546533203125],"Corona_Camera049Target":[36.9984912109375,6.15627197265625,-2.025158233642578],"Corona_Camera050":[-19.998646240234375,20.66015380859375,67.9231982421875],"Corona_Camera050Target":[37.05374267578125,6.15627197265625,-2.025158233642578],"Corona_Camera051":[-16.1359619140625,20.66015380859375,70.4081591796875],"Corona_Camera051Target":[37.10599853515625,6.15627197265625,-2.025158233642578],"Corona_Camera052":[-12.1392578125,20.66015380859375,72.697216796875],"Corona_Camera052Target":[37.155087890625,6.15627197265625,-2.025158233642578],"Corona_Camera053":[-8.02171875,20.66015380859375,74.787373046875],"Corona_Camera053Target":[37.20082763671875,6.15627197265625,-2.025158233642578],"Corona_Camera054":[-3.7943405151367187,20.66015380859375,76.672880859375],"Corona_Camera054Target":[37.24304931640625,6.15627197265625,-2.025158233642578],"Corona_Camera055":[0.53386962890625,20.66015380859375,78.34296875],"Corona_Camera055Target":[37.28157958984375,6.15627197265625,-2.025158233642578],"Corona_Camera056":[4.94841552734375,20.66015380859375,79.7982958984375],"Corona_Camera056Target":[37.31623046875,6.15627197265625,-2.025158233642578],"Corona_Camera057":[9.438012084960938,20.66015380859375,81.0334033203125],"Corona_Camera057Target":[37.3468310546875,6.15627197265625,-2.025158233642578],"Corona_Camera058":[13.9912353515625,20.66015380859375,82.04046875],"Corona_Camera058Target":[37.3732080078125,6.15627197265625,-2.025158233642578],"Corona_Camera059":[18.594012451171874,20.66015380859375,82.822080078125],"Corona_Camera059Target":[37.395185546875,6.15627197265625,-2.025158233642578],"Corona_Camera060":[23.2338232421875,20.66015380859375,83.376484375],"Corona_Camera060Target":[37.41258544921875,6.15627197265625,-2.025158233642578],"Corona_Camera061":[27.8980517578125,20.66015380859375,83.70154296875],"Corona_Camera061Target":[37.4252294921875,6.15627197265625,-2.025158233642578],"Corona_Camera062":[32.573933105468754,20.66015380859375,83.79653320312501],"Corona_Camera062Target":[37.43294677734375,6.15627197265625,-2.025158233642578],"Corona_Camera063":[37.2488330078125,20.66015380859375,83.66525390625],"Corona_Camera063Target":[37.435559082031254,6.15627197265625,-2.025158233642578],"Corona_Camera064":[41.9102392578125,20.66015380859375,83.30662109375],"Corona_Camera064Target":[37.44808349609375,6.15627197265625,-2.0296339416503906],"Corona_Camera065":[46.545620117187504,20.66015380859375,82.720322265625],"Corona_Camera065Target":[37.48463623046875,6.15627197265625,-2.042699127197266],"Corona_Camera066":[51.141669921875,20.66015380859375,81.9040283203125],"Corona_Camera066Target":[37.54369873046875,6.15627197265625,-2.06381103515625],"Corona_Camera067":[55.685478515625,20.66015380859375,80.859853515625],"Corona_Camera067Target":[37.62376220703125,6.15627197265625,-2.0924278259277345],"Corona_Camera068":[60.165112304687504,20.66015380859375,79.59337890625],"Corona_Camera068Target":[37.7233056640625,6.15627197265625,-2.1280067443847654],"Corona_Camera069":[64.567841796875,20.66015380859375,78.1063232421875],"Corona_Camera069Target":[37.84080810546875,6.15627197265625,-2.170005340576172],"Corona_Camera070":[68.880361328125,20.66015380859375,76.4006689453125],"Corona_Camera070Target":[37.97475341796875,6.15627197265625,-2.217880859375],"Corona_Camera071":[73.093046875,20.66015380859375,74.48625976562501],"Corona_Camera071Target":[38.123623046875004,6.15627197265625,-2.2710910034179688],"Corona_Camera072":[77.1928662109375,20.66015380859375,72.3653466796875],"Corona_Camera072Target":[38.2859033203125,6.15627197265625,-2.329093170166016],"Corona_Camera073":[81.1690673828125,20.66015380859375,70.0448974609375],"Corona_Camera073Target":[38.46006103515625,6.15627197265625,-2.3913446044921876],"Corona_Camera074":[85.01341796875,20.66015380859375,67.53470703125001],"Corona_Camera074Target":[38.64460693359375,6.15627197265625,-2.4573036193847657],"Corona_Camera075":[88.71107421875,20.66015380859375,64.83591796875],"Corona_Camera075Target":[38.8379931640625,6.15627197265625,-2.5264268493652344],"Corona_Camera076":[92.256962890625,20.66015380859375,61.96201171875],"Corona_Camera076Target":[39.038720703125,6.15627197265625,-2.598172302246094],"Corona_Camera077":[95.63944335937501,20.66015380859375,58.918217773437505],"Corona_Camera077Target":[39.245266113281254,6.15627197265625,-2.671997375488281],"Corona_Camera078":[98.8491015625,20.66015380859375,55.712529296875005],"Corona_Camera078Target":[39.45611083984375,6.15627197265625,-2.747359313964844],"Corona_Camera079":[101.88054687500001,20.66015380859375,52.356274414062504],"Corona_Camera079Target":[39.66974609375,6.15627197265625,-2.8237164306640627],"Corona_Camera080":[104.71892578125001,20.66015380859375,48.8533056640625],"Corona_Camera080Target":[39.8846337890625,6.15627197265625,-2.9005249023437503],"Corona_Camera081":[107.36269531250001,20.66015380859375,45.21767578125],"Corona_Camera081Target":[40.09927490234375,6.15627197265625,-2.9772430419921876],"Corona_Camera082":[109.801220703125,20.66015380859375,41.456787109375],"Corona_Camera082Target":[40.3121435546875,6.15627197265625,-3.053328552246094],"Corona_Camera083":[112.02658203125,20.66015380859375,37.58028564453125],"Corona_Camera083Target":[40.52172607421875,6.15627197265625,-3.128238525390625],"Corona_Camera084":[114.03595703125,20.66015380859375,33.6003955078125],"Corona_Camera084Target":[40.7264990234375,6.15627197265625,-3.201430358886719],"Corona_Camera085":[115.817607421875,20.66015380859375,29.525373535156252],"Corona_Camera085Target":[40.924951171875,6.15627197265625,-3.2723623657226564],"Corona_Camera086":[117.37001953125001,20.66015380859375,25.3678759765625],"Corona_Camera086Target":[41.115556640625,6.15627197265625,-3.3404910278320314],"Corona_Camera087":[118.689970703125,20.66015380859375,21.139677734375],"Corona_Camera087Target":[41.296806640625,6.15627197265625,-3.4052743530273437],"Corona_Camera088":[119.768681640625,20.66015380859375,16.8511376953125],"Corona_Camera088Target":[41.467182617187504,6.15627197265625,-3.4661700439453127],"Corona_Camera089":[120.60662109375001,20.66015380859375,12.515108642578125],"Corona_Camera089Target":[41.62515625,6.15627197265625,-3.5226348876953124],"Corona_Camera090":[121.203564453125,20.66015380859375,8.143795776367188],"Corona_Camera090Target":[41.76921875,6.15627197265625,-3.574127197265625],"Corona_Camera091":[121.5587109375,20.66015380859375,3.74911865234375],"Corona_Camera091Target":[41.8978515625,6.15627197265625,-3.620103759765625],"Corona_Camera092":[121.669619140625,20.66015380859375,-0.6570526885986329],"Corona_Camera092Target":[42.0095361328125,6.15627197265625,-3.6600225830078124],"Corona_Camera093":[121.53609375,20.66015380859375,-5.062619934082031],"Corona_Camera093Target":[42.102749023437504,6.15627197265625,-3.6933410644531253],"Corona_Camera094":[121.15566406250001,20.66015380859375,-9.455330200195313],"Corona_Camera094Target":[42.175986328125,6.15627197265625,-3.7195166015625],"Corona_Camera095":[120.527958984375,20.66015380859375,-13.82277099609375],"Corona_Camera095Target":[42.2277197265625,6.15627197265625,-3.7380068969726565],"Corona_Camera096":[119.653056640625,20.66015380859375,-18.152335205078124],"Corona_Camera096Target":[42.2564306640625,6.15627197265625,-3.74826904296875],"Corona_Camera097":[118.528271484375,20.66015380859375,-22.430334472656252],"Corona_Camera097Target":[42.2583154296875,6.15627197265625,-3.749469909667969],"Corona_Camera098":[117.162626953125,20.66015380859375,-26.64564208984375],"Corona_Camera098Target":[42.2040625,6.15627197265625,-3.7377642822265624],"Corona_Camera099":[115.560673828125,20.66015380859375,-30.7864111328125],"Corona_Camera099Target":[42.0891015625,6.15627197265625,-3.7129592895507812],"Corona_Camera100":[113.7208984375,20.66015380859375,-34.83838623046875],"Corona_Camera100Target":[41.9184814453125,6.15627197265625,-3.6761456298828126],"Corona_Camera101":[111.6567578125,20.66015380859375,-38.793251953125],"Corona_Camera101Target":[41.697265625,6.15627197265625,-3.6284149169921878],"Corona_Camera102":[109.37314453125,20.66015380859375,-42.6395947265625],"Corona_Camera102Target":[41.4305224609375,6.15627197265625,-3.5708599853515626],"Corona_Camera103":[106.87486328125,20.66015380859375,-46.36548828125],"Corona_Camera103Target":[41.123291015625,6.15627197265625,-3.5045706176757814],"Corona_Camera104":[104.1750390625,20.66015380859375,-49.964287109375],"Corona_Camera104Target":[40.780651855468754,6.15627197265625,-3.430640869140625],"Corona_Camera105":[101.27710937500001,20.66015380859375,-53.423725585937504],"Corona_Camera105Target":[40.40764892578125,6.15627197265625,-3.3501599121093752],"Corona_Camera106":[98.193056640625,20.66015380859375,-56.7370849609375],"Corona_Camera106Target":[40.009345703125,6.15627197265625,-3.2642205810546874],"Corona_Camera107":[94.93232421875,20.66015380859375,-59.8966845703125],"Corona_Camera107Target":[39.5908154296875,6.15627197265625,-3.1739154052734375],"Corona_Camera108":[91.500693359375,20.66015380859375,-62.891259765625],"Corona_Camera108Target":[39.15709716796875,6.15627197265625,-3.0803344726562503],"Corona_Camera109":[87.91224609375,20.66015380859375,-65.7178857421875],"Corona_Camera109Target":[38.713269042968754,6.15627197265625,-2.9845709228515624],"Corona_Camera110":[84.173310546875,20.66015380859375,-68.365634765625],"Corona_Camera110Target":[38.264370117187504,6.15627197265625,-2.88771484375],"Corona_Camera111":[80.2952978515625,20.66015380859375,-70.8293408203125],"Corona_Camera111Target":[37.815478515625,6.15627197265625,-2.7908590698242186],"Corona_Camera112":[76.2898291015625,20.66015380859375,-73.1048095703125],"Corona_Camera112Target":[37.3716455078125,6.15627197265625,-2.69509521484375],"Corona_Camera113":[72.163486328125,20.66015380859375,-75.17961914062501],"Corona_Camera113Target":[36.93792724609375,6.15627197265625,-2.601514587402344],"Corona_Camera114":[67.930634765625,20.66015380859375,-77.054287109375],"Corona_Camera114Target":[36.51939208984375,6.15627197265625,-2.511208953857422],"Corona_Camera115":[63.601708984375,20.66015380859375,-78.722734375],"Corona_Camera115Target":[36.12109619140625,6.15627197265625,-2.4252699279785155],"Corona_Camera116":[59.1861962890625,20.66015380859375,-80.175556640625],"Corona_Camera116Target":[35.748095703125,6.15627197265625,-2.3447894287109374],"Corona_Camera117":[54.6976416015625,20.66015380859375,-81.4140673828125],"Corona_Camera117Target":[35.40545166015625,6.15627197265625,-2.2708589172363283],"Corona_Camera118":[50.147783203125,20.66015380859375,-82.4346484375],"Corona_Camera118Target":[35.098225097656254,6.15627197265625,-2.204570007324219],"Corona_Camera119":[45.547626953125004,20.66015380859375,-83.22990234375],"Corona_Camera119Target":[34.831474609375,6.15627197265625,-2.147014617919922],"Corona_Camera120":[40.91012939453125,20.66015380859375,-83.8016796875],"Corona_Camera120Target":[34.61026123046875,6.15627197265625,-2.099284210205078],"Corona_Camera121":[36.2478076171875,20.66015380859375,-84.149853515625],"Corona_Camera121Target":[34.43964111328125,6.15627197265625,-2.0624703979492187],"Corona_Camera122":[31.572705078125,20.66015380859375,-84.274306640625],"Corona_Camera122Target":[34.324677734375,6.15627197265625,-2.0376654052734375]}'
);

export const OBJECTS_POSITIONS_BUILDING2 = JSON.parse(
  '{"Circle072":[21.084516601562502,20.1391845703125,-69.158916015625],"Corona_Camera003_720-1081":[109.33673828125,20.139183349609375,-119.52095703125],"Corona_Camera003_720-1081Target":[24.4890185546875,7.503894653320312,-63.712421875000004],"Corona_Camera003_720-1082":[106.58660156250001,20.139183349609375,-124.03541015625001],"Corona_Camera003_720-1082Target":[24.442685546875,7.503894653320312,-63.7087841796875],"Corona_Camera003_720-1083":[103.59443359375,20.139183349609375,-128.408388671875],"Corona_Camera003_720-1083Target":[24.30921142578125,7.503894653320312,-63.6982958984375],"Corona_Camera003_720-1084":[100.35826171875,20.139183349609375,-132.621142578125],"Corona_Camera003_720-1084Target":[24.09690185546875,7.503894653320312,-63.681611328125],"Corona_Camera003_720-1085":[96.89396484375,20.139183349609375,-136.666396484375],"Corona_Camera003_720-1085Target":[23.81404541015625,7.503894653320312,-63.659375000000004],"Corona_Camera003_720-1086":[93.20201171875,20.139183349609375,-140.52509765625],"Corona_Camera003_720-1086Target":[23.46895263671875,7.503894653320312,-63.6322509765625],"Corona_Camera003_720-1087":[89.2978125,20.139183349609375,-144.18986328125],"Corona_Camera003_720-1087Target":[23.0699169921875,7.503894653320312,-63.6008935546875],"Corona_Camera003_720-1088":[85.18615234375,20.139183349609375,-147.6431640625],"Corona_Camera003_720-1088Target":[22.6252392578125,7.503894653320312,-63.565947265625],"Corona_Camera003_720-1089":[80.882265625,20.139183349609375,-150.87759765625],"Corona_Camera003_720-1089Target":[22.14321044921875,7.503894653320312,-63.528056640625],"Corona_Camera003_720-1090":[76.3948974609375,20.139183349609375,-153.87783203125],"Corona_Camera003_720-1090Target":[21.63214111328125,7.503894653320312,-63.487890625],"Corona_Camera003_720-1091":[71.739443359375,20.139183349609375,-156.636611328125],"Corona_Camera003_720-1091Target":[21.100324707031252,7.503894653320312,-63.44609375],"Corona_Camera003_720-1092":[66.9285546875,20.139183349609375,-159.1424609375],"Corona_Camera003_720-1092Target":[20.5560595703125,7.503894653320312,-63.403325195312505],"Corona_Camera003_720-1093":[61.9772900390625,20.139183349609375,-161.387275390625],"Corona_Camera003_720-1093Target":[20.007645263671876,7.503894653320312,-63.360224609375],"Corona_Camera003_720-1094":[56.9024072265625,20.139183349609375,-163.36662109375],"Corona_Camera003_720-1094Target":[19.463380126953126,7.503894653320312,-63.317451171875],"Corona_Camera003_720-1095":[51.71771484375,20.139183349609375,-165.0690625],"Corona_Camera003_720-1095Target":[18.931563720703124,7.503894653320312,-63.2756591796875],"Corona_Camera003_720-1096":[46.442490234375,20.139183349609375,-166.49791015625001],"Corona_Camera003_720-1096Target":[18.4204931640625,7.503894653320312,-63.235493164062504],"Corona_Camera003_720-1097":[41.092109375,20.139183349609375,-167.646484375],"Corona_Camera003_720-1097Target":[17.938468017578124,7.503894653320312,-63.197607421875],"Corona_Camera003_720-1098":[35.683515625,20.139183349609375,-168.51388671875],"Corona_Camera003_720-1098Target":[17.4937890625,7.503894653320312,-63.162666015625],"Corona_Camera003_720-1099":[30.23392822265625,20.139183349609375,-169.1051171875],"Corona_Camera003_720-1099Target":[17.09475341796875,7.503894653320312,-63.131298828125004],"Corona_Camera003_720-1100":[24.75912109375,20.139183349609375,-169.4225],"Corona_Camera003_720-1100Target":[16.74966064453125,7.503894653320312,-63.104184570312505],"Corona_Camera003_720-1101":[19.27427734375,20.139183349609375,-169.4689453125],"Corona_Camera003_720-1101Target":[16.46680908203125,7.503894653320312,-63.0819482421875],"Corona_Camera003_720-1102":[13.794298095703125,20.139183349609375,-169.24517578125],"Corona_Camera003_720-1102Target":[16.25449462890625,7.503894653320312,-63.065263671875],"Corona_Camera003_720-1103":[8.333792724609376,20.139183349609375,-168.7530859375],"Corona_Camera003_720-1103Target":[16.12102294921875,7.503894653320312,-63.0547705078125],"Corona_Camera003_720-1104":[2.907424011230469,20.139183349609375,-167.9926953125],"Corona_Camera003_720-1104Target":[16.0746875,7.503894653320312,-63.0511328125],"Corona_Camera003_720-1105":[-2.4701806640625,20.139183349609375,-166.9652734375],"Corona_Camera003_720-1105Target":[16.044715576171875,7.503894653320312,-62.9521435546875],"Corona_Camera003_720-1106":[-7.78306884765625,20.139183349609375,-165.668515625],"Corona_Camera003_720-1106Target":[15.958931884765626,7.503894653320312,-62.668828125000005],"Corona_Camera003_720-1107":[-13.01708740234375,20.139183349609375,-164.1083984375],"Corona_Camera003_720-1107Target":[15.82354248046875,7.503894653320312,-62.221684570312505],"Corona_Camera003_720-1108":[-18.15888671875,20.139183349609375,-162.291806640625],"Corona_Camera003_720-1108Target":[15.644742431640625,7.503894653320312,-61.6311669921875],"Corona_Camera003_720-1109":[-23.1931689453125,20.139183349609375,-160.220546875],"Corona_Camera003_720-1109Target":[15.4287353515625,7.503894653320312,-60.917763671875],"Corona_Camera003_720-1110":[-28.10618896484375,20.139183349609375,-157.90071289062502],"Corona_Camera003_720-1110Target":[15.181722412109375,7.503894653320312,-60.101962890625],"Corona_Camera003_720-1111":[-32.887109375,20.139183349609375,-155.34322265625],"Corona_Camera003_720-1111Target":[14.90990478515625,7.503894653320312,-59.2042333984375],"Corona_Camera003_720-1112":[-37.52031982421875,20.139183349609375,-152.550556640625],"Corona_Camera003_720-1112Target":[14.6194873046875,7.503894653320312,-58.245083007812504],"Corona_Camera003_720-1113":[-41.995400390625,20.139183349609375,-149.533544921875],"Corona_Camera003_720-1113Target":[14.316663818359375,7.503894653320312,-57.2449560546875],"Corona_Camera003_720-1114":[-46.30251953125,20.139183349609375,-146.302861328125],"Corona_Camera003_720-1114Target":[14.00763916015625,7.503894653320312,-56.2243505859375],"Corona_Camera003_720-1115":[-50.4247998046875,20.139183349609375,-142.860849609375],"Corona_Camera003_720-1115Target":[13.69861572265625,7.503894653320312,-55.2037451171875],"Corona_Camera003_720-1116":[-54.3573974609375,20.139183349609375,-139.22359375],"Corona_Camera003_720-1116Target":[13.39579345703125,7.503894653320312,-54.203623046875],"Corona_Camera003_720-1117":[-58.0871923828125,20.139183349609375,-135.39791015625],"Corona_Camera003_720-1117Target":[13.10537353515625,7.503894653320312,-53.244458007812504],"Corona_Camera003_720-1118":[-61.603100585937504,20.139183349609375,-131.393134765625],"Corona_Camera003_720-1118Target":[12.83355712890625,7.503894653320312,-52.34673828125],"Corona_Camera003_720-1119":[-64.8996435546875,20.139183349609375,-127.222880859375],"Corona_Camera003_720-1119Target":[12.586544189453125,7.503894653320312,-51.5309375],"Corona_Camera003_720-1120":[-67.9613720703125,20.139183349609375,-122.89370117187501],"Corona_Camera003_720-1120Target":[12.370538330078125,7.503894653320312,-50.8175390625],"Corona_Camera003_720-1121":[-70.78427734375,20.139183349609375,-118.42006835937501],"Corona_Camera003_720-1121Target":[12.19173828125,7.503894653320312,-50.227021484375],"Corona_Camera003_720-1122":[-73.360947265625,20.139183349609375,-113.81389648437501],"Corona_Camera003_720-1122Target":[12.056346435546875,7.503894653320312,-49.7798681640625],"Corona_Camera003_720-1123":[-75.67697265625,20.139183349609375,-109.08412109375],"Corona_Camera003_720-1123Target":[11.97056396484375,7.503894653320312,-49.496552734375],"Corona_Camera003_720-1124":[-77.7326318359375,20.139183349609375,-104.246748046875],"Corona_Camera003_720-1124Target":[11.940592041015625,7.503894653320312,-49.397568359375],"Corona_Camera003_720-1125":[-79.5210791015625,20.139183349609375,-99.314150390625],"Corona_Camera003_720-1125Target":[11.903790283203126,7.503894653320312,-49.639423828125004],"Corona_Camera003_720-1126":[-81.03041015625,20.139183349609375,-94.297861328125],"Corona_Camera003_720-1126Target":[11.801563720703125,7.503894653320312,-50.3112548828125],"Corona_Camera003_720-1127":[-82.2634375,20.139183349609375,-89.21375],"Corona_Camera003_720-1127Target":[11.64617919921875,7.503894653320312,-51.33244140625],"Corona_Camera003_720-1128":[-83.216875,20.139183349609375,-84.07547851562501],"Corona_Camera003_720-1128Target":[11.44990234375,7.503894653320312,-52.6223486328125],"Corona_Camera003_720-1129":[-83.886796875,20.139183349609375,-78.896806640625],"Corona_Camera003_720-1129Target":[11.22500244140625,7.503894653320312,-54.10037109375],"Corona_Camera003_720-1130":[-84.27072265625,20.139183349609375,-73.69185546875],"Corona_Camera003_720-1130Target":[10.983748779296874,7.503894653320312,-55.6858935546875],"Corona_Camera003_720-1131":[-84.37287109375,20.139183349609375,-68.4750927734375],"Corona_Camera003_720-1131Target":[10.738402099609376,7.503894653320312,-57.29828125],"Corona_Camera003_720-1132":[-84.17470703125001,20.139183349609375,-63.260986328125],"Corona_Camera003_720-1132Target":[10.501236572265626,7.503894653320312,-58.856923828125],"Corona_Camera003_720-1133":[-83.6659765625,20.139183349609375,-58.065922851562505],"Corona_Camera003_720-1133Target":[10.284515380859375,7.503894653320312,-60.2812060546875],"Corona_Camera003_720-1134":[-82.8521875,20.139183349609375,-52.9059912109375],"Corona_Camera003_720-1134Target":[10.100506591796876,7.503894653320312,-61.490498046875004],"Corona_Camera003_720-1135":[-81.7358740234375,20.139183349609375,-47.79751953125],"Corona_Camera003_720-1135Target":[9.96147705078125,7.503894653320312,-62.4041845703125],"Corona_Camera003_720-1136":[-80.3291357421875,20.139183349609375,-42.75439453125],"Corona_Camera003_720-1136Target":[9.879696044921875,7.503894653320312,-62.9416455078125],"Corona_Camera003_720-1137":[-78.643115234375,20.139183349609375,-37.78936767578125],"Corona_Camera003_720-1137Target":[9.866538696289062,7.503894653320312,-63.054326171875005],"Corona_Camera003_720-1138":[-76.68828613281251,20.139183349609375,-32.91427978515625],"Corona_Camera003_720-1138Target":[9.917521362304688,7.503894653320312,-63.100849609375004],"Corona_Camera003_720-1139":[-74.47302734375,20.139183349609375,-28.1409814453125],"Corona_Camera003_720-1139Target":[10.025152587890625,7.503894653320312,-63.1990771484375],"Corona_Camera003_720-1140":[-72.0076123046875,20.139183349609375,-23.4799951171875],"Corona_Camera003_720-1140Target":[10.18420166015625,7.503894653320312,-63.344208984375],"Corona_Camera003_720-1141":[-69.306279296875,20.139183349609375,-18.938841552734374],"Corona_Camera003_720-1141Target":[10.389439697265626,7.503894653320312,-63.531499023437505],"Corona_Camera003_720-1142":[-66.37962890625,20.139183349609375,-14.525849609375001],"Corona_Camera003_720-1142Target":[10.6356396484375,7.503894653320312,-63.756176757812504],"Corona_Camera003_720-1143":[-63.2360986328125,20.139183349609375,-10.2498974609375],"Corona_Camera003_720-1143Target":[10.917572021484375,7.503894653320312,-64.01345703125],"Corona_Camera003_720-1144":[-59.8842529296875,20.139183349609375,-6.1196136474609375],"Corona_Camera003_720-1144Target":[11.230003662109375,7.503894653320312,-64.2985595703125],"Corona_Camera003_720-1145":[-56.3366845703125,20.139183349609375,-2.1400390625],"Corona_Camera003_720-1145Target":[11.56771240234375,7.503894653320312,-64.60674316406251],"Corona_Camera003_720-1146":[-52.60220703125,20.139183349609375,1.6817382812500001],"Corona_Camera003_720-1146Target":[11.925465087890625,7.503894653320312,-64.9332177734375],"Corona_Camera003_720-1147":[-48.687177734375,20.139183349609375,5.336273803710937],"Corona_Camera003_720-1147Target":[12.298031005859375,7.503894653320312,-65.273203125],"Corona_Camera003_720-1148":[-44.5996630859375,20.139183349609375,8.815800781250001],"Corona_Camera003_720-1148Target":[12.680185546875,7.503894653320312,-65.6219384765625],"Corona_Camera003_720-1149":[-40.34984375,20.139183349609375,12.1145361328125],"Corona_Camera003_720-1149Target":[13.06669677734375,7.503894653320312,-65.97464843750001],"Corona_Camera003_720-1150":[-35.945205078125,20.139183349609375,15.224248046875001],"Corona_Camera003_720-1150Target":[13.452336425781251,7.503894653320312,-66.3265673828125],"Corona_Camera003_720-1151":[-31.3894189453125,20.139183349609375,18.130047607421876],"Corona_Camera003_720-1151Target":[13.831876220703125,7.503894653320312,-66.672919921875],"Corona_Camera003_720-1152":[-26.69431396484375,20.139183349609375,20.827724609375],"Corona_Camera003_720-1152Target":[14.20008544921875,7.503894653320312,-67.00892578125],"Corona_Camera003_720-1153":[-21.8679150390625,20.139183349609375,23.306875],"Corona_Camera003_720-1153Target":[14.55173583984375,7.503894653320312,-67.3298291015625],"Corona_Camera003_720-1154":[-16.914865722656252,20.139183349609375,25.548603515625],"Corona_Camera003_720-1154Target":[14.8816015625,7.503894653320312,-67.6308544921875],"Corona_Camera003_720-1155":[-11.84852294921875,20.139183349609375,27.54775146484375],"Corona_Camera003_720-1155Target":[15.1844482421875,7.503894653320312,-67.907216796875],"Corona_Camera003_720-1156":[-6.67762939453125,20.139183349609375,29.2879296875],"Corona_Camera003_720-1156Target":[15.455048828125001,7.503894653320312,-68.154150390625],"Corona_Camera003_720-1157":[-1.4133764648437501,20.139183349609375,30.75282958984375],"Corona_Camera003_720-1157Target":[15.688176269531251,7.503894653320312,-68.36689453125],"Corona_Camera003_720-1158":[3.9292697143554687,20.139183349609375,31.933073730468752],"Corona_Camera003_720-1158Target":[15.878599853515626,7.503894653320312,-68.5406689453125],"Corona_Camera003_720-1159":[9.337005004882812,20.139183349609375,32.80439208984375],"Corona_Camera003_720-1159Target":[16.021090087890624,7.503894653320312,-68.6706982421875],"Corona_Camera003_720-1160":[14.790247802734376,20.139183349609375,33.36291748046875],"Corona_Camera003_720-1160Target":[16.110419921875,7.503894653320312,-68.752216796875],"Corona_Camera003_720-1161":[20.27004150390625,20.139183349609375,33.581923828125],"Corona_Camera003_720-1161Target":[16.141357421875,7.503894653320312,-68.78044921875001],"Corona_Camera003_720-1162":[25.7531982421875,20.139183349609375,33.46368896484375],"Corona_Camera003_720-1162Target":[16.156749267578125,7.503894653320312,-68.7711083984375],"Corona_Camera003_720-1163":[31.21596923828125,20.139183349609375,32.99775146484375],"Corona_Camera003_720-1163Target":[16.20187744140625,7.503894653320312,-68.743701171875],"Corona_Camera003_720-1164":[36.63720458984375,20.139183349609375,32.20662109375],"Corona_Camera003_720-1164Target":[16.275181884765626,7.503894653320312,-68.6992041015625],"Corona_Camera003_720-1165":[41.9946875,20.139183349609375,31.088984375],"Corona_Camera003_720-1165Target":[16.375091552734375,7.503894653320312,-68.6385400390625],"Corona_Camera003_720-1166":[47.27291015625,20.139183349609375,29.67066162109375],"Corona_Camera003_720-1166Target":[16.50004638671875,7.503894653320312,-68.5626806640625],"Corona_Camera003_720-1167":[52.45228515625,20.139183349609375,27.95362060546875],"Corona_Camera003_720-1167Target":[16.64847900390625,7.503894653320312,-68.47257324218751],"Corona_Camera003_720-1168":[57.5224462890625,20.139183349609375,25.96333984375],"Corona_Camera003_720-1168Target":[16.818822021484376,7.503894653320312,-68.3691455078125],"Corona_Camera003_720-1169":[62.466484375,20.139183349609375,23.70390625],"Corona_Camera003_720-1169Target":[17.009515380859376,7.503894653320312,-68.25337890625],"Corona_Camera003_720-1170":[67.27728515625,20.139183349609375,21.19782958984375],"Corona_Camera003_720-1170Target":[17.21898681640625,7.503894653320312,-68.12619140625],"Corona_Camera003_720-1171":[71.9416357421875,20.139183349609375,18.452402343750002],"Corona_Camera003_720-1171Target":[17.445679931640626,7.503894653320312,-67.9885693359375],"Corona_Camera003_720-1172":[76.45241699218751,20.139183349609375,15.4838671875],"Corona_Camera003_720-1172Target":[17.688023681640626,7.503894653320312,-67.8414453125],"Corona_Camera003_720-1173":[80.80141601562501,20.139183349609375,12.3043115234375],"Corona_Camera003_720-1173Target":[17.944451904296876,7.503894653320312,-67.6857568359375],"Corona_Camera003_720-1174":[84.97796875,20.139183349609375,8.921962280273437],"Corona_Camera003_720-1174Target":[18.2134033203125,7.503894653320312,-67.522470703125],"Corona_Camera003_720-1175":[88.978671875,20.139183349609375,5.3523779296875],"Corona_Camera003_720-1175Target":[18.493309326171875,7.503894653320312,-67.3525244140625],"Corona_Camera003_720-1176":[92.792529296875,20.139183349609375,1.60232421875],"Corona_Camera003_720-1176Target":[18.78260986328125,7.503894653320312,-67.17689453125],"Corona_Camera003_720-1177":[96.41310546875,20.139183349609375,-2.317265625],"Corona_Camera003_720-1177Target":[19.079736328125,7.503894653320312,-66.9965087890625],"Corona_Camera003_720-1178":[99.835439453125,20.139183349609375,-6.3948779296875005],"Corona_Camera003_720-1178Target":[19.383118896484376,7.503894653320312,-66.81230957031251],"Corona_Camera003_720-1179":[103.0480859375,20.139183349609375,-10.624052734375],"Corona_Camera003_720-1179Target":[19.691199951171875,7.503894653320312,-66.6252685546875],"Corona_Camera003_720-1180":[106.04474609375,20.139183349609375,-14.994310302734375],"Corona_Camera003_720-1180Target":[20.00240966796875,7.503894653320312,-66.4363232421875],"Corona_Camera003_720-1181":[108.8198828125,20.139183349609375,-19.495003662109376],"Corona_Camera003_720-1181Target":[20.31518798828125,7.503894653320312,-66.246435546875],"Corona_Camera003_720-1182":[111.36322265625,20.139183349609375,-24.117998046875],"Corona_Camera003_720-1182Target":[20.6279638671875,7.503894653320312,-66.05654296875],"Corona_Camera003_720-1183":[113.66472656250001,20.139183349609375,-28.85424560546875],"Corona_Camera003_720-1183Target":[20.9391748046875,7.503894653320312,-65.8676025390625],"Corona_Camera003_720-1184":[115.720380859375,20.139183349609375,-33.691728515625],"Corona_Camera003_720-1184Target":[21.247255859375,7.503894653320312,-65.6805615234375],"Corona_Camera003_720-1185":[117.52220703125,20.139183349609375,-38.61989501953125],"Corona_Camera003_720-1185Target":[21.550642089843752,7.503894653320312,-65.4963671875],"Corona_Camera003_720-1186":[119.058095703125,20.139183349609375,-43.628994140625004],"Corona_Camera003_720-1186Target":[21.84776611328125,7.503894653320312,-65.3159765625],"Corona_Camera003_720-1187":[120.32314453125001,20.139183349609375,-48.706044921875],"Corona_Camera003_720-1187Target":[22.1370654296875,7.503894653320312,-65.1403369140625],"Corona_Camera003_720-1188":[121.312705078125,20.139183349609375,-53.83810546875],"Corona_Camera003_720-1188Target":[22.41697265625,7.503894653320312,-64.970400390625],"Corona_Camera003_720-1189":[122.02100585937501,20.139183349609375,-59.0120947265625],"Corona_Camera003_720-1189Target":[22.685922851562502,7.503894653320312,-64.8071142578125],"Corona_Camera003_720-1190":[122.443095703125,20.139183349609375,-64.214423828125],"Corona_Camera003_720-1190Target":[22.942353515625,7.503894653320312,-64.651435546875],"Corona_Camera003_720-1191":[122.57189453125,20.139183349609375,-69.43078125],"Corona_Camera003_720-1191Target":[23.184697265625,7.503894653320312,-64.5043017578125],"Corona_Camera003_720-1192":[122.428544921875,20.139183349609375,-74.64681640625],"Corona_Camera003_720-1192Target":[23.41138916015625,7.503894653320312,-64.3666748046875],"Corona_Camera003_720-1193":[122.02595703125,20.139183349609375,-79.8504443359375],"Corona_Camera003_720-1193Target":[23.62086181640625,7.503894653320312,-64.2394970703125],"Corona_Camera003_720-1194":[121.362119140625,20.139183349609375,-85.02986328125],"Corona_Camera003_720-1194Target":[23.811552734375,7.503894653320312,-64.123720703125],"Corona_Camera003_720-1195":[120.43548828125,20.139183349609375,-90.17275390625001],"Corona_Camera003_720-1195Target":[23.98189697265625,7.503894653320312,-64.02030273437501],"Corona_Camera003_720-1196":[119.239580078125,20.139183349609375,-95.265029296875],"Corona_Camera003_720-1196Target":[24.13032958984375,7.503894653320312,-63.930185546875],"Corona_Camera003_720-1197":[117.78125,20.139183349609375,-100.2948828125],"Corona_Camera003_720-1197Target":[24.255283203125,7.503894653320312,-63.854321289062504],"Corona_Camera003_720-1198":[116.06191406250001,20.139183349609375,-105.249755859375],"Corona_Camera003_720-1198Target":[24.3551953125,7.503894653320312,-63.793671875],"Corona_Camera003_720-1199":[114.07607421875001,20.139183349609375,-110.113544921875],"Corona_Camera003_720-1199Target":[24.42849853515625,7.503894653320312,-63.749165039062504],"Corona_Camera003_720-1200":[111.83388671875001,20.139183349609375,-114.875380859375],"Corona_Camera003_720-1200Target":[24.4736279296875,7.503894653320312,-63.721767578125004]}'
);

export const UNIT_TO_RENDER_BUILDING_1: UnitToRenderBuilding = {
  1: 78,
  2: 80,
  3: 80,
  4: 80,
  5: 67,
  6: 62,
  7: 53,
  8: 49,
  9: 44,
  10: 38,
  11: 38,
  12: 38,
  13: 38,
  14: 45,
  15: 45,
  16: 45,
  17: 62,
  18: 62,
  19: 62,
  20: 57,
  21: 57,
  22: 57,
  23: 62,
  24: 62,
  25: 62,
  26: 56,
  27: 51,
  28: 51,
  29: 62,
  30: 62,
  31: 62,
  32: 62,
  33: 62,
  34: 62,
  35: 62,
  36: 62,
  37: 62,
  38: 62,
  39: 71,
  40: 71,
  41: 70,
  42: 33,
  43: 33,
  44: 5,
  45: 33,
  46: 33,
  47: 43,
  48: 23,
  49: 23,
  50: 23,
  51: 23,
  52: 23,
  53: 23,
  54: 15,
  55: 7,
  56: 118,
  57: 117,
  58: 110,
  59: 105,
  60: 15,
  61: 15,
  62: 15,
  63: 15,
  64: 15,
  65: 8,
  66: 8,
  67: 8,
  68: 8,
  69: 8,
  70: 5,
  71: 91,
  72: 5,
  73: 5,
  74: 5,
  75: 118,
  76: 118,
  77: 118,
  78: 118,
  79: 118,
  80: 112,
  81: 112,
  82: 112,
  83: 112,
  84: 112,
  85: 109,
  86: 109,
  87: 109,
  88: 109,
  89: 109,
  90: 97,
  91: 97,
  92: 97,
  93: 101,
  94: 92,
  95: 92,
  96: 92
};
export const UNIT_TO_RENDER_BUILDING_2: UnitToRenderBuilding = {
  1: 114,
  2: 114,
  3: 114,
  4: 114,
  5: 114,
  6: 90,
  7: 90,
  8: 90,
  9: 90,
  10: 90,
  11: 98,
  12: 98,
  13: 98,
  14: 98,
  15: 98,
  16: 99,
  17: 99,
  18: 99,
  19: 99,
  20: 99,
  21: 81,
  22: 81,
  23: 81,
  24: 81,
  25: 81,
  26: 75,
  27: 75,
  28: 75,
  29: 75,
  30: 75,
  31: 86,
  32: 86,
  33: 86,
  34: 86,
  35: 86,
  36: 73,
  37: 73,
  38: 73,
  39: 73,
  40: 73,
  41: 73,
  42: 76,
  43: 76,
  44: 91,
  45: 91,
  46: 96,
  47: 96,
  48: 88,
  49: 88,
  50: 69,
  51: 69,
  52: 62,
  53: 62,
  54: 62,
  55: 62,
  56: 62,
  57: 62,
  58: 55,
  59: 55,
  60: 55,
  61: 55,
  62: 55,
  63: 55,
  64: 55,
  65: 43,
  66: 43,
  67: 43,
  68: 43,
  69: 43,
  70: 39,
  71: 43,
  72: 43,
  73: 43,
  74: 43,
  75: 32,
  76: 32,
  77: 32,
  78: 32,
  79: 32,
  80: 26,
  81: 26,
  82: 26,
  83: 26,
  84: 26,
  85: 18,
  86: 18,
  87: 18,
  88: 18,
  89: 18,
  90: 9,
  91: 9,
  92: 9,
  93: 9,
  94: 9,
  95: 4,
  97: 4,
  98: 4,
  99: 4,
  100: 119,
  101: 119,
  102: 119,
  103: 119,
  104: 119
};
