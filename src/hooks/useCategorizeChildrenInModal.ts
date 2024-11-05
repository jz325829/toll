/* eslint-disable import/prefer-default-export */
import * as THREE from 'three';
import { useMemo } from 'react';

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

    objects.forEach((o) => {
      const obj = o.children[0]
      const { name } = obj;
      console.log(name)
      if (name.startsWith('building_a_unit_')) {
        pushObject(building2, obj);
      } else if (name.startsWith('building_b_unit_')) {
        pushObject(building1, obj);
      } else if (name.startsWith('building_c_unit_')) {
        pushObject(building3, obj);
      } else if (name.startsWith('building_d_unit_')) {
        pushObject(building4, obj);
      } else if (name.startsWith('building_f_unit_')) {
        pushObject(building5, obj);
      } else if (name.startsWith('building_e_unit_')) {
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
