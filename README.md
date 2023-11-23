# Advendikalender
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advendikalender</title>
    <style>
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5; /* Lehe taustavärv */
        }

        #calendar-container {
            background-color: #ff6666; /* Kasti taustavärv */
            padding: 20px;
            border-radius: 10px;
        }

        .calendar {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .box {
            width: 100px;
            height: 100px;
            background-color: #eee;
            text-align: center;
            line-height: 100px;
            font-size: 18px;
            cursor: pointer;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<div id="calendar-container">
    <h1 style="text-align: center; color: #fff;">Advendikalender</h1>

    <div class="calendar" id="calendar">
        <!-- 24 kasti loomine suvalises järjekorras -->
        <script>
            // Funktsioon suvalise järjestuse loomiseks
            function suvalineJarjestus() {
                var jarjestus = [];
                for (var i = 1; i <= 24; i++) {
                    jarjestus.push(i);
                }
                jarjestus.sort(function() {
                    return 0.5 - Math.random();
                });
                return jarjestus;
            }

            // Kasti loomine suvalises järjekorras
            var suvalineJarjestusNumbrid = suvalineJarjestus();
            for (var i = 0; i < suvalineJarjestusNumbrid.length; i++) {
                document.write('<div class="box" onclick="avamine(' + suvalineJarjestusNumbrid[i] + ')">' + suvalineJarjestusNumbrid[i] + '</div>');
            }
        </script>
    </div>

    <script>
        function avamine(day) {
            var box = document.getElementById('calendar').children[day - 1];
            var kassipilt = 'https://placekitten.com/100/100?image=' + day; // Lisame päeva numbrit, et saada erinev pilt
            box.innerHTML = '<img src="' + kassipilt + '" alt="Kassipilt">';
            box.style.backgroundColor = '#fff'; // Võib muuta tausta värvi kui soovid
            box.style.cursor = 'default'; // Muuda kasti avamiseks kursori tagasi vaikimisi
            box.onclick = null; // Eemalda sündmuskuulaja, et vältida mitu korda klõpsamist
        }
    </script>
</div>

</body>
</html>
