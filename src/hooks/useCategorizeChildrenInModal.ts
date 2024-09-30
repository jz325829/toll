/* eslint-disable import/prefer-default-export */
import * as THREE from 'three';
import { useMemo } from 'react';

const objectReset: (() => void)[] = [];

window.resetObjectHierarhy = () => {
  objectReset.forEach((el) => el());

  objectReset.length = 0;
};

function useCategorizeChildrenInModal(
  objects: THREE.Object3D<THREE.Object3DEventMap>[],
  isItSecondVersion: boolean,
) {
  const res = useMemo(() => {
    const building1: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const building2: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const building3: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const divider1: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const divider2: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const divider3: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const dividerMesh: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const roof2: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const roof3: THREE.Object3D<THREE.Object3DEventMap>[] = [];

    const roof1: THREE.Object3D<THREE.Object3DEventMap>[] = [];

    const oldList: { parent: THREE.Object3D, object: THREE.Object3D }[] = [];

    const pushObject = (list: unknown[], object: THREE.Object3D) => {
      const prevParent = object.parent!;

      oldList.push({ parent: prevParent, object });
      list.push(object);
    };

    objects.forEach((obj) => {
      const { name } = obj;
      if (isItSecondVersion) {
        if (name.startsWith('SM_Building_3_Walls_')) {
          pushObject(roof3, obj);
        } else if (name.startsWith('SM_Building_2_Walls_')) {
          pushObject(roof2, obj);
        } else if (name.startsWith('SM_Building_1_Walls_')) {
          pushObject(roof1, obj);
        } else if (name.startsWith('SM_Building_1_Part')) {
          pushObject(building1, obj);
        } else if (name.startsWith('SM_Building_3_Part_')) {
          pushObject(building3, obj);
        } else if (name.startsWith('SM_Building_2_Part_')) {
          pushObject(building2, obj);
        } else if (name.startsWith('SM_Building_2_Devider')) {
          pushObject(divider2, obj);
        } else if (name.startsWith('SM_Building_1_Devider')) {
          pushObject(divider1, obj);
        } else if (name.startsWith('SM_Building_3_Devider')) {
          pushObject(divider3, obj);
        }
      }
      if (!isItSecondVersion) {
        if (name.startsWith('Build1_Divider_010')) {
          pushObject(roof1, obj);
        } else if (name.startsWith('SM_birdHhouse_01')) {
          pushObject(roof1, obj);
        } else if (name.startsWith('Build1_Part')) {
          pushObject(building1, obj);
        } else if (name.startsWith('Build2_Part')) {
          pushObject(building2, obj);
        } else if (name === 'Build2_Divider_01') {
          pushObject(divider2, obj);
        } else if (name.startsWith('Build1_Divider')) {
          pushObject(divider1, obj);
        } else if (name.startsWith('SM_Roof_01')) {
          pushObject(roof2, obj);
        } else if (name.startsWith('Build2_Divider_010')) {
          pushObject(roof2, obj);
        } else if (name.startsWith('SM_Roof_02')) {
          pushObject(roof1, obj);
        } else if (name.startsWith('SM_Hole_01') || name.startsWith('Build1_Divider_01001')) {
          pushObject(roof1, obj);
        } else if (name.startsWith('Group18763')) {
          pushObject(dividerMesh, obj);
        }
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
      divider1,
      divider2,
      roof1,
      roof2,
      dividerMesh,
      building3,
      divider3,
      roof3,
    };
  }, []);

  return res;
}

export { useCategorizeChildrenInModal };
