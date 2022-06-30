import { useEffect, useRef } from "react";


const MainPage = () => {

  const lineRef= useRef()

  const lineForFly = () => {
    const canvas = lineRef.current;

    const context = canvas.getContext('2d')
    context.lineWidth = 2;

    var gradient = context.createLinearGradient(0, 0, 170, 150);
    gradient.addColorStop(0, "rgba(16, 16, 19, 0.5)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.5)");

    context.strokeStyle = gradient;

    context.beginPath()
    context.moveTo(0, 0);
    context.lineTo(100, 40);
    context.stroke()
    context.closePath();

    context.beginPath()
    context.moveTo(100,40);
    context.lineTo(362, 40)
    context.stroke();
    context.closePath()

    context.beginPath();
    context.arc(365, 40,3,0, Math.PI*2,true)
    context.stroke();
   
  }

  useEffect(() => {
    lineForFly()
  }, [])

  
  return (
    <main>
      <div className="fixed-container">
        <section className="main-page main-page__inner">
          <div className="main-page__right">
            <div className="main-page__title-block">
              <h1 className="title main-page__title" >
                Путешествие
                <span>на красную планету</span>
              </h1>
            </div>

            <div style={{position: 'relative'}}>
              <button type='button' className="main-page__button btn">
                Начать путешествие
              </button>
              <canvas 
              width='400'ref={lineRef} className="main-page__line">
              </canvas>
            </div>
            
          </div>


          <div className="profits main-page__left">
            <ul className="profits__list">
              <li className="profits__item">
                Мы <b>1</b> на рынке
              </li>
              <li className="profits__item">
                Гарантируем <b>50%</b> безопасность
              </li>
              <li className="profits__item">
                Календарик за <b>2001</b> год
              </li>
              <li className="profits__item">
                Путешествие <b>597</b> дней
              </li>
            </ul>
          </div>
          

        </section>
      </div>
    </main>
  )
}

export default MainPage