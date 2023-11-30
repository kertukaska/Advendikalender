
document.addEventListener('DOMContentLoaded', function () {
  const calendarContainer = document.querySelector('.calendar');

  // Järjekorra loomine suvaliste numbritega (1-24)
  const shuffledNumbers = Array.from({ length: 24 }, (_, index) => index + 1).sort(() => Math.random() - 0.5);

  // Iga numbri jaoks lisatakse kalendrisse div koos pildi elemendiga
  shuffledNumbers.forEach((number) => {
    const calendarDay = document.createElement('div');
    calendarDay.innerText = number;

    const image = document.createElement('img');
    image.src = `images/${number}.jpg`; // Asenda see oma pildi tee ja failinimega

    calendarDay.addEventListener('click', function () {
      // Muuda pildi kuvamine, kui kasutaja klõpsab numbri peal
      calendarDay.innerHTML = '';
      calendarDay.appendChild(image);
    });

    calendarContainer.appendChild(calendarDay);
  });
  body{
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
      
      .calendar {
        display: grid;
        grid-template-columns: repeat(4, 100px); /* Muuda veergude arvu vastavalt soovile */
        gap: 10px;
      }
      
      .calendar div {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        border-radius: 5px;
        transition: background-color 0.3s;
      }
      
      .calendar div:hover {
        background-color: #ddd;
      }
      
      .calendar img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 5px;
      }
});

