const Circle = ({ classMod }) => (
  <div className='spinner-wrapper'>
    <div className={`spinner ${classMod}`} />
    <div className={`spinner-line-mask ${classMod}`}>
      <div className={`spinner-line ${classMod}`} />
    </div>
    <style jsx>{`
      .spinner {
        transition: all 0.3s;
        position: absolute;
        border-radius: 50%;
        box-shadow: inset 0 0 0 1px rgba(100, 100, 100, 0.5);
        height: 25vw;
        width: 25vw;
      }
      .spinner-wrapper {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
      .spinner-line-mask {
        transition: all 0.3s;
        position: absolute;
        height: 25vw;
        width: 25vw;
        overflow: hidden;
        height: 25vw;
        width: 25vw;
        border-radius: 50%;
      }
      .circle-L {
        left: 31vw;
        animation: rotate 2.4s infinite;
        -webkit-mask-image: -webkit-linear-gradient( top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
      }
      .circle-R {
        right: 31vw;
        animation: rotate 2.4s infinite reverse;
        -webkit-mask-image: -webkit-linear-gradient(
          bottom,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0)
        );
      }
      .spinner-line {
        border-radius: 50%;
        width: 25vw;
        height: 25vw;
        box-shadow: inset 0 0 0 8px rgba(255, 255, 255, 1);
      }
    `}</style>
  </div>
)

export default Circle
