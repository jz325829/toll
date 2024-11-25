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
    const divider4: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const divider5: THREE.Object3D<THREE.Object3DEventMap>[] = [];
    const divider6: THREE.Object3D<THREE.Object3DEventMap>[] = [];
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
      if (obj != undefined)
      {
        const { name } = obj;
        obj.rotation.copy(o.rotation);
        // obj.quaternion.copy(o.quaternion);
        // obj.scale.copy(new THREE.Vector3(obj.scale.x * o.scale.x, obj.scale.y * o.scale.y, obj.scale.z * o.scale.z));
        if (name.startsWith('building_a_unit_')) {
          obj.position.copy(new THREE.Vector3(o.position.x-1, o.position.y, o.position.z));
          pushObject(building2, obj);
        } else if (name.startsWith('building_b_unit_')) {
          obj.position.copy(new THREE.Vector3(o.position.x-1, o.position.y, o.position.z));
          pushObject(building1, obj);
        } else if (name.startsWith('building_c_unit_')) {
          obj.position.copy(new THREE.Vector3(o.position.x, o.position.y, o.position.z-1.8));
          pushObject(building3, obj);
        } else if (name.startsWith('building_d_unit_')) {
          obj.position.copy(new THREE.Vector3(o.position.x-1.3, o.position.y, o.position.z-1));
          pushObject(building4, obj);
        } else if (name.startsWith('building_f_unit_')) {
          obj.rotation.copy(new THREE.Euler(o.rotation.x, o.rotation.y + Math.PI, o.rotation.z));
          obj.position.copy(new THREE.Vector3(o.position.x-0.5, o.position.y, o.position.z-1));
          pushObject(building5, obj);
        } else if (name.startsWith('building_e_unit_')) {
          obj.position.copy(new THREE.Vector3(o.position.x, o.position.y, o.position.z));
          pushObject(building6, obj);
        } else if (name.startsWith('Divider_A')) {
          obj.position.copy(new THREE.Vector3(o.position.x-1, o.position.y, o.position.z));
          pushObject(divider2, obj);
        } else if (name.startsWith('Divider_B')) {
          obj.position.copy(new THREE.Vector3(o.position.x-1, o.position.y, o.position.z));
          pushObject(divider1, obj);
        } else if (name.startsWith('Divider_C')) {
          obj.position.copy(new THREE.Vector3(o.position.x, o.position.y, o.position.z-1.8));
          pushObject(divider3, obj);
        } else if (name.startsWith('Divider_D')) {
          obj.position.copy(new THREE.Vector3(o.position.x-1.3, o.position.y, o.position.z-1));
          pushObject(divider4, obj);
        } else if (name.startsWith('Divider_E')) {
          obj.position.copy(new THREE.Vector3(o.position.x, o.position.y, o.position.z));
          pushObject(divider6, obj);
        } else if (name.startsWith('Divider_F')) {
          obj.rotation.copy(new THREE.Euler(o.rotation.x, o.rotation.y + Math.PI, o.rotation.z));
          obj.position.copy(new THREE.Vector3(o.position.x-0.5, o.position.y, o.position.z-1));
          pushObject(divider5, obj);
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
      building3,
      building4,
      building5,
      building6,
      divider1,
      divider2,
      divider3,
      divider4,
      divider5,
      divider6
    };
  }, []);

  return res;
}

export { useCategorizeChildrenInModal };
