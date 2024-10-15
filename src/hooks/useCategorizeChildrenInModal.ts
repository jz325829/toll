/* eslint-disable import/prefer-default-export */
import * as THREE from 'three';
import { useMemo } from 'react';
import { building2Config } from 'src/constants/cameras';

const objectReset: (() => void)[] = [];

window.resetObjectHierarhy = () => {
  objectReset.forEach((el) => el());

  objectReset.length = 0;
};

function useCategorizeChildrenInModal(
  objects: THREE.Object3D<THREE.Object3DEventMap>[]
) {
  const res = useMemo(() => {
    const building1: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const building2: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const building3: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const building4: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const building5: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const building6: THREE.Object3D<THREE.Object3DEventMap>[] = [];

    const oldList: { parent: THREE.Object3D, object: THREE.Object3D }[] = [];

    const pushObject = (list: unknown[], object: THREE.Object3D) => {
      const prevParent = object.parent!;

      oldList.push({ parent: prevParent, object });
      list.push(object);
    };

    objects.forEach((obj) => {
      const { name } = obj;
      if (name.startsWith('AirHandlerMD_PlasticWhite331')) {
        pushObject(building1, obj);
      } else if (name.startsWith('Shape159')) {
        pushObject(building2, obj);
      } else if (name.startsWith('Shape528')) {
        pushObject(building3, obj);
      } else if (name.startsWith('Shape870')) {
        pushObject(building4, obj);
      } else if (name.startsWith('Shape1237c')) {
        pushObject(building5, obj);
      } else if (name.startsWith('Shape1237')) {
        pushObject(building6, obj);
      }
    });

    objectReset.push(() => {
      oldList.forEach((el) => {
        el.parent.add(el.object);
      });
    });

    return {
      building1,
      building2,
      building3,
      building4,
      building5,
      building6,
    };
  }, []);

  return res;
}

export { useCategorizeChildrenInModal };
