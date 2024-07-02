import { gsap } from 'gsap';

const SlideAnimation = (element) => {
  gsap.fromTo(
    element,
    { x: '-100%', opacity: 0 },
    { x: '0%', opacity: 1, duration: 0.5, ease: 'power4.out' }
  );
};

export default SlideAnimation;
