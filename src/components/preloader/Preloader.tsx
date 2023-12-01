import s from "./Preloader.module.scss";

interface PreloaderProps {
  size?: number;
  text?: string;
}

export const Preloader = ({ size = 350, text }: PreloaderProps) => {
  return (
    <div className={s.wrapper}>
      <svg width="0" height="0">
        <filter id="gooey-plasma-2">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16"
            result="goo"
          />
          <feTurbulence baseFrequency="0.03" numOctaves="1" />

          <feDisplacementMap
            id="displacement"
            in="blur"
            scale="50"
            xChannelSelector="B"
            yChannelSelector="G"
          />

          <feBlend id="blend-mode" in="gooey" mode="overlay" />
        </filter>
      </svg>
      <div className={s.plasma} style={{ width: size, height: size }}>
        <ul className={s.container}>
          <li className={s.bubble}></li>
          <li className={s.bubble}></li>
          <li className={s.bubble}></li>
          <li className={s.bubble}></li>
          <li className={s.bubble}></li>
          <li className={s.bubble}></li>
        </ul>
      </div>
      {text && <div className={s.text}>{text}</div>}
    </div>
  );
};
