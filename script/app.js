const piyoda = document.querySelector("#piyoda");
const bike = document.querySelector("#velik");
const car = document.querySelector("#car");
const plane = document.querySelector("#plane");
const inp = document.querySelector("#km")
const form = document.querySelector("#form")


form.addEventListener("click",function(e) {
    e.preventDefault();
    if(inp.value < 0){
        alert('Введиет положительное число:)')
        inp.value = 0;

    }
    function vts(data){
        let time = inp.value / data,
        d = time / 24,
        h = time - Math.floor(d )* 24,
        m = (h * 60) - Math.floor(h )* 60,
        s = (m * 60) - Math.floor(m )* 60;
        day = Math.floor(d);
        hour = Math.floor(h);
        minute = Math.floor(m);
        second = Math.floor(s);
        
        return include (day, hour, minute, second);
    }

    function include (day, hour, minute, second){
        if(day < 1){
            return `${hour}:${minute}:${second}`
        }else{
            return `${day}-day ${hour}:${minute}:${second}`
        }
        
    }
    
piyoda.textContent = vts(3.6);
bike.textContent = vts(14);
car.textContent = vts(80);
plane.textContent = vts(800);


})




// Время = 842 км / 67 км/ч = 12,5672 часа

// Преобразуем эту десятичную дробь в минуты и секунды. Во-первых, умножьте 0,5672 на 60 = 34,0299 минут. Теперь мы умножаем это десятичное число на 60, чтобы получить секунды: 0,0299 * 60 = 1,8 секунды. Мы можем округлить это до 2 секунд, что даст нам 12 часов 34 минуты и 2 секунды.

// Теперь вы знаете, как сделать преобразование скорости, расстояния и времени.
