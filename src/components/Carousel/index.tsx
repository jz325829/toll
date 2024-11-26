/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector, useDispatch } from 'react-redux';
import {
  FC, useRef, useCallback, useEffect,
} from 'react';
import styles from './styles.module.css';
import { selectActiveSlide, selectActiveData, $carousel_actions } from '../../store/carousel/carouselSlice';
import { RootState } from '../../store/store';
import { building1Config, building2Config, building3Config, building4Config, building5Config, building6Config } from '../../constants/cameras';

interface Props {
  isPageLoaded: boolean;
  loadedImages: React.MutableRefObject<{
    main: number[];
  }>;
  setPageLoaded: () => void;
}

const Carousel: FC<Props> = ({ isPageLoaded, loadedImages, setPageLoaded }) => {
  const version = import.meta.env.VITE_APP_VERSION;

  const BUILDING_1_IMAGES = Object.values(building1Config).map((el) => el.image);

  const BUILDING_2_IMAGES = Object.values(building2Config).map((el) => el.image);

  const BUILDING_3_IMAGES = Object.values(building3Config).map((el) => el.image);

  const BUILDING_4_IMAGES = Object.values(building4Config).map((el) => el.image);

  const BUILDING_5_IMAGES = Object.values(building5Config).map((el) => el.image);

  const BUILDING_6_IMAGES = Object.values(building6Config).map((el) => el.image);

  const activeSlide = useSelector(selectActiveSlide);
  const activeData = useSelector(selectActiveData);

  const buildingId = useSelector((state: RootState) => state.carousel.buildingId);
  const isGotBack = useSelector((state: RootState) => state.carousel.isGoingBack);

  const dispatch = useDispatch();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      const prealoadImages = activeData.filter((_, i) => !(i % 2));
      const lazyLoadIamges = activeData.filter((_, i) => i % 2);

      const prealoadBuilding1Images = BUILDING_1_IMAGES.filter((_, i) => !(i % 2));
      const lazyLoadBuilding1Iamges = BUILDING_1_IMAGES.filter((_, i) => i % 2);

      const prealoadBuilding2Images = BUILDING_2_IMAGES.filter((_, i) => !(i % 2));
      const lazyLoadBuilding2Iamges = BUILDING_2_IMAGES.filter((_, i) => i % 2);

      const prealoadBuilding3Images = BUILDING_3_IMAGES.filter((_, i) => !(i % 2));
      const lazyLoadBuilding3Iamges = BUILDING_3_IMAGES.filter((_, i) => i % 2);

      const prealoadBuilding4Images = BUILDING_4_IMAGES.filter((_, i) => !(i % 2));
      const lazyLoadBuilding4Iamges = BUILDING_4_IMAGES.filter((_, i) => i % 2);

      const prealoadBuilding5Images = BUILDING_5_IMAGES.filter((_, i) => !(i % 2));
      const lazyLoadBuilding5Iamges = BUILDING_5_IMAGES.filter((_, i) => i % 2);

      const prealoadBuilding6Images = BUILDING_6_IMAGES.filter((_, i) => !(i % 2));
      const lazyLoadBuilding6Iamges = BUILDING_6_IMAGES.filter((_, i) => i % 2);

      loadedImages.current.main = prealoadImages.map((element) => activeData.indexOf(element) + 1);

      const onImageLoaded = (el: { id: string, src: string }, imageEl?: HTMLImageElement) => {
        loadedImages.current.main.push(activeData.indexOf(el) + 1);

        const target = rootRef.current!.querySelector(`#${el.id ? el.id : 0}`) as HTMLDivElement;
        const img = target!.querySelector('img') as HTMLImageElement;
        img.loading = 'eager';
        target.style.display = 'block';
      };

      prealoadImages.forEach((el) => onImageLoaded(el));

      const loadImage = async (src: string, debug = false) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.src = src;

          const isImageLoaded = () => {
            return img.complete || (img.naturalWidth > 0 && img.naturalHeight > 0);
          };

          if (isImageLoaded()) {
            // Если изображение уже загружено, разрешаем обещание сразу
            resolve(img);
          } else {
            // Если изображение еще не загружено, устанавливаем обработчик события onload
            img.onload = () => {
              resolve(img);
            };
          }
        });
      };

      const f = async () => {
        await Promise.all(prealoadImages.map(async (el) => {
          await loadImage(el.src, false);
        }));

        
        if (buildingId === 'main') {
          setTimeout(() => {
            setPageLoaded();
          }, 5000)
          
          Promise.all(lazyLoadIamges.map(async (el) => {
            const img = await loadImage(el.src, false);
            await new Promise((r) => { setTimeout(r, 100); });
            onImageLoaded(el, img);
          }));
          await Promise.all(
            [...prealoadBuilding1Images.map((el) => loadImage(el)),
              ...prealoadBuilding2Images.map((el) => loadImage(el)),
              ...prealoadBuilding3Images.map((el) => loadImage(el)),
              ...prealoadBuilding4Images.map((el) => loadImage(el)),
              ...prealoadBuilding5Images.map((el) => loadImage(el)),
              ...prealoadBuilding6Images.map((el) => loadImage(el)),
            ]
            ,
          );

          dispatch($carousel_actions.setFirstLoaded(true));

          await Promise.all(
            [...lazyLoadBuilding2Iamges.map((el) => loadImage(el)),
              ...lazyLoadBuilding1Iamges.map((el) => loadImage(el)),
              ...lazyLoadBuilding3Iamges.map((el) => loadImage(el)),
              ...lazyLoadBuilding4Iamges.map((el) => loadImage(el)),
              ...lazyLoadBuilding5Iamges.map((el) => loadImage(el)),
              ...lazyLoadBuilding6Iamges.map((el) => loadImage(el)),
            ],
          );
        }
      };

      f();    
    }, 10000);
  }, []);

  const updateSlide = useCallback((current: string) => {
    if (rootRef.current) {
      const target = rootRef.current.querySelector(`#${current}`) as HTMLDivElement;

      const visibleEl = [...rootRef.current.children].find((el) => (el as HTMLDivElement).style.visibility === 'visible') as HTMLDivElement;

      if (visibleEl) {
        visibleEl.style.visibility = 'hidden';
      }

      if (target) {
        target.style.visibility = 'visible';
      }
    }
  }, [rootRef]);
  // @ts-ignore
  window.GLOBAL_CACHE.updateSlide = updateSlide;

  return (
    <div className={styles.root} ref={rootRef}>
      {
        activeData.map((el, i) => {
          let display = (buildingId === 'main' && !isGotBack) ? 'none' : '';

          if (i === 0) {
            display = '';
          }

          return (
            <div className={styles.image} id={el.id} key={el.src + el.id} style={{ display, visibility: 'hidden' }}>
              <img loading="lazy" src={el.src} alt={activeSlide.image} />
            </div>
          );
        })
      }
    </div>

  );
};

export default Carousel;
