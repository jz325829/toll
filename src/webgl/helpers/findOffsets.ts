/* eslint-disable no-else-return */
export const findOffsets = (
  buildingNumber: number,
  unit: number,
  isSmallerThan481: boolean,
  isSmallerThan820: boolean,
) => {
  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';
  let offsetX: number = 200;
  let offsetY: number = 0;
  if (isItSecondVersion) {
    offsetX = 0;
    offsetY = 0;
    return { offsetX, offsetY };
  }
  if (buildingNumber === 1) {
    switch (unit) {
      case 1:
        offsetY = 150;
        offsetX = 200;
        break;
      case 18:
        offsetY = 150;
        offsetX = 200;
        break;
      case 17:
        offsetY = 120;
        offsetX = 200;
        break;
      case 19:
        offsetY = 100;
        offsetX = 200;
        break;
      case 20:
        offsetY = -180;
        offsetX = -0;
        break;
      case 21:
        offsetY = -120;
        offsetX = -0;
        break;
      case 22:
        offsetY = -50;
        offsetX = -0;
        break;
      case 23:
        offsetY = 150;
        break;
      case 24:
        offsetY = 180;
        break;
      case 25:
        offsetY = 120;
        break;
      case 27:
        offsetY = 70;
        offsetX = 0;
        break;
      case 28:
        offsetY = 100;
        offsetX = 0;
        break;
      case 29:
        offsetY = 120;
        offsetX = -50;
        break;
      case 30:
        offsetY = 90;
        offsetX = -50;
        break;
      case 31:
        offsetY = 60;
        offsetX = -50;
        break;
      case 32:
        offsetY = 30;
        offsetX = -50;
        break;
      case 33:
        offsetY = 0;
        offsetX = -50;
        break;
      case 34:
        offsetY = 0;
        offsetX = 300;
        break;
      case 35:
        offsetY = 30;
        offsetX = 300;
        break;
      case 36:
        offsetY = 60;
        offsetX = 300;
        break;
      case 37:
        offsetY = 90;
        offsetX = 300;
        break;
      case 38:
        offsetY = 120;
        offsetX = 300;
        break;
      case 48:
        offsetY = 120;
        offsetX = 400;
        break;
      default:
        offsetX = 200;
        offsetY = 0;
    }
  }
  if (buildingNumber === 2) {
    switch (unit) {
      case 2:
        offsetY = 0;
        offsetX = 0;
        break;
      case 3:
        offsetY = 0;
        offsetX = 0;
        break;
      case 4:
        offsetY = 0;
        offsetX = 0;
        break;
      case 5:
        offsetY = 0;
        offsetX = 0;
        break;
      case 31:
        offsetY = 50;
        offsetX = -100;
        break;
      case 32:
        offsetY = 50;
        offsetX = -100;
        break;
      case 33:
        offsetY = 50;
        offsetX = -100;
        break;
      case 34:
        offsetY = 50;
        offsetX = -100;
        break;
      case 35:
        offsetY = 50;
        offsetX = -100;
        break;
      case 36:
        offsetY = 50;
        offsetX = -100;
        break;
      case 37:
        offsetY = 50;
        offsetX = -100;
        break;
      case 38:
        offsetY = 50;
        offsetX = -100;
        break;
      case 39:
        offsetY = 50;
        offsetX = -100;
        break;
      default:
        offsetY = 50;
        offsetX = 0;
        break;
    }
  }
  if (isSmallerThan481) {
    if (buildingNumber === 1) {
      switch (unit) {
        case 30:
          offsetY = 90;
          offsetX = -300;
          break;
        case 31:
          offsetY = 60;
          offsetX = -300;
          break;
        case 32:
          offsetY = 30;
          offsetX = -300;
          break;
        case 33:
          offsetY = 0;
          offsetX = -300;
          break;
        case 34:
          offsetY = 0;
          offsetX = -300;
          break;
        case 35:
          offsetY = 30;
          offsetX = 250;
          break;
        case 36:
          offsetY = 60;
          offsetX = 250;
          break;
        case 37:
          offsetY = 90;
          offsetX = 250;
          break;
        case 38:
          offsetY = 120;
          offsetX = 250;
          break;
        default:
          offsetX = 0;
          offsetY = 0;
      }
    }
    if (buildingNumber === 2) {
      switch (unit) {
        case 31:
          offsetY = 0;
          offsetX = -300;
          break;
        case 32:
          offsetY = 0;
          offsetX = -300;
          break;
        case 33:
          offsetY = 0;
          offsetX = -300;
          break;
        case 34:
          offsetY = 0;
          offsetX = -300;
          break;
        case 35:
          offsetY = 0;
          offsetX = -300;
          break;
        case 6:
          offsetY = 60;
          offsetX = 250;
          break;
        case 7:
          offsetY = 30;
          offsetX = 250;
          break;
        case 8:
          offsetY = 0;
          offsetX = 250;
          break;
        case 9:
          offsetY = 0;
          offsetX = 250;
          break;
        case 10:
          offsetY = 0;
          offsetX = 250;
          break;
        default:
          offsetX = 0;
          offsetY = 0;
      }
    }
  } else if (isSmallerThan820) {
    offsetX = 0;
    offsetY = 150;
  }
  return { offsetX, offsetY };
};
